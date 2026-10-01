import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { ArrowLink, Breadcrumbs, Chips, CtaBand, Eyebrow, Shot } from "@/components/ui";
import { CaseStudyCard } from "@/components/cards";
import { getProject, projects } from "@/lib/work";
import { servicesBy } from "@/lib/services";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const p = getProject((await params).slug)!;
  return pageMeta({
    title: `${p.title} Case Study`,
    description: `${p.challenge} ${p.solution}`.slice(0, 158),
    path: `/work/${p.slug}`,
    type: "article",
  });
}

const toc = [
  ["overview", "Project overview"], ["challenge", "The challenge"], ["approach", "The approach"], ["architecture", "The architecture"],
  ["product", "The product"], ["features", "Key features"], ["ux", "UX decisions"], ["technology", "Technology"],
  ["deployment", "Deployment"], ["outcome", "Outcome"], ["gallery", "Gallery"],
] as const;

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-32 border-t border-line py-12 first:border-t-0 first:pt-0">
      <h2 id={`${id}-h`} className="t-h3">{title}</h2>
      <div className="mt-5 text-body">{children}</div>
    </section>
  );
}

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="grid gap-3">
    {items.map((x) => (
      <li key={x} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 bg-blue" aria-hidden="true" /><span>{x}</span></li>
    ))}
  </ul>
);

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const svcs = servicesBy(p.services);
  const ind = getIndustry(p.industry);
  const related = projects
    .filter((x) => x.slug !== p.slug)
    .map((x) => ({ x, score: (x.industry === p.industry ? 2 : 0) + x.services.filter((s) => p.services.includes(s)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((r) => r.x);

  return (
    <>
      <section className="bg-grid border-b border-line">
        <div className="container-x pb-14 pt-10 md:pt-14">
          <Breadcrumbs items={[{ name: "Our Work", path: "/work" }, { name: p.title, path: `/work/${p.slug}` }]} />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="hero-in"><Eyebrow>{p.industryLabel} · Case Study</Eyebrow></div>
              <h1 className="t-h1 hero-in-2 mt-6">{p.title}</h1>
              <p className="t-lead hero-in-3 mt-6 max-w-2xl text-body">{p.outcome}</p>
            </div>
            <dl className="hero-in-3 grid grid-cols-2 gap-x-6 gap-y-5 self-end border-t border-ink pt-6 text-[0.95rem] lg:col-span-4">
              <div><dt className="t-meta text-muted">Industry</dt><dd className="mt-1">{ind ? <Link href={`/industries/${ind.slug}`} className="text-blue hover:underline">{ind.name}</Link> : p.industryLabel}</dd></div>
              <div><dt className="t-meta text-muted">Platform</dt><dd className="mt-1 text-ink">{p.platform}</dd></div>
              <div><dt className="t-meta text-muted">Business type</dt><dd className="mt-1 text-ink">{p.businessType}</dd></div>
              <div><dt className="t-meta text-muted">Scope</dt><dd className="mt-1 text-ink">{p.kind}</dd></div>
              <div className="col-span-2">
                <dt className="t-meta text-muted">Services</dt>
                <dd className="mt-1 flex flex-wrap gap-x-4">{svcs.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="text-blue hover:underline">{s.nav}</Link>)}</dd>
              </div>
              {p.live && (
                <div className="col-span-2">
                  <dt className="t-meta text-muted">Live build</dt>
                  <dd className="mt-1">
                    <a href={p.live} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-blue">
                      View live build <ExternalLink className="size-4" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      <div className="container-x pt-12">
        {p.mobileShots ? (
          <div className="grid grid-cols-3 gap-4 rounded-md bg-mist p-6 md:gap-10 md:p-14">
            {p.images.slice(0, 3).map((src, i) => <Shot key={src} src={src} alt={i === 0 ? `${p.title} app screens` : ""} mobile priority={i === 0} sizes="30vw" />)}
          </div>
        ) : (
          <Shot src={p.images[0]} alt={p.imageAlts?.[0] ?? `${p.title}: ${p.kind}`} bare={!!p.imageAlts} position={p.heroPosition} priority sizes="(min-width: 1600px) 1392px, (min-width: 1360px) 1264px, 100vw" ratio="aspect-[16/9]" />
        )}
      </div>

      <section aria-label="Impact" className="container-x pt-20">
        <div className="grid gap-6 border-b border-line pb-16 lg:grid-cols-12">
          <p className="t-meta text-blue lg:col-span-3">Impact</p>
          <blockquote className="t-h2 font-display font-semibold text-ink lg:col-span-9">{p.outcomeLong.split(". ")[0].replace(/\.$/, "")}.</blockquote>
        </div>
      </section>

      <div className="container-x grid gap-12 pb-20 pt-16 lg:grid-cols-12">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-36">
            <p className="t-meta text-muted">On this page</p>
            <ol className="mt-4 space-y-1 border-l border-line">
              {toc.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-[0.95rem] text-muted hover:border-blue hover:text-ink">{label}</a></li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="lg:col-span-8 lg:col-start-5">
          <Block id="overview" title="Project overview"><p className="t-lead">{p.overview}</p></Block>
          <Block id="challenge" title="The challenge"><p>{p.challengeLong}</p></Block>
          <Block id="approach" title="The approach"><p>{p.approach}</p></Block>
          <Block id="architecture" title="The architecture"><Bullets items={p.architecture} /></Block>
          <Block id="product" title="The product"><p>{p.product}</p></Block>
          <Block id="features" title="Key features">
            <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
              {p.features.map((f) => <li key={f} className="bg-white p-5 font-medium text-ink">{f}</li>)}
            </ul>
          </Block>
          <Block id="ux" title="UX decisions"><Bullets items={p.ux} /></Block>
          <Block id="technology" title="Technology"><Chips items={p.tech} /></Block>
          <Block id="deployment" title="Deployment"><p>{p.deployment}</p></Block>
          <Block id="outcome" title="Outcome">
            <div className="rounded-md bg-navy p-8 text-white md:p-10">
              <p className="t-lead text-white/90">{p.outcomeLong}</p>
            </div>
          </Block>
          <Block id="gallery" title="Gallery">
            <ul className={`grid gap-6 ${p.mobileShots ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {p.images.slice(1).map((src, i) => (
                <li key={src}>
                  {p.mobileShots ? (
                    <Shot src={src} alt={`${p.title} screen ${i + 2}`} mobile sizes="25vw" />
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-white">
                      <Image src={src} alt={p.imageAlts?.[i + 1] ?? `${p.title} screen ${i + 2}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Block>
        </article>
      </div>

      <section className="border-t border-line bg-white">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="t-h2">Related work</h2>
            <ArrowLink href="/work">All case studies</ArrowLink>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <li key={r.slug}><CaseStudyCard p={r} /></li>)}
          </ul>
        </div>
      </section>

      <CtaBand title={<>Need something<br />like {p.title}?</>} text="Tell us about the operation behind it. We'll reply within 24 hours." />
    </>
  );
}
