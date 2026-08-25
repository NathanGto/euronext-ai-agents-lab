# Jira Status — Project HORIZON

**Snapshot date:** 2026-04-28
**Source:** Jira board EUR-HORIZON-2026

## Sprint 7 (closed)

**Closed:** 2026-04-21
**Committed:** 38 story points · **Completed:** 28 story points · **Velocity vs target:** 74%

| Ticket | Title | Story points | Status | Notes |
|---|---|---|---|---|
| HRZ-201 | Portfolio dashboard layout | 5 | Done | Merged |
| HRZ-202 | Real-time market data widget | 8 | Done | Merged |
| HRZ-203 | Mobile login flow — UI | 5 | Done | Merged |
| HRZ-204 | Mobile login flow — backend | 3 | Done | Merged |
| HRZ-205 | Mobile login flow — automated tests | 3 | **In Progress** | Carried over to Sprint 8 |
| HRZ-206 | Portfolio export feature | 5 | **Blocked** | Compliance review pending; carried to Sprint 8 |
| HRZ-207 | Analytics API — initial endpoint | 8 | Done | Merged |
| HRZ-208 | Analytics API — performance testing | 5 | Not started | Deprioritized to Sprint 8 |

## Sprint 8 (in progress)

**Active:** 2026-04-21 → 2026-05-04
**Committed:** 35 story points · **Burned to date:** 14 story points · **Mid-sprint completion:** 40%

| Ticket | Title | Story points | Status | Notes |
|---|---|---|---|---|
| HRZ-205 | Mobile login flow — automated tests | 3 | **In Progress** | Carried from Sprint 7 |
| HRZ-206 | Portfolio export feature | 5 | Done | Compliance approved 2026-04-25 |
| HRZ-208 | Analytics API — performance testing | 5 | **In Progress** | Performance gap identified |
| HRZ-209 | Analytics API — caching layer | 8 | **Blocked** | Mehdi on sick leave, Antoine ramping up |
| HRZ-210 | Portfolio dashboard — performance fix | 5 | **Not started** | Added mid-sprint after perf test |
| HRZ-211 | Mobile UI consistency review | 3 | Not started | Owner: Léa |
| HRZ-212 | Demo environment setup for beta testers | 5 | In Progress | Due 2026-05-10 |
| HRZ-213 | Notification service v2 | 3 | Done | Merged |
| HRZ-214 | Onboarding tooltips | 2 | Done | Merged |
| HRZ-215 | ML scoring integration — error handling | 5 | **Blocked** | ML service unstable |

## Open critical defects

| Defect | Title | Severity | Status |
|---|---|---|---|
| HRZ-DEF-12 | Mobile login fails for users with non-Latin characters in email | High | **Open** |
| HRZ-DEF-13 | Portfolio dashboard p95 latency = 1.8s (target <800ms) | High | **Open** |
| HRZ-DEF-14 | ML scoring service returns 500 errors intermittently | Medium | **Open** |
| HRZ-DEF-15 | Mobile UI buttons misaligned on iOS Safari | Medium | Open |
