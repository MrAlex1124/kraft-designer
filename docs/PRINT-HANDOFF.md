# Optional print-model handoff (experimental)

Kraft Designer is a standalone CAD editor. It knows nothing about pricing, checkout, customer accounts, order processing or any specific external service.

## Build-time configuration

- `NEXT_PUBLIC_DESIGNER_PRINT_MODE=true` shows **3D nyomtatás megrendelése** in the Export panel instead of direct export actions.
- `NEXT_PUBLIC_DESIGNER_HANDOFF_ORIGIN=https://example.com` is the **exact trusted embedding page origin**. Use your deployment's real origin only in the deployment environment, never commit private URLs or credentials.

In print mode, the editor must be embedded in a trusted parent page via an iframe. A click exports the current solid geometry as STL and sends a `postMessage` to the configured parent origin:

```typescript
{
  type: "kraft-designer:print-model",
  version: 1,
  fileName: "model.stl",
  mimeType: "model/stl",
  data: ArrayBuffer
}
```

The hosting application receives the event, **verifies `event.origin` against the exact expected Designer origin and `event.source` against the iframe's `contentWindow`**, validates payload size, file type and metadata, and sends the STL to its own authenticated server. That server performs independent geometry and content validation, authorizes the request, stores it in short-lived private storage and handles all subsequent business logic. Never trust browser-originated prices or a file name as authorization.

Do not expose a privileged upload token in client JavaScript. Configure CSP `frame-ancestors` on the Designer host and a restrictive `frame-src` policy on the embedding page.

## Important limitations

This is a **user-interface restriction, not digital rights management**. A browser that generates a mesh locally necessarily gives technically capable users access to its geometry. File formats, project files, browser storage, other export routes, developer tools, the open-source code, and modifications may enable recovery of geometry. It is impossible to guarantee that viewers cannot obtain STL data from this client-side open-source CAD application.

This initial change replaces the Export panel's direct download controls only. It has **not** completed a full audit of every other export route or shortcut. Do not deploy as a controlled customer-only editor until those routes are reviewed and tested.

The parent integration and receiving endpoint are **not** part of this repository. This branch does not contain any website- or commerce-specific code.

## Test cases to complete

- [ ] Print mode off: all original CAD export functions work.
- [ ] Print mode on: Export panel shows the print request button and hides file download/server export controls.
- [ ] Trusted parent frame receives binary STL with correct name and dimensions.
- [ ] Unframed app or misconfigured origin refuses handoff gracefully.
- [ ] No message is sent to an unexpected origin.
- [ ] Export toolbar, shortcuts, project backup, file save and other routes audited for bypasses.
- [ ] Validated with automated tests, browser interaction and Docker build.
