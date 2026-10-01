import ProcessView, { processMeta } from "@/views/process";

export const metadata = processMeta("en");

export default function Page() {
  return <ProcessView lang="en" />;
}
