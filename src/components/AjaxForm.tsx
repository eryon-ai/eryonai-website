"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { loadRecaptcha, recaptchaToken } from "@/lib/recaptcha-client";

/**
 * Progressive-enhancement form: without JS it posts natively to `action` (the route redirects);
 * with JS it submits via fetch, shows inline errors and navigates on success.
 */
export default function AjaxForm({
  action,
  success,
  children,
  submitLabel,
  captchaAction,
  t = { sending: "Sending…", reply: "We reply within 24 hours.", error: "Something went wrong. Please try again.", network: "We couldn't reach the server. Check your connection and try again.", honeypot: "Leave this empty" },
}: {
  action: string;
  success: string;
  children: React.ReactNode;
  submitLabel: string;
  captchaAction: string;
  t?: { sending: string; reply: string; error: string; network: string; honeypot: string };
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const summary = useRef<HTMLDivElement>(null);
  const started = useRef(0);
  useEffect(() => {
    started.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.set("_elapsed", String(Date.now() - started.current));
    data.set("recaptchaToken", await recaptchaToken(captchaAction));
    try {
      const res = await fetch(action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      const json = await res.json().catch(() => ({}));
      if (res.ok) return router.push(success);
      setErrors(json.errors ?? {});
      setMessage(json.error ?? t.error);
    } catch {
      setMessage(t.network);
    }
    setStatus("error");
    requestAnimationFrame(() => summary.current?.focus());
  }

  return (
    <form action={action} method="post" encType="multipart/form-data" onSubmit={onSubmit} onFocusCapture={loadRecaptcha} className="grid gap-6">
      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden="true" className="sr-only">
        <label>{t.honeypot}<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === "error" && (
        <div ref={summary} tabIndex={-1} role="alert" className="border-l-4 border-red-700 bg-red-50 p-4 text-red-900">
          <p className="font-semibold">{message}</p>
          {Object.keys(errors).length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-sm">
              {Object.entries(errors).map(([k, v]) => (
                <li key={k}><a href={`#f-${k}`} className="underline">{v}</a></li>
              ))}
            </ul>
          )}
        </div>
      )}

      {children}

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-blue px-8 font-semibold text-white transition-colors hover:bg-blue-dark disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? t.sending : submitLabel}
        </button>
        <p className="text-sm text-muted">{t.reply}</p>
      </div>
    </form>
  );
}

/** Labelled form field. Server-renderable. */
export function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
  hint,
  options,
  rows,
  accept,
  optional = "(optional)",
  select = "Select…",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
  options?: string[];
  rows?: number;
  accept?: string;
  optional?: string;
  select?: string;
}) {
  const id = `f-${name}`;
  const cls = "mt-2 block w-full rounded-[3px] border border-line-strong bg-white px-4 text-ink placeholder:text-muted/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25";
  return (
    <div>
      <label htmlFor={id} className="text-[0.95rem] font-semibold text-ink">
        {label} {required ? <span className="text-blue" aria-hidden="true">*</span> : <span className="font-normal text-muted">{optional}</span>}
      </label>
      {options ? (
        <select id={id} name={name} required={required} defaultValue="" className={`${cls} h-12`}>
          <option value="" disabled>{select}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : rows ? (
        <textarea id={id} name={name} required={required} rows={rows} className={`${cls} py-3`} aria-describedby={hint ? `${id}-hint` : undefined} />
      ) : (
        <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} accept={accept} className={`${cls} ${type === "file" ? "py-3" : "h-12"}`} aria-describedby={hint ? `${id}-hint` : undefined} />
      )}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
    </div>
  );
}
