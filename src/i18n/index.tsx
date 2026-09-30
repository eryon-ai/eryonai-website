import type { Service } from "@/lib/services";
import type { Industry } from "@/lib/industries";
import type { Project } from "@/lib/work";
import type { Article } from "@/lib/insights";
import { LANG_INFO, type Lang } from "./config";
import { en, type Messages } from "./messages/en";
import { ja } from "./messages/ja";
import { de } from "./messages/de";
import { fr } from "./messages/fr";
import { es } from "./messages/es";
import { ar } from "./messages/ar";

const messages: Record<Lang, Messages> = { en, ja, de, fr, es, ar };

export const getMessages = (lang: Lang) => messages[lang];

/** "\n" in a message marks a desktop-only line break. */
export function lines(s: string) {
  return s.split("\n").flatMap((part, i) => (i ? [<br key={i} className="hidden md:block" />, part] : [part]));
}

export const fmtDate = (iso: string, lang: Lang = "en") =>
  new Date(iso).toLocaleDateString(LANG_INFO[lang].date, { day: "numeric", month: "short", year: "numeric" });

// Overlay translated fields on the English data objects (English passes through untouched).
export function lService(s: Service, lang: Lang): Service {
  const d = messages[lang].data.services[s.slug];
  if (lang === "en" || !d) return s;
  return {
    ...s, title: d.title, nav: d.nav, value: d.value, summary: d.summary,
    offerings: s.offerings.map((o, i) => ({ ...o, title: d.offerings[i] ?? o.title })),
    deliverables: s.deliverables.map((x, i) => d.deliverables[i] ?? x),
    useCases: s.useCases.map((u, i) => ({ ...u, title: d.useCases[i] ?? u.title })),
  };
}

export function lIndustry(i: Industry, lang: Lang): Industry {
  const d = messages[lang].data.industries[i.slug];
  return lang === "en" || !d ? i : { ...i, ...d };
}

export function lProject(p: Project, lang: Lang): Project {
  const d = messages[lang].data.projects[p.slug];
  return lang === "en" || !d ? p : { ...p, ...d };
}

export function lArticle(a: Article, lang: Lang): Article {
  const d = messages[lang].data.articles[a.slug];
  if (lang === "en" || !d) return a;
  return {
    ...a, title: d.title, subtitle: d.subtitle, summary: d.summary, imageAlt: d.imageAlt, takeaways: d.takeaways,
    author: messages[lang].article.authorName,
    sections: a.sections.map((s, i) => ({ ...s, ...d.sections[i] })),
  };
}

export const lCategory = (slug: string, lang: Lang) => messages[lang].data.categories[slug] ?? slug;
