import { notFound } from "next/navigation";
import { Breadcrumbs, Chips, Eyebrow, JsonLd } from "@/components/ui";
import AjaxForm, { Field } from "@/components/AjaxForm";
import { getJob, jobs } from "@/lib/careers";
import { hiringSteps } from "@/lib/hiring";
import { site } from "@/lib/site";
import { orgRef, pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => jobs.map((j) => ({ slug: j.slug }));

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">) {
  const j = getJob((await params).slug)!;
  return pageMeta({ title: `${j.title} — Careers`, description: `${j.title} at Eryon, ${j.location}. ${j.overview}`.slice(0, 158), path: `/careers/${j.slug}` });
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="t-h3">{title}</h2>
      <ul className="mt-5 grid gap-3 text-body">
        {items.map((x) => <li key={x} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 bg-blue" aria-hidden="true" />{x}</li>)}
      </ul>
    </section>
  );
}

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const j = getJob((await params).slug);
  if (!j) notFound();
  return (
    <>
      <header className="bg-grid border-b border-line">
        <div className="container-x pb-14 pt-10 md:pt-14">
          <Breadcrumbs items={[{ name: "Careers", path: "/careers" }, { name: j.title, path: `/careers/${j.slug}` }]} />
          <div className="mt-12 max-w-4xl">
            <Eyebrow>{j.team}</Eyebrow>
            <h1 className="t-h1 mt-6">{j.title}</h1>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink pt-6 text-[0.95rem]">
              <div><dt className="t-meta text-muted">Experience</dt><dd className="mt-1 text-ink">{j.experience}</dd></div>
              <div><dt className="t-meta text-muted">Location</dt><dd className="mt-1 text-ink">{j.location}</dd></div>
              <div><dt className="t-meta text-muted">Employment type</dt><dd className="mt-1 text-ink">{j.type}</dd></div>
            </dl>
            <div className="mt-6"><Chips items={j.tech} /></div>
          </div>
        </div>
      </header>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <section className="pb-10">
            <h2 className="t-h3">Overview</h2>
            <p className="t-lead mt-5 text-body">{j.overview}</p>
          </section>
          <List title="Responsibilities" items={j.responsibilities} />
          <List title="Requirements" items={j.requirements} />
          <List title="Nice to have" items={j.niceToHave} />
          <List title="What you will build" items={j.build} />
          <section className="border-t border-line py-10">
            <h2 className="t-h3">Interview process</h2>
            <ol className="mt-5 grid gap-4">
              {hiringSteps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[2.5rem_1fr]">
                  <span className="font-mono text-sm text-blue">0{i + 1}</span>
                  <span><strong className="font-semibold text-ink">{s.t}.</strong> <span className="text-body">{s.d}</span></span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside id="apply" className="scroll-mt-32 lg:col-span-5">
          <div className="rounded-md border border-line bg-white p-7 md:p-9 lg:sticky lg:top-32">
            <h2 className="t-h3">Apply for this role</h2>
            <p className="mt-2 text-sm text-muted">Fields marked * are required. Your CV is sent only to our hiring team.</p>
            <div className="mt-8">
              <AjaxForm action="/api/apply" success="/careers/success" submitLabel="Submit application" captchaAction="apply">
                <input type="hidden" name="job" value={j.slug} />
                <Field name="name" label="Full name" required autoComplete="name" />
                <Field name="email" label="Email" type="email" required autoComplete="email" />
                <Field name="phone" label="Phone" type="tel" autoComplete="tel" />
                <Field name="linkedin" label="LinkedIn profile" type="url" />
                <Field name="portfolio" label="Portfolio or GitHub" type="url" />
                <Field name="cv" label="CV" type="file" required accept=".pdf,.doc,.docx" hint="PDF or Word, up to 5 MB." />
                <Field name="note" label="Anything you'd like us to know" rows={4} />
              </AjaxForm>
            </div>
          </div>
        </aside>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: j.title,
          description: `<p>${j.overview}</p><ul>${j.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
          datePosted: j.posted,
          validThrough: j.validThrough,
          employmentType: j.type === "Full-time" ? "FULL_TIME" : j.type === "Contract" ? "CONTRACTOR" : "INTERN",
          hiringOrganization: { ...orgRef, "@type": "Organization", name: site.legalName, sameAs: site.url },
          jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "Delhi", addressCountry: "IN" } },
          skills: j.tech.join(", "),
        }}
      />
    </>
  );
}
