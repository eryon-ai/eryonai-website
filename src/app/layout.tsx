import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eryonai.com'),
  title: "ERYON AI | Enterprise Custom Software Development & AI Solutions",
  description:
    "ERYON AI is a premium software development agency specializing in custom Web Development, AI/ML integrations, Mobile Apps, and Cloud DevOps for modern enterprises.",
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
    images: [{ url: "/logo-full.jpg", width: 1200, height: 630, alt: "ERYON AI Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERYON AI",
    description: "Building Scalable Digital Systems for Modern Businesses",
    images: ["/logo-full.jpg"],
  },
  verification: {
    google: "W-9fsg7BGB0XCqERSrFS80qZXMrZunh70mot4rYL-8s",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020408',
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

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
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
        {/* JSON-LD Schema */}
        <Script
          id="json-ld-global"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ERYON AI",
                "url": "https://www.eryonai.com",
                "logo": "https://www.eryonai.com/logo-full.jpg",
                "description": "Premium software development agency specializing in Web Development, AI/ML integrations, and Mobile Apps.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-82852-56571",
                  "contactType": "customer service",
                  "email": "connect@eryonai.com"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/113904195",
                  "https://www.instagram.com/eryonai.solutions",
                  "https://github.com/eryon-ai"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "ERYON AI",
                "url": "https://www.eryonai.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.eryonai.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        {/* reCAPTCHA v3 — loaded globally so ContactSection + Footer can use it */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18087795180"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18087795180');
          `}
        </Script>
      </body>
    </html>
  );
}
