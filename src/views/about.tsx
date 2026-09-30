import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, CtaBand, Eyebrow, PageHero, Section, SectionHeader, Shot } from "@/components/ui";
import { services } from "@/lib/services";
import { credentials, stats } from "@/lib/site";
import CountUp from "@/components/CountUp";
import { pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lService, lines } from "@/i18n";

export const aboutMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.about, path: "/about", lang });

const B = "/img/"; // self-hosted WebP copies of project screenshots

export default function AboutView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.about;
  const L = (href: string) => lp(href, lang);
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/about") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={t.title}
        intro={<p>{t.intro}</p>}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Eyebrow>{t.who.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.who.title}</h2>
            <p className="mt-6 text-body">{t.who.p1}</p>
            <p className="mt-4 text-body">{t.who.p2}</p>
          </div>
          <div className="relative lg:col-span-7">
            <Shot src={B + "marblemart-1.webp"} alt={t.who.alts[0]} sizes="(min-width: 1024px) 55vw, 100vw" />
            <div className="absolute -bottom-8 -left-4 hidden w-1/2 md:block">
              <Shot src={B + "hrms-dashboard-light.webp"} alt={t.who.alts[1]} sizes="28vw" />
            </div>
          </div>
        </div>
      </Section>

      <section aria-labelledby="about-numbers" className="border-y border-line bg-white">
        <div className="container-x py-14">
          <h2 id="about-numbers" className="sr-only">{t.numbers}</h2>
          <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-5">
            {stats.map((st, i) => (
              <div key={st.label} className={`md:px-6 ${i ? "md:border-s md:border-line" : "md:ps-0"}`}>
                <dt className="sr-only">{m.data.stats[i]}</dt>
                <dd className="font-display text-5xl font-bold tracking-[-0.03em] text-ink"><CountUp to={st.value} suffix={st.suffix} /></dd>
                <dd className="mt-2 text-[0.95rem] text-muted">{m.data.stats[i]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          <div className="bg-paper p-8 md:p-12">
            <Eyebrow>{t.mission.eyebrow}</Eyebrow>
            <p className="t-h3 mt-6">{t.mission.text}</p>
          </div>
          <div className="bg-navy p-8 text-white md:p-12">
            <Eyebrow light>{t.vision.eyebrow}</Eyebrow>
            <p className="t-h3 mt-6 text-white">{t.vision.text}</p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow={t.beliefs.eyebrow} title={t.beliefs.title} />
        <div className="mt-14 grid gap-px overflow-hidden border-y border-line bg-line md:grid-cols-2">
          {t.beliefs.items.map((b, i) => (
            <div key={b.t} className="reveal bg-white py-10 md:p-10">
              <p className="font-mono text-sm text-blue">0{i + 1}</p>
              <h3 className="t-h3 mt-5">{b.t}</h3>
              <p className="mt-3 text-body">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow light>{t.how.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5 text-white">{t.how.title}</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-lead text-white/80">{t.how.text}</p>
            <div className="mt-8"><ArrowLink light href={L("/process")}>{t.how.cta}</ArrowLink></div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t.culture.eyebrow} title={t.culture.title} />
        <ul className="mt-14 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {t.culture.items.map((c) => (
            <li key={c.t} className="reveal border-b border-line py-8 md:pe-10">
              <h3 className="font-display text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-body">{c.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* TODO(before launch): replace with real leadership names, roles and photographs. Do not use stock photos. */}
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t.leadership.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.leadership.title}</h2>
          </div>
          <div className="space-y-5 text-body lg:col-span-6 lg:col-start-7">
            <p className="t-lead text-ink">{t.leadership.lead}</p>
            <p>{t.leadership.text}</p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} action={<ArrowLink href={L("/services")}>{t.capabilities.cta}</ArrowLink>} />
        <ul className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((src) => lService(src, lang)).map((s) => (
            <li key={s.slug} className="border-b border-line">
              <Link href={`/services/${s.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-4 pe-6 font-display font-semibold text-ink hover:text-blue">
                <span><span className="me-3 font-mono text-xs text-muted">{s.n}</span>{s.nav}</span>
                <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow={t.trust.eyebrow} title={t.trust.title} />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {credentials.map((c, i) => (
            <li key={c.title} className="bg-paper p-7">
              <h3 className="font-display text-lg font-semibold">{m.data.credentials[i].title}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{m.data.credentials[i].text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>{t.standards.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.standards.title}</h2>
            <ul className="mt-10 border-t border-line">
              {t.standards.items.map((s) => (
                <li key={s} className="flex gap-4 border-b border-line py-4 text-body"><span className="mt-2.5 size-1.5 shrink-0 bg-blue" aria-hidden="true" />{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{t.locations.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.locations.title}</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line">
              <div className="bg-white p-8">
                <p className="t-meta text-muted">{t.locations.hq}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-ink">{t.locations.hqPlace}</p>
                <p className="mt-2 text-muted">{t.locations.hqText}</p>
              </div>
              <div className="bg-white p-8">
                <p className="t-meta text-muted">{t.locations.global}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-ink">{t.locations.globalPlace}</p>
                <p className="mt-2 text-muted">{t.locations.globalText}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand title={lines(t.cta)} text={m.ui.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
    </>
  );
}
