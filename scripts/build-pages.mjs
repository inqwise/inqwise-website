import { spawnSync } from 'node:child_process';
import { existsSync, writeFileSync, renameSync, readFileSync, readdirSync } from 'node:fs';

const result = spawnSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
if (!existsSync('dist/client/index.html')) throw new Error('Static export did not produce index.html');
// Vinext places prefixed assets inside the prefix directory. Pages already
// mounts the artifact at that path, so assets belong at the artifact root.
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (prefix && !/^\/[A-Za-z0-9._/-]+$/.test(prefix)) throw new Error('Invalid Pages base path');
if (prefix.split('/').includes('..')) throw new Error('Invalid Pages base path');
const nestedAssets = `dist/client${prefix}/_next`;
if (prefix && existsSync(nestedAssets)) renameSync(nestedAssets, 'dist/client/_next');
const html = readFileSync('dist/client/index.html', 'utf8');
const references = [...html.matchAll(/(?:src|href)="(\/[^"\s]+)"/g)].map(match => match[1]);
for (const reference of references) {
  if (reference.startsWith('//')) continue;
  if (!reference.startsWith(`${prefix}/`)) throw new Error(`Missing Pages prefix: ${reference}`);
  const asset = decodeURIComponent(reference.slice(prefix.length).split(/[?#]/)[0]);
  if (!existsSync(`dist/client${asset}`)) throw new Error(`Missing exported asset: ${reference}`);
}
writeFileSync('dist/client/.nojekyll', '');

// Generate discovery files from the finished export so published and removed
// pages are reflected on every deployment. Error pages and noindex pages are omitted.
const origin = 'https://inqwise.com';
const escapeXml = value => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
}[char]));
function publicPages(directory, relative = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = `${directory}/${entry.name}`;
    const route = `${relative}${entry.name}`;
    if (entry.isDirectory()) {
      return entry.name.startsWith('_') ? [] : publicPages(path, `${route}/`);
    }
    if (!entry.name.endsWith('.html') || /(?:^|\/)(?:404|500)(?:\/index)?\.html$/.test(route)) return [];
    const content = readFileSync(path, 'utf8');
    if (/<meta\b(?=[^>]*\bname=["'](?:robots|googlebot)["'])(?=[^>]*\bcontent=["'][^"']*\bnoindex\b)[^>]*>/i.test(content)) return [];
    const pathname = route === 'index.html' ? '' : route.replace(/(?:index)?\.html$/, '');
    return [`${origin}/${pathname.split('/').map(encodeURIComponent).join('/')}`];
  });
}
const urls = [...new Set(publicPages('dist/client'))].sort();
if (!urls.length) throw new Error('No public pages found for sitemap');
writeFileSync('dist/client/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}
</urlset>
`);
writeFileSync('dist/client/robots.txt', `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`);
