import Legal from "@/components/Legal";
import { pageMeta } from "@/lib/seo";
import type { Lang } from "@/i18n/config";
import { getMessages } from "@/i18n";

const PATH = { privacy: "/privacy", terms: "/terms", cookie: "/cookie-policy" } as const;
type Kind = keyof typeof PATH;

export const legalMeta = (kind: Kind, lang: Lang) => pageMeta({ ...getMessages(lang).meta[kind], path: PATH[kind], lang });

export default function LegalView({ kind, lang }: { kind: Kind; lang: Lang }) {
  return <Legal kind={kind} path={PATH[kind]} lang={lang} />;
}
