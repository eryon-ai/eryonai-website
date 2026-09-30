import ContactSuccessView, { contactSuccessMeta } from "@/views/contact-success";

export const metadata = contactSuccessMeta("en");

export default function Page() {
  return <ContactSuccessView lang="en" />;
}
