import WorkView, { workMeta } from "@/views/work";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/work">) {
  return workMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/work">) {
  return <WorkView lang={(await params).lang as Locale} />;
}
