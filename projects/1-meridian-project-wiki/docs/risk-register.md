# Risk Register — Project MERIDIAN

**Last updated:** 2026-04-24
**Owner:** Sophie Bertrand (ITPM)

| ID | Risk | Likelihood | Impact | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Kubernetes platform EUR-K8S-PROD GA delayed | Medium | High | 🟠 High | Weekly sync with Platform team. Fallback: extend MDD-v3 license. | TRM | Open |
| R-002 | ESMA recertification takes longer than 12 weeks | Low | High | 🟡 Medium | Pre-submission package shared early. Compliance liaison appointed. | Compliance | Open |
| R-003 | Top-20 client subscribers fail to complete integration testing in 8 weeks | Medium | Medium | 🟡 Medium | Pre-engagement workshops in Q2. Dedicated client success engineer. | Client Services | Open |
| R-004 | Performance KPIs not met at p99 | Low | High | 🟡 Medium | Continuous load testing from Q2. Architecture review checkpoint. | TRM | Open |
| R-005 | Audit pipeline retention SLA breach | Low | High | 🟡 Medium | Dual-write pattern to S3 + Snowflake. Reconciliation job daily. | Data Lead | Open |
| R-006 | Cutover incident causing client downtime | Low | Critical | 🟠 High | Blue/green deployment. 2-week shadow run before cutover. | TRM | Open |
| R-007 | Knowledge gap in Flink across the team | High | Medium | 🟡 Medium | Training plan in place. External consultant onboarded. | ITPM | Mitigated |
| R-008 | Cost overrun beyond €6.8M envelope | Low | High | 🟡 Medium | Monthly burn review. Scope flex on out-of-scope items. | PMO | Open |
| R-009 | Decommissioning of MDD-v3 leaves orphan integrations | Medium | Medium | 🟡 Medium | Inventory exercise complete. Communication plan to internal users. | ITPM | Open |
| R-010 | Security review surfaces blocking findings | Low | High | 🟡 Medium | Threat model review at G2 (passed). Pen test scheduled for G4. | Security | Open |
| R-011 | DR strategy for EUR-K8S-PROD not validated | Medium | High | 🟠 High | DR Architect engagement scheduled. Decision needed before G3. | TRM | Open |
| R-012 | Crypto reference data feed protocol changes mid-project | Low | Medium | 🟢 Low | Adapter pattern in ingestion layer. Vendor liaison weekly. | TRM | Open |
| R-013 | Multi-region failover untested at scale | Medium | High | 🟠 High | Game day scheduled for July. Joint with SRE. | TRM | Open |
| R-014 | Platform team capacity shared with FALCON project | High | High | 🔴 Critical | Escalation to Platform Steering. Re-prioritization request submitted. | ITPM | Open |
| R-015 | Top-3 clients requesting +4 weeks of integration testing | Medium | High | 🟠 High | Renegotiation with Client Services Lead in progress. | Client Services | Open |
