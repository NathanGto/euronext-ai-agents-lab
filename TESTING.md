# Testing the lab

One command, offline, cross-platform:

```bash
npm test
```

It is pure Node with no dependencies of its own, so it runs on a locked-down machine.

## What it checks

| Group | Checks |
| --- | --- |
| Runtime | Node 20 or newer |
| Dependencies | `pdfjs-dist`, `pptxgenjs`, `tsx`, `typescript` installed at the root |
| Skills | all 13 `SKILL.md` files present in `.claude/skills/` |
| Slash commands | the 4 `.prompt.md` files Copilot resolves from `.github/prompts/` |
| Agents & memory | `committee-brief`, `gap-reviewer`, `memory/MEMORY.md` |
| Projects | the 3 project READMEs, plus MERIDIAN's docs, HORIZON's sources, VEGA's spec AND its delivered code |
| Smoke | pptxgenjs renders in memory, and the Euronext palette is present in `euronext-brand` |
| Front end | the app builds, the dev server boots on port 3100, the welcome page, the logo and `/flow` all answer |

Port 3100 is deliberate: a dev server already running on 3000 is never disturbed, and the build
goes to `.next-verify` rather than `.next` for the same reason.

## What it does NOT check

- That npm is allowed on this machine. If it is not, you never get to run this file, and that is
  what the offline path in `kick-off` is for.
- That the participant's own agent works. Nothing here knows what they built.

## When it fails

The line above the summary names the problem. The 2 common ones:

| Symptom | Fix |
| --- | --- |
| dependencies missing | `npm install` at the root, then `npm --prefix web install` |
| web deps not installed (warning, not a failure) | `npm --prefix web install` |
