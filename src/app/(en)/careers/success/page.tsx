import { ButtonLink, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Application received", description: "Thank you for applying to Eryon.", path: "/careers/success", noindex: true });

export default function Page() {
  return (
    <PageHero
      eyebrow="Application received"
      title="Thank you for applying."
      intro={<p>We read every application and will reply by email, usually within a week. If your profile fits, the next step is a 30-minute introductory call.</p>}
    >
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/work" variant="secondary">See what we build</ButtonLink>
        <ButtonLink href="/insights" variant="secondary">Read our insights</ButtonLink>
      </div>
    </PageHero>
  );
}
