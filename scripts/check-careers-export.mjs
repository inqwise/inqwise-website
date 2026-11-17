import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import routes from '../lib/page-routes.json' with { type: 'json' };

const root = 'dist/client';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const sitemap = readFileSync(`${root}/sitemap.xml`, 'utf8');
const canonicalEnglish = `https://inqwise.com${routes.careers.en.path}`;
for (const [locale, route] of Object.entries({ en: routes.careers.en, he: routes.careers.he })) {
  const canonical = `https://inqwise.com${route.path}`;
  const html = readFileSync(`${root}${route.path}index.html`, 'utf8');
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"[^>]*dir="${route.direction}"`));
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
  assert.ok(html.includes(`hrefLang="he" href="https://inqwise.com${routes.careers.he.path}"`) || html.includes(`hreflang="he" href="https://inqwise.com${routes.careers.he.path}"`));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.inLanguage, route.language);
  assert.equal(schema.url, canonical);
  const markdown = readFileSync(`${root}${route.path}index.md`, 'utf8');
  assert.ok(markdown.includes(`${canonical}#project-work`));
  assert.ok(markdown.includes('mailto:contacts@inqwise.com?subject=Career%20inquiry'));
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    assert.ok(href.startsWith(`${prefix}/`), `Missing prefix: ${href}`);
    assert.ok(existsSync(`${root}${decodeURIComponent(href.slice(prefix.length))}`), `Missing local target: ${href}`);
  }
}
for (const path of routes.careers.aliases) {
  const html = readFileSync(`${root}${path}index.html`, 'utf8');
  assert.ok(html.includes(`rel="canonical" href="${canonicalEnglish}"`));
  assert.ok(!sitemap.includes(`<loc>https://inqwise.com${path}</loc>`));
  assert.ok(existsSync(`${root}${path}index.md`));
}
console.log('Careers export verified: languages, direction, canonical URLs, alternates, aliases, Markdown, sitemap, and local targets.');
