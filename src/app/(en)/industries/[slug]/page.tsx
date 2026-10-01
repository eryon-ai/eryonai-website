import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ArrowLink, ButtonLink, CtaBand, Eyebrow, Faq, JsonLd, PageHero, Section, SectionHeader } from "@/components/ui";
import { CaseStudyFeature } from "@/components/cards";
import { getIndustry, industries } from "@/lib/industries";
import { projectsBy } from "@/lib/work";
import { servicesBy } from "@/lib/services";
import { faqLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">) {
  const i = getIndustry((await params).slug)!;
  return pageMeta({ title: i.metaTitle, description: i.metaDescription, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const work = projectsBy(ind.work);
  const svcs = servicesBy(ind.services);

  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${ind.slug}` }]}
        eyebrow={ind.name}
        title={ind.h1}
        intro={<p>{ind.intro}</p>}
      >
        <ButtonLink href="/contact">Discuss your operation</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>The Industry Challenge</Eyebrow>
            <p className="font-display mt-6 text-[clamp(1.6rem,1.2rem+1.2vw,2.4rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {ind.challenge}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="t-meta text-muted">The operational problem</h2>
            <ol className="mt-6 border-t border-line">
              {ind.problems.map((p, i) => (
                <li key={p} className="reveal grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-5">
                  <span className="font-mono text-sm text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-body">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <Eyebrow light>The Digital Solution</Eyebrow>
        <p className="t-h2 reveal mt-8 max-w-5xl font-display font-semibold text-white">{ind.solution}</p>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Systems Required" title="What the software stack usually includes." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ind.systems.map((s, i) => (
            <div key={s.title} className="reveal bg-white p-8">
              <p className="font-mono text-sm text-blue">0{i + 1}</p>
              <h3 className="t-h3 mt-8">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow="Who We Build For" title={`${ind.name} segments we understand.`} />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {ind.segments.map((g) => (
            <li key={g.title} className="reveal grid rounded-md border border-line bg-paper sm:grid-cols-[11rem_1fr]">
              <h3 className="border-b border-line p-6 font-display text-lg font-semibold sm:border-b-0 sm:border-r">{g.title}</h3>
              <dl className="grid gap-4 p-6 text-[0.95rem]">
                <div><dt className="t-meta text-muted">The problem</dt><dd className="mt-1 text-body">{g.problem}</dd></div>
                <div><dt className="t-meta text-blue">What we build</dt><dd className="mt-1 text-ink">{g.solution}</dd></div>
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Where To Start</Eyebrow>
            <h2 className="t-h2 mt-5">What we&apos;d build first.</h2>
          </div>
          <p className="t-lead reveal border-l-2 border-blue pl-6 text-ink lg:col-span-7 lg:col-start-6">{ind.buildFirst}</p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Typical Workflows" title="The work the system has to support." />
        <ol className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {ind.workflows.map((w, i) => (
            <li key={w} className="flex items-center gap-3 lg:flex-1">
              <div className="flex h-full min-h-24 flex-1 flex-col justify-between rounded-md border border-line bg-white p-5">
                <span className="font-mono text-xs text-muted">STEP {i + 1}</span>
                <span className="mt-3 font-display font-semibold text-ink">{w}</span>
              </div>
              {i < ind.workflows.length - 1 && <ArrowRight className="hidden size-5 shrink-0 text-line-strong lg:block" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Security &amp; Compliance</Eyebrow>
            <h2 className="t-h2 mt-5">Considerations we design for.</h2>
            <p className="mt-5 text-muted">We build software that supports your compliance obligations. We are not a certification body; formal compliance remains with your organisation and its advisers.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {ind.compliance.map((c) => (
              <li key={c} className="flex gap-4 rounded-md border border-line bg-paper p-6">
                <ShieldCheck className="size-5 shrink-0 text-blue" aria-hidden="true" />
                <span className="text-body">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Case Studies" title={work.length ? `${ind.name} work.` : "Related experience."} action={<ArrowLink href="/work">All work</ArrowLink>} />
        {work.length ? (
          <div className="mt-12">{work.map((p, i) => <CaseStudyFeature key={p.slug} p={p} flip={i % 2 === 1} />)}</div>
        ) : (
          <p className="mt-10 max-w-2xl border-l-2 border-blue pl-6 text-body">
            We don&apos;t have a published {ind.name.toLowerCase()} case study yet. The systems involved — workflow platforms, portals,
            access control and reporting — are the same ones we have built for{" "}
            <Link href="/industries/manufacturing" className="text-blue underline underline-offset-4">manufacturing</Link>,{" "}
            <Link href="/industries/healthcare" className="text-blue underline underline-offset-4">healthcare</Link> and{" "}
            <Link href="/industries/education" className="text-blue underline underline-offset-4">education</Link> clients.
          </p>
        )}
      </Section>

      <Section>
        <SectionHeader eyebrow="Recommended Services" title="Where we'd usually start." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {svcs.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group flex h-full flex-col bg-paper p-7 hover:bg-white">
                <span className="font-mono text-sm text-muted">{s.n}</span>
                <span className="t-h3 mt-6 flex items-start justify-between gap-3 group-hover:text-blue">
                  {s.nav}<ArrowUpRight className="mt-1 size-5 shrink-0" aria-hidden="true" />
                </span>
                <span className="mt-3 text-[0.95rem] text-muted">{s.value}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="t-h2 mt-5">{ind.name} software questions.</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={ind.faqs} /></div>
        </div>
      </Section>

      <CtaBand title={<>Let&apos;s talk about<br />your operation.</>} text="Tell us how your operation works today. We'll come back with questions and a view on what to build first." />
      <JsonLd data={faqLd(ind.faqs)} />
    </>
  );
}
