import Link from "next/link";
import { PageHero } from "@/components/ui";
import { routeGroups } from "@/lib/routes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Sitemap", description: "Every page on the Eryon website.", path: "/site-map" });

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Sitemap", path: "/site-map" }]} eyebrow="Sitemap" title="Every page, in one place." />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {routeGroups.map((g) => (
          <section key={g.title}>
            <h2 className="t-meta border-b border-ink pb-3 text-ink">{g.title}</h2>
            <ul className="mt-4 space-y-1">
              {g.links.map((l) => (
                <li key={l.path}><Link href={l.path} className="inline-flex min-h-9 items-center text-body hover:text-blue">{l.title}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
