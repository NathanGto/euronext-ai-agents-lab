# Technical Specification — Project VEGA

**Version:** 1.4
**Approved:** 2026-04-18
**Author:** Squad Kestrel, reviewed by the Architecture Review Board

## 1. Front end

- React 18 with TypeScript, built with Vite.
- Application state in **Redux Toolkit**. Component-local state is acceptable
  only for form inputs.
- Design system: the internal `@euronext/ui` component library.

## 2. Rates feed

- The client subscribes to the internal rates gateway over **WebSocket**:
  `wss://rates-gw.internal/v1/stream`.
- The gateway pushes a message per tick. The client applies it to the store.
- On disconnect, exponential backoff, and a visible "reconnecting" state.
- **No polling.** No static rate file ships with the application.

## 3. Authentication

- Okta OIDC authorisation code flow with PKCE.
- The access token is a JWT, validated on every API call.
- User records live in the `vega_users` table in PostgreSQL: id, corporate
  email, display name, created_at, last_login_at.
- Session lifetime 8 hours, refresh token rotation enabled.

## 4. Persistence

- Favourites and alert thresholds in PostgreSQL, keyed by user id.
- Audit events appended to the `vega_audit` table, never updated or deleted.

## 5. Quality

- Unit tests with Vitest, **80% line coverage minimum**, enforced in CI.
- End-to-end smoke test with Playwright on every deploy.

## 6. Deployment

Internal Kubernetes platform EUR-K8S-PROD, one namespace per environment.
