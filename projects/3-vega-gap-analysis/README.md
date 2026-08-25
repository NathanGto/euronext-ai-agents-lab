# Project VEGA · internal FX rates viewer

> Fiction, written for training. Nothing here is real Euronext material, and nothing produced
> from it is a real finding.

**The material.** `initial-specification/` holds what was ordered and approved. `src/` holds what the squad actually delivered. The two do not match, on purpose.

**The job.** Say what actually shipped before you sign. Requirement by requirement, with a verdict, and cite both sides.

**Ready-made agent.** `gap-reviewer` is built for this project. The interesting half is the requirement nobody asked for: something in `src/` was built that no one specified and no one approved.

Outputs go in `output/`, and the local app renders the newest one at
`http://localhost:3000`.

---

## The original hand-over note

# Project VEGA — FX Rates Viewer

Internal web application giving Euronext desks a single view of foreign-exchange
rates, replacing the spreadsheet that Treasury circulates by email every morning.

| | |
|---|---|
| **Project Code** | EUR-2026-VEGA |
| **Train** | Q3-2026 Corporate Platforms |
| **Product Owner** | Claire Fontaine |
| **Delivery squad** | Squad Kestrel (4 engineers) |
| **Status** | Build complete, pending PO sign-off |
| **Sprint** | 12 of 12 |

## Where to find what

- **What was ordered** → [`initial-specification/`](initial-specification/)
  - [`functional-spec.md`](initial-specification/functional-spec.md) — the features, as agreed at kick-off
  - [`technical-spec.md`](initial-specification/technical-spec.md) — the architecture the squad committed to
  - [`acceptance-criteria.md`](initial-specification/acceptance-criteria.md) — how we said we would judge it
- **What was built** → [`src/`](src/)

## Note from the squad lead

> Handing over for sign-off. We hit the sprint 12 deadline. A few things moved
> during the build and we did not get round to updating the specification
> documents, so read the code as the source of truth for what actually ships.
>
> — Marc, Squad Kestrel, 2026-08-11

## You do not need to run this

The review is a reading exercise: the specification against the source. Nothing
here needs installing, and `npm install` is not part of the job.
