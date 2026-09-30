import TechnologyView, { technologyMeta } from "@/views/technology";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/technology">) {
  return technologyMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/technology">) {
  return <TechnologyView lang={(await params).lang as Locale} />;
}
