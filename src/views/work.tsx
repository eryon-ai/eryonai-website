import { CtaBand, PageHero } from "@/components/ui";
import { CaseStudyCard } from "@/components/cards";
import FilterGrid from "@/components/FilterGrid";
import { projects } from "@/lib/work";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lIndustry, lProject, lService, lines } from "@/i18n";

export const workMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.work, path: "/work", lang });

const uniq = (xs: string[]) => [...new Set(xs)];

export default function WorkView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.work;
  const L = (href: string) => lp(href, lang);
  const usedInd = uniq(projects.map((p) => p.industry));
  const usedSvc = uniq(projects.flatMap((p) => p.services));
  const groups = [
    { key: "industry", label: t.filters.industry, options: usedInd.map((slug) => { const ind = industries.find((i) => i.slug === slug); return { value: slug, label: ind ? lIndustry(ind, lang).name : lProject(projects.find((p) => p.industry === slug)!, lang).industryLabel }; }) },
    { key: "service", label: t.filters.service, options: services.filter((s) => usedSvc.includes(s.slug)).map((s) => ({ value: s.slug, label: lService(s, lang).nav })) },
    { key: "platform", label: t.filters.platform, options: ["Web", "Mobile", "Web + Mobile"].map((v) => ({ value: v, label: m.data.platforms[v] ?? v })) },
    { key: "business", label: t.filters.business, options: ["B2B", "B2C", "Internal operations"].map((v) => ({ value: v, label: m.data.business[v] ?? v })) },
  ];
  const items = projects.map((p) => ({
    id: p.slug,
    facets: { industry: [p.industry], service: p.services, platform: [p.platform], business: [p.businessType] },
    node: <CaseStudyCard p={p} lang={lang} />,
  }));

  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/work") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={lines(t.title)}
        intro={lang === "en" ? t.intro : `${t.intro} ${t.detailsInEnglish}`}
      />
      <div className="container-x py-16 md:py-20">
        <h2 className="sr-only">{t.all}</h2>
        <FilterGrid groups={groups} items={items} t={m.ui.common} gridClass="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" />
      </div>
      <CtaBand title={lines(m.ui.cta.title)} text={m.ui.cta.text} start={{ label: m.ui.common.start, href: L("/contact") }} work={{ label: m.ui.common.viewWork, href: L("/work") }} />
    </>
  );
}
