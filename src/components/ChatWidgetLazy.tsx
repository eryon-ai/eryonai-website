'use client';

import dynamic from 'next/dynamic';

// The chat widget is ~860 lines of client code that nothing above the fold needs.
// Loading it as its own chunk, without SSR, keeps it out of the initial JS of every page.
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });

export default function ChatWidgetLazy() {
  return <ChatWidget />;
}
