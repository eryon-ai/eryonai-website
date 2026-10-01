import LegalView, { legalMeta } from "@/views/legal";

export const metadata = legalMeta("cookie", "en");

export default function Page() {
  return <LegalView kind="cookie" lang="en" />;
}
