import { readLatestMarkdown, readRuns } from "@/lib/readOutput";
import { renderMarkdown } from "@/lib/markdown";
import { Runs } from "@/components/Runs";

export const dynamic = "force-dynamic";

const PROJECT = "3-vega-gap-analysis";

export default async function VegaPage() {
  const latest = await readLatestMarkdown(PROJECT);
  const runs = await readRuns(PROJECT);
  return (
    <>
      <div className="page-head">
        <span className="tag">VEGA</span>
        <h1>Internal FX rates viewer</h1>
        <div className="source">The gap analysis between the approved specification and what the squad actually delivered.</div>
      </div>

      {latest ? (
        <article className="doc">
          <div className="doc-meta">{latest.name}</div>
          {renderMarkdown(latest.content)}
        </article>
      ) : (
        <div className="empty">
          <h2>Nothing here yet</h2>
          <p>
            Run an agent on this project and its output lands in{" "}
            <code>projects/3-vega-gap-analysis/output/</code>. This page reads that folder at every
            refresh, so the moment a file appears it shows up here.
          </p>
        </div>
      )}

      <Runs runs={runs} />
    </>
  );
}
