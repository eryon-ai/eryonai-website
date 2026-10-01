import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { Logo } from "./ui";
import { CookieSettingsButton } from "./CookieBanner";
import Newsletter from "./Newsletter";
import { lp, type Lang } from "@/i18n/config";
import { getMessages, lIndustry, lService, lines } from "@/i18n";

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="t-meta text-white/50">{title}</h2>
      <ul className="mt-5 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-9 items-center text-[0.95rem] text-white/80 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const m = getMessages(lang);
  const t = m.ui.footer;
  const L = (href: string) => lp(href, lang);
  const company = [
    { href: L("/work"), label: t.links.work },
    { href: L("/process"), label: t.links.process },
    { href: L("/technology"), label: t.links.technology },
    { href: L("/insights"), label: t.links.insights },
    { href: L("/about"), label: t.links.about },
    { href: "/careers", label: t.links.careers },
    { href: L("/contact"), label: t.links.contact },
  ];
  const legal = [
    { href: L("/privacy"), label: t.legal.privacy },
    { href: L("/terms"), label: t.legal.terms },
    { href: L("/cookie-policy"), label: t.legal.cookie },
    { href: "/accessibility", label: t.legal.accessibility },
    { href: "/site-map", label: t.legal.sitemap },
  ];
  return (
    <footer className="bg-[#081629] text-white">
      <div className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-white/70">{t.blurb}</p>
            <dl className="mt-8 space-y-4 text-[0.95rem]">
              <div>
                <dt className="t-meta text-white/50">{t.email}</dt>
                <dd><a href={`mailto:${site.email}`} className="text-white hover:underline">{site.email}</a></dd>
              </div>
              <div>
                <dt className="t-meta text-white/50">{t.phone}</dt>
                <dd><a href={site.phoneHref} className="text-white hover:underline">{site.phone}</a></dd>
              </div>
              <div>
                <dt className="t-meta text-white/50">{t.india}</dt>
                <dd className="text-white/80">{site.postal}, {site.country}</dd>
              </div>
              <div>
                <dt className="t-meta text-white/50">{t.global}</dt>
                <dd className="text-white/80">{t.globalText}</dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <Col title={t.services} links={services.map((s) => ({ href: `/services/${s.slug}`, label: lService(s, lang).nav }))} />
            <Col title={t.industries} links={industries.map((i) => ({ href: `/industries/${i.slug}`, label: lIndustry(i, lang).name }))} />
            <div className="space-y-10">
              <Col title={t.company} links={company} />
              <div>
                <h2 className="t-meta text-white/50">{t.follow}</h2>
                <ul className="mt-5 flex flex-wrap gap-5 text-[0.95rem]">
                  <li><a href={site.social.linkedin} className="text-white/80 hover:text-white" rel="noopener" target="_blank">LinkedIn</a></li>
                  <li><a href={site.social.github} className="text-white/80 hover:text-white" rel="noopener" target="_blank">GitHub</a></li>
                  <li><a href={site.social.instagram} className="text-white/80 hover:text-white" rel="noopener" target="_blank">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/10 pt-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-white">{t.newsletterTitle}</h2>
            <p className="mt-2 text-white/65">{t.newsletterText}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><Newsletter dark t={m.ui.newsletter} /></div>
        </div>

        <p className="font-display mt-20 border-t border-white/10 pt-12 text-[clamp(2rem,1rem+4vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
          {lines(t.statement)}
        </p>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {site.founded}–{new Date().getFullYear()} {site.legalName}. {t.rights}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
            <li><CookieSettingsButton className="hover:text-white" label={t.cookieSettings} /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
