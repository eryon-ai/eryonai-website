import { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { buildAlternates } from '@/lib/layout-translations';
import type { Locale } from '@/lib/dictionary';

type Props = { params: Promise<{ locale: Locale }> };

const LAST_UPDATED = 'September 11, 2026';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Privacy Policy | ERYON AI';
  const description = 'How ERYON AI Software Solutions collects, uses, and protects information submitted through eryonai.com.';

  return {
    title,
    description,
    alternates: buildAlternates('/privacy', locale),
    openGraph: { title, description, url: buildAlternates('/privacy', locale).canonical, type: 'website', siteName: 'ERYON AI' },
  };
}

export default async function PrivacyPage({ params }: Props) {
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
              { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.eryonai.com/privacy' },
            ],
          }),
        }}
      />
      <div className="container-custom" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00b4d8', fontWeight: 700, marginBottom: 8 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 800, color: '#f8fafc', marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', marginBottom: 40 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 15, lineHeight: 1.75 }}>
          <section>
            <p>
              ERYON AI Software Solutions (&quot;ERYON AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
              eryonai.com (the &quot;Site&quot;). This Privacy Policy explains what information we collect when you visit
              the Site, use our contact form, or subscribe to our newsletter, how we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 style={sectionHeading}>1. Information we collect</h2>
            <p><strong style={{ color: '#f1f5f9' }}>Information you provide directly:</strong> when you submit our contact
              form or project inquiry, we collect your name, email address, company name, service interest, budget range,
              and project details. When you subscribe to our newsletter, we collect your email address.</p>
            <p><strong style={{ color: '#f1f5f9' }}>Information collected automatically:</strong> like most websites, we
              collect standard technical data through server logs and analytics tooling — IP address, browser type, pages
              visited, referring URL, and approximate location derived from IP. We use this to secure the Site, understand
              which content is useful, and detect abuse (see Section 4 on reCAPTCHA below).</p>
          </section>

          <section>
            <h2 style={sectionHeading}>2. How we use your information</h2>
            <ul style={listStyle}>
              <li>To respond to project inquiries and contact-form submissions</li>
              <li>To send the newsletter you opted into, and nothing else, to that address</li>
              <li>To improve the Site&apos;s content, performance, and security</li>
              <li>To comply with legal obligations where applicable</li>
            </ul>
            <p>We do not sell your personal information. We do not share contact-form submissions with third parties
              except the service providers described in Section 3, strictly to operate the Site.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>3. Third-party services we use</h2>
            <p>Operating the Site requires a small number of processors, each limited to the data needed for its function:</p>
            <ul style={listStyle}>
              <li><strong style={{ color: '#f1f5f9' }}>Google reCAPTCHA</strong> — spam and bot protection on our forms.
                Subject to Google&apos;s own Privacy Policy and Terms of Service.</li>
              <li><strong style={{ color: '#f1f5f9' }}>Google Analytics / Google Tag</strong> — aggregate traffic and
                conversion measurement.</li>
              <li><strong style={{ color: '#f1f5f9' }}>Email delivery provider</strong> — to route contact-form and
                newsletter messages to our team and to you.</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 style={sectionHeading}>4. Cookies</h2>
            <p>The Site uses a small number of cookies: strictly necessary cookies for security (reCAPTCHA) and
              analytics cookies (Google Analytics/Tag) that help us understand aggregate traffic patterns. We do not use
              cookies for third-party advertising. You can disable cookies in your browser settings at any time; the Site
              remains usable without them, though the contact form&apos;s spam protection may not function correctly.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>5. Data retention</h2>
            <p>Contact-form submissions and their associated correspondence are retained for as long as necessary to
              respond to your inquiry and for a reasonable period afterward for our business records, typically no longer
              than 24 months unless a longer period is required by law or an active client relationship. Newsletter
              subscriber emails are retained until you unsubscribe.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>6. Your rights</h2>
            <p>Depending on where you&apos;re located (including under the GDPR for visitors in the UK/EU), you may have
              the right to access, correct, delete, or export the personal information we hold about you, and to object
              to or restrict certain processing. To exercise any of these rights, email us at{' '}
              <a href="mailto:connect@eryonai.com" style={{ color: '#00b4d8' }}>connect@eryonai.com</a>.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>7. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the
              &quot;Last updated&quot; date at the top of this page.</p>
          </section>

          <section>
            <h2 style={sectionHeading}>8. Contact</h2>
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
