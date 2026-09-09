# Contributing

Questions, feedback, documentation improvements, and code contributions are welcome.

For conversation and help integrating Inqwise libraries, use the community links on the website. Report a library problem in that library’s repository so it reaches the right project.

For website changes:

1. Install dependencies with `npm ci` and start the site with `npm run dev`.
2. Make a focused change, preserving the open-source and community emphasis.
3. Run `npm run build` and `npx tsc --noEmit`.
4. Describe what changed and how it was checked.

For layout changes, check both narrow and wide screens, including the About Us breakpoint at 1024 pixels. Keep keyboard navigation, descriptive link labels, and readable text intact.

Do not commit credentials, local environment files, generated builds, or dependency folders. Preserve the existing hosting association unless the maintainer explicitly changes the deployment target.
