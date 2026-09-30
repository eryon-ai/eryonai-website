import ServicesView, { servicesMeta } from "@/views/services";

export const metadata = servicesMeta("en");

export default function Page() {
  return <ServicesView lang="en" />;
}
