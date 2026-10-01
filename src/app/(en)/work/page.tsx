import WorkView, { workMeta } from "@/views/work";

export const metadata = workMeta("en");

export default function Page() {
  return <WorkView lang="en" />;
}
