"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}

const KEY = "eryon-consent";
const EVENT = "eryon-consent";

export function readConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(v: "granted" | "denied") {
  try { localStorage.setItem(KEY, v); } catch {}
  window.gtag?.("consent", "update", { ad_storage: v, analytics_storage: v, ad_user_data: v, ad_personalization: v });
  window.dispatchEvent(new Event(EVENT));
}

export function onConsentChange(fn: () => void) {
  window.addEventListener(EVENT, fn);
  return () => window.removeEventListener(EVENT, fn);
}

/** Loads the Google tag (Ads + optional GA4) only after the visitor accepts cookies. */
export default function Analytics() {
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    const sync = () => setGranted(readConsent() === "granted");
    sync();
    return onConsentChange(sync);
  }, []);
  if (!granted) return null;

  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});
gtag('js',new Date());gtag('config','${site.googleAdsId}');${ga ? `gtag('config','${ga}');` : ""}`}
      </Script>
    </>
  );
}

/** Fires the Google Ads lead conversion once the tag is ready (only if consent was given). */
export function ConversionPing() {
  useEffect(() => {
    if (readConsent() !== "granted") return;
    let tries = 0;
    const t = setInterval(() => {
      if (window.gtag) {
        window.gtag("event", "conversion", { send_to: site.googleAdsConversion });
        clearInterval(t);
      } else if (++tries > 40) clearInterval(t);
    }, 250);
    return () => clearInterval(t);
  }, []);
  return null;
}
