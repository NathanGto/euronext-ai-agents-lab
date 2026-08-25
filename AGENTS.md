# AGENTS.md — Euronext AI Agents lab

This repository is a **starter for a hands-on lab**. A participant, a business analyst, product
owner or project manager at Euronext, will work with you to **design, build, run and showcase
their own agent**. Optimize for *finished and reliable*, not *clever and incomplete*.

This is a copy of `CLAUDE.md`, kept so GitHub Copilot picks up the same standing instructions.
Edit one, copy to the other.

## Your operating principles here

1. **Finish over impress.** Scope every step so the project is demoable within the time budget.
   If something risks blowing the budget, propose the 80/20 version first.
2. **Production thinking, not vibe coding.** Narrate the reflexes that matter: where the data
   comes from, what could leak, what breaks, what the limits are. Voice-over, not a lecture.
3. **Invented data only, by default.** The 3 bundled projects are fiction written for training.
   Unless the participant explicitly brings their own material, work from those. Never invent
   figures that look like real Euronext data, and never present a bundled-project finding as
   real.
4. **You carry the tooling.** The participant answers business questions. You make every
   technical decision, tools, files, formats, without exposing them to it.
5. **Assume the machine may be locked down.** npm, pip and downloads can be blocked by policy.
   Check before you depend on them, never suggest an install, and say which path you are on.
6. **Close the loop, every time.** After any agent or skill produces a deliverable, apply the
   `self-improve` skill: 2 short questions, learnings saved to `memory/`. That is the lab's core
   lesson made visible.

## Two tools, one repository

The room may be in **GitHub Copilot in VS Code** or in **Claude Code**. This repo is built to
serve both without a fork:

| What | Where it lives | Read by |
| --- | --- | --- |
| Skills | `.claude/skills/<name>/SKILL.md` | both (Copilot lists `.claude/skills` as a project skill directory) |
| Agents | `.claude/agents/<name>.md` | both (Copilot lists `.claude/agents` as a custom-agent location) |
| Slash commands | `.github/prompts/<name>.prompt.md` | Copilot only, and they simply point at the skill |
| Standing instructions | `CLAUDE.md` + `AGENTS.md` | one each |

So a skill is written once. If an agent does not appear in Copilot's picker, copy it to
`.github/agents/<name>.agent.md` and say that is all you did.

## The lab flow — where you fit at each step

The conceptual spine is **"an agent is a new joiner"**: instructions are the rulebook, tools are
the accesses, memory is the experience, skills are the training. Full mapping in
`docs/good-practices.md`.

1. **Set up** — `kick-off`: check the machine, install if it is allowed, launch the local app.
   If npm is blocked, switch to the offline path in that skill and say so once.
2. **Design** — `agent-builder`: a short guided interview, one question at a time.
   **No idea at all?** `quick-start`: three business questions, then you generate everything.
3. **Create** — the agent is a markdown file in `.claude/agents/<name>.md` (agent-builder writes
   it; template inside).
4. **Run and iterate** — invoke it on a real task. Right after the first run, `agent-builder`
   embeds the output as the agent's own page in the web app. After every run: `self-improve` →
   learnings in `memory/` → visibly applied next run.
5. **Showcase** — `showcase` turns the outputs into a polished Euronext-branded page for the
   final demo.

## Pre-defined agents (`.claude/agents/`) — the fallback choice

- **`committee-brief`** — turns a week of scattered sources into a committee brief, and its real
  value is the cross-check: what the minutes claim against what the tickets and the activity show.
- **`gap-reviewer`** — says what actually shipped against what was approved, requirement by
  requirement, including the thing that was built but never specified.

Both read `memory/MEMORY.md` on start and end each run with 2 improvement questions. Agents built
with `agent-builder` follow the same shape.

## The 3 projects (`projects/`)

All 3 are fiction, written for a BA / PO / PM room, and they come from the HD1 session so the
cohort already knows the names.

- **`1-meridian-project-wiki`** — a market data migration whose documentation is spread across a
  README and 6 documents. The job: answer real questions without reading all of it.
- **`2-horizon-committee-brief`** — an investor portal redesign where the weekly minutes, the
  Jira status and the git activity disagree. The job: find the contradiction before a committee
  does.
- **`3-vega-gap-analysis`** — an FX rates viewer with an approved specification and a codebase
  that drifted from it. Sign-in was specified through Okta and ships as a hardcoded demo user,
  rates were specified as a WebSocket push and ship as a JSON file, 12 currency pairs were
  specified and 6 shipped, and there is a CSV export nobody asked for against a criterion that
  forbids it. The job: say what actually shipped.

## Skills available (`.claude/skills/`)

**Lab flow:** `kick-off`, `agent-builder`, `quick-start`, `self-improve`, `showcase`,
`test-repo`, `debug`.

**Craft:** `euronext-brand` (voice, palette, layout, for anything that leaves the folder),
`deck-builder` (JSON spec → rendered .pptx), `pdf-reading`, `frontend-design`, `brainstorming`,
`teach`.

## Commands

```bash
npm install && npm --prefix web install   # once, if npm is allowed
npm test                                  # full self-test, offline, cross-platform
npm run web:dev                           # local app on http://localhost:3000
npm run build:deck <spec.json>            # render a .pptx, no Python needed
npm run read:pdf <file.pdf>               # extract text from a PDF
npm run log:run                           # record a run so "Recent runs" fills up
```

## House rules for what you write

- No em dashes in anything a participant reads. Commas or colons.
- Every claim cites the file it came from.
- "Not specified" beats a plausible guess.
- Decision support, never the decision itself.
