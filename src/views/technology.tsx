import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { techGroups } from "@/lib/tech";
import { getProject } from "@/lib/work";
import { pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lines } from "@/i18n";

export const technologyMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.technology, path: "/technology", lang });

export default function TechnologyView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.technology;
  const L = (href: string) => lp(href, lang);
  const groups = techGroups.map((g) => ({ ...g, ...(m.data.techGroups[g.key] ?? {}) }));
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/technology") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={lines(t.title)}
        intro={t.intro}
      >
        <nav aria-label={t.categories} className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.key} href={`#${g.key}`} className="inline-flex min-h-10 items-center rounded-[3px] border border-line bg-white px-4 text-sm font-medium text-ink hover:border-ink">
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x py-8">
        {groups.map((g) => (
          <section key={g.key} id={g.key} aria-labelledby={`${g.key}-h`} className="grid scroll-mt-32 gap-8 border-b border-line py-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id={`${g.key}-h`} className="t-h3">{g.title}</h2>
              <p className="mt-3 text-muted">{g.text}</p>
            </div>
            <ul className="grid gap-px self-start overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {g.items.map((x) => (
                <li key={x.name} className="flex min-h-28 flex-col bg-paper p-5">
                  <span className="font-display text-lg font-semibold text-ink">{x.name}</span>
                  <span className="t-meta mt-1 text-[0.72rem] text-muted">{m.data.techRoles[x.role] ?? x.role}</span>
                  {x.projects?.length ? (
                    <span className="mt-auto pt-4 text-sm text-muted">
                      {t.usedIn}{" "}
                      {x.projects.slice(0, 2).map((slug, i) => {
                        const p = getProject(slug);
                        return p ? (
                          <span key={slug}>{i > 0 && ", "}<Link href={`/work/${slug}`} className="text-blue hover:underline">{p.title}</Link></span>
                        ) : null;
                      })}
                      {x.projects.length > 2 && ` +${x.projects.length - 2}`}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBand title={lines(t.cta.title)} text={t.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
    </>
  );
}
