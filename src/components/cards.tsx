import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/work";
import type { Article } from "@/lib/insights";
import { readingTime } from "@/lib/insights";
import { Shot, Chips } from "./ui";
import { lp, type Lang } from "@/i18n/config";
import { fmtDate, getMessages, lArticle, lCategory, lProject } from "@/i18n";

export { fmtDate };
export const categoryLabel = (slug: string, lang: Lang = "en") => lCategory(slug, lang);

/** Image-led card with a product preview (home "What We Build"). */
export function PreviewCard({ href, category, title, text, image, phones, alt = `${title} interface preview` }: { href: string; category: string; title: string; text: string; image: string; phones?: string[]; alt?: string }) {
  return (
    <Link href={href} className="group reveal flex flex-col border-t border-ink/80 pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="t-meta text-steel">{category}</p>
        <ArrowUpRight className="size-5 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
      <h3 className="t-h3 mt-4"><span className="link-u">{title}</span></h3>
      <p className="mt-3 text-muted">{text}</p>
      <div className="mt-auto pt-6">
        {phones ? (
          <Shot grid={phones.map((src, i) => ({ src, alt: i === 0 ? alt : "" }))} ratio="aspect-[16/9]" />
        ) : (
          <Shot src={image} alt={alt} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" ratio="aspect-[16/9]" />
        )}
      </div>
    </Link>
  );
}

/** Full-width alternating case-study module (home, service and industry pages). */
export function CaseStudyFeature({ p: src, flip, headingLevel = "h3", lang = "en" }: { p: Project; flip?: boolean; headingLevel?: "h2" | "h3"; lang?: Lang }) {
  const H = headingLevel;
  const p = lProject(src, lang);
  const c = getMessages(lang).ui.common;
  const rows: [string, string][] = [
    [c.challenge, p.challenge],
    [c.solution, p.solution],
    [c.outcome, p.outcome],
  ];
  return (
    <article className="group reveal grid gap-10 border-t border-line py-14 lg:grid-cols-12 lg:gap-14">
      <Link href={`/work/${p.slug}`} className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`} tabIndex={-1} aria-hidden="true">
        {p.mobileShots ? (
          <div className="grid grid-cols-3 gap-4 rounded-md bg-mist p-6 md:p-10">
            {p.images.slice(0, 3).map((src) => (
              <Shot key={src} src={src} alt="" mobile sizes="(min-width: 1024px) 18vw, 30vw" />
            ))}
          </div>
        ) : (
          <Shot src={p.images[0]} alt="" bare={!!p.imageAlts} position={p.heroPosition} sizes="(min-width: 1024px) 58vw, 100vw" />
        )}
      </Link>
      <div className="flex flex-col lg:col-span-5">
        <p className="t-meta text-steel">{p.industryLabel} · {getMessages(lang).data.platforms[p.platform] ?? p.platform}</p>
        <H className="t-h2 mt-4">
          <Link href={`/work/${p.slug}`} className="link-u">{p.title}</Link>
        </H>
        <p className="mt-3 text-muted">{p.kind}</p>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
              <dt className="t-meta pt-0.5 text-muted">{k}</dt>
              <dd className="text-[0.975rem] text-body">{v}</dd>
            </div>
          ))}
          <div className="grid gap-2 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
            <dt className="t-meta pt-1 text-muted">{c.technology}</dt>
            <dd><Chips items={p.tech.slice(0, 6)} /></dd>
          </div>
        </dl>
        <Link href={`/work/${p.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-blue">
          <span className="link-u">{c.readCaseStudy}</span>
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

/** Archive card for /work. */
export function CaseStudyCard({ p: src, lang = "en" }: { p: Project; lang?: Lang }) {
  const p = lProject(src, lang);
  return (
    <Link href={`/work/${p.slug}`} className="group flex h-full flex-col">
      {p.mobileShots ? (
        <Shot grid={p.images.slice(0, 3).map((src) => ({ src }))} />
      ) : (
        <Shot src={p.images[0]} alt="" bare={!!p.imageAlts} position={p.heroPosition} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      )}
      <p className="t-meta mt-6 text-steel">{p.industryLabel}</p>
      <h3 className="t-h3 mt-2"><span className="link-u">{p.title}</span></h3>
      <p className="mt-2 text-muted">{p.outcome}</p>
      <p className="mt-4 font-mono text-[0.8125rem] text-muted">{p.tech.slice(0, 4).join(" · ")}</p>
    </Link>
  );
}

export function InsightCard({ a: src, lead, lang = "en" }: { a: Article; lead?: boolean; lang?: Lang }) {
  const a = lArticle(src, lang);
  return (
    <Link href={lp(`/insights/${a.slug}`, lang)} className={`group flex h-full flex-col ${lead ? "" : "border-t border-line pt-6"}`}>
      {lead && (
        <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-md border border-line bg-mist">
          <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
      )}
      <p className="t-meta text-blue">{categoryLabel(a.category, lang)}</p>
      <h3 className={`mt-3 ${lead ? "t-h2" : "t-h3"}`}><span className="link-u">{a.title}</span></h3>
      <p className="mt-3 text-muted">{a.summary}</p>
      <p className="t-meta mt-auto pt-6 text-muted">
        {a.author} · <time dateTime={a.published}>{fmtDate(a.published, lang)}</time> · {readingTime(src)} {getMessages(lang).ui.common.minRead}
      </p>
    </Link>
  );
}
