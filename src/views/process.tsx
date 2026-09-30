import { CtaBand, Eyebrow, Faq, JsonLd, PageHero, Section, SectionHeader } from "@/components/ui";
import { faqLd, pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lines } from "@/i18n";

export const processMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.process, path: "/process", lang });

export default function ProcessView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.process;
  const L = (href: string) => lp(href, lang);
  const stages = t.stages;
  const faqs = t.faq.items;
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/process") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={lines(t.title)}
        intro={t.intro}
      >
        <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
          {stages.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="group flex h-full min-h-24 flex-col justify-between bg-paper p-4 hover:bg-white">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display font-semibold text-ink group-hover:text-blue">{s.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </PageHero>

      <div className="container-x">
        {stages.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="relative grid scroll-mt-32 gap-10 border-b border-line py-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-36">
                {/* Decorative numeral drawn via CSS content so it isn't read or contrast-checked as text */}
                <p aria-hidden="true" data-n={String(i + 1).padStart(2, "0")} className="font-display text-[5rem] font-bold leading-none tracking-[-0.05em] text-blue/15 before:content-[attr(data-n)] md:text-[7.5rem]" />
                <h2 id={`${s.id}-h`} className="t-h2 mt-4">{s.title}</h2>
                <p className="t-lead mt-5 text-steel">{s.objective}</p>
              </div>
            </div>
            <div className="reveal grid gap-px self-start overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:col-span-8">
              <div className="bg-white p-7">
                <h3 className="t-meta text-muted">{t.labels.activities}</h3>
                <ul className="mt-4 space-y-2.5 text-body">{s.activities.map((a) => <li key={a}>{a}</li>)}</ul>
              </div>
              <div className="bg-white p-7">
                <h3 className="t-meta text-muted">{t.labels.deliverables}</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-ink"><span className="mt-2.5 size-1.5 shrink-0 bg-blue" aria-hidden="true" />{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-mist p-7">
                <h3 className="t-meta text-muted">{t.labels.involvement}</h3>
                <p className="mt-4 text-body">{s.client}</p>
              </div>
              <div className="bg-navy p-7 text-white">
                <h3 className="t-meta text-white/60">{t.labels.output}</h3>
                <p className="mt-4 font-display text-xl font-semibold">{s.output}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Section tone="navy">
        <SectionHeader light eyebrow={t.constant.eyebrow} title={t.constant.title} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {t.constant.items.map((c) => (
            <div key={c.t} className="bg-navy p-8">
              <h3 className="font-display text-xl font-semibold text-white">{c.t}</h3>
              <p className="mt-3 text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{m.ui.common.faqs}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.faq.title}</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={faqs} /></div>
        </div>
      </Section>

      <CtaBand title={lines(t.cta.title)} text={t.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
      <JsonLd data={faqLd(faqs)} />
    </>
  );
}
