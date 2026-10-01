import { Mail, MapPin, Phone } from "lucide-react";
import { Eyebrow, Faq, JsonLd, PageHero, Section } from "@/components/ui";
import AjaxForm, { Field } from "@/components/AjaxForm";
import { services } from "@/lib/services";
import { credentials, site } from "@/lib/site";
import { faqLd, pageMeta } from "@/lib/seo";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lService } from "@/i18n";

export const contactMeta = (lang: Lang) => pageMeta({ ...getMessages(lang).meta.contact, path: "/contact", lang });

export default function ContactView({ lang }: { lang: Lang }) {
  const m = getMessages(lang);
  const t = m.contact;
  const f = t.fields;
  const L = (href: string) => lp(href, lang);
  const fx = { optional: m.ui.form.optional, select: m.ui.form.select };
  return (
    <>
      <PageHero
        crumbs={[{ name: t.crumb, path: L("/contact") }]}
        home={{ name: m.ui.common.home, path: L("/") }}
        eyebrow={t.eyebrow}
        title={t.title}
        intro={<p>{t.intro}</p>}
      />

      <div id="form" className="container-x grid scroll-mt-28 gap-14 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="t-h3">{t.formTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.required}</p>
          <div className="mt-8">
            <AjaxForm action="/api/contact" success={L("/contact/success")} submitLabel={t.submit} captchaAction="contact" t={m.ui.form}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field name="name" label={f.name} required autoComplete="name" {...fx} />
                <Field name="email" label={f.email} type="email" required autoComplete="email" {...fx} />
                <Field name="company" label={f.company} autoComplete="organization" {...fx} />
                <Field name="phone" label={f.phone} type="tel" autoComplete="tel" {...fx} />
              </div>
              <Field name="projectType" label={f.projectType} required options={[...services.map((s) => lService(s, lang).title), ...t.projectExtra]} {...fx} />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field name="budget" label={f.budget} options={t.budgets} {...fx} />
                <Field name="timeline" label={f.timeline} options={t.timelines} {...fx} />
              </div>
              <Field name="message" label={f.message} required rows={6} hint={f.messageHint} {...fx} />
            </AjaxForm>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-32">
            <h2 className="t-h3">{t.other.title}</h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line">
              <li className="bg-white p-6">
                <p className="t-meta flex items-center gap-2 text-muted"><Mail className="size-4" aria-hidden="true" />{t.other.email}</p>
                <a href={`mailto:${site.email}`} className="mt-2 block font-display text-lg font-semibold text-ink hover:text-blue">{site.email}</a>
              </li>
              <li className="bg-white p-6">
                <p className="t-meta flex items-center gap-2 text-muted"><Phone className="size-4" aria-hidden="true" />{t.other.phone}</p>
                <a href={site.phoneHref} className="mt-2 block font-display text-lg font-semibold text-ink hover:text-blue">{site.phone}</a>
              </li>
              <li className="bg-white p-6">
                <p className="t-meta flex items-center gap-2 text-muted"><MapPin className="size-4" aria-hidden="true" />{t.other.location}</p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{t.other.locationValue}</p>
                <p className="mt-1 text-sm text-muted">{t.other.remote}</p>
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.other.credentials}>
              {credentials.map((c, i) => (
                <li key={c.title} className="rounded-[3px] border border-line bg-white px-3 py-1.5 font-mono text-xs text-ink">{m.data.credentials[i].title}</li>
              ))}
              <li className="rounded-[3px] border border-line bg-white px-3 py-1.5 font-mono text-xs text-ink">{t.other.nda}</li>
            </ul>
          </div>
        </aside>
      </div>

      <Section tone="white">
        <Eyebrow>{t.next.eyebrow}</Eyebrow>
        <h2 className="t-h2 mt-5">{t.next.title}</h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.next.items.map((s, i) => (
            <li key={s.t} className="bg-white p-7">
              <p className="font-mono text-sm text-blue">0{i + 1}</p>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-[0.95rem] text-body">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{m.ui.common.faqs}</Eyebrow>
            <h2 className="t-h2 mt-5">{t.faq.title}</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={t.faq.items} /></div>
        </div>
      </Section>
      <JsonLd data={faqLd(t.faq.items)} />
    </>
  );
}
