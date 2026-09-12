const discovery = '<https://inqwise.com/site-description.json>; rel="describedby"; type="application/json"';

export function wantsMarkdown(accept = '') {
  const ranges = accept.toLowerCase().split(',').map(part => {
    const [type, ...parameters] = part.trim().split(';');
    const q = parameters.find(value => value.trim().startsWith('q='));
    const quality = q ? Number(q.trim().slice(2)) : 1;
    return { type: type.trim(), quality: Number.isFinite(quality) && quality >= 0 && quality <= 1 ? quality : 0 };
  });
  const markdown = ranges.find(range => range.type === 'text/markdown')?.quality || 0;
  const html = ranges.find(range => range.type === 'text/html')?.quality || 0;
  return markdown > 0 && markdown >= html;
}

function varyAccept(headers) {
  const vary = headers.get('vary');
  if (!vary?.split(',').some(value => ['accept', '*'].includes(value.trim().toLowerCase()))) {
    headers.set('vary', vary ? `${vary}, Accept` : 'Accept');
  }
}

export async function handle(request, fetchOrigin = fetch) {
  const url = new URL(request.url);
  if (url.hostname !== 'inqwise.com' || !['GET', 'HEAD'].includes(request.method)) return fetchOrigin(request);
  const markdown = wantsMarkdown(request.headers.get('accept') || '');
  const originHeaders = new Headers(request.headers);
  if (markdown) {
    originHeaders.set('accept', 'text/html');
    // Validators and ranges for HTML cannot be applied to a Markdown variant.
    for (const name of ['if-none-match', 'if-modified-since', 'if-match', 'if-unmodified-since', 'range', 'if-range']) originHeaders.delete(name);
  }
  const origin = await fetchOrigin(new Request(request, { headers: originHeaders }));
  const headers = new Headers(origin.headers);
  const html = (headers.get('content-type') || '').includes('text/html');
  if (html) varyAccept(headers);
  if (url.pathname === '/' && origin.status === 200) {
    if (!(headers.get('link') || '').includes(discovery)) headers.append('link', discovery);
  }
  if (markdown && html && origin.status === 200) {
    const source = new URL(url);
    source.pathname = source.pathname.endsWith('/') ? `${source.pathname}index.md` : `${source.pathname.replace(/\.html$/, '')}.md`;
    const md = await fetchOrigin(new Request(source, { method: 'GET', headers: originHeaders }));
    if (md.status === 200 && !(md.headers.get('content-type') || '').includes('text/html')) {
      const body = await md.text();
      for (const name of ['content-length', 'content-encoding', 'content-range', 'accept-ranges', 'etag', 'last-modified']) headers.delete(name);
      headers.set('content-type', 'text/markdown; charset=utf-8');
      // Keep negotiated responses out of intermediary caches; the origin files
      // remain cacheable independently under their distinct URLs.
      headers.set('cache-control', 'no-store');
      await origin.body?.cancel();
      return new Response(request.method === 'HEAD' ? null : body, { status: 200, headers });
    }
    await md.body?.cancel();
  }
  return new Response(origin.body, { status: origin.status, statusText: origin.statusText, headers });
}

export default { fetch: request => handle(request) };
