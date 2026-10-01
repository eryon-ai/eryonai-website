import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/ui";
import Newsletter from "@/components/Newsletter";
import { InsightCard, categoryLabel, fmtDate } from "@/components/cards";
import { articles, getArticle, readingTime } from "@/lib/insights";
import { getService } from "@/lib/services";
import { abs, orgRef, pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lArticle, lService, lines } from "@/i18n";

export function articleMeta(slug: string, lang: Lang) {
  const a = lArticle(getArticle(slug)!, lang);
  const desc = a.summary.length > 160 ? a.summary.slice(0, a.summary.lastIndexOf(".", 158) + 1) || a.summary : a.summary;
  const m = pageMeta({ title: a.title, description: desc, path: `/insights/${a.slug}`, type: "article", lang });
  return { ...m, openGraph: { ...m.openGraph, type: "article" as const, publishedTime: a.published, modifiedTime: a.updated, authors: [a.author] } };
}

export default function ArticleView({ slug, lang }: { slug: string; lang: Lang }) {
  const src = getArticle(slug);
  if (!src) notFound();
  const a = lArticle(src, lang);
  const m = getMessages(lang);
  const t = m.article;
  const L = (href: string) => lp(href, lang);
  const svc = lService(getService(a.service)!, lang);
  const related = articles.filter((x) => x.slug !== src.slug).sort((x, y) => Number(y.category === a.category) - Number(x.category === a.category)).slice(0, 3);
  const mins = readingTime(src);

  return (
    <>
      <header className="border-b border-line">
        <div className="container-x pb-14 pt-10 md:pt-14">
          <Breadcrumbs items={[{ name: m.insights.crumb, path: L("/insights") }, { name: a.title, path: L(`/insights/${a.slug}`) }]} home={{ name: m.ui.common.home, path: L("/") }} />
          <div className="mx-auto mt-14 max-w-4xl">
            <Link href={L(`/insights?category=${a.category}`)} className="t-meta text-blue hover:underline">{categoryLabel(a.category, lang)}</Link>
            <h1 className="t-h1 hero-in mt-5">{a.title}</h1>
            <p className="t-lead hero-in-2 mt-6 text-muted">{a.subtitle}</p>
            <dl className="hero-in-3 mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 text-[0.95rem]">
              <div><dt className="t-meta text-muted">{t.author}</dt><dd className="mt-1 text-ink">{a.author}</dd></div>
              <div><dt className="t-meta text-muted">{t.published}</dt><dd className="mt-1 text-ink"><time dateTime={a.published}>{fmtDate(a.published, lang)}</time></dd></div>
              {a.updated !== a.published && (
                <div><dt className="t-meta text-muted">{t.updated}</dt><dd className="mt-1 text-ink"><time dateTime={a.updated}>{fmtDate(a.updated, lang)}</time></dd></div>
              )}
              <div><dt className="t-meta text-muted">{t.readingTime}</dt><dd className="mt-1 text-ink">{mins} {t.min}</dd></div>
            </dl>
          </div>
        </div>
      </header>

      <div className="container-x pt-12">
        <div className="relative mx-auto aspect-[16/8] max-w-6xl overflow-hidden rounded-md border border-line bg-mist">
          <Image src={a.image} alt={a.imageAlt} fill priority sizes="(min-width: 1200px) 1150px, 100vw" className="object-cover object-top" />
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <nav aria-label="Table of contents" className="lg:sticky lg:top-36">
            <p className="t-meta text-muted">{t.contents}</p>
            <ol className="mt-4 space-y-1 border-s border-line">
              {a.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="-ms-px block border-s border-transparent py-1 ps-4 text-[0.95rem] text-muted hover:border-blue hover:text-ink">{s.h}</a></li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="prose-e max-w-[44rem] lg:col-span-7">
          <section aria-labelledby="takeaways" className="rounded-md border border-line bg-white p-7 md:p-8">
            <h2 id="takeaways" className="t-meta !mt-0 !text-[0.8125rem] text-steel">{t.takeaways}</h2>
            <ul className="!mt-4">
              {a.takeaways.map((t) => <li key={t} className="text-ink">{t}</li>)}
            </ul>
          </section>
          <p className="t-lead !mt-10 text-ink">{a.summary}</p>
          {a.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.h}</h2>
              {s.p.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </section>
          ))}

          <Link href={`/services/${svc.slug}`} className="group !mt-16 flex items-start justify-between gap-6 rounded-md bg-navy p-8 text-white no-underline">
            <span>
              <span className="t-meta block text-white/60">{t.relatedService}</span>
              <span className="mt-3 block font-display text-2xl font-semibold">{svc.title}</span>
              <span className="mt-2 block text-white/75">{svc.value}</span>
            </span>
            <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <div className="!mt-10 rounded-md border border-line bg-white p-7">
            <p className="font-display text-lg font-semibold text-ink">{t.newsletter}</p>
            <div className="mt-4"><Newsletter t={m.ui.newsletter} /></div>
          </div>
        </article>
      </div>

      <section className="border-t border-line bg-white">
        <div className="container-x py-20">
          <h2 className="t-h2">{t.related}</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {related.map((r) => <li key={r.slug}><InsightCard a={r} lang={lang} /></li>)}
          </ul>
        </div>
      </section>

      <CtaBand title={lines(m.ui.cta.title)} text={m.ui.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.summary,
          image: abs(a.image),
          datePublished: a.published,
          dateModified: a.updated,
          author: { "@type": "Organization", name: a.author, url: abs("/about") },
          publisher: orgRef,
          mainEntityOfPage: abs(L(`/insights/${a.slug}`)),
          inLanguage: lang,
          articleSection: categoryLabel(a.category, lang),
        }}
      />
    </>
  );
}
