// Structural parity check: every translation must mirror en.ts shape (positional overlays depend on it).
// Run: npx tsx scripts/check-i18n.ts
import { en } from "../src/i18n/messages/en";
import { ja } from "../src/i18n/messages/ja";
import { de } from "../src/i18n/messages/de";
import { fr } from "../src/i18n/messages/fr";
import { es } from "../src/i18n/messages/es";
import { ar } from "../src/i18n/messages/ar";

const errs: string[] = [];
function walk(a: unknown, b: unknown, path: string) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errs.push(`${path}: not array`);
    if (a.length !== b.length) errs.push(`${path}: length ${b.length} vs en ${a.length}`);
    a.forEach((x, i) => walk(x, b[i], `${path}[${i}]`));
  } else if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return errs.push(`${path}: missing`);
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    for (const k of ka) if (!kb.includes(k)) errs.push(`${path}.${k}: missing`);
    for (const k of kb) if (!ka.includes(k)) errs.push(`${path}.${k}: extra`);
    for (const k of ka) walk((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`);
  } else if (typeof a === "string" && (typeof b !== "string" || (!b.trim() && !/hero(Before|After)$/.test(path)))) errs.push(`${path}: empty`);
}
for (const [lang, m] of Object.entries({ ja, de, fr, es, ar })) walk(en, m, lang);
console.log(errs.length ? errs.join("\n") : "i18n parity OK");
process.exit(errs.length ? 1 : 0);
