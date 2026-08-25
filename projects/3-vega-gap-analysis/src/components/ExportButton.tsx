import type { Rate } from "../types";

/**
 * Added in sprint 10 after a Treasury request in a corridor. Not in the
 * specification, never went through the PO. Ships enabled for everyone.
 */
export function ExportButton({ rates }: { rates: Rate[] }) {
  const download = () => {
    const header = "pair,mid,change_pct,updated_at\n";
    const body = rates.map((r) => `${r.pair},${r.mid},${r.changePct},${r.updatedAt}`).join("\n");
    const url = URL.createObjectURL(new Blob([header + body], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "vega-rates.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" onClick={download}>
      Export to CSV
    </button>
  );
}
