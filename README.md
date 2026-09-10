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

The static output is generated in `dist/client/`.

## Deployment

[The GitHub Pages workflow](.github/workflows/pages.yml) builds and deploys the website on pushes to `master`. It can also be run manually from the repository’s Actions tab.

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** before the first deployment. The workflow automatically uses the configured Pages base path, including when a custom domain is configured. After adding or changing a custom domain, run the workflow again so image, stylesheet, and script URLs are rebuilt for the new address.

## Contributing and questions

Ideas, feedback, documentation improvements, and code contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for website contribution guidance.

For questions about using or integrating our libraries, [join the community on Discord](https://discord.gg/7RtfkfEPgk) or open an issue in the relevant project’s repository.
