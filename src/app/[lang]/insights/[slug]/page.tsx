import ArticleView, { articleMeta } from "@/views/article";
import { articles } from "@/lib/insights";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: PageProps<"/[lang]/insights/[slug]">) {
  const { lang, slug } = await params;
  return articleMeta(slug, lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/insights/[slug]">) {
  const { lang, slug } = await params;
  return <ArticleView slug={slug} lang={lang as Locale} />;
}
