#!/usr/bin/env node
// Euronext AI Agents lab — self-test.  Run with:  npm test
//
// Exit code 0  → your environment is ready for the lab.
// Exit code 1  → something needs fixing; the message above the summary tells you what.
//
// Pure Node, no dependencies, no network. Safe to run on a locked-down machine.

import { existsSync, readFileSync } from "node:fs";
import { execFileSync, execSync, spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rel = (p) => path.join(root, p);

let failures = 0;
let warnings = 0;
const ok = (m) => console.log(`  \x1b[32m✓\x1b[0m ${m}`);
const fail = (m) => {
  console.log(`  \x1b[31m✗\x1b[0m ${m}`);
  failures++;
};
const warn = (m) => {
  console.log(`  \x1b[33m!\x1b[0m ${m}`);
  warnings++;
};
const section = (t) => console.log(`\n${t}`);

function need(relPath, label) {
  if (existsSync(rel(relPath))) ok(label ?? relPath);
  else fail(`${label ?? relPath} — missing: ${relPath}`);
}

console.log("Euronext AI Agents lab — self-test\n" + "─".repeat(48));

// ── Runtime ───────────────────────────────────────────────────────────────
section("Runtime");
const nodeMajor = Number(process.versions.node.split(".")[0]);
if (nodeMajor >= 20) ok(`Node ${process.version}`);
else fail(`Node ${process.version} — the lab needs Node 20 or newer`);

// ── Root dependencies ─────────────────────────────────────────────────────
section("Dependencies (root) — from `npm install`");
for (const dep of ["pdfjs-dist", "pptxgenjs", "tsx", "typescript"]) {
  if (existsSync(rel(`node_modules/${dep}`))) ok(dep);
  else fail(`${dep} not installed — run \`npm install\` at the repo root`);
}

// ── Skills ────────────────────────────────────────────────────────────────
// Skills live in .claude/skills/. VS Code Copilot reads that folder as a
// project skill directory, and so does Claude Code, which is why one copy
// serves both tools.
section("Skills (.claude/skills) — all bundled, no download");
for (const s of [
  "kick-off",
  "agent-builder",
  "quick-start",
  "self-improve",
  "showcase",
  "euronext-brand",
  "deck-builder",
  "pdf-reading",
  "frontend-design",
  "brainstorming",
  "teach",
  "test-repo",
  "debug",
]) {
  need(`.claude/skills/${s}/SKILL.md`, `${s}`);
}

// ── Slash commands (Copilot) ──────────────────────────────────────────────
// Copilot resolves slash commands from .github/prompts/*.prompt.md only, so
// the skills a participant must be able to CALL by name are wrapped there.
section("Slash commands (.github/prompts) — GitHub Copilot");
for (const p of ["kick-off", "agent-builder", "quick-start", "euronext-deck"]) {
  need(`.github/prompts/${p}.prompt.md`, `/${p}`);
}

// ── Agents & memory ───────────────────────────────────────────────────────
section("Agents (.claude/agents) & long-term memory");
for (const a of ["committee-brief", "gap-reviewer"]) {
  need(`.claude/agents/${a}.md`, `agent: ${a}`);
}
need("memory/MEMORY.md", "long-term memory index");

// ── Projects & data ───────────────────────────────────────────────────────
section("Projects & data");
for (const p of [
  "1-meridian-project-wiki",
  "2-horizon-committee-brief",
  "3-vega-gap-analysis",
]) {
  need(`projects/${p}/README.md`, `projects/${p}`);
}
need("projects/1-meridian-project-wiki/docs/scoping-note.md", "MERIDIAN wiki documents");
need("projects/2-horizon-committee-brief/docs/weekly-minutes.md", "HORIZON sources");
need("projects/3-vega-gap-analysis/initial-specification/functional-spec.md", "VEGA specification");
need("projects/3-vega-gap-analysis/src/App.tsx", "VEGA delivered code");

// ── References ────────────────────────────────────────────────────────────
section("References (vendored)");
need("references/karpathy-CLAUDE.md", "Karpathy CLAUDE.md");

// ── Functional smoke (offline) ────────────────────────────────────────────
section("Functional smoke (offline)");
// Deck rendering dependency loads and renders (pptxgenjs), in memory, no disk.
try {
  const Pptx = (await import("pptxgenjs")).default;
  const deck = new Pptx();
  deck.addSlide().addText("Euronext AI Agents lab", { x: 1, y: 1, color: "008D7F" });
  const data = await deck.write({ outputType: "base64" });
  if (typeof data === "string" && data.length > 0) ok("deck rendering works (pptxgenjs)");
  else fail("pptxgenjs produced no output");
} catch (e) {
  fail(`deck rendering failed — ${String(e.message ?? e).split("\n")[0]}`);
}
// The Euronext palette is the one thing every client-facing output shares, so a
// typo in it is worth catching here rather than on a projector.
try {
  const brand = readFileSync(rel(".claude/skills/euronext-brand/SKILL.md"), "utf8");
  const missing = ["008D7F", "003934", "07272D"].filter((hex) => !brand.includes(hex));
  if (missing.length === 0) ok("Euronext palette present in euronext-brand");
  else fail(`euronext-brand is missing colours: ${missing.join(", ")}`);
} catch {
  fail("could not read .claude/skills/euronext-brand/SKILL.md");
}

// ── Front-end (web/) ──────────────────────────────────────────────────────
section("Front-end (web/)");
need("web/package.json", "web app present");
need("web/public/euronext-logo.png", "Euronext logo");
try {
  const layout = readFileSync(rel("web/app/layout.tsx"), "utf8");
  if (layout.includes("AI Agents")) ok('lab title wired ("Euronext AI Agents")');
  else fail("lab title not found in web/app/layout.tsx");
} catch {
  fail("web/app/layout.tsx missing");
}
if (existsSync(rel("web/node_modules"))) {
  process.stdout.write("  … building the web app (~20s) … ");
  try {
    // execSync runs through a shell, which resolves `npm` → `npm.cmd` on Windows.
    // Build into .next-verify so a dev server already running on .next is never
    // corrupted by the self-test.
    execSync("npm run build", {
      cwd: rel("web"),
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NEXT_DIST_DIR: ".next-verify" },
    });
    console.log("\r  \x1b[32m✓\x1b[0m web app builds cleanly            ");
  } catch (e) {
    console.log("\r  \x1b[31m✗\x1b[0m web app build failed              ");
    const out = (String(e.stdout ?? "") + String(e.stderr ?? "")).trim();
    const detail = out || String(e.message ?? e);
    console.log("    " + detail.split("\n").slice(-6).join("\n    "));
    failures++;
  }

  // End to end: boot the dev server and check the welcome page, the exact flow a
  // participant runs on lab day (`npm run web:dev` → http://localhost:3000).
  process.stdout.write("  … booting the dev server — welcome page check (~15s) … ");
  const PORT = 3100; // dedicated port, so a dev server on 3000 does not interfere
  const server = spawn(`npm run dev -- --port ${PORT}`, {
    cwd: rel("web"),
    stdio: "ignore",
    shell: true,
    detached: process.platform !== "win32",
    env: { ...process.env, NEXT_DIST_DIR: ".next-verify" },
  });
  const stopServer = () => {
    try {
      if (process.platform === "win32") {
        execFileSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
      } else {
        process.kill(-server.pid, "SIGTERM");
      }
    } catch {}
  };
  try {
    let html = "";
    const deadline = Date.now() + 90_000;
    for (;;) {
      try {
        const res = await fetch(`http://localhost:${PORT}/`);
        if (res.ok) {
          html = await res.text();
          break;
        }
      } catch {}
      if (Date.now() > deadline) throw new Error(`dev server did not answer on port ${PORT} within 90s`);
      await new Promise((r) => setTimeout(r, 1000));
    }
    console.log(`\r  \x1b[32m✓\x1b[0m dev server boots and serves the home page (port ${PORT})   `);
    if (html.includes("you build your own AI agent")) ok("participants' welcome message is on the page");
    else fail("welcome message not found on the home page — check web/app/page.tsx");
    const logo = await fetch(`http://localhost:${PORT}/euronext-logo.png`);
    if (logo.ok) ok("Euronext logo is served");
    else fail(`Euronext logo not served (HTTP ${logo.status}) — check web/public/euronext-logo.png`);
    const flow = await fetch(`http://localhost:${PORT}/flow`);
    if (flow.ok) ok("live Agent Flow page responds");
    else fail(`Agent Flow page failed (HTTP ${flow.status}) — check web/app/flow`);
  } catch (e) {
    console.log("\r  \x1b[31m✗\x1b[0m dev server / welcome page check failed              ");
    console.log("    " + String(e.message ?? e).split("\n")[0]);
    failures++;
  } finally {
    stopServer();
  }
} else {
  warn("web deps not installed — run `npm --prefix web install`");
}

// ── Summary ───────────────────────────────────────────────────────────────
console.log("\n" + "─".repeat(48));
if (failures === 0) {
  console.log(
    `\x1b[32mPASS\x1b[0m — your environment is ready` +
      (warnings ? ` (${warnings} warning(s) above)` : "") +
      `.\nNext: run \`npm run web:dev\` and open http://localhost:3000`,
  );
  process.exit(0);
} else {
  console.log(
    `\x1b[31mFAIL\x1b[0m — ${failures} problem(s) above. Fix them and re-run \`npm test\`.`,
  );
  process.exit(1);
}
