---
agent: 'agent'
name: 'kick-off'
description: 'Set up and launch the lab, or tell me what on this machine will not let me.'
argument-hint: 'nothing to add, just send it'
---

Read `.claude/skills/kick-off/SKILL.md` in this repository and follow it exactly.

Start with the check it opens on: run `node --version` and `npm --version` before anything else.
If either fails, do not attempt a fix and do not suggest an install. Say so plainly and switch to
the offline path described at the bottom of that skill, which needs nothing installed.

Report in one line first: ready, or the one thing blocking. Details after.
