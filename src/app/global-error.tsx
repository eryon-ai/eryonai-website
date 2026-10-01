"use client";

import "./globals.css";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-IN">
      <body>
        <main className="container-x py-24">
          <p className="t-meta">Error 500</p>
          <h1 className="t-h1 mt-6">Something went wrong.</h1>
          <p className="mt-6">Please try again, or email connect@eryonai.com.</p>
          <button type="button" onClick={reset} className="mt-8 min-h-12 rounded-[3px] bg-blue px-6 font-semibold text-white">Try again</button>
        </main>
      </body>
    </html>
  );
}
