# Scoping Note — Project MERIDIAN

**Version:** 1.3
**Last updated:** 2026-03-12
**Owner:** Sophie Bertrand (ITPM)

## 1. Project objective

Replace the legacy Market Data Distribution platform (MDD-v3) with a new cloud-native solution (MDD-v4) that:

- Sustains 5M+ messages/sec at peak (vs. 2.5M today)
- Reaches sub-millisecond p99 latency on Tier-1 feeds
- Reduces total cost of ownership by 30-40% over 5 years
- Enables new revenue feeds (crypto reference data, ESG indicators)

## 2. In scope

- Migration of all 47 existing Tier-1 and Tier-2 data feeds
- New ingestion pipeline based on Kafka and gRPC
- Replacement of the proprietary client distribution layer
- Recertification with regulators (ESMA, AMF) for the new architecture
- Decommissioning plan for MDD-v3 (sunset by Q1-2027)

## 3. Out of scope

- Tier-3 and historical data feeds (covered by separate project HISTOR-2027)
- End-client onboarding tooling (handled by the Client Services team)
- Pricing model changes for market data subscribers

## 4. Key assumptions

- Kubernetes platform "EUR-K8S-PROD" is GA by 2026-06-30
- Client testing window of 8 weeks is sufficient for top-20 subscribers
- Regulatory recertification follows the standard 12-week ESMA process
- No major change in the data feed protocols during the migration

## 5. Constraints

- Hard deadline: MDD-v3 license expires 2026-12-31
- Zero-downtime requirement during cutover
- Compliance: full audit trail required end-to-end
- Budget envelope: €6.8M (capex + opex for 18 months)

## 6. Success criteria

- All 47 feeds migrated and certified before 2026-09-15
- No more than 2 client-impacting incidents during the transition
- Performance KPIs met for 30 consecutive days post-cutover
- Sign-off from Risk, Compliance, and the Market Data Steering Committee
