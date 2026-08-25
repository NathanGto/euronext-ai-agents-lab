export function PairFilter({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="search"
      placeholder="Filter pairs"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
