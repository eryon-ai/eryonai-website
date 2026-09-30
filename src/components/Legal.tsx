import { PageHero } from "./ui";
import { site } from "@/lib/site";
import { lp, type Lang } from "@/i18n/config";
import { fmtDate, getMessages } from "@/i18n";

// TODO(before launch): have these legal texts reviewed by counsel.
const UPDATED = "2026-09-23";

/** Turns the company email in plain text into a mailto link. */
function linkEmail(text: string) {
  const parts = text.split(site.email);
  return parts.flatMap((p, i) => (i ? [<a key={i} href={`mailto:${site.email}`} className="text-blue underline">{site.email}</a>, p] : [p]));
}

export default function Legal({ kind, path, lang }: { kind: "privacy" | "terms" | "cookie"; path: string; lang: Lang }) {
  const m = getMessages(lang);
  const doc = m.legal[kind];
  return (
    <>
      <PageHero
        crumbs={[{ name: doc.title, path: lp(path, lang) }]}
        home={{ name: m.ui.common.home, path: lp("/", lang) }}
        eyebrow={`${m.ui.common.lastUpdated} ${fmtDate(UPDATED, lang)}`}
        title={doc.title}
        intro={<p>{doc.intro}</p>}
      />
      <div className="container-x py-16 md:py-20">
        <div className="prose-e max-w-3xl">
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((x, i) => <p key={i}>{linkEmail(x)}</p>)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

/** Plain legal-style document (used by English-only pages such as Accessibility). */
export function LegalDoc({ crumb, path, title, updated, intro, sections }: {
  crumb: string; path: string; title: string; updated: string; intro: string;
  sections: { h: string; p: (string | React.ReactNode)[] }[];
}) {
  return (
    <>
      <PageHero crumbs={[{ name: crumb, path }]} eyebrow={`Last updated ${fmtDate(updated)}`} title={title} intro={<p>{intro}</p>} />
      <div className="container-x py-16 md:py-20">
        <div className="prose-e max-w-3xl">
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((x, i) => <p key={i}>{x}</p>)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
