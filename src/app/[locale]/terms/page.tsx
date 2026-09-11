import { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { buildAlternates } from '@/lib/layout-translations';
import type { Locale } from '@/lib/dictionary';

type Props = { params: Promise<{ locale: Locale }> };

const LAST_UPDATED = 'September 11, 2026';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Terms of Service | ERYON AI';
  const description = 'The terms governing your use of eryonai.com and inquiries submitted to ERYON AI Software Solutions.';

  return {
    title,
    description,
    alternates: buildAlternates('/terms', locale),
    openGraph: { title, description, url: buildAlternates('/terms', locale).canonical, type: 'website', siteName: 'ERYON AI' },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main lang={locale} className="pt-32 pb-24" style={{ background: '#0f172a', color: '#cbd5e1' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
              { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://www.eryonai.com/terms' },
            ],
          }),
        }}
      />
      <div className="container-custom" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00b4d8', fontWeight: 700, marginBottom: 8 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 800, color: '#f8fafc', marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', marginBottom: 40 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 15, lineHeight: 1.75 }}>
          <section>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of eryonai.com (the &quot;Site&quot;), operated by
              ERYON AI Software Solutions (&quot;ERYON AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
              browsing the Site or submitting a form, you agree to these Terms. These Terms cover use of the website
              only — they are separate from, and do not replace, a signed statement of work or services agreement
              governing any actual project engagement, which controls if the two conflict.
            </p>
          </section>

          <section>
            <h2 style={sectionHeading}>1. Use of the Site</h2>
            <p>You may browse the Site and submit inquiries for lawful business purposes only. You agree not to:</p>
            <ul style={listStyle}>
              <li>Submit false, misleading, or spam content through the contact form or newsletter signup</li>
              <li>Attempt to bypass, disable, or interfere with the Site&apos;s security features, including reCAPTCHA</li>
              <li>Scrape, copy, or reproduce the Site&apos;s content, case studies, or code samples without permission</li>
              <li>Use the Site to distribute malware or attempt unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 style={sectionHeading}>2. No engagement created by browsing</h2>
            <p>Submitting a contact-form inquiry or booking a call does not, by itself, create a client relationship,
              a services contract, or any obligation on ERYON AI to deliver work. A project only begins once both
              parties sign a separate, explicit statement of work or services agreement.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>3. Intellectual property</h2>
            <p>All content on the Site — including but not limited to text, graphics, logos, case-study write-ups, and
              blog articles — is the property of ERYON AI Software Solutions or its licensors and is protected by
              applicable intellectual property law. You may not reproduce or redistribute Site content for commercial
              purposes without our prior written consent.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>4. Case studies and client references</h2>
            <p>Case studies, project outcomes, and client references published on the Site are shared with the
              permission of the relevant client or presented in an anonymized/aggregated form. Metrics described are
              representative of the specific engagement referenced and are not a guarantee of results for any future
              project.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>5. Disclaimers</h2>
            <p>The Site and its content are provided &quot;as is&quot; without warranties of any kind, express or
              implied. We make reasonable efforts to keep information on the Site accurate and current, but do not
              guarantee that all content is free of errors or omissions at all times.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>6. Limitation of liability</h2>
            <p>To the fullest extent permitted by applicable law, ERYON AI Software Solutions shall not be liable for
              any indirect, incidental, or consequential damages arising from your use of, or inability to use, the
              Site.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>7. Governing law</h2>
            <p>These Terms are governed by the laws of India, without regard to conflict-of-law principles. Any
              dispute arising from these Terms or use of the Site is subject to the exclusive jurisdiction of the
              courts of New Delhi, India.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>8. Changes to these Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Site after a change is posted
              constitutes acceptance of the updated Terms. Material changes will be reflected by updating the
              &quot;Last updated&quot; date at the top of this page.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>9. Contact</h2>
            <p>
              ERYON AI Software Solutions<br />
              New Delhi, Delhi 110001, India<br />
              Email: <a href="mailto:connect@eryonai.com" style={{ color: '#00b4d8' }}>connect@eryonai.com</a><br />
              Phone: <a href="tel:+917827886571" style={{ color: '#00b4d8' }}>+91 78278 86571</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

const sectionHeading: CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 19,
  fontWeight: 700,
  color: '#f1f5f9',
  marginBottom: 10,
};

const listStyle: CSSProperties = {
  listStyle: 'disc',
  paddingLeft: 22,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  margin: '8px 0',
};
