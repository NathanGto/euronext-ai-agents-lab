import { useState } from "react";
import { useRates } from "./hooks/useRates";
import { RatesTable } from "./components/RatesTable";
import { PairFilter } from "./components/PairFilter";
import { ExportButton } from "./components/ExportButton";
import { currentUser } from "./lib/session";

export default function App() {
  const { rates, lastLoadedAt } = useRates();
  const [filter, setFilter] = useState("");

  const visible = rates.filter((r) => r.pair.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main>
      <header>
        <h1>VEGA — FX Rates</h1>
        <span>Signed in as {currentUser.name}</span>
      </header>

      <div className="toolbar">
        <PairFilter value={filter} onChange={setFilter} />
        <ExportButton rates={visible} />
      </div>

      <RatesTable rates={visible} />

      <footer>Snapshot loaded at {lastLoadedAt.toLocaleTimeString()}</footer>
    </main>
  );
}
