# Kraft Designer — KraftCloud deployment (v0.1 bootstrap)

This is a **Layerling fork**, not a relicensed or independently rewritten CAD system. Its original AGPL-3.0-only license, copyright notices, and source-offer obligations remain applicable to publicly accessible modified instances. Do not remove the root LICENSE or upstream attribution. Review obligations before exposing the service publicly.

## Scope of this branch

- Adds an isolated Docker Compose profile for KraftCloud.
- Keeps the upstream CAD interface intact until branding, translations and print-order integration are reviewed.
- Does **not** deploy anything to KraftCloud automatically.
- Does **not** enable remote MCP, shared server project storage, authentication or KraftPrint communication.

## Prerequisites

- Docker Engine and Docker Compose plugin on the KraftCloud host.
- A reverse proxy capable of terminating TLS and forwarding to loopback port 3300.
- Public DNS and TLS for the intended CAD domain (proposed: `designer.3dkraft.hu`).
- Available memory and CPU for building a Next.js/OCCT-backed app.

## Deploy

```bash
git clone https://github.com/MrAlex1124/layerling.git kraft-designer
cd kraft-designer
git checkout kraft-designer/bootstrap
export KRAFT_DESIGNER_PORT=3300
export KRAFT_DESIGNER_ORIGIN=https://designer.3dkraft.hu
docker compose -f docker/compose.kraftcloud.yml up -d --build
docker compose -f docker/compose.kraftcloud.yml logs --tail=100 -f
```

Configure the reverse proxy to forward `https://designer.3dkraft.hu` to `http://127.0.0.1:3300` with the public Host and `X-Forwarded-Proto` headers preserved. Do not expose port 3000/3300 directly on the public interface.

Verify CAD load, creation, export and browser-based project recovery before onboarding customers. No automatic production readiness or runtime tests are claimed here.

## Upgrade and rollback

Pin a specific commit or release before production. Save the currently deployed commit SHA before upgrading; restore that commit and rebuild to roll back. The named volume persists thumbnail assets across image rebuilds, not complete user projects.

## Integration plan

1. Validate reverse proxy, security headers, CAD exports and resource limits.
2. Introduce Hungarian translations and Kraft Designer branding without deleting upstream notices.
3. Design an authenticated, server-side handoff to KraftPrint for model upload, price quotation and WooCommerce checkout. Do not trust client-supplied prices or publicly expose privileged API tokens.
4. Add authenticated per-user server storage only after access controls, quotas, backups and retention rules are defined.

## License

Layerling and this derivative continue under AGPL-3.0-only. A source-code availability link and applicable notices must accompany network access to the modified application. Separation from proprietary KraftPrint services requires architecture and legal review.
