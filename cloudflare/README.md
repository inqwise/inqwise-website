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
