import LegalView, { legalMeta } from "@/views/legal";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  return legalMeta("terms", (await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  return <LegalView kind="terms" lang={(await params).lang as Locale} />;
}
