import { ButtonLink, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Thank you", description: "Thank you from Eryon.", path: "/thank-you", noindex: true });

export default function Page() {
  return (
    <PageHero eyebrow="Thank you" title="Thanks — that's received." intro={<p>We&apos;ve got what we need. In the meantime, here&apos;s where to find out more about how we work.</p>}>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/insights" variant="secondary">Read our insights</ButtonLink>
      </div>
    </PageHero>
  );
}
