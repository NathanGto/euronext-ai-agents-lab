# Functional Specification — Project VEGA

**Version:** 2.1
**Approved:** 2026-04-02
**Owner:** Claire Fontaine (Product Owner)

## 1. Purpose

Give every desk a single, trustworthy view of FX rates, so that Treasury stops
circulating a spreadsheet by email and desks stop working from stale numbers.

## 2. Users

Internal Euronext staff only. Roughly 400 named users across Trading, Treasury,
Risk and Finance.

## 3. Requirements

### FR-1 — Account creation and sign-in

Users create an account with their corporate email address and sign in through
the corporate identity provider (Okta, SSO). Sessions last 8 hours, then expire.
No part of the application is reachable without signing in.

### FR-2 — Rate dashboard

The dashboard lists **12 currency pairs**: EUR/USD, EUR/GBP, EUR/CHF, EUR/JPY,
EUR/SEK, EUR/NOK, EUR/DKK, EUR/PLN, GBP/USD, USD/JPY, USD/CHF, AUD/USD.

Each row shows the pair, the current mid rate, the change since the previous
close in percent, and the timestamp of the last update.

### FR-3 — Real-time updates

Rates update **in real time**, pushed from the internal rates gateway. A rate
displayed on screen is never more than one second behind the gateway. The user
never refreshes the page to get a current number.

### FR-4 — Rate alerts

A user can set a threshold on any pair and is notified when it is crossed, both
in the application and by email.

### FR-5 — Favourites

A user can mark pairs as favourites. Favourites sort to the top of the dashboard
and persist across sessions, per user.

### FR-6 — Compliance audit trail

Every rate view is written to the audit log with the user, the pair and the
timestamp. Retention is 7 years. This is a regulatory requirement, not a
nice-to-have.

## 4. Out of scope

- Trading or order entry of any kind
- Historical charting beyond the previous close
- Any export of rate data outside the application
