import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink, ButtonLink, Chips, CtaBand, Eyebrow, Faq, JsonLd, NumberedList, PageHero, Section, SectionHeader, Shot,
} from "@/components/ui";
import { CaseStudyFeature } from "@/components/cards";
import { getService, services, servicesBy } from "@/lib/services";
import { industriesBy } from "@/lib/industries";
import { projectsBy } from "@/lib/work";
import { processSteps } from "@/lib/site";
import { abs, faqLd, orgRef, pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const s = getService((await params).slug)!;
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const inds = industriesBy(s.industries);
  const work = projectsBy(s.work).slice(0, 3);
  const related = servicesBy(s.related);

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }, { name: s.nav, path: `/services/${s.slug}` }]}
        eyebrow={`${s.n} — ${s.title}`}
        title={s.h1}
        intro={<p>{s.intro}</p>}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
          <ButtonLink href="#work" variant="secondary">See related work</ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeader eyebrow="Capabilities" title="What this service covers." />
        <div className="mt-14"><NumberedList items={s.capabilities} /></div>
      </Section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="t-h2 mt-5">{s.nav} solutions we deliver.</h2>
            <p className="t-lead mt-5 text-muted">{s.value}</p>
          </div>
          <div className="reveal lg:col-span-7">
            <Shot src={s.preview} alt={`Example ${s.nav} interface built by Eryon`} sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
        </div>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {s.offerings.map((o, i) => (
            <li key={o.title} className="bg-white p-7">
              <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-[0.95rem] text-body">{o.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader eyebrow="Use Cases" title="When clients bring us in." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {s.useCases.map((u) => (
            <div key={u.title} className="reveal bg-paper p-8 md:p-10">
              <h3 className="t-h3">{u.title}</h3>
              <p className="mt-3 text-body">{u.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow="Where It's Used" title="Problems we solve, sector by sector." />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {s.segments.map((g) => (
            <li key={g.title} className="reveal grid rounded-md border border-line bg-paper sm:grid-cols-[11rem_1fr]">
              <h3 className="border-b border-line p-6 font-display text-lg font-semibold sm:border-b-0 sm:border-r">{g.title}</h3>
              <dl className="grid gap-4 p-6 text-[0.95rem]">
                <div><dt className="t-meta text-muted">The problem</dt><dd className="mt-1 text-body">{g.problem}</dd></div>
                <div><dt className="t-meta text-blue">What we build</dt><dd className="mt-1 text-ink">{g.solution}</dd></div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-md bg-navy p-8 text-white md:flex-row md:items-center md:p-10">
          <p className="font-display text-2xl font-semibold">Recognise your situation here?</p>
          <ButtonLink href="/contact" variant="light">Talk to an engineer</ButtonLink>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>How We Deliver</Eyebrow>
            <h2 className="t-h2 mt-5">Delivery you can plan around.</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
            {s.deliver.map((d) => (
              <div key={d.title} className="reveal border-t-2 border-navy pt-6">
                <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                <p className="mt-3 text-body">{d.text}</p>
              </div>
            ))}
            <div className="sm:col-span-2">
              <h3 className="t-meta text-muted">Deliverables</h3>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-ink">
                {s.deliverables.map((d) => <li key={d} className="flex items-center gap-2"><span className="size-1.5 bg-blue" aria-hidden="true" />{d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow light>Technology Stack</Eyebrow>
            <h2 className="t-h2 mt-5 text-white">Tools we use for this work.</h2>
            <div className="mt-8"><Chips items={s.tech} light /></div>
            <div className="mt-8"><ArrowLink light href="/technology">Full technology overview</ArrowLink></div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow light>Security &amp; Scalability</Eyebrow>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2">
              {s.scale.map((x) => (
                <li key={x.title} className="bg-navy p-7">
                  <h3 className="font-display text-lg font-semibold text-white">{x.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-white/70">{x.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Process" title="From first workshop to production." action={<ArrowLink href="/process">How we work</ArrowLink>} />
        <ol className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((p) => (
            <li key={p.n} className="border-b border-line py-7 sm:pr-8">
              <p className="font-mono text-sm text-blue">{p.n} · {p.title}</p>
              <p className="mt-3 text-body">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow="Related Industries" title="Where this service is used most." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {inds.map((i) => (
            <li key={i.slug}>
              <Link href={`/industries/${i.slug}`} className="group flex h-full flex-col justify-between gap-8 bg-paper p-7 hover:bg-white">
                <span className="t-h3 group-hover:text-blue">{i.name}</span>
                <span className="text-[0.95rem] text-muted">{i.challenge}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section id="work" className="scroll-mt-28 bg-white">
        <div className="container-x py-20 md:py-28">
          <SectionHeader eyebrow="Related Case Studies" title="Where we've done this before." action={<ArrowLink href="/work">All work</ArrowLink>} />
          <div className="mt-12">
            {work.map((p, i) => <CaseStudyFeature key={p.slug} p={p} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="t-h2 mt-5">Common questions.</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={s.faqs} /></div>
        </div>
      </Section>

      <CtaBand title={<>Planning a project<br />like this?</>} text="Tell us what the system needs to do. We'll reply within 24 hours with questions, not a sales script." />

      <Section tone="white">
        <SectionHeader eyebrow="Related Services" title="Often delivered together." />
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/services/${r.slug}`} className="group block border-t border-ink pt-6">
                <p className="font-mono text-sm text-muted">{r.n}</p>
                <h3 className="t-h3 mt-3 flex items-start justify-between gap-4">
                  <span className="link-u">{r.title}</span>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-blue" aria-hidden="true" />
                </h3>
                <p className="mt-3 text-muted">{r.value}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.metaDescription,
            url: abs(`/services/${s.slug}`),
            provider: orgRef,
            areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
          },
          faqLd(s.faqs),
        ]}
      />
    </>
  );
}
