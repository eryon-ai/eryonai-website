import { site, stats, credentials } from "./site";
import { services } from "./services";
import { industries } from "./industries";
import { projects } from "./work";
import { articles } from "./insights";
import { abs } from "./seo";

/** Plain-text site summary for LLM-based search tools (llms.txt convention). */
export function llmsText(full: boolean) {
  const L: string[] = [];
  L.push(`# ${site.name} (${site.legalName})`, "");
  L.push(`> ${site.description}`, "");
  L.push(`- Founded: ${site.founded}`, `- Location: ${site.postal}, India`, `- Email: ${site.email}`, `- Phone: ${site.phone}`, `- Website: ${site.url}`);
  L.push(`- ${stats.map((s) => `${s.value}${s.suffix} ${s.label.toLowerCase()}`).join("; ")}`);
  L.push(`- Credentials: ${credentials.map((c) => c.title).join(", ")}`, `- Clients in: ${site.countries.join(", ")}`, "");
  L.push("## Services", "");
  for (const s of services) {
    L.push(`- [${s.title}](${abs(`/services/${s.slug}`)}): ${s.value}`);
    if (full) L.push(`  ${s.summary}`, `  What we build: ${s.offerings.map((o) => o.title).join(", ")}.`, `  Technology: ${s.tech.join(", ")}.`);
  }
  L.push("", "## Industries", "");
  for (const i of industries) {
    L.push(`- [${i.name}](${abs(`/industries/${i.slug}`)}): ${i.challenge}`);
    if (full) L.push(`  ${i.solution}`);
  }
  L.push("", "## Case studies", "");
  for (const p of projects) {
    L.push(`- [${p.title}](${abs(`/work/${p.slug}`)}): ${p.kind}. ${p.outcome}`);
    if (full) L.push(`  Challenge: ${p.challenge}`, `  Solution: ${p.solution}`, `  Technology: ${p.tech.join(", ")}.`);
  }
  L.push("", "## Insights", "");
  for (const a of articles) L.push(`- [${a.title}](${abs(`/insights/${a.slug}`)}): ${a.summary}`);
  L.push("", "## Key pages", "");
  for (const [t, p] of [["How we work", "/process"], ["Technology", "/technology"], ["About", "/about"], ["Careers", "/careers"], ["Contact", "/contact"]]) L.push(`- [${t}](${abs(p)})`);
  if (!full) L.push("", `Full version: ${abs("/llms-full.txt")}`);
  return L.join("\n") + "\n";
}
