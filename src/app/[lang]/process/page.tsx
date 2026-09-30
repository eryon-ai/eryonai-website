import ProcessView, { processMeta } from "@/views/process";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/process">) {
  return processMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/process">) {
  return <ProcessView lang={(await params).lang as Locale} />;
}
