import Link from "next/link";
import {
  AppWindow, ArrowUpRight, Boxes, Briefcase, Building2, Cloud, Database, Dumbbell, Eye, Factory, GraduationCap, Handshake,
  HeartPulse, Hotel, Landmark, Layers, Network, PenTool, ShieldCheck, ShoppingBag, Truck, Workflow, Zap, type LucideIcon,
} from "lucide-react";
import { ButtonLink, ArrowLink, CtaBand, DesktopFrame, Eyebrow, Faq, JsonLd, PhoneFrame, SectionHeader, Section, TabletFrame } from "@/components/ui";
import { PreviewCard, CaseStudyFeature, InsightCard } from "@/components/cards";
import { credentials, processSteps, stats } from "@/lib/site";
import CountUp from "@/components/CountUp";
import { industries } from "@/lib/industries";
import { projectsBy } from "@/lib/work";
import { articles } from "@/lib/insights";
import { faqLd, pageMeta } from "@/lib/seo";
import { techGroups } from "@/lib/tech";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lIndustry, lines } from "@/i18n";

const B = "/img/"; // self-hosted WebP copies of project screenshots

export const homeMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.home, path: "/", lang });

const buildLinks = [
  { href: "/services/custom-software-development", image: B + "infra-1.webp" },
  { href: "/services/web-applications", image: B + "hrms-dashboard-light.webp" },
  { href: "/services/mobile-applications", image: "", phones: [B + "atelier-mobile-products.webp", B + "atelier-mobile-admin-overview.webp", B + "atelier-mobile-checkout-1.webp"] },
  { href: "/services/saas-development", image: B + "gym-crm-dashboard.webp" },
  { href: "/services/crm-erp-development", image: B + "edunexus-1.webp" },
  { href: "/services/ecommerce-development", image: B + "atelier-home.webp" },
];

const capabilityLinks: { href: string; span: string; dark?: boolean; icon: LucideIcon }[] = [
  { href: "/services/saas-development", span: "lg:col-span-7 lg:row-span-2", dark: true, icon: Boxes },
  { href: "/services/web-applications", span: "lg:col-span-5", icon: AppWindow },
  { href: "/services/cloud-devops", span: "lg:col-span-5", icon: Cloud },
  { href: "/services/data-analytics", span: "lg:col-span-4", icon: Database },
  { href: "/services/software-modernization", span: "lg:col-span-4", icon: Workflow },
  { href: "/services/business-automation", span: "lg:col-span-4", icon: Zap },
  { href: "/services/cybersecurity", span: "lg:col-span-6", icon: ShieldCheck },
  { href: "/services/ui-ux-design", span: "lg:col-span-6", icon: PenTool },
];

const industryIcons: Record<string, LucideIcon> = {
  "real-estate": Building2, healthcare: HeartPulse, education: GraduationCap, retail: ShoppingBag, manufacturing: Factory,
  logistics: Truck, finance: Landmark, hospitality: Hotel, fitness: Dumbbell, "professional-services": Briefcase, b2b: Network,
};
const whyIcons = [Layers, Briefcase, Eye, Handshake];

export default function HomeView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const h = m.home;
  const L = (href: string) => lp(href, lang);
  const sp = lang === "ja" ? "" : " "; // Japanese has no word spaces
  const featured = projectsBy(["marblemart-crm", "hospital-hrms", "edunexus-erp"]);
  const homeTech = techGroups.flatMap((g) => g.items).filter((t) => t.home);
  const builds = buildLinks.map((b, i) => ({ ...b, ...h.build.cards[i], alt: `${h.build.cards[i].title} ${h.build.previewAlt}` }));
  const capabilities = capabilityLinks.map((c, i) => ({ ...c, ...h.capabilities.items[i] }));

  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden border-b border-line">
        <div className="container-x grid gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-6">
            <div className="hero-in"><Eyebrow>{h.eyebrow}</Eyebrow></div>
            <h1 className="t-hero hero-in-2 mt-7">
              {h.heroBefore}{h.heroBefore && sp}<span className="text-blue">{h.heroEm}</span>{sp}{h.heroAfter}
            </h1>
            <p className="t-lead hero-in-3 mt-8 max-w-xl text-body">
              {h.heroText}
            </p>
            <div className="hero-in-3 mt-10 flex flex-wrap gap-3">
              <ButtonLink href={L("/contact")}>{m.ui.common.start}</ButtonLink>
              <ButtonLink href={L("/work")} variant="secondary">{m.ui.common.viewWork}</ButtonLink>
            </div>
          </div>

          <div className="hero-in-3 relative lg:col-span-6">
            {/* Bleeds slightly past its column — by a fixed 2rem, not a % of width, so it never
                exceeds container-x's own minimum side padding and can't be clipped by the section's
                overflow-hidden at any viewport width (unlike the old 128–132% version). */}
            <div className="relative lg:ml-4 lg:mt-2 lg:mr-[-1.5rem]">
              <DesktopFrame src={B + "craverush-admin-dashboard.webp"} alt={h.heroAlts[0]} priority sizes="(min-width: 1024px) 48vw, 100vw" />
              <div className="absolute -bottom-10 -left-4 hidden w-[52%] sm:block lg:-left-10">
                <TabletFrame src={B + "edunexus-3.webp"} alt={h.heroAlts[1]} sizes="25vw" />
              </div>
              <div className="absolute -bottom-14 right-2 w-[24%] md:right-8 lg:right-[24%] lg:w-[20%]">
                <PhoneFrame src={B + "atelier-mobile-admin-overview.webp"} alt={h.heroAlts[2]} sizes="12vw" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-line bg-paper/80">
          <ul className="container-x grid grid-cols-2 md:grid-cols-4">
            {h.trust.map((t, i) => (
              <li key={t} className={`t-meta flex min-h-16 items-center gap-3 py-4 text-ink ${i % 2 ? "pl-4 md:pl-6" : ""} ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""}`}>
                <span className="font-mono text-blue">0{i + 1}</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* By the numbers — confirmed company figures */}
      <section aria-labelledby="numbers-h" className="border-b border-line bg-white">
        <div className="container-x py-16 md:py-20">
          <h2 id="numbers-h" className="t-meta text-steel">{h.numbers}</h2>
          <dl className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-5">
            {stats.map((st, i) => (
              <div key={st.label} className={`md:px-6 ${i ? "md:border-s md:border-line" : "md:ps-0"}`}>
                <dt className="sr-only">{m.data.stats[i]}</dt>
                <dd className="font-display text-5xl font-bold tracking-[-0.03em] text-ink md:text-6xl"><CountUp to={st.value} suffix={st.suffix} /></dd>
                <dd className="mt-2 text-[0.95rem] text-muted">{m.data.stats[i]}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8" aria-label={h.credentialsLabel}>
            {credentials.map((c, i) => (
              <li key={c.title} className="rounded-[3px] border border-line bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink">{m.data.credentials[i].title}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we build */}
      <Section>
        <SectionHeader
          eyebrow={h.build.eyebrow}
          title={h.build.title}
          intro={h.build.intro}
          action={<ArrowLink href={L("/services")}>{h.build.cta}</ArrowLink>}
        />
        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((b) => <PreviewCard key={b.href} {...b} />)}
        </div>
      </Section>

      {/* Built around your business */}
      <Section tone="white">
        <SectionHeader eyebrow={h.around.eyebrow} title={h.around.title} />
        <div className="mt-16 grid border-t border-ink md:grid-cols-3">
          {h.around.cols.map((c, i) => (
            <div key={c.k} className={`reveal py-10 md:px-8 ${i ? "border-t border-line md:border-s md:border-t-0" : "md:ps-0"}`}>
              <p className="font-mono text-sm text-blue">0{i + 1} — {c.k}</p>
              <h3 className="t-h3 mt-6">{c.t}</h3>
              <p className="mt-4 text-body">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <SectionHeader eyebrow={h.capabilities.eyebrow} title={h.capabilities.title} intro={h.capabilities.intro} />
        <div className="mt-16 grid auto-rows-[minmax(11rem,auto)] gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-12">
          {capabilities.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group flex flex-col justify-between p-7 transition-colors md:p-9 ${c.span} ${c.dark ? "bg-navy text-white hover:bg-navy-2" : "bg-paper hover:bg-white"}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className={`grid size-11 place-items-center rounded-md ${c.dark ? "bg-white/10 text-white" : "bg-blue/[0.08] text-blue"}`}>
                    <c.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className={`mt-6 ${c.dark ? "t-h2 text-white" : "t-h3"}`}>{c.title}</h3>
                </div>
                <ArrowUpRight className={`size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${c.dark ? "text-white" : "text-blue"}`} aria-hidden="true" />
              </div>
              <p className={`mt-6 max-w-md ${c.dark ? "t-lead text-white/75" : "text-muted"}`}>{c.text}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section tone="white">
        <SectionHeader eyebrow={h.work.eyebrow} title={h.work.title} action={<ArrowLink href={L("/work")}>{h.work.cta}</ArrowLink>} intro={h.work.intro} />
        <div className="mt-12">
          {featured.map((p, i) => <CaseStudyFeature key={p.slug} p={p} flip={i % 2 === 1} lang={lang} />)}
        </div>
      </Section>

      {/* How we work */}
      <Section tone="navy">
        <SectionHeader light eyebrow={h.process.eyebrow} title={h.process.title} action={<ArrowLink light href={L("/process")}>{h.process.cta}</ArrowLink>} />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((s, i) => (
            <li key={s.n} className="reveal bg-navy p-7 lg:min-h-80">
              <div className="flex items-center gap-3" aria-hidden="true">
                <span className="size-2.5 shrink-0 rounded-full bg-[#5a8cff] shadow-[0_0_0_5px_rgb(90_140_255/0.18)]" />
                <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-white/5 rtl:bg-gradient-to-l" />
              </div>
              <p className="mt-6 font-mono text-sm text-white/50">{s.n}</p>
              <h3 className="t-h3 mt-10 text-white">{m.data.processSteps[i].title}</h3>
              <p className="mt-4 text-[0.95rem] text-white/70">{m.data.processSteps[i].text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader eyebrow={h.industries.eyebrow} title={h.industries.title} action={<ArrowLink href="/industries">{h.industries.cta}</ArrowLink>} />
        <ul className="mt-14 grid border-t border-line md:grid-cols-2 md:gap-x-12">
          {industries.map((src) => lIndustry(src, lang)).map((ind) => (
            <li key={ind.slug} className="border-b border-line">
              <Link href={`/industries/${ind.slug}`} className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-7">
                <span className="grid size-11 place-items-center rounded-md border border-line bg-white text-steel transition-colors group-hover:border-blue/30 group-hover:bg-blue/[0.06] group-hover:text-blue" aria-hidden="true">
                  {(() => { const Icon = industryIcons[ind.slug] ?? Building2; return <Icon className="size-5" strokeWidth={1.75} />; })()}
                </span>
                <span>
                  <span className="t-h3 block group-hover:text-blue">{ind.name}</span>
                  <span className="mt-2 block text-[0.95rem] text-muted">{ind.challenge}</span>
                </span>
                <ArrowUpRight className="mt-2 size-5 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Technology */}
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{h.tech.eyebrow}</Eyebrow>
            <h2 className="t-h2 mt-5">{h.tech.title}</h2>
            <p className="mt-5 text-muted">{h.tech.text}</p>
            <div className="mt-8"><ArrowLink href={L("/technology")}>{h.tech.cta}</ArrowLink></div>
          </div>
          <ul className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
            {homeTech.map((t) => (
              <li key={t.name} className="flex min-h-20 flex-col justify-center bg-paper px-5 py-4">
                <span className="font-display font-semibold text-ink">{t.name}</span>
                <span className="t-meta mt-1 text-[0.7rem] text-muted">{m.data.techRoles[t.role] ?? t.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why Eryon */}
      <Section tone="white">
        <SectionHeader eyebrow={h.why.eyebrow} title={h.why.title} />
        <div className="mt-16 grid gap-px overflow-hidden border-y border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {h.why.items.map((w, i) => (
            <div key={w.title} className="reveal bg-white py-10 md:px-8 lg:first:ps-0">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-5xl font-bold text-blue/90">0{i + 1}</p>
                {(() => { const Icon = whyIcons[i]; return <span className="grid size-11 place-items-center rounded-md bg-blue/[0.08] text-blue" aria-hidden="true"><Icon className="size-5" strokeWidth={1.75} /></span>; })()}
              </div>
              <h3 className="t-h3 mt-8">{w.title}</h3>
              <p className="mt-4 text-body">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section>
        <SectionHeader eyebrow={h.insights.eyebrow} title={h.insights.title} action={<ArrowLink href={L("/insights")}>{h.insights.cta}</ArrowLink>} />
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-6"><InsightCard a={articles[0]} lead lang={lang} /></div>
          <div className="grid gap-10 lg:col-span-6">
            {articles.slice(1, 4).map((a) => <div key={a.slug} className="reveal"><InsightCard a={a} lang={lang} /></div>)}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{m.ui.common.faqs}</Eyebrow>
            <h2 className="t-h2 mt-5">{h.faq.title}</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={h.faq.items} /></div>
        </div>
      </Section>

      <CtaBand title={lines(m.ui.cta.title)} text={m.ui.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
      <JsonLd data={faqLd(h.faq.items)} />
    </>
  );
}
