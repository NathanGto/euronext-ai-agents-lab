---
name: euronext-brand
description: Use for anything that leaves this folder and carries the Euronext name — a committee deck, a brief, a status note, a web page. Covers the palette, the layout rules and the editorial voice.
---

# Euronext brand

Everything a participant produces here can end up in front of the people who sign the
specification. This skill is what stops it looking like a default template.

## Palette (Euronext Brand Colours v1.0)

| Role | Name | Hex |
| --- | --- | --- |
| Primary | Teal Green | `008D7F` |
| Deep background | Dark Teal Green | `003934` |
| Darkest ground | Tiber Green | `07272D` |
| Secondary text on dark | Dark Grey | `C1C9CB` |
| Surface on dark | Light Grey | `E6E9EA` |

Rules: **one accent, and it is Teal Green.** Backgrounds are Tiber Green or white, never a
gradient. Dark Grey carries secondary text, never body text on white. No red, no amber, except
where a status genuinely means blocked, and then say so in words as well as colour.

## Slides (16:9, 13.333 × 7.5 inches)

- One idea per slide. A title that states the idea, not the topic.
- Maximum 5 bullets, maximum 2 lines each.
- Every number keeps its source next to it, in Dark Grey, smaller.
- Never a full-sentence paragraph on a slide. If it will be said out loud, it belongs in the
  notes.

## Documents

- Lead with the answer. The committee reads the first 3 lines and skims the rest.
- Cite the file behind every claim, inline, in plain text: `(docs/status-2026-04-28.md)`.
- Where the sources disagree, say so in its own line rather than picking a winner silently.
- Write "Not specified" rather than filling a gap with something plausible.

## Voice

Factual, short, no adjectives doing the work of evidence. Say "3 of the 8 stories are still open
in Jira" and never "significant progress has been made". A reader should be able to check every
sentence against a file.

No em dashes. Commas or colons.

## If python-pptx or a renderer is not available

On a managed laptop, Python may be missing or pip may be blocked by the corporate proxy. Do not
stop, and do not ask anyone to install anything. Two fallbacks, in order:

1. `npm run build:deck` in this repo, which renders a `.pptx` through pptxgenjs and needs no
   Python at all.
2. A single self-contained HTML file: the same palette, the same layout rules, one `<section>`
   per slide sized to 16:9, all CSS inline, no external font or script. It opens in any browser
   and prints to PDF from there.

Say clearly which of the two you produced.
