# Euronext AI Agents lab

Starter kit for the hands-on part of the Euronext AI training. You leave with **your own agent**,
built on a job you actually do, in a folder you keep.

Works in **GitHub Copilot in VS Code** and in **Claude Code**, from the same files.

---

## Start here

1. **Download the ZIP** from GitHub (green Code button → Download ZIP) and unzip it somewhere you
   will find again.
2. **Open the folder in VS Code**: File > Open Folder, and pick the folder itself, not a file
   inside it.
3. **Open the chat** (`Ctrl+Alt+I` on Windows, `Control+Command+I` on Mac) and **set it to Agent
   mode**. Ask mode is read-only and cannot write a file.
4. Type **`/kick-off`**.

That last command checks your machine, sets things up if it is allowed to, and tells you in one
line whether you are ready. **It never asks you to install anything by yourself.**

## If npm is blocked on your machine

That is expected on a managed laptop, and the lab still works. `/kick-off` detects it and
switches to the offline path: every skill, every agent, all 3 projects and every output are
markdown, and none of them need Node. What you lose is the local web app and the projected flow
page. The substitutes are listed in `.claude/skills/kick-off/SKILL.md`.

## What is in here

```
.claude/skills/     the recipes: kick-off, agent-builder, quick-start, self-improve,
                    showcase, euronext-brand, deck-builder, and more
.claude/agents/     2 ready-made agents you can adopt instead of starting blank
.github/prompts/    the same skills, callable as /kick-off, /agent-builder, /quick-start
projects/           3 fictional projects, written for BA / PO / PM work
memory/             the agents' experience ledger, empty on purpose
web/                a small local app that renders what your agent produced
docs/               the good practices behind the lab
```

## The 3 projects

| Project | What it is | The job |
| --- | --- | --- |
| **MERIDIAN** | A market data migration, documented across 7 files | Answer real questions without reading all of it |
| **HORIZON** | An investor portal redesign | Build a committee brief, and catch where the sources disagree |
| **VEGA** | An FX rates viewer, handed over for sign-off | Say what actually shipped against what was approved |

All 3 are invented for training. Keep them that way: never paste real Euronext content into a
prompt during the session.

## The 3 commands

| Command | What it does |
| --- | --- |
| `/kick-off` | Checks and sets up your machine, then tells you the one thing to fix |
| `/agent-builder` | Interviews you, then writes your agent for you |
| `/quick-start` | No idea? 3 questions, and everything is produced for you |

If a slash command does not appear when you type `/`, you are not blocked: open the matching file
in `.github/prompts/`, select everything, copy, paste it into the chat, and delete the few lines
at the top between the two `---` markers. Same result.

## Verify (only if npm ran)

```bash
npm test
```

Runtime, dependencies, skills, agents, projects, deck rendering, the web app build, and an
end-to-end boot of the dev server. Pure Node, offline, same command on macOS, Linux and Windows.

---

Built by [IQ Project](https://iq-project.ai) for Euronext.
