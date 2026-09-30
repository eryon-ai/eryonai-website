import InsightsView, { insightsMeta } from "@/views/insights";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/insights">) {
  return insightsMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/insights">) {
  return <InsightsView lang={(await params).lang as Locale} />;
}
