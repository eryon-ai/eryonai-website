"use client";

import { useEffect, useState } from "react";

type Group = { key: string; label: string; options: { value: string; label: string }[] };
type Item = { id: string; facets: Record<string, string[]>; node: React.ReactNode };

/** Filters server-rendered cards. One group renders as chips, several as selects. State mirrors to the URL. */
const EN = { all: "All", result: "result", results: "results", clearFilters: "Clear filters", noMatchTitle: "Nothing matches these filters yet.", noMatchText: "Try removing a filter — or tell us about your project and we'll share relevant experience directly.", filterBy: "Filter by" };

export default function FilterGrid({ groups, items, gridClass, t = EN }: { groups: Group[]; items: Item[]; gridClass: string; t?: typeof EN }) {
  const [sel, setSel] = useState<Record<string, string>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const init: Record<string, string> = {};
    for (const g of groups) if (q.get(g.key)) init[g.key] = q.get(g.key)!;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from URL after hydration
    if (Object.keys(init).length) setSel(init);
  }, [groups]);

  const update = (key: string, value: string) => {
    const next = { ...sel, [key]: value };
    if (!value) delete next[key];
    setSel(next);
    const q = new URLSearchParams(next);
    window.history.replaceState(null, "", q.size ? `?${q}` : window.location.pathname);
  };

  const visible = items.filter((it) => Object.entries(sel).every(([k, v]) => it.facets[k]?.includes(v)));

  return (
    <>
      {groups.length === 1 ? (
        <div role="group" aria-label={`${t.filterBy} ${groups[0].label}`} className="flex flex-wrap gap-2">
          {[{ value: "", label: t.all }, ...groups[0].options].map((o) => {
            const on = (sel[groups[0].key] ?? "") === o.value;
            return (
              <button
                key={o.value || "all"}
                type="button"
                aria-pressed={on}
                onClick={() => update(groups[0].key, o.value)}
                className={`min-h-10 rounded-[3px] border px-4 text-sm font-medium transition-colors ${on ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-ink"}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <label key={g.key} className="block">
              <span className="t-meta text-muted">{g.label}</span>
              <select
                value={sel[g.key] ?? ""}
                onChange={(e) => update(g.key, e.target.value)}
                className="mt-2 block h-12 w-full rounded-[3px] border border-line-strong bg-white px-3 text-ink"
              >
                <option value="">{t.all}</option>
                {g.options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      )}

      <p className="t-meta mt-8 text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? t.result : t.results}
        {Object.keys(sel).length > 0 && (
          <button type="button" onClick={() => { setSel({}); window.history.replaceState(null, "", window.location.pathname); }} className="ms-4 text-blue underline underline-offset-4">
            {t.clearFilters}
          </button>
        )}
      </p>

      {visible.length ? (
        <ul className={gridClass}>
          {visible.map((it) => <li key={it.id}>{it.node}</li>)}
        </ul>
      ) : (
        <div className="mt-10 border border-dashed border-line-strong p-10 text-center">
          <p className="font-display text-xl font-semibold text-ink">{t.noMatchTitle}</p>
          <p className="mt-2 text-muted">{t.noMatchText}</p>
        </div>
      )}
    </>
  );
}
