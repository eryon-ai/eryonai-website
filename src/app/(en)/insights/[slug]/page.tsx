import ArticleView, { articleMeta } from "@/views/article";
import { articles } from "@/lib/insights";

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  return articleMeta((await params).slug, "en");
}

export default async function Page({ params }: PageProps<"/insights/[slug]">) {
  return <ArticleView slug={(await params).slug} lang="en" />;
}
