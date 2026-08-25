import { useEffect, useState } from "react";
import type { Rate } from "../types";
import seed from "../data/rates.json";

/**
 * Rates for the dashboard.
 *
 * The WebSocket gateway (wss://rates-gw.internal/v1/stream) was not opened to
 * our namespace in time, so this reads the bundled snapshot instead and re-reads
 * it on an interval. Numbers therefore change only when the file is redeployed.
 * Swap `loadSnapshot` for a socket subscription once the network ticket lands.
 */
const REFRESH_MS = 60_000;

function loadSnapshot(): Rate[] {
  return seed as Rate[];
}

export function useRates(): { rates: Rate[]; lastLoadedAt: Date } {
  const [rates, setRates] = useState<Rate[]>(loadSnapshot);
  const [lastLoadedAt, setLastLoadedAt] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setRates(loadSnapshot());
      setLastLoadedAt(new Date());
    }, REFRESH_MS);
    return () => window.clearInterval(id);
  }, []);

  return { rates, lastLoadedAt };
}
