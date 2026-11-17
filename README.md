# Inqwise Website

[![Deploy website to GitHub Pages](https://github.com/inqwise/inqwise-website/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/inqwise/inqwise-website/actions/workflows/pages.yml)

The source code for Inqwise’s website: a home for our open-source projects, libraries, utilities, and community.

**Website:** [inqwise.com](https://inqwise.com/)


## About Inqwise

Inqwise develops a growing collection of open-source projects, libraries, and utilities. We actively use these tools in our own projects and help friends and fellow developers put them to work in theirs.

The website introduces our projects, highlights new work, shares articles, and helps people find documentation, ask questions, and get involved. This repository contains the website itself; each library and project has its own repository in the [Inqwise GitHub organization](https://github.com/inqwise).

## Development

Built with React, TypeScript, Vinext/Vite, and Tailwind CSS. Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by the development server.

To build the static website and check types:

```sh
npm run build:pages
npx tsc --noEmit
```

The static output is generated in `dist/client/`. Each build generates `sitemap.xml` from the exported public HTML pages and writes its canonical address into `robots.txt`. Adding or removing pages updates the sitemap on the next deployment; error pages and pages marked `noindex` are excluded.

## Deployment

[The GitHub Pages workflow](.github/workflows/pages.yml) builds and deploys the website on pushes to `master`. It can also be run manually from the repository’s Actions tab.

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** before the first deployment. The workflow automatically uses the configured Pages base path, including when a custom domain is configured. After adding or changing a custom domain, run the workflow again so image, stylesheet, and script URLs are rebuilt for the new address.

## Agent discovery

`public/site-description.json` describes the website in JSON-LD. The homepage Link response header is configured at Cloudflare; see [setup and validation](cloudflare/README.md). Publishing this repository alone does not enable the response header.

## Careers content and languages

Careers uses one shared layout in `components/careers-page.tsx`. Edit English copy in `content/careers/en.ts` and Hebrew copy in `content/careers/he.ts`; both follow `content/careers/types.ts`. URL choices and aliases live in `lib/page-routes.json`, with metadata helpers in `lib/careers.ts`.

The preferred URLs are `/careers/` (English) and `/he/careers/` (Hebrew). `/en-us/careers/` and `/about/careers/` are aliases: static hosting renders the shared English page with its preferred canonical URL, while the Cloudflare Worker sends a permanent redirect when deployed. Aliases are excluded from the sitemap. The language switch, `hreflang`, page metadata, and structured data use the preferred URLs.

English and Hebrew use separate root layouts in the `(english)` and `(hebrew)` route groups so the exported HTML has the correct document language and direction. These group names do not appear in URLs. To add a translation, add its content, register its route and metadata, and add its page under a layout with the appropriate language and direction. To add an alias, add a small page re-export and register its path in the route configuration. Keep `public/site-description.json` in sync when preferred URLs change.

After building, check the exported careers pages with `node scripts/check-careers-export.mjs`. For a build with `NEXT_PUBLIC_BASE_PATH`, pass the same variable to this check. Redirect tests run with `node --test cloudflare/agent-worker.test.mjs`.

## Contributing and questions

Ideas, feedback, documentation improvements, and code contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for website contribution guidance.

For questions about using or integrating our libraries, [join the community on Discord](https://discord.gg/7RtfkfEPgk) or open an issue in the relevant project’s repository.
