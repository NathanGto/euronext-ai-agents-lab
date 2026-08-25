export interface Rate {
  pair: string;
  mid: number;
  /** Percent change since the previous close. */
  changePct: number;
  /** ISO timestamp of the last update. */
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
}
