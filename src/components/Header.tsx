"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { Logo } from "./ui";
import { LANGS, LANG_INFO, isTranslated, lp, splitLang, type Lang } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";

type NavLink = { href: string; label: string; note?: string };
export type NavData = {
  services: NavLink[];
  industries: NavLink[];
  insights: NavLink[];
  latest: { href: string; title: string };
};
type Strings = { nav: Messages["ui"]["nav"]; header: Messages["ui"]["header"] };
type MenuKey = "services" | "industries" | "insights";

/** Where each language version of the current page lives (home of that language if the page isn't translated). */
function langHref(pathname: string, target: Lang) {
  const { path } = splitLang(pathname);
  if (isTranslated(path)) return lp(path, target);
  return target === "en" ? path : `/${target}`;
}

function rememberLang(l: Lang) {
  document.cookie = `eryon_lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export default function Header({ nav, t, lang }: { nav: NavData; t: Strings; lang: Lang }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey | "lang" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const ref = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const top = [
    { label: t.nav.whatWeDo, href: "/services", menu: "services" as const },
    { label: t.nav.industries, href: "/industries", menu: "industries" as const },
    { label: t.nav.work, href: "/work" },
    { label: t.nav.process, href: "/process" },
    { label: t.nav.insights, href: "/insights", menu: "insights" as const },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.careers, href: "/careers" },
  ];
  const L = (href: string) => lp(href, lang);
  const mobileAll = { services: t.header.mobileAll.services, industries: t.header.mobileAll.industries, insights: t.header.mobileAll.insights };

  // Close everything on navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(null), setMobile(false));
    const onClick = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const hover = (key: MenuKey | null) => {
    clearTimeout(closeTimer.current);
    if (key) setOpen(key);
    else closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  const current = splitLang(pathname).path;
  const active = (href: string) => current === href || current.startsWith(href + "/");

  return (
    <header ref={ref} className="sticky top-0 z-40">
      <div className="bg-navy text-white">
        <div className="container-x flex min-h-10 items-center justify-center gap-3 py-2 text-center text-[0.8125rem] md:justify-between">
          <p className="text-white/80">
            <span className="t-meta me-2 text-white/60">{t.header.newGuide}</span>
            <Link href={nav.latest.href} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {nav.latest.title}
            </Link>
          </p>
          <p className="hidden text-white/60 md:block">{t.header.banner}</p>
        </div>
      </div>

      <div className="border-b border-line bg-paper/95 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/85">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Link href={L("/")} aria-label="Eryon home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {top.map((item) => (
                <li
                  key={item.href}
                  onMouseEnter={() => hover("menu" in item && item.menu ? item.menu : null)}
                  onMouseLeave={() => hover(null)}
                >
                  {"menu" in item && item.menu ? (
                    <button
                      type="button"
                      aria-expanded={open === item.menu}
                      aria-controls={`mega-${item.menu}`}
                      onClick={() => setOpen(open === item.menu ? null : item.menu!)}
                      className={`flex h-11 items-center gap-1 whitespace-nowrap rounded px-3 text-[0.95rem] font-medium transition-colors hover:text-blue ${active(item.href) || open === item.menu ? "text-blue" : "text-ink"}`}
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition-transform duration-200 ${open === item.menu ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      href={L(item.href)}
                      aria-current={active(item.href) ? "page" : undefined}
                      className={`flex h-11 items-center whitespace-nowrap rounded px-3 text-[0.95rem] font-medium transition-colors hover:text-blue ${active(item.href) ? "text-blue" : "text-ink"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <div className="relative hidden sm:block">
              <button
                type="button"
                aria-expanded={open === "lang"}
                aria-controls="lang-menu"
                aria-label={t.nav.language}
                onClick={() => setOpen(open === "lang" ? null : "lang")}
                className="flex h-11 items-center gap-1.5 rounded px-2 text-[0.9rem] font-medium text-ink hover:text-blue"
              >
                <Globe className="size-[1.1rem]" aria-hidden="true" />
                <span className="uppercase">{lang}</span>
              </button>
              <ul id="lang-menu" hidden={open !== "lang"} className="absolute end-0 top-full mt-2 w-44 overflow-hidden rounded-md border border-line bg-white py-1 shadow-[0_16px_32px_-16px_rgb(14_23_38/0.3)]">
                {LANGS.map((l) => (
                  <li key={l}>
                    <Link
                      href={langHref(pathname, l)}
                      hrefLang={l}
                      lang={l}
                      onClick={() => rememberLang(l)}
                      aria-current={l === lang ? "true" : undefined}
                      className={`flex min-h-10 items-center justify-between px-4 text-[0.95rem] hover:bg-mist ${l === lang ? "font-semibold text-blue" : "text-ink"}`}
                    >
                      {LANG_INFO[l].native}<span className="font-mono text-xs uppercase text-muted">{l}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/search" aria-label={t.nav.search} className="grid size-11 place-items-center rounded text-ink hover:text-blue">
              <Search className="size-5" aria-hidden="true" />
            </Link>
            <Link href={L("/contact")} className="hidden h-11 items-center whitespace-nowrap px-3 text-[0.95rem] font-medium text-ink hover:text-blue lg:flex xl:hidden 2xl:flex">
              {t.nav.contact}
            </Link>
            <Link
              href={L("/contact")}
              className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-[3px] bg-blue px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-blue-dark sm:inline-flex"
            >
              {t.nav.start}
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded text-ink xl:hidden"
              aria-label={t.nav.openMenu}
              aria-expanded={mobile}
              aria-controls="mobile-nav"
              onClick={() => setMobile(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>

        {/* Desktop mega menus */}
        {(["services", "industries", "insights"] as const).map((key) => (
          <div
            key={key}
            id={`mega-${key}`}
            hidden={open !== key}
            onMouseEnter={() => hover(key)}
            onMouseLeave={() => hover(null)}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_48px_-32px_rgb(14_23_38/0.35)] xl:block"
          >
            <MegaPanel k={key} nav={nav} t={t} lang={lang} />
          </div>
        ))}
      </div>

      {/* Mobile navigation */}
      <div id="mobile-nav" hidden={!mobile} className="fixed inset-0 z-50 overflow-y-auto bg-paper xl:hidden">
        <div className="container-x flex h-[4.5rem] items-center justify-between border-b border-line">
          <Link href={L("/")} aria-label="Eryon home"><Logo /></Link>
          <button type="button" className="grid size-11 place-items-center rounded text-ink" aria-label={t.nav.closeMenu} onClick={() => setMobile(false)}>
            <X className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-x pb-32 pt-4">
          <ul className="border-t border-line">
            {top.map((item) =>
              "menu" in item && item.menu ? (
                <li key={item.href} className="border-b border-line">
                  <details>
                    <summary className="flex min-h-14 items-center justify-between font-display text-xl font-semibold text-ink">
                      {item.label}
                      <ChevronDown className="size-5" aria-hidden="true" />
                    </summary>
                    <ul className="grid gap-1 pb-5">
                      <li>
                        <Link href={L(item.href)} className="flex min-h-11 items-center font-semibold text-blue">{mobileAll[item.menu]}</Link>
                      </li>
                      {nav[item.menu].map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="flex min-h-11 items-center text-body">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href} className="border-b border-line">
                  <Link href={L(item.href)} className="flex min-h-14 items-center font-display text-xl font-semibold text-ink">{item.label}</Link>
                </li>
              ),
            )}
            <li className="border-b border-line">
              <Link href={L("/contact")} className="flex min-h-14 items-center font-display text-xl font-semibold text-ink">{t.nav.contact}</Link>
            </li>
          </ul>
          <p className="t-meta mt-8 text-muted">{t.nav.language}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {LANGS.map((l) => (
              <li key={l}>
                <Link
                  href={langHref(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  onClick={() => rememberLang(l)}
                  className={`inline-flex min-h-11 items-center rounded-[3px] border px-4 text-[0.95rem] ${l === lang ? "border-navy bg-navy text-white" : "border-line bg-white text-ink"}`}
                >
                  {LANG_INFO[l].native}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="fixed inset-x-0 bottom-0 border-t border-line bg-paper p-4">
          <Link href={L("/contact")} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-blue font-semibold text-white">
            {t.nav.start} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function MegaPanel({ k, nav, t, lang }: { k: MenuKey; nav: NavData; t: Strings; lang: Lang }) {
  const intro = { ...t.header.mega[k], href: lp(`/${k === "services" ? "services" : k}`, lang) };
  return (
    <div className="container-x grid grid-cols-12 gap-10 py-12">
      <div className="col-span-3 border-e border-line pe-10">
        <p className="t-meta text-steel">{intro.title}</p>
        <p className="mt-4 text-body">{intro.text}</p>
        <Link href={intro.href} className="group mt-6 inline-flex items-center gap-2 font-semibold text-blue">
          <span className="link-u">{intro.cta}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
      <ul className="col-span-6 grid grid-cols-2 gap-x-8">
        {nav[k].map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group block border-b border-line py-3">
              <span className="font-display font-semibold text-ink group-hover:text-blue">{l.label}</span>
              {l.note && <span className="mt-0.5 block text-sm text-muted">{l.note}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div className="col-span-3 flex flex-col justify-between rounded-md bg-navy p-7 text-white">
        {k === "insights" ? (
          <>
            <p className="t-meta text-white/60">{t.header.latest}</p>
            <Link href={nav.latest.href} className="mt-4 font-display text-xl font-semibold leading-snug hover:underline">
              {nav.latest.title}
            </Link>
          </>
        ) : (
          <>
            <p className="font-display text-xl font-semibold leading-snug">{t.header.megaCard}</p>
            <Link href={lp("/contact", lang)} className="group mt-6 inline-flex items-center gap-2 font-semibold">
              {t.nav.start} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
