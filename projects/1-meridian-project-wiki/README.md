# Project MERIDIAN · market data platform migration

> Fiction, written for training. Nothing here is real Euronext material, and nothing produced
> from it is a real finding.

**The material.** A README and 6 documents in `docs/`: the scoping note, the solution design, the latest status, the RACI, the risk register and the last committee minutes.

**The job.** Answer real questions about a project you just joined, without reading all of it, and make every answer name the file it came from.

**Ready-made agent.** `committee-brief` works here, but the sharper use is a agent of your own that answers the 5 questions you always get asked in your first week on a project.

Outputs go in `output/`, and the local app renders the newest one at
`http://localhost:3000`.

---

## The original hand-over note

# Project MERIDIAN — Market Data Platform Migration

> Migration of the legacy Market Data Distribution platform (MDD-v3) to the new cloud-native architecture (MDD-v4).

## Project at a glance

| | |
|---|---|
| **Project Code** | EUR-2026-MERIDIAN |
| **Train** | Q2-2026 Market Infrastructure |
| **ITPM** | Sophie Bertrand |
| **PMO** | Karim Haddad |
| **TRM** | Lukas Petersen |
| **Sponsor** | Head of Market Data Services |
| **Status** | 🟡 Yellow — see latest committee notes |
| **Go-live target** | 2026-09-15 |

## Why this project exists

The current MDD-v3 platform was built in 2014 and runs on dedicated on-prem infrastructure. It cannot scale beyond 2.5M messages/sec, and the licensing renewal in Q4-2026 represents a €4.2M expense for unchanged capabilities. MERIDIAN replaces it with a Kubernetes-based platform, lowering TCO by ~35% and enabling sub-millisecond latency for new data feeds.

## Where to find what

- **Scope & business case** → [`docs/scoping-note.md`](docs/scoping-note.md)
- **Latest status** → [`docs/status-2026-04-28.md`](docs/status-2026-04-28.md)
- **Solution architecture** → [`docs/solution-design-v2.md`](docs/solution-design-v2.md)
- **Latest Project Committee** → [`docs/committee-2026-04-24.md`](docs/committee-2026-04-24.md)
- **Risk register** → [`docs/risk-register.md`](docs/risk-register.md)
- **Team & RACI** → [`docs/team-raci.md`](docs/team-raci.md)

## How to contribute to this wiki

Every project decision, status update, and architecture change lives here as Markdown. The rule is simple: **if it's not in the repo, it doesn't exist for the AI assistant**. Update the right file, commit, push.
