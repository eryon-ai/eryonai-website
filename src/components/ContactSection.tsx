'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type Form = { name: string; email: string; company: string; service: string; budget: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

const services = ['Web Development', 'Mobile App Development', 'AI / ML Solutions', 'Cloud & DevOps', 'Cybersecurity', 'UI/UX Design', 'Full-Stack Product', 'Consulting'];
const budgets = ['$5K – $15K', '$15K – $50K', '$50K – $150K', '$150K+', "Let's Discuss"];

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'sales@eryonai.com', color: '#0066ff' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 000-ERYON', color: '#6366f1' },
  { icon: '📍', label: 'Location', value: 'New Delhi, India', color: '#10b981' },
  { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours', color: '#f59e0b' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState<Form>({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    background: '#fff',
    border: `1.5px solid ${errors[field] ? '#ef4444' : focused === field ? '#0066ff' : '#e2e8f0'}`,
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxShadow: focused === field ? '0 0 0 3px rgba(0,102,255,0.08)' : 'none',
  });

  return (
    <section id="contact" className="section-pad" style={{ background: '#f8fafc' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <div className="section-label mx-auto" style={{ display: 'inline-flex' }}>Let's Talk</div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="section-title"
            style={{ marginTop: 12 }}
          >
            Start Your <span className="gradient-text">Project Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="section-subtitle centered"
            style={{ marginTop: 12 }}
          >
            
            Tell us about your vision — we'll respond within 24 hours with a tailored proposal.
          </motion.p>
          <div style={{ marginBottom: 16 }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="card flex items-center gap-4"
                style={{ padding: '18px 20px' }}
              >
                <div style={{
                  width: 42, height: 42,
                  borderRadius: 10,
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Why contact us */}
            <div
              className="card"
              style={{
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0,102,255,0.04), rgba(0,180,216,0.04))',
                borderColor: 'rgba(0,102,255,0.12)',
              }}
            >
              <h4 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>
                What Happens Next?
              </h4>
              <ul className="check-list" style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'We review your requirements',
                  'Schedule a discovery call',
                  'Send a detailed proposal',
                  'Project kickoff within 1 week',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    <span style={{ fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="card" style={{ padding: '18px 20px' }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Connect</p>
              <div className="flex gap-2 flex-wrap">
                {[
                  { icon: '𝕏', label: 'Twitter' },
                  { icon: 'in', label: 'LinkedIn' },
                  { icon: '🐙', label: 'GitHub' },
                  { icon: '▶', label: 'YouTube' },
                ].map((s, i) => (
                  <button
                    key={i}
                    aria-label={s.label}
                    style={{
                      width: 36, height: 36,
                      borderRadius: 8,
                      border: '1.5px solid #e2e8f0',
                      background: 'white',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#64748b',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0066ff'; (e.currentTarget as HTMLElement).style.color = '#0066ff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.color = '#64748b'; }}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card text-center"
                style={{ padding: '60px 40px' }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0066ff15, #00b4d815)',
                  border: '1px solid rgba(0,102,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, margin: '0 auto 20px',
                }}>
                  ✅
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>
                  Thank you, <strong>{form.name}</strong>. Our team will review your details and respond within 24 hours.
                </p>
                <button className="btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (validate()) setSubmitted(true); }}
                className="card"
                style={{ padding: '32px' }}
              >
                <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 24 }}>
                  Tell Us About Your Project
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                      Full Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input type="text" placeholder="Name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      style={inputStyle('name')} />
                    {errors.name && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                      Work Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input type="email" placeholder="Name@company.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      style={inputStyle('email')} />
                    {errors.email && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Company</label>
                    <input type="text" placeholder="Acme Corp" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                      style={inputStyle('company')} />
                  </div>
                  
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Service Needed</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                      style={{ ...inputStyle('service'), color: form.service ? '#0f172a' : '#94a3b8' }}>
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 4 }} />

                <div className="mb-4">
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                        style={{
                          padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                          background: form.budget === b ? '#0066ff' : 'white',
                          color: form.budget === b ? 'white' : '#374151',
                          border: `1.5px solid ${form.budget === b ? '#0066ff' : '#e2e8f0'}`,
                          transition: 'all 0.2s',
                        }}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 4 }} />

                <div className="mb-6">
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                    Project Details <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea rows={4} value={form.message} placeholder="Describe your project goals, timeline, and requirements..."
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    style={{ ...inputStyle('message'), resize: 'none' }} />
                  {errors.message && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.message}</p>}
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full" style={{ justifyContent: 'center', padding: '14px', fontSize: 15 }}>
                  🚀 Start Your Project
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 12 }}>
                  No commitment. Free project assessment included.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
