---
name: quick-start
description: Use when the participant has no idea what to build, does not know what to do, hesitates, or asks for the quick start or "do it for me" — three simple questions, then every output is generated for them on the bundled projects.
---

# Quick start — no idea? Three questions, everything generated

For participants with **no use case in mind**. You ask three business questions, then you do all
the work: run the agents and skills, produce every output, and show them on screen. **Zero
technical vocabulary with the participant.** No file paths, no commands, no skill names, no JSON.
You translate everything into plain language.

The 3 bundled projects are real enough to carry a demo on their own, so nobody has to invent a
use case to see the point:

- **MERIDIAN**, a market data migration with its documentation scattered across 7 files.
- **HORIZON**, an investor portal, where the minutes, the tickets and the git activity disagree.
- **VEGA**, an FX rates viewer whose delivered code drifted from the approved specification.

## Step 0 — Show the plan, right in the chat

After **each answer**, redraw the pipeline as a compact ASCII flow directly in your message
(code fence, 12 lines maximum, `?` for what is still unanswered) so the participant follows the
plan without switching windows. Mirror the same flow to `agent-flow.mmd` at the repo root
(Mermaid `flowchart TD`, shape in `agent-flow.example.mmd`, no commas inside `[...]` node
labels): **http://localhost:3000/flow** redraws it within 2 seconds, and **open that page for
them**, never just print a link. In-app browser first (`preview_start` with
`{url: "http://localhost:3000/flow"}` when those tools exist, `navigate` if the panel is already
open), otherwise `open <url>` on macOS, `Start-Process <url>` on Windows, `xdg-open <url>` on
Linux. **The `.mmd` Write is paired with every chat redraw, in the same turn, never one without
the other**: a chat-only redraw leaves the projector frozen on a stale diagram.

## Step 1 — Three questions (one at a time, plain language)

Ask them conversationally, one per message. If the participant hesitates, propose the default and
move on. This must feel effortless.

1. **The job** — "Which one eats more of your week: getting ready for a committee, or checking
   what a delivery team actually built?" *(default: getting ready for a committee)*
2. **The project** — "Want to try it on a migration, a portal redesign, or an app that was just
   handed over for sign-off?" *(default: the one that matches their answer to question 1)*
3. **The deck** — "For the slides at the end: the whole story, or go deep on the single worst
   thing you found?" *(default: the whole story)*

Never ask more than these three. Never ask how, only what.

## Step 2 — Generate everything

Do all of this yourself, announcing each result in one plain sentence ("Your brief is ready, 4
sections, every line sourced"). Technical steps stay invisible.

1. **The analysis** — run the `committee-brief` agent (answer 1 = committee) or the
   `gap-reviewer` agent (answer 1 = delivery check) on the project from answer 2. Output lands in
   that project's `output/` folder as Markdown.
2. **The cross-check** — whichever agent ran, make it name at least one place where 2 sources
   disagree. That contradiction is the moment the room understands what this is for. If the
   project genuinely has none, say so out loud rather than inventing one.
3. **The deck** — build 6 to 8 slides on the answer-3 story with `deck-builder` and
   `euronext-brand`, rendered with `npm run build:deck`.
4. Log every run with `npm run log:run` so "Recent runs" fills up on screen.

Time-boxed: deliver in this order and stop cleanly when time runs out. Each output stands alone.

## Step 3 — Show and close the loop

1. Open (or point to) **http://localhost:3000**. The cards now have content. That is the moment.
2. Apply the `self-improve` skill: 2 short questions, learnings saved to memory.
3. Offer the natural next step: *"Want to turn this into your own agent, on your own project?"*
   → `agent-builder`.

## Rules

- The participant never sees paths, commands or internals. Only questions, results, and the page.
- Defaults are first-class: accepting all three defaults must still produce a great demo.
- Everything in the bundled projects is invented for training. Never mix it with real Euronext
  content, and never present an output from it as a real finding.
- Outputs in English; converse in the participant's language.
