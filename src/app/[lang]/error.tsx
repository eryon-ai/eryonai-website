"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-grid border-b border-line">
      <div className="container-x py-24 md:py-36">
        <p className="t-meta text-steel">Error 500</p>
        <h1 className="t-h1 mt-6 max-w-3xl">Something went wrong on our side.</h1>
        <p className="t-lead mt-6 max-w-xl text-body">
          It&apos;s been logged. Try again, or email <a href="mailto:connect@eryonai.com" className="text-blue underline underline-offset-4">connect@eryonai.com</a> if it keeps happening.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="inline-flex min-h-12 items-center rounded-[3px] bg-blue px-6 font-semibold text-white hover:bg-blue-dark">Try again</button>
          <Link href="/" className="inline-flex min-h-12 items-center rounded-[3px] border border-ink/20 px-6 font-semibold text-ink hover:border-ink">Go home</Link>
        </div>
      </div>
    </section>
  );
}
