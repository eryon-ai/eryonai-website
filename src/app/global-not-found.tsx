import "./globals.css";
import SiteShell, { rootMetadata } from "@/components/SiteShell";
import { NotFoundContent } from "@/components/NotFoundContent";

// Unmatched URLs across both root layouts (English and /[lang]) land here.
export const metadata = { ...rootMetadata("en"), title: "Page not found", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <NotFoundContent />
    </SiteShell>
  );
}
