import HomeView, { homeMeta } from "@/views/home";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  return homeMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  return <HomeView lang={(await params).lang as Locale} />;
}
