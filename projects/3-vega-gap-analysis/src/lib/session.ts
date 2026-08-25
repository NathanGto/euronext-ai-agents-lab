import type { User } from "../types";

/**
 * Current user.
 *
 * TODO: replace with the Okta OIDC flow. The identity team never gave us the
 * client id for the non-prod tenant, so for now the app runs as a fixed demo
 * user and every screen is reachable without signing in. Raised in sprint 7,
 * still open.
 */
export const currentUser: User = {
  id: "u-001",
  name: "Demo User",
};

/** Kept so the header can render something. Always true today. */
export function isSignedIn(): boolean {
  return true;
}
