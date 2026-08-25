# Project Committee — 2026-04-24

**Date:** 2026-04-24, 14:00-15:30
**Chair:** Head of Market Data Services
**Attendees:** Sophie Bertrand (ITPM), Karim Haddad (PMO), Lukas Petersen (TRM), Compliance, Risk, Platform Lead, Client Services Lead

## 1. Status review

ITPM presented the current Yellow status. The 2-week slip on Kafka sizing is acknowledged but not yet on the critical path. Performance test environment instability is the bigger concern.

**Decision:** A joint war room with Infrastructure will be set up next week. Daily standups until the perf environment is stable.

## 2. Risk review

Two new risks added to the register this week:

- **R-014** — Platform team capacity is shared with another high-priority project (FALCON). Risk that Kafka sizing slips further.
- **R-015** — Top-3 client subscribers have requested an additional 4 weeks of integration testing. Could push end-client validation beyond the cutover window.

**Decision:** ITPM to escalate R-014 to the Platform Steering Committee. Client Services Lead to renegotiate the testing window with the top-3 subscribers.

## 3. Budget review

Burn at 94% of plan, in line with expectations. No reforecast needed at this stage.

## 4. Gate readiness

Next gate (Solution Design Gate, G3) scheduled for 2026-05-22. Pre-gate checklist will be circulated by the PMO 2 weeks ahead. Known concerns:

- DR strategy for EUR-K8S-PROD still open (see solution-design-v2.md)
- Compliance ruling on audit data residency pending

## 5. Decisions log

| ID | Decision | Owner | Due |
|---|---|---|---|
| D-2026-04-24-01 | Set up joint war room with Infra for perf-env stability | Sophie Bertrand | 2026-04-30 |
| D-2026-04-24-02 | Escalate R-014 to Platform Steering | Sophie Bertrand | 2026-05-02 |
| D-2026-04-24-03 | Renegotiate client testing window | Client Services Lead | 2026-05-08 |
| D-2026-04-24-04 | Compliance to issue ruling on audit data residency | Compliance | 2026-05-15 |

## 6. Next committee

2026-05-08, 14:00-15:30
