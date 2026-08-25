---
name: kick-off
description: Use when setting up the lab after cloning, installing dependencies, or launching the local web app — "npm install", "start the dev server", "open the web view", or when http://localhost:3000 is not responding.
---

# Kick-off — install & run

Install everything the lab needs, then launch the local web app that renders each project's
`output/`. All commands run from the **repo root** and are **identical on macOS, Linux and
Windows** (use PowerShell on Windows).

**Before the first command, check that they can run it at all.** On a managed Euronext laptop,
`npm` may be blocked by policy or by the corporate proxy. Run `node --version` and `npm --version`
first. If either fails, do not try to fix it and do not suggest an install: say plainly that this
machine cannot run the local app, and switch to the **offline path** at the bottom of this file.
Everything that matters in the lab still works there.

## 1. Install dependencies (once)

```bash
npm install               # root: pdfjs-dist, pptxgenjs, tsx, typescript
npm --prefix web install  # web app (Next.js)
```

Requires **Node 20+** (`node --version` to check). No network access is needed afterwards — everything else in the lab is bundled.

## 2. Verify (recommended)

Run the [`test-repo`](../test-repo/SKILL.md) skill — i.e. `npm test` — to confirm the environment is ready before demoing.

## 3. Launch the dev server

**In-app browser first (Claude Desktop).** If the in-app browser tools are available (`mcp__Claude_Browser__*`), do NOT launch the server with Bash: call `preview_start` with `{name: "web"}` (config in `.claude/launch.json`, port pinned to 3000 because every printed URL in the lab uses it). One call starts `npm run web:dev` *and* opens http://localhost:3000 in the panel right next to the chat — the participant never leaves the app, and `preview_logs` gives you the server logs when debugging. **Already running?** If port 3000 already answers (a server started earlier in a terminal), don't start a second one: just open the panel with `preview_start` `{url: "http://localhost:3000"}`.

**Fallback (plain terminal, no browser tools):**

```bash
npm run web:dev
```

The server runs in the foreground; keep it in its own terminal (or run it in the background) and stop it with `Ctrl+C`. **Then open the browser for the participant — never just print the link** (many won't know to click it). Once http://localhost:3000 answers:

| macOS | Windows (PowerShell) | Linux |
| --- | --- | --- |
| `open http://localhost:3000` | `Start-Process http://localhost:3000` | `xdg-open http://localhost:3000` |

The welcome page walks them through the lab from there.

## Troubleshooting

| Symptom | macOS / Linux | Windows (PowerShell) |
| --- | --- | --- |
| Port 3000 already in use | `lsof -ti:3000 \| xargs kill` | `Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess \| Stop-Process` |
| `next: command not found` / module errors | `npm --prefix web install` | same command |
| Stale build weirdness | `rm -rf web/.next` then relaunch | `Remove-Item -Recurse -Force web\.next` then relaunch |

- The app is deliberately plain — upgrading it live with the `frontend-design` skill is a demo moment, not a bug.
- Production check: `npm run web:build` builds the app the same way `npm test` does.

## Offline path — when npm is blocked

The web app is a nice-to-have: it renders outputs and draws the live flow on a second screen.
The lab itself is markdown, and none of it needs Node.

What still works, with nothing installed:

- **Every skill and every agent.** They are markdown files read by the assistant, in
  `.claude/skills/` and `.claude/agents/`.
- **`/kick-off`, `/agent-builder`, `/quick-start`** as slash commands, from `.github/prompts/`.
- **All 3 projects.** MERIDIAN, HORIZON and VEGA are documents and source files. Reading and
  analysing them is the whole exercise.
- **Every output**, written as Markdown into a project's `output/` folder and opened in the
  editor.

What is lost, and the substitute:

| Lost | Substitute |
| --- | --- |
| `http://localhost:3000/flow` on the projector | the ASCII flow that `agent-builder` already redraws in the chat after every answer |
| the rendered `.pptx` from `npm run build:deck` | a single self-contained HTML deck, same palette, prints to PDF from any browser (see `euronext-brand`) |
| `npm test` | walk the checklist by hand: the folder opens as a workspace, the assistant can write a file, the 3 slash commands resolve |

Say which path you are on, once, out loud. A participant who thinks the app is broken behaves
very differently from one who knows it was never going to run.
