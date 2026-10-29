# Kraft Designer — repository boundary rules

These rules apply to every contributor and automated coding agent.

## Product boundary (mandatory)

Kraft Designer is a standalone, generic 3D CAD application. It MUST function without 3DKraft, KraftPrint, WordPress, WooCommerce, or any other 3DKraft service.

**Only Kraft Designer code belongs in this repository.** Do not implement or copy any 3DKraft/KraftPrint business logic, code, configuration, secrets, datasets, or proprietary algorithms here.

### Allowed

- CAD geometry and editing, document/project management, file import/export, standalone UI, localization and accessibility.
- Generic, reusable, documented integration interfaces, for example a user-initiated file export or capability-neutral message/event contract.
- Deployment configuration strictly for the standalone Kraft Designer service.

### Forbidden

- 3DKraft or KraftPrint pricing, quote calculations, materials/pricing catalogs, margins, discounts, shipping, order status, checkout, customer information, production scheduling, or order lifecycle.
- WordPress/WooCommerce SDKs, plugin code, endpoints, API tokens, database schemas or dependencies.
- Hardcoded 3dkraft.hu URLs, service-specific callbacks, KraftPrint-specific protocol handlers or dependencies.
- Direct calls from Kraft Designer to KraftPrint or to a 3DKraft backend.
- Bundling KraftPrint code into this repository, even as an optional module.

## Ownership of the integration

The **KraftPrint WordPress plugin** will own the integration and all business flows. It may consume a generic user-authorized export or an independently documented interface provided by Kraft Designer. The Designer must not know or depend on KraftPrint's existence.

Keep integration contracts application-neutral, optional, and documented. No shared secrets or cross-domain credentials embedded in the browser.

## Review gate

Before merging any change, check:
1. Does it provide standalone CAD value without a 3DKraft deployment?
2. Is there any 3DKraft/KraftPrint-specific business logic, URL, API, data or dependency?
3. Would the app work exactly as a generic CAD editor if the KraftPrint plugin did not exist?

If answer 1 or 3 is **no**, or answer 2 is **yes**, reject the change and implement the integration in the KraftPrint plugin instead.

## Upstream license

This project is a derivative of Layerling, under AGPL-3.0-only. Preserve its upstream license and required notices. Architecture isolation does not remove copyleft obligations from modified Kraft Designer code.
