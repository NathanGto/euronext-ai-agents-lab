# Weekly Project Minutes — Project HORIZON

## Week 1 — 2026-04-14

**Attendees:** Inès (ITPM), Henrik (TRM), Léa (Lead Frontend), Mehdi (Lead Backend), Sara (UX Lead), Karim (PMO)

### Discussion
- Sprint 7 kickoff. Team committed to 38 story points. Focus: portfolio analytics widgets and mobile login flow.
- Sara presented the final UX mockups for the new portfolio dashboard. Sponsor sign-off received.
- Mehdi raised concerns about the new analytics API performance under load. Plan to add caching layer in Sprint 8.
- Top-3 client beta testers confirmed for May 12 onboarding session.

### Decisions
- D-39: Add caching layer to analytics API in Sprint 8 (owner: Mehdi, due: 2026-05-04)
- D-40: Lock the UX mockups; further changes go to v3.1 backlog (owner: Sara)

### Blockers
- None reported this week.

---

## Week 2 — 2026-04-21

**Attendees:** Inès, Henrik, Léa, Mehdi, Sara, Karim

### Discussion
- Sprint 7 closed at 28/38 story points (74% completion). Two stories carried over.
- Mobile login flow shipped successfully. Team reports good test coverage.
- Mehdi flagged that the analytics API caching is more complex than estimated; needs an additional dev for Sprint 8.
- Léa reports increasing UI inconsistency between desktop and mobile builds. Tech debt accumulating.
- Compliance review of the new "client portfolio export" feature is taking longer than expected. Sign-off expected next week.

### Decisions
- D-41: Re-allocate Antoine (junior dev) from project NEXUS to support analytics caching (owner: Inès, due: 2026-04-23)
- D-42: Schedule a UI consistency review with Sara before end of Sprint 8 (owner: Léa)

### Blockers
- Compliance sign-off on portfolio export feature still pending after 2 weeks.
- ML scoring service (used by HORIZON for recommendations) is intermittently unavailable in dev environment.

---

## Week 3 — 2026-04-28

**Attendees:** Inès, Henrik, Léa, Mehdi (absent — sick leave), Sara, Karim

### Discussion
- Sprint 8 mid-point. Caching layer is **delayed** — Mehdi out for a week, Antoine still ramping up.
- Performance testing on the new portfolio dashboard shows p95 latency at 1.8s (target: <800ms). Needs fix before sprint close.
- Compliance signed off on portfolio export feature on 2026-04-25. Feature now unblocked.
- Sara raised that the latest UX iteration on mobile is not aligned with the mockups locked at D-40. Investigation needed.
- Top-3 beta testers' onboarding session on May 12 is confirmed; demo environment must be ready by May 10.

### Decisions
- D-43: Pair Antoine with Léa for the analytics caching during Mehdi's absence (owner: Inès)
- D-44: Performance optimization sprint to be planned for Sprint 9 (owner: Henrik)
- D-45: Investigate UI deviations from locked mockups; report findings by May 5 (owner: Léa)

### Blockers
- Mehdi's absence creates a single-point-of-failure on the analytics API.
- Performance gap on portfolio dashboard is significant and currently unmitigated.
- ML scoring service issues from Week 2 still occurring intermittently.
