import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, CtaBand, Eyebrow, PageHero, Section, SectionHeader } from "@/components/ui";
import { jobs } from "@/lib/careers";
import { hiringSteps } from "@/lib/hiring";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers — Software Engineering Jobs in New Delhi",
  description: "Join Eryon in New Delhi. Build CRMs, ERPs, SaaS platforms and mobile apps that real businesses run on. See open engineering and design roles.",
  path: "/careers",
});

// TODO(before launch): confirm these reflect actual benefits and policies.
const benefits = [
  ["Real ownership", "Engineers own features end to end, from data model to production."],
  ["Senior mentorship", "Code review and architecture discussion with experienced engineers on every project."],
  ["Varied domains", "Manufacturing, healthcare, education, retail and more — rarely the same problem twice."],
  ["Learning time", "Time to study, experiment and write about what you've learned."],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", path: "/careers" }]}
        eyebrow="Careers"
        title="Build systems that matter."
        intro={<p>The software we build runs hospitals&apos; rotas, schools&apos; fee collection and distributors&apos; inventory. If you want your work to be used every day by people who depend on it, you&apos;ll like it here.</p>}
      >
        <ArrowLink href="#roles">See open roles</ArrowLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Why Eryon</Eyebrow>
            <h2 className="t-h2 mt-5">Serious engineering, close to the business.</h2>
          </div>
          <div className="space-y-5 text-body lg:col-span-6 lg:col-start-7">
            <p className="t-lead text-ink">You won&apos;t be a ticket-taker. Engineers here join discovery workshops, meet users, propose architecture and see their work go live.</p>
            <p>Projects are small enough that your contribution is visible and substantial enough that the engineering is real: multi-tenant data models, event-driven services, role-based access, data migrations.</p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Engineering Culture & Learning" title="How we work together." action={<ArrowLink href="/about">About our culture</ArrowLink>} />
        <div className="mt-14 grid gap-px overflow-hidden border-y border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([t, d]) => (
            <div key={t} className="bg-white py-8 md:p-8">
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-body">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow light>Projects</Eyebrow>
            <h2 className="t-h2 mt-5 text-white">The kind of work you&apos;ll do.</h2>
            <p className="t-lead mt-5 text-white/75">A hospital HR system with shift conflict detection. A school ERP with parent apps. An event-driven delivery platform on Kafka. A CRM that reserves one-of-a-kind stock at the moment of quotation.</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9"><ArrowLink light href="/work">Browse our case studies</ArrowLink></div>
        </div>
      </Section>

      <section id="roles" className="scroll-mt-28">
        <div className="container-x py-20 md:py-28">
          <SectionHeader eyebrow="Open Roles" title={`${jobs.length} open position${jobs.length === 1 ? "" : "s"}.`} />
          <ul className="mt-12 border-t border-ink">
            {jobs.map((j) => (
              <li key={j.slug} className="border-b border-line">
                <Link href={`/careers/${j.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-5">
                    <p className="t-meta text-steel">{j.team}</p>
                    <h3 className="t-h3 mt-2 group-hover:text-blue">{j.title}</h3>
                  </div>
                  <dl className="grid grid-cols-3 gap-4 text-[0.95rem] md:col-span-5">
                    <div><dt className="t-meta text-muted">Experience</dt><dd className="mt-1 text-ink">{j.experience}</dd></div>
                    <div><dt className="t-meta text-muted">Location</dt><dd className="mt-1 text-ink">{j.location}</dd></div>
                    <div><dt className="t-meta text-muted">Type</dt><dd className="mt-1 text-ink">{j.type}</dd></div>
                  </dl>
                  <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                    <span className="font-mono text-[0.8125rem] text-muted md:hidden">{j.tech.slice(0, 3).join(" · ")}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-blue">Apply <ArrowUpRight className="size-4" aria-hidden="true" /></span>
                  </div>
                  <p className="hidden font-mono text-[0.8125rem] text-muted md:col-span-12 md:block">{j.tech.join(" · ")}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Don&apos;t see your role? Send your CV and a note about what you&apos;d like to work on to{" "}
            <a href={`mailto:${site.email}?subject=Careers`} className="text-blue underline underline-offset-4">{site.email}</a>.
          </p>
        </div>
      </section>

      <Section tone="mist">
        <SectionHeader eyebrow="Hiring Process" title="Five steps, no trick questions." />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {hiringSteps.map((s, i) => (
            <li key={s.t} className="bg-paper p-7">
              <p className="font-mono text-sm text-blue">0{i + 1}</p>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-[0.95rem] text-body">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title={<>Build with us.</>} text="Clients: tell us what you need built. Engineers: see the open roles above." />
    </>
  );
}
