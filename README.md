# Eryon V3 website

Next.js 16 (App Router) + TypeScript + Tailwind v4. 71 statically generated pages, no client state library, no animation library.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

**Hosting:** production runs on **Vercel** (same as the old site). A Docker image is available as a backup:

```bash
docker compose up --build   # reads .env; serves on http://localhost:3000
```

## Where things live

| What | File |
| --- | --- |
| Company facts, confirmed stats & credentials, Google Ads IDs | `src/lib/site.ts` |
| 12 services (core copy, FAQs, SEO) | `src/lib/services.ts` |
| Service offerings, segments, extra FAQs | `src/lib/service-extras.ts` |
| 11 industries | `src/lib/industries.ts` + `src/lib/industry-extras.ts` |
| 15 case studies | `src/lib/work.ts` |
| Insights articles | `src/lib/insights.ts` + `src/lib/insights-migrated.ts` (old blog topics, rewritten) |
| Open roles | `src/lib/careers.ts` |
| Technology list (with proof links) | `src/lib/tech.ts` |
| Design tokens / type scale | `src/app/globals.css` |
| Shared UI + cards | `src/components/ui.tsx`, `src/components/cards.tsx` |
| Screenshots (optimized WebP, source = Backblaze) | `public/img/` ← `scripts/image-sources.json` |
| Translations (ja, de, fr, es, ar) | `src/i18n/messages/<lang>.ts`, `<lang>-data.ts`, `<lang>-articles*.ts` |
| Page views shared by English and translated routes | `src/views/*.tsx` |

Add a page to the data file and its route, sitemap, search index and HTML sitemap update automatically (`src/lib/routes.ts`).

## Images

Backblaze (`f005.backblazeb2.com/file/eryonaiWebsiteImages/`) is the master copy. The site serves optimized WebP copies from
`public/img` because loading Backblaze through the Next.js image optimizer timed out.

- Add or replace an image: upload it to Backblaze, put `"<name>.webp": "<Backblaze URL>"` in `scripts/image-sources.json`,
  then run `npm run images` (new files only) or `npm run images -- --force` (re-download everything).
- Origin and Kyprox screenshots currently come from the old site's Cloudinary URLs, and Aura Planters uses the old site's
  Unsplash photos (not product screens). Upload real screenshots to Backblaze and change those URLs when available.

## Languages

English lives at the root (`src/app/(en)`). Japanese, German, French, Spanish and Arabic live under `/ja`, `/de`, `/fr`, `/es`, `/ar`
(`src/app/[lang]`), the same set of pages the old site translated: home, about, services, process, technology, work, contact
(+ success), insights + all 13 articles, privacy, terms and cookie policy. Service, industry and case-study detail pages are
English only; translated pages link to them and say so.

- Strings: `src/i18n/messages/en.ts` is the source; every other language is typed `Messages`, so a missing key fails `tsc`.
- Overlays such as article sections and case-study summaries are matched by position. Run `npm run i18n:check` after editing
  English copy: it fails if any language has a different number of sections, list items or keys, or an empty string.
- Each translated page has hreflang tags for all 6 languages plus x-default, and a self-canonical; `sitemap.xml` lists the alternates.
- `src/proxy.ts` redirects only `/`: saved choice (`eryon_lang` cookie from the language switcher) → browser language →
  country header (only when the browser sends no language). An English browser anywhere stays on English.
- Arabic is right-to-left (`dir="rtl"`); use logical Tailwind classes (`ms-`, `pe-`, `border-s`…) rather than `ml-`/`pr-`/`border-l`.

## Tracking and consent

Nothing is tracked until a visitor presses **Accept** in the cookie banner (`src/components/CookieBanner.tsx`).
After that, `src/components/Analytics.tsx` loads the Google tag for Google Ads (`AW-18087795180`, same account as the old site)
and, if `NEXT_PUBLIC_GA_ID` is set, GA4. `/contact/success` fires the Ads lead conversion. "Cookie settings" in the footer reopens the banner.

## Old URLs

`next.config.ts` redirects every URL from the old site's sitemap — old service slugs, `/blogs/*`, `/case-study/*`,
`/portfolio`, `/tech-stack` and all `/ja|de|fr|es|ar/*` translations — to the matching new page (verified: all 312 URLs in the old sitemap resolve).

## Environment

Same variable names as the old site, so the existing Vercel settings carry over:

```
SMTP_USER=...                     # Gmail address used to send form notifications
SMTP_PASS=...                     # Gmail app password
LEAD_TO_EMAIL=...                 # optional, defaults to connect@eryonai.com
GOOGLE_SHEET_WEBHOOK_URL=...      # Apps Script webhook; every enquiry, application and subscriber is mirrored here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...# reCAPTCHA v3 (loads only when a visitor starts a form)
RECAPTCHA_SECRET_KEY=...
NEXT_PUBLIC_GA_ID=G-...           # optional GA4 (consent-gated)
```

**Forms:** `/api/contact`, `/api/apply` and `/api/subscribe` run honeypot, timing, rate-limit and (if configured) reCAPTCHA checks, then
mirror the submission to the Google Sheet (`type: contact | application | subscription`, same keys as before) and email the team.
If email fails but the Sheet is configured, a contact enquiry still succeeds. Applications need email because the CV is attached.

**Search Console:** the Google verification token from the old site is kept in `src/app/layout.tsx` — don't remove it.

**llms.txt:** `/llms.txt` and `/llms-full.txt` are generated from the same data files.

## Before launch

- [ ] Confirm the 3 roles in `src/lib/careers.ts` are really open (they emit JobPosting schema).
- [ ] Add real leadership names/photos on `/about` (see TODO) — no stock photography.
- [ ] Confirm benefits list on `/careers` (TODO).
- [ ] Legal review of `/privacy`, `/terms`, `/cookie-policy`, including the translated versions.
- [ ] Have a native speaker review each translation, Arabic and Japanese first.
- [ ] Confirm which case studies may name the client / link the live build.
- [ ] Add the MSME Udyam number in `site.ts` if you want it displayed.
- [ ] Remove the public demo admin login shown on the old site's MarbleMart case study.
- [ ] Rate limiting is in-memory per instance (`src/lib/mail.ts`); use Redis if running several instances.
