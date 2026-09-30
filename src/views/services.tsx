import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Chips, CtaBand, PageHero, Section, SectionHeader, JsonLd } from "@/components/ui";
import { services } from "@/lib/services";
import { industriesBy } from "@/lib/industries";
import { projectsBy } from "@/lib/work";
import { pageMeta, abs } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lIndustry, lProject, lService, lines } from "@/i18n";

export const servicesMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.services, path: "/services", lang });

export default function ServicesView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.services;
  const L = (href: string) => lp(href, lang);
  const list = services.map((s) => lService(s, lang));
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/services") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={lines(t.title)}
        intro={lang === "en" ? t.intro : `${t.intro} ${t.detailsInEnglish}`}
      >
        <nav aria-label={t.index} className="grid gap-x-8 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="group flex min-h-11 items-center gap-3 border-b border-line py-2 text-[0.95rem] text-ink hover:text-blue">
              <span className="font-mono text-xs text-muted">{s.n}</span>{s.nav}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x">
        {list.map((s) => {
          const inds = industriesBy(s.industries).map((i) => lIndustry(i, lang));
          const work = projectsBy(s.work).map((p) => lProject(p, lang));
          return (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-32 gap-10 border-b border-line py-20 lg:grid-cols-12 lg:gap-14">
              <header className="lg:col-span-4">
                <div className="lg:sticky lg:top-36">
                  <p className="font-display text-6xl font-bold text-blue/90 md:text-7xl">{s.n}</p>
                  <h2 className="t-h2 mt-6">
                    <Link href={`/services/${s.slug}`} className="link-u">{s.title}</Link>
                  </h2>
                  <p className="t-lead mt-4 text-steel">{s.value}</p>
                  <ButtonLink href={`/services/${s.slug}`} variant="secondary" className="mt-8">{t.explore} {s.nav}</ButtonLink>
                </div>
              </header>
              <div className="reveal lg:col-span-8">
                <p className="t-lead text-body">{s.summary}</p>
                <div className="mt-10 grid gap-10 md:grid-cols-3">
                  {[
                    [t.build, s.offerings.map((o) => o.title)],
                    [t.deliverables, s.deliverables],
                    [t.useCases, s.useCases.map((u) => u.title)],
                  ].map(([h, list]) => (
                    <div key={h as string}>
                      <h3 className="t-meta border-b border-ink pb-3 text-ink">{h as string}</h3>
                      <ul className="mt-4 space-y-2.5 text-[0.95rem] text-body">
                        {(list as string[]).map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <dl className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
                  <div className="md:col-span-3">
                    <dt className="t-meta text-muted">{t.technology}</dt>
                    <dd className="mt-3"><Chips items={s.tech.slice(0, 8)} /></dd>
                  </div>
                  <div>
                    <dt className="t-meta text-muted">{t.industries}</dt>
                    <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {inds.map((i) => <Link key={i.slug} href={`/industries/${i.slug}`} className="text-blue hover:underline">{i.name}</Link>)}
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="t-meta text-muted">{t.work}</dt>
                    <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {work.map((w) => (
                        <Link key={w.slug} href={`/work/${w.slug}`} className="inline-flex items-center gap-1 text-blue hover:underline">
                          {w.title}<ArrowUpRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </div>

      <Section tone="mist">
        <SectionHeader eyebrow={t.models.eyebrow} title={t.models.title} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
          {t.models.items.map((x, i) => (
            <div key={x.title} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-sm text-blue">0{i + 1}</p>
              <h3 className="t-h3 mt-6">{x.title}</h3>
              <p className="mt-3 text-body">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title={t.cta.title} text={t.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: list.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/services/${s.slug}`), name: s.title })),
        }}
      />
    </>
  );
}
