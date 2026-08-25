import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Euronext AI Agents lab",
  description: "Front-end for the Euronext AI Agents lab. Renders each project's output.",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/flow", label: "Agent Flow" },
  { href: "/meridian", label: "MERIDIAN" },
  { href: "/horizon", label: "HORIZON" },
  { href: "/vega", label: "VEGA" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="brand-plate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/euronext-logo.png" alt="Euronext" className="brand-logo" />
            </span>
            <span className="brand-text">
              AI Agents <span className="brand-sub">· lab</span>
            </span>
          </Link>
          <nav className="site-nav">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          IQ Project × Euronext · upgrade this page live with the <code>showcase</code> skill
        </footer>
      </body>
    </html>
  );
}
