# Scope & Milestones — Project HORIZON

**Last updated:** 2026-04-10

## Scope summary

HORIZON v3 replaces the legacy investor portal with a modern, mobile-first, analytics-rich experience. Core capabilities in scope:

1. New portfolio dashboard with real-time analytics
2. Mobile-first navigation and authentication
3. Portfolio export (PDF, CSV, regulatory formats)
4. ML-based personalized recommendations
5. Notification service v2 (email, in-app, mobile push)
6. Onboarding flow for new institutional clients

## Out of scope

- Retail investor accounts (separate product line)
- Trading execution capabilities (kept on existing platform)
- Crypto-asset portfolios (deferred to HORIZON-2 in 2027)

## Milestones

| ID | Milestone | Target | Status |
|---|---|---|---|
| M1 | UX mockups locked | 2026-04-14 | 🟢 Done |
| M2 | Sprint 7 close | 2026-04-21 | 🟡 Partial (74%) |
| M3 | Compliance sign-off on portfolio export | 2026-04-30 | 🟢 Done (early on 2026-04-25) |
| M4 | Sprint 8 close | 2026-05-04 | 🟡 At risk |
| M5 | Beta tester onboarding session | 2026-05-12 | 🟢 On track |
| M6 | Performance KPIs met (p95 < 800ms) | 2026-06-15 | 🟠 At risk |
| M7 | Production launch v3.0 | 2026-07-30 | 🟢 On track |

## Performance targets

- Portfolio dashboard: p95 latency < 800ms (current: 1.8s)
- Mobile login: p95 < 1.2s (current: 0.9s ✅)
- Analytics API: 99.5% availability (current: 99.1%)
- Net Promoter Score post-launch: > +20 (baseline: -14)
