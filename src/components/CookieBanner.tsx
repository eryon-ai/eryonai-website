"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readConsent, saveConsent } from "./Analytics";
import type { Messages } from "@/i18n/messages/en";

const OPEN = "eryon-open-consent";

export default function CookieBanner({ t, policyHref }: { t: Messages["ui"]["cookie"]; policyHref: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read browser-only storage after hydration
    if (!readConsent()) setShow(true);
    const open = () => setShow(true);
    window.addEventListener(OPEN, open);
    return () => window.removeEventListener(OPEN, open);
  }, []);
  if (!show) return null;

  const choose = (v: "granted" | "denied") => {
    saveConsent(v);
    setShow(false);
  };
  return (
    <div role="region" aria-label={t.region} className="fixed inset-x-4 bottom-4 z-30 max-w-md rounded-md border border-line bg-white p-5 shadow-[0_20px_40px_-20px_rgb(14_23_38/0.35)] sm:left-auto sm:right-6">
      <p className="text-[0.95rem] text-body">
        {t.text}{" "}
        <Link href={policyHref} className="text-blue underline underline-offset-4">{t.policy}</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => choose("granted")} className="min-h-11 rounded-[3px] bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-2">
          {t.accept}
        </button>
        <button type="button" onClick={() => choose("denied")} className="min-h-11 rounded-[3px] border border-ink/20 px-5 text-sm font-semibold text-ink hover:border-ink">
          {t.decline}
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className = "", label }: { className?: string; label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN))} className={className}>
      {label}
    </button>
  );
}
