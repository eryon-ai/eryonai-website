import { ButtonLink, PageHero } from "@/components/ui";
import { ConversionPing } from "@/components/Analytics";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages } from "@/i18n";

export const contactSuccessMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.contactSuccess, path: "/contact/success", noindex: true, lang });

export default function ContactSuccessView({ lang }: { lang: Lang }) {
  const t = getMessages(lang).contactSuccess;
  return (
    <>
      <ConversionPing />
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={<p>{t.textBefore} <a href={site.phoneHref} className="text-blue underline underline-offset-4" dir="ltr">{site.phone}</a>.</p>}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={lp("/work", lang)} variant="secondary">{t.work}</ButtonLink>
          <ButtonLink href={lp("/process", lang)} variant="secondary">{t.process}</ButtonLink>
        </div>
      </PageHero>
    </>
  );
}
