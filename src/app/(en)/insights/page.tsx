import InsightsView, { insightsMeta } from "@/views/insights";

export const metadata = insightsMeta("en");

export default function Page() {
  return <InsightsView lang="en" />;
}
