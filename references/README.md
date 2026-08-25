# References — vendored, for inspiration

These are third-party materials **copied into the repo on purpose**, so nothing has to be
downloaded from a public source on lab day: on a managed laptop, that download is likely to be
blocked anyway. They are *reference reading*, not installed skills. Read them, steal the good
parts, then write your own.

| File | What it is | Provenance |
| --- | --- | --- |
| [karpathy-CLAUDE.md](karpathy-CLAUDE.md) | A short, high-signal rulebook to steal from when you write the one you hand an agent | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) |

## A reflex worth voicing during the lab — blast radius

An external skill or MCP server runs **with the agent's own permissions**: it can read, write and
send whatever the agent can. Treat anything you install as attack surface, **read it before you
install it**, and prefer a reviewed copy committed in the repo over code pulled live. That is
exactly why this reference is committed here rather than fetched at runtime.
