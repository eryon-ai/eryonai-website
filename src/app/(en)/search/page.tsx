import { PageHero } from "@/components/ui";
import SearchClient, { type Doc } from "@/components/SearchClient";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { projects } from "@/lib/work";
import { articles } from "@/lib/insights";
import { jobs } from "@/lib/careers";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Search", description: "Search Eryon's services, industries, case studies and insights.", path: "/search", noindex: true });

// ponytail: client-side index of ~45 docs; move to a server search endpoint if content grows into the hundreds.
const docs: Doc[] = [
  ...services.map((s) => ({ href: `/services/${s.slug}`, title: s.title, type: "Service", text: `${s.value} ${s.summary} ${s.tech.join(" ")} ${s.offerings.map((o) => o.title).join(" ")}` })),
  ...industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.name, type: "Industry", text: `${i.challenge} ${i.solution} ${i.systems.map((x) => x.title).join(" ")}` })),
  ...projects.map((p) => ({ href: `/work/${p.slug}`, title: p.title, type: `Case study · ${p.industryLabel}`, text: `${p.outcome} ${p.kind} ${p.tech.join(" ")}` })),
  ...articles.map((a) => ({ href: `/insights/${a.slug}`, title: a.title, type: "Insight", text: `${a.summary} ${a.subtitle}` })),
  ...jobs.map((j) => ({ href: `/careers/${j.slug}`, title: j.title, type: "Open role", text: `${j.overview} ${j.tech.join(" ")}` })),
  { href: "/process", title: "How We Work", type: "Page", text: "Discovery, product definition, architecture, UX/UI, development, testing, deployment and optimization." },
  { href: "/technology", title: "Technology", type: "Page", text: "Frontend, backend, mobile, databases, cloud, DevOps, security and integrations." },
  { href: "/about", title: "About Eryon", type: "Page", text: "Software engineering and digital product company in New Delhi, India." },
  { href: "/contact", title: "Contact", type: "Page", text: "Start a project. Email, phone and location." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Search", path: "/search" }]} eyebrow="Search" title="Find what you're looking for." />
      <div className="container-x max-w-4xl py-16"><SearchClient docs={docs} /></div>
    </>
  );
}
