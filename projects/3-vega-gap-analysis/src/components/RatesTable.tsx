import type { Rate } from "../types";

export function RatesTable({ rates }: { rates: Rate[] }) {
  return (
    <table className="rates">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Mid</th>
          <th>Change</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((r) => (
          <tr key={r.pair}>
            <td>{r.pair}</td>
            <td>{r.mid.toFixed(4)}</td>
            <td className={r.changePct >= 0 ? "up" : "down"}>{r.changePct.toFixed(2)}%</td>
            <td>{new Date(r.updatedAt).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
