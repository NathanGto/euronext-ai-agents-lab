# Solution Design — MDD-v4 Architecture

**Version:** 2.0
**Last updated:** 2026-04-10
**Approved by:** Lukas Petersen (TRM), Architecture Review Board

## 1. Architecture summary

MDD-v4 is a cloud-native, event-driven platform deployed on the internal Kubernetes platform EUR-K8S-PROD. It separates ingestion, normalization, distribution, and audit into independent services that communicate over Kafka.

## 2. Key components

| Component | Technology | Purpose |
|---|---|---|
| Feed ingestion | Go services on K8s | Receive raw feeds from upstream venues |
| Normalization layer | Apache Flink | Translate to canonical MDD-v4 schema |
| Distribution bus | Kafka (40 brokers) | Fan-out to client distribution nodes |
| Client gateway | gRPC + WebSocket | Serve normalized data to subscribers |
| Audit & compliance | Kafka Connect → S3 + Snowflake | Immutable audit trail for regulators |
| Observability | Prometheus, Grafana, OpenTelemetry | Metrics, traces, logs |

## 3. Data flow

1. Upstream venue → Feed ingestion service (raw)
2. Feed ingestion → Kafka topic `raw.<feed-id>`
3. Flink normalization job → Kafka topic `norm.<feed-id>`
4. Client gateway subscribes to `norm.*` and pushes to clients
5. Audit pipeline copies all `raw.*` and `norm.*` topics to S3 + Snowflake

## 4. Scaling targets

- Ingestion: 5M msg/sec sustained, 8M peak
- End-to-end latency: < 950 µs at p99 for Tier-1 feeds
- Audit retention: 7 years per regulatory requirements

## 5. Key design decisions

- **Why Kafka over the legacy proprietary bus?** Open standard, mature tooling, scales horizontally.
- **Why Flink for normalization?** Event-time semantics required for cross-venue reconciliation.
- **Why gRPC + WebSocket on the client side?** gRPC for institutional subscribers, WebSocket for browser-based clients.

## 6. Open architecture questions

- Final Kafka cluster sizing pending Platform team review (see status-2026-04-28.md)
- Multi-region failover strategy for the EUR-K8S-PROD platform — DR Architect input needed
- Audit data residency for non-EU subscribers — pending Compliance ruling
