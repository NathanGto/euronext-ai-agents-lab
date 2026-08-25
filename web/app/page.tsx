import Link from "next/link";

const STEPS = [
  {
    n: "01",
    title: "Design your agent",
    desc: (
      <>
        Type <em>/agent-builder</em> in the chat. It interviews you: you answer questions about
        your job, it makes every technical decision.
      </>
    ),
  },
  {
    n: "02",
    title: "Create it",
    desc: (
      <>
        Your agent is born as a plain markdown file, its rulebook, the way a new joiner gets an
        onboarding pack.
      </>
    ),
  },
  {
    n: "03",
    title: "Run and iterate",
    desc: (
      <>
        Put it to work on a real task. After each run it asks you 2 questions and{" "}
        <strong>records what it learns</strong>, so the next run starts smarter.
      </>
    ),
  },
  {
    n: "04",
    title: "Showcase",
    desc: (
      <>
        Its output becomes a polished, Euronext-branded page, right here, for the final demo.
      </>
    ),
  },
];

const CARDS = [
  {
    href: "/meridian",
    tag: "MERIDIAN",
    title: "A project you just joined",
    desc: "Market data migration. The documentation is spread over 7 files and your first committee is coming.",
  },
  {
    href: "/horizon",
    tag: "HORIZON",
    title: "A committee to prepare",
    desc: "Investor portal redesign. The minutes, the tickets and the git activity do not tell the same story.",
  },
  {
    href: "/vega",
    tag: "VEGA",
    title: "A build to sign off",
    desc: "FX rates viewer. The squad says read the code as the source of truth, so somebody has to say what shipped.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-logo-plate">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/euronext-logo.png" alt="Euronext" className="hero-logo" />
        </span>
        <p className="kicker">Euronext AI Agents lab · Live session</p>
        <h1>
          Welcome. Today, <span className="hl">you build your own AI agent</span>
        </h1>
        <p className="lede">
          An agent is like a new joiner: you give it a rulebook, access to things, and
          experience, then it works for you. By the end of the session yours will have produced
          something real, on a job you actually do, and this page is where its work shows up.
        </p>
      </section>

      <section className="steps">
        <h2 className="section-title">What you will do</h2>
        <ol className="step-list">
          {STEPS.map((s) => (
            <li key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="quickstart">
        <span className="quickstart-tag">No idea? Perfect, start here</span>
        <h2>The zero-effort start</h2>
        <p>
          Type <span className="say">/quick-start</span> in the chat. It asks you three simple
          questions: which job eats more of your week, which of the 3 projects to try it on, and
          what the slides at the end should say. <strong>Then it produces everything for you</strong>:
          the analysis, the contradictions it found between sources, and a branded deck. No
          technical steps, ever. Watch the cards below fill up.
        </p>
      </section>

      <section className="card-grid-wrap">
        <h2 className="section-title">The 3 projects, and your agents&apos; work on them</h2>
        <div className="card-grid">
          {CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="card">
              <span className="tag">{c.tag}</span>
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
