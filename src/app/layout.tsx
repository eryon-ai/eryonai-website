import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERYON AI — Building Scalable Digital Systems for Modern Businesses",
  description:
    "ERYON AI is a premium IT services company specializing in AI/ML Solutions, Web Development, Mobile Apps, and Cloud & DevOps. We engineer scalable digital systems for modern enterprises.",
  keywords: [
    "ERYON AI",
    "IT services",
    "AI solutions",
    "web development",
    "mobile apps",
    "cloud devops",
    "machine learning",
    "digital transformation",
  ],
  authors: [{ name: "ERYON AI" }],
  creator: "ERYON AI",
  openGraph: {
    title: "ERYON AI — Building Scalable Digital Systems",
    description: "Premium IT services: AI/ML, Web, Mobile & Cloud solutions for modern enterprises.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERYON AI",
    description: "Building Scalable Digital Systems for Modern Businesses",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020408',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {/* reCAPTCHA v3 — loaded globally so ContactSection + Footer can use it */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
