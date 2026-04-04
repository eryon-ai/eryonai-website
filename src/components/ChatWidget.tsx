'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { siteContent } from '@/lib/site-content';

/* ─── Types ─────────────────────────────────────────────────────────────── */
type Role = 'user' | 'assistant';
type Message = { role: Role; text: string; id: number };
type ApiHistory = { role: 'user' | 'model'; parts: { text: string }[] };

type LeadForm = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const initialLead: LeadForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

/* ─── Quick Reply Chips ──────────────────────────────────────────────────── */
const QUICK_REPLIES = [
  '💼 What services do you offer?',
  '📂 Show me your portfolio',
  '⚙️ How does your process work?',
  '💡 I want to start a project',
  '📞 How can I contact you?',
];

const BUDGETS = ['$5K – $15K', '$15K – $50K', '$50K – $150K', '$150K+', "Let's Discuss"];

/* ─── Typing indicator dots ─────────────────────────────────────────────── */
function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '10px 14px' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
            display: 'block',
            animation: `chatBotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      text: "👋 Hi there! I'm the **ERYON AI** assistant.\n\nI can help you with our services, portfolio, process, or starting a new project. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [tab, setTab] = useState<'chat' | 'lead'>('chat');
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [leadError, setLeadError] = useState('');
  const [unread, setUnread] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgId = useRef(1);

  const services = useMemo(() => siteContent.services.map((s) => s.title), []);

  /* ── scroll on new messages ─────────────────────────────────────── */
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, open]);

  /* ── focus input when opened ────────────────────────────────────── */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setUnread(0);
    }
  }, [open]);

  /* ── auto-greet after 3s ────────────────────────────────────────── */
  useEffect(() => {
    if (hasGreeted) return;
    const t = setTimeout(() => {
      setHasGreeted(true);
      if (!open) setUnread(1);
    }, 3000);
    return () => clearTimeout(t);
  }, [hasGreeted, open]);

  /* ── Build API history from messages ────────────────────────────── */
  const buildHistory = useCallback((): ApiHistory[] => {
    return messages
      .filter((m) => m.id !== 0) // skip the initial greeting
      .map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));
  }, [messages]);

  /* ── Send message ───────────────────────────────────────────────── */
  async function sendMessage(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;

    const userMsg: Message = { id: msgId.current++, role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setShowQuickReplies(false);

    const history = buildHistory();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || 'Something went wrong.';
      setMessages((prev) => [...prev, { id: msgId.current++, role: 'assistant', text: reply }]);
      if (!open) setUnread((n) => n + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: msgId.current++, role: 'assistant', text: 'Network error. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /* ── Submit lead form ───────────────────────────────────────────── */
  async function submitLead() {
    if (!lead.name || !lead.email || !lead.message) {
      setLeadError('Please fill in Name, Email, and Project Summary.');
      return;
    }
    setLeadStatus('loading');
    setLeadError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (res.ok) {
        setLeadStatus('success');
        setLead(initialLead);
      } else {
        const d = await res.json();
        setLeadStatus('error');
        setLeadError(d.error || 'Failed to send. Try again.');
      }
    } catch {
      setLeadStatus('error');
      setLeadError('Network error. Please try again.');
    }
  }

  /* ── Render message text (basic markdown: **bold**, newlines) ───── */
  function renderText(text: string) {
    const lines = text.split('\n');
    return lines.map((line, li) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={li}>
          {parts.map((part, pi) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={pi}>{part.slice(2, -2)}</strong>
            ) : (
              <span key={pi}>{part}</span>
            )
          )}
          {li < lines.length - 1 && <br />}
        </span>
      );
    });
  }

  /* ── Toggle button ──────────────────────────────────────────────── */
  const toggleBtn = (
    <button
      id="eryon-chat-toggle"
      onClick={() => setOpen((o) => !o)}
      aria-label="Open chat"
      style={{
        position: 'relative',
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0066ff 0%, #00b4d8 100%)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0,102,255,0.4)',
        transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
        transform: open ? 'rotate(45deg) scale(0.9)' : 'scale(1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = open
          ? 'rotate(45deg) scale(0.95)'
          : 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = open
          ? 'rotate(45deg) scale(0.9)'
          : 'scale(1)';
      }}
    >
      {open ? (
        // X icon
        <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="5" x2="17" y2="17" />
          <line x1="17" y1="5" x2="5" y2="17" />
        </svg>
      ) : (
        // Chat icon
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )}
      {/* Unread badge */}
      {unread > 0 && !open && (
        <span
          style={{
            position: 'absolute',
            top: -3,
            right: -3,
            width: 20,
            height: 20,
            background: '#ef4444',
            borderRadius: '50%',
            color: 'white',
            fontSize: 11,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid white',
            animation: 'chatBotPulse 2s ease-in-out infinite',
          }}
        >
          {unread}
        </span>
      )}
    </button>
  );

  /* ── Chat Panel ─────────────────────────────────────────────────── */
  const chatPanel = open && (
    <div
      id="eryon-chat-panel"
      style={{
        position: 'absolute',
        bottom: 76,
        right: 0,
        width: 380,
        maxWidth: 'calc(100vw - 24px)',
        borderRadius: 20,
        background: '#ffffff',
        boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(0,102,255,0.12)',
        border: '1px solid rgba(0,102,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        animation: 'chatBotSlideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        maxHeight: '80vh',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0066ff 150%)',
          padding: '16px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: 18,
            boxShadow: '0 4px 12px rgba(0,102,255,0.4)',
          }}
        >
          🤖
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: "'Space Grotesk', sans-serif" }}>
            ERYON AI Assistant
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22d3ee',
                display: 'block',
                animation: 'chatBotPulse 2s ease-in-out infinite',
              }}
            />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Online · Replies instantly</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: 3,
          }}
        >
          {(['chat', 'lead'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '4px 10px',
                borderRadius: 7,
                border: 'none',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                background: tab === t ? '#0066ff' : 'transparent',
                color: tab === t ? '#fff' : 'rgba(255,255,255,0.6)',
                transition: 'all 0.2s ease',
              }}
            >
              {t === 'chat' ? '💬 Chat' : '🚀 Project'}
            </button>
          ))}
        </div>
      </div>

      {/* ── CHAT TAB ── */}
      {tab === 'chat' && (
        <>
          {/* Messages */}
          <div
            id="eryon-chat-messages"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px 14px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              background: '#f8fafc',
              minHeight: 280,
              maxHeight: 320,
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-end',
                  gap: 8,
                  animation: 'chatBotFadeIn 0.3s ease',
                }}
              >
                {/* Bot avatar */}
                {m.role === 'assistant' && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      flexShrink: 0,
                      marginBottom: 2,
                    }}
                  >
                    🤖
                  </div>
                )}

                <div
                  style={{
                    maxWidth: '78%',
                    padding: '10px 14px',
                    borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    background:
                      m.role === 'user'
                        ? 'linear-gradient(135deg, #0066ff, #0052cc)'
                        : '#ffffff',
                    color: m.role === 'user' ? '#fff' : '#1e293b',
                    boxShadow:
                      m.role === 'user'
                        ? '0 4px 16px rgba(0,102,255,0.3)'
                        : '0 2px 8px rgba(0,0,0,0.07)',
                    border: m.role === 'assistant' ? '1px solid rgba(0,102,255,0.08)' : 'none',
                  }}
                >
                  {renderText(m.text)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 8,
                  animation: 'chatBotFadeIn 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(0,102,255,0.08)',
                    borderRadius: '18px 18px 18px 4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          {showQuickReplies && messages.length <= 1 && (
            <div
              style={{
                padding: '8px 14px',
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
                background: '#f8fafc',
                borderTop: '1px solid rgba(0,102,255,0.06)',
              }}
            >
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 20,
                    border: '1.5px solid rgba(0,102,255,0.2)',
                    background: 'rgba(0,102,255,0.04)',
                    color: '#0066ff',
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#0066ff';
                    (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,102,255,0.04)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#0066ff';
                  }}
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div
            style={{
              padding: '10px 12px',
              background: '#fff',
              borderTop: '1px solid rgba(0,102,255,0.08)',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              id="eryon-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Ask me anything…"
              disabled={loading}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 12,
                border: '1.5px solid rgba(0,102,255,0.15)',
                background: '#f8fafc',
                fontSize: 13.5,
                color: '#1e293b',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#0066ff')}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)')}
            />
            <button
              id="eryon-chat-send"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: 'none',
                background: input.trim()
                  ? 'linear-gradient(135deg, #0066ff, #00b4d8)'
                  : '#e2e8f0',
                color: input.trim() ? '#fff' : '#94a3b8',
                cursor: input.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                flexShrink: 0,
                boxShadow: input.trim() ? '0 4px 12px rgba(0,102,255,0.3)' : 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div
            style={{
              padding: '6px 14px 8px',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 11, color: '#94a3b8' }}>Powered by ERYON AI × Gemini</span>
            <button
              onClick={() => setTab('lead')}
              style={{
                fontSize: 11,
                color: '#0066ff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                padding: 0,
              }}
            >
              🚀 Start a Project →
            </button>
          </div>
        </>
      )}

      {/* ── PROJECT / LEAD TAB ── */}
      {tab === 'lead' && (
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 18,
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {leadStatus === 'success' ? (
            <div
              style={{
                textAlign: 'center',
                padding: '32px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div style={{ fontSize: 48 }}>🎉</div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0f172a',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Project details received!
              </div>
              <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>
                Our team will review your inquiry and get back to you within{' '}
                <strong>24 hours</strong>.
              </div>
              <button
                onClick={() => { setLeadStatus('idle'); setTab('chat'); }}
                style={{
                  marginTop: 8,
                  padding: '10px 24px',
                  borderRadius: 12,
                  border: 'none',
                  background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,102,255,0.3)',
                }}
              >
                Back to Chat
              </button>
            </div>
          ) : (
            <>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#0f172a',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: 4,
                }}
              >
                🚀 Start a Project with ERYON AI
              </div>
              <div style={{ fontSize: 13, color: '#64748b', marginBottom: 8 }}>
                Fill in the details below and our team will reach out within 24 hours.
              </div>

              {[
                { key: 'name', placeholder: 'Your full name *', type: 'text' },
                { key: 'email', placeholder: 'Work email *', type: 'email' },
                { key: 'company', placeholder: 'Company (optional)', type: 'text' },
              ].map(({ key, placeholder, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={placeholder}
                  value={lead[key as keyof LeadForm]}
                  onChange={(e) => setLead({ ...lead, [key]: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#0066ff')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(0,102,255,0.15)')}
                />
              ))}

              <select
                value={lead.service}
                onChange={(e) => setLead({ ...lead, service: e.target.value })}
                style={{ ...inputStyle, color: lead.service ? '#1e293b' : '#94a3b8' }}
              >
                <option value="">Service needed</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <select
                value={lead.budget}
                onChange={(e) => setLead({ ...lead, budget: e.target.value })}
                style={{ ...inputStyle, color: lead.budget ? '#1e293b' : '#94a3b8' }}
              >
                <option value="">Estimated budget</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>

              <textarea
                rows={3}
                placeholder="Brief project summary *"
                value={lead.message}
                onChange={(e) => setLead({ ...lead, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = '#0066ff')}
                onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,102,255,0.15)')}
              />

              {leadError && (
                <div
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: 8,
                    padding: '8px 12px',
                    fontSize: 12.5,
                    color: '#ef4444',
                  }}
                >
                  ⚠️ {leadError}
                </div>
              )}

              <button
                onClick={submitLead}
                disabled={leadStatus === 'loading'}
                style={{
                  padding: '12px',
                  borderRadius: 12,
                  border: 'none',
                  background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: leadStatus === 'loading' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 16px rgba(0,102,255,0.3)',
                  transition: 'all 0.2s ease',
                  opacity: leadStatus === 'loading' ? 0.7 : 1,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {leadStatus === 'loading' ? '⏳ Sending...' : '🚀 Send Project Inquiry'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Keyframe animations injected inline */}
      <style>{`
        @keyframes chatBotSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chatBotFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatBotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-6px); }
        }
        @keyframes chatBotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.2); }
        }
        #eryon-chat-messages::-webkit-scrollbar { width: 4px; }
        #eryon-chat-messages::-webkit-scrollbar-track { background: transparent; }
        #eryon-chat-messages::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #0066ff55, #00b4d855);
          border-radius: 4px;
        }
      `}</style>

      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
        {chatPanel}
        {toggleBtn}
      </div>
    </>
  );
}

/* Shared input style */
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: 10,
  border: '1.5px solid rgba(0,102,255,0.15)',
  background: '#fff',
  fontSize: 13.5,
  color: '#1e293b',
  outline: 'none',
  fontFamily: "'Inter', sans-serif",
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};
