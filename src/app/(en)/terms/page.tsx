import LegalView, { legalMeta } from "@/views/legal";

export const metadata = legalMeta("terms", "en");

export default function Page() {
  return <LegalView kind="terms" lang="en" />;
}
