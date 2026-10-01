import ServicesView, { servicesMeta } from "@/views/services";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">) {
  return servicesMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/services">) {
  return <ServicesView lang={(await params).lang as Locale} />;
}
