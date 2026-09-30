import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { industries } from "@/lib/industries";
import { projectsBy } from "@/lib/work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries — Software for Real Operations",
  description:
    "Software for real estate, healthcare, education, retail, manufacturing, logistics, finance, hospitality and more — built around each sector's operations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries" }]}
        eyebrow="Industries"
        title={<>Every sector runs differently.<br className="hidden md:block" /> Its software should too.</>}
        intro="We start every engagement by learning how the operation works — who does what, where information changes hands and what can never go wrong. These are the sectors where we have done that work."
      />
      <div className="container-x py-16 md:py-24">
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {industries.map((ind, i) => {
            const work = projectsBy(ind.work);
            return (
              <li key={ind.slug} className={i === 0 ? "md:col-span-2" : ""}>
                <Link href={`/industries/${ind.slug}`} className={`group flex h-full flex-col p-8 transition-colors md:p-12 ${i === 0 ? "bg-navy text-white hover:bg-navy-2" : "bg-paper hover:bg-white"}`}>
                  <div className="flex items-start justify-between gap-6">
                    <span className={`font-mono text-sm ${i === 0 ? "text-white/60" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <ArrowUpRight className={`size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${i === 0 ? "text-white" : "text-blue"}`} aria-hidden="true" />
                  </div>
                  <h2 className={`t-h2 mt-8 ${i === 0 ? "text-white" : ""}`}>{ind.name}</h2>
                  <p className={`mt-4 max-w-2xl ${i === 0 ? "t-lead text-white/75" : "text-body"}`}>{ind.challenge}</p>
                  <p className={`t-meta mt-8 ${i === 0 ? "text-white/60" : "text-muted"}`}>
                    {ind.systems.slice(0, 3).map((s) => s.title).join(" · ")}
                  </p>
                  {work.length > 0 && (
                    <p className={`mt-3 text-sm ${i === 0 ? "text-white/70" : "text-steel"}`}>
                      Case {work.length === 1 ? "study" : "studies"}: {work.map((w) => w.title).join(", ")}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <CtaBand title="Your sector isn't listed?" text="Most operational problems are more alike than they look. Tell us how your business works and we'll tell you what we'd build." />
    </>
  );
}
