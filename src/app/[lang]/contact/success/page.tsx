import ContactSuccessView, { contactSuccessMeta } from "@/views/contact-success";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact/success">) {
  return contactSuccessMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/contact/success">) {
  return <ContactSuccessView lang={(await params).lang as Locale} />;
}
