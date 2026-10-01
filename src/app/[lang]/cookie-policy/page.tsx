import LegalView, { legalMeta } from "@/views/legal";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/cookie-policy">) {
  return legalMeta("cookie", (await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/cookie-policy">) {
  return <LegalView kind="cookie" lang={(await params).lang as Locale} />;
}
