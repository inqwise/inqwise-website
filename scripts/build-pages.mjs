import { spawnSync } from 'node:child_process';
import { existsSync, writeFileSync, renameSync, readFileSync } from 'node:fs';

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
