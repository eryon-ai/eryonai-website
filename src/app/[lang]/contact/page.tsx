import ContactView, { contactMeta } from "@/views/contact";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  return contactMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  return <ContactView lang={(await params).lang as Locale} />;
}
