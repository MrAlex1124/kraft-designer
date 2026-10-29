# Kraft Designer v0.2 — quality checklist

This project is a standalone CAD application. This document contains no private deployment or business integration instructions.

## Automatic CI

The existing `.github/workflows/ci.yml` runs `npm ci`, type checking, unit tests, E2E tests, the Next.js build, generated-file consistency, and a static export on pushes and pull requests. No additional redundant pipeline is necessary.

## Container image

The release workflow publishes the container under this repository's GitHub Container Registry path, with the public image title `Kraft Designer`. The optional Docker Hub image uses `kraft-designer` as its name. The standard Compose example builds this repository and uses a locally named image rather than the upstream project's published image.

## Manual checks before release

- [ ] Check that the application loads in a fresh browser session and defaults to Hungarian.
- [ ] Confirm language changes persist for returning users.
- [ ] Check light, dark and graphite themes; verify contrast, toolbar states and dialogs.
- [ ] Create, edit, save and reopen a CAD design.
- [ ] Export sample models to STL, 3MF and STEP and validate in independent viewers.
- [ ] Verify existing `.lyl` project compatibility (internal file identifiers remain unchanged).
- [ ] Verify browser PWA installation and icons.
- [ ] Build and run the Docker image; inspect health, startup and logs.
- [ ] Review visible UI strings, images, generated guide and sample files for old promotional branding.
- [ ] Verify upstream copyright/license notices and the AGPL network source-code offer.
- [ ] Confirm public commits contain no credentials, private infrastructure or proprietary integration code.

**Status:** These checks are not represented as passed until a CI run or a manual test produces evidence. Do not mark v0.2 production-ready solely because this file exists.

## Public repository boundary check

Run `node scripts/check-public-boundary.mjs` before publishing. It checks a small set of public-facing files for accidental service-specific references and credential-shaped literals. It is a supplementary guard, **not** a complete secrets scan, dependency audit, or guarantee that Git history is clean.
