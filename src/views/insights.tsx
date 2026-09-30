import { CtaBand, PageHero } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { InsightCard, categoryLabel, fmtDate } from "@/components/cards";
import FilterGrid from "@/components/FilterGrid";
import Newsletter from "@/components/Newsletter";
import { articles, readingTime } from "@/lib/insights";
import { insightCategories } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lArticle, lines } from "@/i18n";

export const insightsMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.insights, path: "/insights", lang });

export default function InsightsView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.insights;
  const L = (href: string) => lp(href, lang);
  const lead = lArticle(articles[0], lang);
  const used = new Set(articles.map((a) => a.category));
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/insights") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={lines(t.title)}
        intro={t.intro}
      />

      <section className="border-b border-line bg-white">
        <Link href={L(`/insights/${lead.slug}`)} className="group container-x grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-mist lg:col-span-7">
            <Image src={lead.image} alt={lead.imageAlt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="lg:col-span-5">
            <p className="t-meta text-blue">{m.ui.common.featured} · {categoryLabel(lead.category, lang)}</p>
            <h2 className="t-h2 mt-4"><span className="link-u">{lead.title}</span></h2>
            <p className="t-lead mt-5 text-muted">{lead.summary}</p>
            <p className="t-meta mt-8 text-muted">{lead.author} · <time dateTime={lead.published}>{fmtDate(lead.published, lang)}</time> · {readingTime(articles[0])} {m.ui.common.minRead}</p>
          </div>
        </Link>
      </section>

      <div className="container-x py-16 md:py-20">
        <FilterGrid
          groups={[{ key: "category", label: t.category, options: insightCategories.filter((c) => used.has(c.slug)).map((c) => ({ value: c.slug, label: categoryLabel(c.slug, lang) })) }]}
          items={articles.map((a) => ({ id: a.slug, facets: { category: [a.category] }, node: <InsightCard a={a} lang={lang} /> }))}
          t={m.ui.common}
          gridClass="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
        />
      </div>
      <section aria-labelledby="nl-h" className="border-t border-line bg-white">
        <div className="container-x grid gap-8 py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="nl-h" className="t-h3">{t.newsletterTitle}</h2>
            <p className="mt-2 text-muted">{t.newsletterText}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><Newsletter t={m.ui.newsletter} /></div>
        </div>
      </section>
      <CtaBand title={lines(m.ui.cta.title)} text={m.ui.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
    </>
  );
}
