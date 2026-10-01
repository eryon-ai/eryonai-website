import type { Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import SiteShell, { rootMetadata } from "@/components/SiteShell";
import { LOCALES, isLocale } from "@/i18n/config";

// Root layout for /ja, /de, /fr, /es and /ar. English has its own root layout in app/(en).
export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));
export const viewport: Viewport = { themeColor: "#0b1f3a", width: "device-width", initialScale: 1 };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return isLocale(lang) ? rootMetadata(lang) : {};
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
