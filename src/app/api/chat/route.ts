import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { siteContent } from '@/lib/site-content';

type ChatMessage = { role: 'user' | 'model'; parts: { text: string }[] };
type ChatBody = { message?: string; history?: ChatMessage[] };

/* ─── Build a rich system context from site data ─────────────────────────── */
function buildSystemPrompt() {
  const services = siteContent.services
    .map((s) => `- ${s.title}: ${s.summary} Features: ${s.features.join(', ')}.`)
    .join('\n');
  const caseStudies = siteContent.caseStudies
    .map((c) => `- ${c.title}: ${c.summary}`)
    .join('\n');
  const { name, email, phone, location, responseTime, tagline } = siteContent.company;
  const process = siteContent.process.join(' → ');

  return `You are the ERYON AI website assistant — a knowledgeable, friendly, and concise AI that helps visitors understand ERYON AI's services, portfolio, and how to get started.

COMPANY INFO:
  Name: ${name}
  Tagline: ${tagline}
  Email: ${email}
  Phone: ${phone}
  Location: ${location}
  Response Time: ${responseTime}

SERVICES WE OFFER:
${services}

OUR DELIVERY PROCESS:
${process}

CASE STUDIES / PORTFOLIO:
${caseStudies}

RULES:
1. Answer ONLY questions related to ERYON AI's services, portfolio, pricing range, process, or contact information.
2. Keep answers concise — 2–4 sentences max unless detail is specifically requested.
3. If pricing is asked, say we offer custom quotes and ask them to share their project.
4. If you cannot answer from context, say: "That's outside my knowledge — I'd suggest reaching out directly at ${email} or ${phone}."
5. Never make up facts. Never discuss competitors.
6. For project inquiries, encourage the user to use the contact form or share details so we can follow up.
7. Be warm, professional, and on-brand.`;
}

/* ─── Call Gemini API ─────────────────────────────────────────────────────── */
async function callGemini(history: ChatMessage[], latestMessage: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

  if (!apiKey) {
    return { ok: false, text: 'AI is not configured. Please contact us at connect@eryonai.com' };
  }

  const systemPrompt = buildSystemPrompt();

  // Build conversation: system instruction + prior history + current message
  const contents: ChatMessage[] = [
    // Inject system context as first user turn if history is empty
    ...(history.length === 0
      ? [
          { role: 'user' as const, parts: [{ text: `[SYSTEM]\n${systemPrompt}\n[/SYSTEM]\n\nHello!` }] },
          { role: 'model' as const, parts: [{ text: "Hi! I'm the ERYON AI assistant — happy to help with services, case studies, or starting a project. What can I do for you?" }] },
        ]
      : history),
    { role: 'user', parts: [{ text: latestMessage }] },
  ];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.4,
          topP: 0.9,
          maxOutputTokens: 300,
          thinkingConfig: { thinkingBudget: 0 },
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    console.error('Gemini API error:', res.status, errText);
    return { ok: false, text: 'I ran into an issue. Please try again or email us at connect@eryonai.com.' };
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? '').join('') ?? '';

  if (!text) {
    return { ok: false, text: 'No response from the model. Please try again.' };
  }

  return { ok: true, text };
}

/* ─── POST handler ────────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const { allowed, retryAfterSeconds } = rateLimit(ip, { max: 30, windowMs: 10 * 60_000 });
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfterSeconds}s.` },
      { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
    );
  }

  const body = (await req.json()) as ChatBody;
  const message = (body.message ?? '').trim();
  const history: ChatMessage[] = body.history ?? [];

  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  const result = await callGemini(history, message);

  return NextResponse.json({ reply: result.text });
}
