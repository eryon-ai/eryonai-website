"use client";

import { useState } from "react";
import { loadRecaptcha, recaptchaToken } from "@/lib/recaptcha-client";
import type { Messages } from "@/i18n/messages/en";

/** Monthly engineering notes signup. Works without JS via native POST (redirects to /thank-you). */
export default function Newsletter({ dark = false, t }: { dark?: boolean; t: Messages["ui"]["newsletter"] }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    data.set("recaptchaToken", await recaptchaToken("subscribe"));
    try {
      const res = await fetch("/api/subscribe", { method: "POST", body: data, headers: { Accept: "application/json" } });
      const json = await res.json().catch(() => ({}));
      if (res.ok) return setState("done");
      setMsg(json.error ?? t.error);
    } catch {
      setMsg(t.network);
    }
    setState("error");
  }

  if (state === "done") {
    return <p role="status" className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>{t.done}</p>;
  }

  const input = dark
    ? "border-white/25 bg-white/5 text-white placeholder:text-white/50 focus:border-white"
    : "border-line-strong bg-white text-ink placeholder:text-muted focus:border-blue";
  return (
    <form action="/api/subscribe" method="post" onSubmit={onSubmit} onFocusCapture={loadRecaptcha} className="w-full">
      <div aria-hidden="true" className="sr-only">
        <label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`nl-${dark ? "d" : "l"}`} className="sr-only">{t.email}</label>
        <input
          id={`nl-${dark ? "d" : "l"}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={`h-12 min-w-0 flex-1 rounded-[3px] border px-4 focus:outline-none focus:ring-2 focus:ring-blue/25 ${input}`}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className={`h-12 shrink-0 rounded-[3px] px-6 font-semibold transition-colors disabled:opacity-60 ${dark ? "bg-white text-navy hover:bg-blue-soft" : "bg-blue text-white hover:bg-blue-dark"}`}
        >
          {state === "sending" ? t.subscribing : t.subscribe}
        </button>
      </div>
      {state === "error" && <p role="alert" className={`mt-2 text-sm ${dark ? "text-red-200" : "text-red-700"}`}>{msg}</p>}
      <p className={`mt-2 text-sm ${dark ? "text-white/55" : "text-muted"}`}>{t.note}</p>
    </form>
  );
}
