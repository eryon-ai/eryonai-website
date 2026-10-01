import type { Viewport } from "next";
import "../globals.css";
import SiteShell, { rootMetadata } from "@/components/SiteShell";

export const metadata = rootMetadata("en");
export const viewport: Viewport = { themeColor: "#0b1f3a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
