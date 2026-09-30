import type { MetadataRoute } from "next";
import { routeGroups } from "@/lib/routes";
import { articles } from "@/lib/insights";
import { abs } from "@/lib/seo";
import { LANGS, isTranslated, lp } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Map(articles.map((a) => [`/insights/${a.slug}`, a.updated]));
  return routeGroups.flatMap((g) =>
    g.links.flatMap((l) => {
      const base = {
        lastModified: updated.get(l.path) ?? "2026-09-23",
        changeFrequency: (l.path === "/" || l.path === "/insights" ? "weekly" : "monthly") as "weekly" | "monthly",
        priority: l.path === "/" ? 1 : l.path.split("/").length === 2 ? 0.8 : 0.6,
      };
      if (!isTranslated(l.path)) return [{ url: abs(l.path), ...base }];
      // One entry per language, each listing all its alternates (hreflang).
      const languages = { ...Object.fromEntries(LANGS.map((x) => [x, abs(lp(l.path, x))])), "x-default": abs(l.path) };
      return LANGS.map((x) => ({ url: abs(lp(l.path, x)), ...base, alternates: { languages } }));
    }),
  );
}
