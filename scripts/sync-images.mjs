// Downloads the project screenshots from their source (Backblaze, the master copy) and writes
// optimized WebP files to public/img, which the site serves. Usage:
//   npm run images            # fetch only files missing from public/img
//   npm run images -- --force # re-fetch everything (after replacing an image on Backblaze)
import { readFile, access, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const OUT = new URL("../public/img/", import.meta.url);
const sources = JSON.parse(await readFile(new URL("./image-sources.json", import.meta.url), "utf8"));
const force = process.argv.includes("--force");
await mkdir(OUT, { recursive: true });

const exists = (f) => access(new URL(f, OUT)).then(() => true, () => false);

async function convert(name, url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const img = sharp(Buffer.from(await res.arrayBuffer()));
  const { width = 0, height = 0 } = await img.metadata();
  // Full-page phone captures: keep the top screen at phone proportions.
  const pipeline = height > width * 1.6
    ? img.extract({ left: 0, top: 0, width, height: Math.min(height, Math.round((width * 19.5) / 9)) }).resize({ width: 900, withoutEnlargement: true })
    : img.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true });
  await pipeline.webp({ quality: 82 }).toFile(fileURLToPath(new URL(name, OUT)));
}

let done = 0, skipped = 0;
const failed = [];
const queue = Object.entries(sources);
await Promise.all(Array.from({ length: 6 }, async () => {
  for (let item; (item = queue.shift()); ) {
    const [name, url] = item;
    if (!force && (await exists(name))) { skipped++; continue; }
    try { await convert(name, url); done++; console.log(`✓ ${name}`); }
    catch (e) { failed.push(name); console.error(`✗ ${name} — ${e.message}`); }
  }
}));
console.log(`\n${done} written, ${skipped} already present, ${failed.length} failed`);
if (failed.length) process.exit(1);
