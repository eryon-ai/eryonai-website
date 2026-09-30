import AboutView, { aboutMeta } from "@/views/about";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  return aboutMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  return <AboutView lang={(await params).lang as Locale} />;
}
