import { readLatestMarkdown, readRuns } from "@/lib/readOutput";
import { renderMarkdown } from "@/lib/markdown";
import { Runs } from "@/components/Runs";

export const dynamic = "force-dynamic";

const PROJECT = "2-horizon-committee-brief";

export default async function HorizonPage() {
  const latest = await readLatestMarkdown(PROJECT);
  const runs = await readRuns(PROJECT);
  return (
    <>
      <div className="page-head">
        <span className="tag">HORIZON</span>
        <h1>Investor portal redesign</h1>
        <div className="source">The committee brief your agent built by cross-reading the minutes, the tickets and the git activity.</div>
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
            <code>projects/2-horizon-committee-brief/output/</code>. This page reads that folder at every
            refresh, so the moment a file appears it shows up here.
          </p>
        </div>
      )}

      <Runs runs={runs} />
    </>
  );
}
