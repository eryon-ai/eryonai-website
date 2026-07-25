'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { getRecaptchaToken } from '@/lib/recaptcha-client';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Rocket, Loader2, MessageSquare } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';

type Form = { name: string; email: string; company: string; service: string; budget: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

const services = ['Web Development', 'Mobile App Development', 'AI / ML Solutions', 'Cloud & DevOps', 'Cybersecurity', 'UI/UX Design', 'Full-Stack Product', 'Consulting'];
const budgets = {
  USD: ['$200 – $2K', '$5K – $15K', '$15K – $50K', '$50K – $150K', '$150K+', "Let's Discuss"],
  INR: ['₹10K – ₹1L', '₹4L – ₹12L', '₹12L – ₹40L', '₹40L – ₹1.2Cr', '₹1.2Cr+', "Let's Discuss"]
};

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'connect@eryonai.com', color: '#0066ff' },
  { icon: Phone, label: 'Phone', value: '+91 78278 86571', color: '#6366f1' },
  { icon: MapPin, label: 'Location', value: 'New Delhi, India', color: '#10b981' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', color: '#f59e0b' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState<Form>({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [focused, setFocused] = useState('');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const handleCurrencyChange = (newCurrency: 'USD' | 'INR') => {
    const oldIndex = budgets[currency].indexOf(form.budget);
    setCurrency(newCurrency);
    if (oldIndex !== -1) {
      setForm(prev => ({ ...prev, budget: budgets[newCurrency][oldIndex] }));
    }
  };
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const startedAt = useRef(Date.now());

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please describe project (min 20 chars)';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const inputStyle = (field: keyof Form) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: `1.5px solid ${errors[field] ? '#ef4444' : focused === field ? '#0066ff' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#f1f5f9',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === field ? '0 0 0 3px rgba(0,102,255,0.15)' : 'none',
  });

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge icon={MessageSquare} label="Let's Talk" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Start Your{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Project Today
            </span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#94a3b8', lineHeight: 1.7 }}>
            Tell us about your vision — we&apos;ll respond within 24 hours with a tailored proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {contactInfo.map((item, i) => (
              <GlowCard key={i} color={item.color} className="p-5" style={{ background: '#1e293b' }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={20} strokeWidth={2} color={item.color} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9', whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </div>
              </GlowCard>
            ))}

            {/* Why contact us */}
            <GlowCard color="#0066ff" className="p-5" style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.06), rgba(0,180,216,0.04))' }}>
              <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, fontWeight: 700, color: '#f8fafc', marginBottom: 12 }}>
                What Happens Next?
              </h4>
              <ul className="flex flex-col gap-2.5" style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'We review your requirements',
                  'Schedule a discovery call',
                  'Send a detailed proposal',
                  'Project kickoff within 1 week',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} strokeWidth={2.5} color="#00b4d8" aria-hidden="true" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: '#94a3b8' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <GlowCard color="#10b981" className="p-10 md:p-16 text-center" style={{ background: '#1e293b' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(0,180,216,0.1))',
                    border: '1px solid rgba(16,185,129,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <CheckCircle2 size={36} strokeWidth={2} color="#10b981" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 800, color: '#f8fafc', marginBottom: 10 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 24 }}>
                    Thank you, <strong style={{ color: '#f1f5f9' }}>{form.name}</strong>. Our team will review your details and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                    className="rounded-full font-semibold"
                    style={{
                      padding: '11px 24px', fontSize: 14, color: '#00b4d8',
                      border: '1.5px solid rgba(0,180,216,0.4)', background: 'transparent', cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    Send Another Message
                  </button>
                </GlowCard>
              </motion.div>
            ) : (
              <GlowCard color="#0066ff" className="p-6 md:p-8" style={{ background: '#1e293b' }}>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!validate()) return;
                    setSubmitting(true);
                    setServerError('');
                    try {
                      const recaptchaToken = await getRecaptchaToken('contact').catch(() => '');
                      const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          ...form,
                          recaptchaToken,
                          _startedAt: startedAt.current,
                          _trap: '',   // honeypot — always empty for real users
                        }),
                      });
                      if (res.ok) {
                        setSubmitted(true);
                        // Google Ads Conversion tracking
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (window as any).gtag('event', 'conversion', {
                            'send_to': 'AW-18087795180/WReRCJ-PuZscEOyz97BD'
                          });
                        }
                      } else {
                        setServerError('Something went wrong. Please try again or email us directly.');
                      }
                    } catch {
                      setServerError('Network error. Please check your connection.');
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 700, color: '#f8fafc', marginBottom: 24 }}>
                    Tell Us About Your Project
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: 6 }}>
                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input id="contact-name" type="text" placeholder="Name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="placeholder:text-[#64748b]"
                        style={inputStyle('name')} />
                      {errors.name && <p id="contact-name-error" role="alert" style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: 6 }}>
                        Work Email <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input id="contact-email" type="email" placeholder="Name@company.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className="placeholder:text-[#64748b]"
                        style={inputStyle('email')} />
                      {errors.email && <p id="contact-email-error" role="alert" style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-company" style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: 6 }}>Company</label>
                      <input id="contact-company" type="text" placeholder="Acme Corp" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                        className="placeholder:text-[#64748b]"
                        style={inputStyle('company')} />
                    </div>

                    <div>
                      <label htmlFor="contact-service" style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: 6 }}>Service Needed</label>
                      <select id="contact-service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                        style={{ ...inputStyle('service'), color: form.service ? '#f1f5f9' : '#64748b' }}>
                        <option value="" style={{ color: '#0f172a' }}>Select a service...</option>
                        {services.map((s) => <option key={s} value={s} style={{ color: '#0f172a' }}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', margin: 0 }}>Project Budget</label>
                      <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 2 }}>
                        <button type="button" onClick={() => handleCurrencyChange('USD')} style={{ padding: '4px 10px', fontSize: 12, fontWeight: 600, borderRadius: 4, border: 'none', background: currency === 'USD' ? 'rgba(255,255,255,0.12)' : 'transparent', color: currency === 'USD' ? '#f8fafc' : '#64748b', cursor: 'pointer', transition: 'all 0.2s' }}>USD ($)</button>
                        <button type="button" onClick={() => handleCurrencyChange('INR')} style={{ padding: '4px 10px', fontSize: 12, fontWeight: 600, borderRadius: 4, border: 'none', background: currency === 'INR' ? 'rgba(255,255,255,0.12)' : 'transparent', color: currency === 'INR' ? '#f8fafc' : '#64748b', cursor: 'pointer', transition: 'all 0.2s' }}>INR (₹)</button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {budgets[currency].map((b) => (
                        <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                          style={{
                            padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                            background: form.budget === b ? 'linear-gradient(135deg, #0066ff, #00b4d8)' : 'rgba(255,255,255,0.05)',
                            color: form.budget === b ? '#fff' : '#94a3b8',
                            border: `1.5px solid ${form.budget === b ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                            transition: 'all 0.2s',
                          }}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: 6 }}>
                      Project Details <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea id="contact-message" rows={4} value={form.message} placeholder="Describe your project goals, timeline, and requirements..."
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="placeholder:text-[#64748b]"
                      style={{ ...inputStyle('message'), resize: 'none' }} />
                    {errors.message && <p id="contact-message-error" role="alert" style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className="w-full rounded-full flex items-center justify-center gap-2 font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                      color: '#fff',
                      border: 'none',
                      padding: '14px',
                      fontSize: 15,
                      boxShadow: '0 4px 20px rgba(0,102,255,0.3)',
                      opacity: submitting ? 0.75 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} strokeWidth={2.5} className="animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Rocket size={18} strokeWidth={2.5} aria-hidden="true" />
                        Start Your Project
                      </>
                    )}
                  </motion.button>
                  {serverError && (
                    <p role="alert" style={{ textAlign: 'center', fontSize: 13, color: '#ef4444', marginTop: 10 }}>{serverError}</p>
                  )}
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#64748b', marginTop: 10 }}>
                    No commitment. Free project assessment included.
                  </p>
                </form>
              </GlowCard>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
