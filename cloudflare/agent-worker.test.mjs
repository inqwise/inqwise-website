import test from 'node:test';
import assert from 'node:assert/strict';
import { handle, wantsMarkdown } from './agent-worker.mjs';

test('only explicit acceptable Markdown opts in', () => {
  for (const value of ['', '*/*', 'text/html', 'text/markdown;q=0', 'text/html;q=1, text/markdown;q=0.5']) assert.equal(wantsMarkdown(value), false, value);
  for (const value of ['text/markdown', 'text/markdown, text/html', 'TEXT/MARKDOWN; q=0.9, text/html;q=0.5']) assert.equal(wantsMarkdown(value), true, value);
});
const page = () => new Response('<h1>Inqwise</h1>', { headers: { 'content-type': 'text/html', etag: 'html-tag', vary: 'Accept-Encoding', link: '</style.css>; rel="preload"', 'content-security-policy': "default-src 'self'" } });
test('browser HTML is preserved with discovery and Vary headers', async () => {
  const result = await handle(new Request('https://inqwise.com/'), async () => page());
  assert.equal(await result.text(), '<h1>Inqwise</h1>');
  assert.equal(result.headers.get('content-type'), 'text/html');
  assert.equal(result.headers.get('vary'), 'Accept-Encoding, Accept');
  assert.match(result.headers.get('link'), /preload.*describedby/);
});
test('Markdown and HEAD strip HTML validators and preserve security headers', async () => {
  for (const method of ['GET', 'HEAD']) {
    const calls = [];
    const result = await handle(new Request('https://inqwise.com/', { method, headers: { accept: 'text/markdown', 'if-none-match': 'html-tag' } }), async request => {
      calls.push(request);
      return new URL(request.url).pathname === '/index.md' ? new Response('# Inqwise\n', { headers: { 'content-type': 'text/plain' } }) : page();
    });
    assert.equal(result.status, 200);
    assert.equal(result.headers.get('content-type'), 'text/markdown; charset=utf-8');
    assert.equal(result.headers.get('etag'), null);
    assert.equal(result.headers.get('cache-control'), 'no-store');
    assert.equal(result.headers.get('content-security-policy'), "default-src 'self'");
    assert.equal(await result.text(), method === 'HEAD' ? '' : '# Inqwise\n');
    assert.ok(calls.every(request => !request.headers.has('if-none-match')));
  }
});
test('missing Markdown falls back to HTML', async () => {
  const result = await handle(new Request('https://inqwise.com/', { headers: { accept: 'text/markdown' } }), async request => new URL(request.url).pathname.endsWith('.md') ? new Response('Missing', { status: 404 }) : page());
  assert.equal(await result.text(), '<h1>Inqwise</h1>');
});
test('assets and error responses are not converted', async () => {
  for (const [status, type] of [[404, 'text/html'], [200, 'image/png']]) {
    let calls = 0;
    const result = await handle(new Request('https://inqwise.com/example', { headers: { accept: 'text/markdown' } }), async () => { calls++; return new Response('original', { status, headers: { 'content-type': type } }); });
    assert.equal(result.status, status);
    assert.equal(await result.text(), 'original');
    assert.equal(calls, 1);
  }
});
