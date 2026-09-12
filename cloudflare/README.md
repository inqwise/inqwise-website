# Agent discovery response header

GitHub Pages serves the static files but cannot apply custom response headers. Apply this rule in the Cloudflare zone for `inqwise.com` after publishing `public/site-description.json` through the Pages workflow.

## Dashboard setup

Create a Response Header Transform Rule under Rules → Transform Rules for this expression:

```text
(http.host eq "inqwise.com" and http.request.uri.path eq "/")
```

Add a static response header named `Link` with this value (use Add, preserving existing Link values):

```text
<https://inqwise.com/site-description.json>; rel="describedby"; type="application/json"
```

`discovery-link-rule.json` contains the equivalent rule object for appending to the existing `http_response_headers_transform` ruleset. Do not replace the existing ruleset: preserve other rules. This file is configuration to apply, not an automatically deployed rule.

The `describedby` relation identifies the JSON-LD description of this website. The website does not expose an HTTP API, so it does not advertise an API catalog or an OpenAPI service description. Keep the description consistent with the published website as its identity and scope change.

## Validation

Check GET and HEAD responses after deployment:

```sh
curl -sS -D - -o /dev/null https://inqwise.com/
curl -sSI https://inqwise.com/
curl -fsS https://inqwise.com/site-description.json
curl -fsS https://isitagentready.com/api/scan -H 'Content-Type: application/json' --data '{"url":"https://inqwise.com"}'
```

Confirm the homepage returns the Link header, its target returns HTTP 200 and valid JSON, and `checks.discoverability.linkHeaders.status` is `"pass"`.

References: [RFC 8288](https://www.rfc-editor.org/rfc/rfc8288), [Cloudflare Response Header Transform Rules](https://developers.cloudflare.com/rules/transform/response-header-modification/).

## Free-plan Markdown Worker

`agent-worker.mjs` provides Markdown negotiation and the discovery Link header using a Worker route in front of GitHub Pages. It does not require the paid Markdown for Agents feature or Workers AI. Workers Free usage limits still apply.

Every Pages build now exports `.md` companions from the public HTML pages (for example `/index.md`). Headings, text, and links come from the same rendered content; scripts, styles, navigation, and icons are removed. Publish that build before enabling the Worker.

From the repository root, authenticate to the Cloudflare account containing `inqwise.com`, then deploy:

```sh
npx wrangler login
npx wrangler deploy --config cloudflare/wrangler.jsonc
```

The route requires the existing Cloudflare-proxied DNS record. Keep GitHub Pages as the origin. Inspect existing Worker routes before deployment and avoid replacing any existing Worker on this route. No API token belongs in this repository. The Pages workflow does not deploy the Worker; deploy it separately when its code changes. Content-only updates require only the normal Pages deployment.

The Worker adds `Vary: Accept`, respects explicit `q=0` and a higher HTML preference, supports GET/HEAD, and defaults to HTML. Non-page responses pass through. Markdown responses have `Content-Type: text/markdown; charset=utf-8` and are not stored in intermediary caches. If a Markdown companion is unavailable, the original page remains available as HTML. Token-count headers are omitted because no tokenizer is used.

The Worker already adds the discovery Link header, so the separate Transform Rule is optional. To roll back, remove this Worker's route; the site continues directly from GitHub Pages.

```sh
node --test cloudflare/agent-worker.test.mjs
curl -i -H 'Accept: text/markdown' https://inqwise.com/
curl -I -H 'Accept: text/html' https://inqwise.com/
```

After deployment, run the scan above and check both `checks.contentAccessibility.markdownNegotiation.status` and `checks.discoverability.linkHeaders.status` are `"pass"`.
