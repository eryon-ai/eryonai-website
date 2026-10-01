"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

export type Doc = { href: string; title: string; type: string; text: string };

export default function SearchClient({ docs }: { docs: Doc[] }) {
  const [q, setQ] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from ?q= after hydration
    setQ(new URLSearchParams(window.location.search).get("q") ?? "");
  }, []);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return docs
      .map((d) => {
        const t = d.title.toLowerCase(), b = d.text.toLowerCase();
        let score = 0;
        for (const term of terms) {
          if (t.includes(term)) score += 5;
          else if (b.includes(term)) score += 1;
          else return null; // every term must match somewhere
        }
        return { d, score };
      })
      .filter((r): r is { d: Doc; score: number } => !!r)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);
  }, [q, docs]);

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
        <label htmlFor="site-search" className="sr-only">Search the site</label>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="site-search"
          type="search"
          value={q}
          autoFocus
          onChange={(e) => {
            setQ(e.target.value);
            const u = e.target.value ? `?q=${encodeURIComponent(e.target.value)}` : window.location.pathname;
            window.history.replaceState(null, "", u);
          }}
          placeholder="Search services, industries, work and insights"
          className="h-16 w-full rounded-[3px] border border-line-strong bg-white pl-12 pr-4 text-lg text-ink focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25"
        />
      </form>
      <p className="t-meta mt-6 text-muted" aria-live="polite">
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”` : "Try “CRM”, “Spring Boot”, “healthcare” or “migration”"}
      </p>
      <ul className="mt-6 border-t border-line">
        {results.map(({ d }) => (
          <li key={d.href} className="border-b border-line">
            <Link href={d.href} className="group block py-6">
              <span className="t-meta text-steel">{d.type}</span>
              <span className="mt-1 block font-display text-xl font-semibold text-ink group-hover:text-blue">{d.title}</span>
              <span className="mt-1 block text-muted">{d.text.slice(0, 180)}{d.text.length > 180 ? "…" : ""}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
