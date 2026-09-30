import { LegalDoc as Legal } from "@/components/Legal";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Accessibility Statement", description: "Eryon's commitment to making this website accessible, and how to report a problem.", path: "/accessibility" });

export default function Page() {
  return (
    <Legal
      crumb="Accessibility"
      path="/accessibility"
      title="Accessibility Statement"
      updated="2026-09-23"
      intro="We want everyone to be able to use this website, including people using assistive technology, keyboard navigation or zoom."
      sections={[
        { h: "Our target", p: ["We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA."] },
        { h: "What we've done", p: ["Semantic HTML with a logical heading structure and landmarks.", "A skip link to the main content and visible focus indicators.", "Text and interface colours chosen to meet AA contrast ratios.", "All functionality available by keyboard, including menus and filters.", "Descriptive alternative text for meaningful images.", "Animations that respect your system's reduced-motion setting.", "Forms with visible labels, required-field markers and clear error messages."] },
        { h: "Known limitations", p: ["Some case-study screenshots contain small interface text. The key information in each screenshot is also described in the page text."] },
        { h: "Report a problem", p: [<>If something on this website doesn&apos;t work for you, email <a href={`mailto:${site.email}?subject=Accessibility`} className="text-blue underline">{site.email}</a> with the page address and what happened. We aim to reply within five business days.</>] },
      ]}
    />
  );
}
