import LegalView, { legalMeta } from "@/views/legal";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  return legalMeta("privacy", (await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  return <LegalView kind="privacy" lang={(await params).lang as Locale} />;
}
