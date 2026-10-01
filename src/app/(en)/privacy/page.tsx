import LegalView, { legalMeta } from "@/views/legal";

export const metadata = legalMeta("privacy", "en");

export default function Page() {
  return <LegalView kind="privacy" lang="en" />;
}
