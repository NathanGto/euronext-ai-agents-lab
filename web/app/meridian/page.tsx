import { readLatestMarkdown, readRuns } from "@/lib/readOutput";
import { renderMarkdown } from "@/lib/markdown";
import { Runs } from "@/components/Runs";

export const dynamic = "force-dynamic";

const PROJECT = "1-meridian-project-wiki";

export default async function MeridianPage() {
  const latest = await readLatestMarkdown(PROJECT);
  const runs = await readRuns(PROJECT);
  return (
    <>
      <div className="page-head">
        <span className="tag">MERIDIAN</span>
        <h1>Market data platform migration</h1>
        <div className="source">The project wiki your agent read, and what it wrote back. Every claim should name the file it came from.</div>
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
            <code>projects/1-meridian-project-wiki/output/</code>. This page reads that folder at every
            refresh, so the moment a file appears it shows up here.
          </p>
        </div>
      )}

      <Runs runs={runs} />
    </>
  );
}
