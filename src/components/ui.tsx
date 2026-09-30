import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock, Plus } from "lucide-react";
import { breadcrumbLd } from "@/lib/seo";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** `light`: the dark-background lockup (footer). Default: the light-background wordmark (header). */
export function Logo({ light = false }: { light?: boolean }) {
  return light ? (
    // Footer: below the fold on first paint, so no `priority` here.
    <Image src="/brand/eryon-cosmic.png" alt="Eryon AI Software Solutions" width={500} height={500} className="h-44 w-44" />
  ) : (
    // Header: visible on every page load — the one logo instance worth preloading.
    <Image src="/brand/eryon-wordmark.png" alt="Eryon AI Software Solutions" width={226} height={76} className="h-12 w-auto" priority />
  );
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`t-meta flex items-center gap-3 ${light ? "text-white/70" : "text-steel"}`}>
      <span className="h-px w-8 bg-blue" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  light,
  as: H = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  action?: React.ReactNode;
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        <H className={`t-h2 mt-5 ${light ? "text-white" : ""}`}>{title}</H>
      </div>
      {(intro || action) && (
        <div className="lg:col-span-4">
          {intro && <p className={`t-lead ${light ? "text-white/75" : "text-muted"}`}>{intro}</p>}
          {action && <div className="mt-5">{action}</div>}
        </div>
      )}
    </div>
  );
}

const btn = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  dark: "bg-navy text-white hover:bg-navy-2",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-navy hover:bg-blue-soft",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] px-6 text-[0.95rem] font-semibold transition-colors duration-200 ${btn[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function ArrowLink({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-semibold ${light ? "text-white" : "text-blue"}`}>
      <span className="link-u">{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function Breadcrumbs({ items, home = { name: "Home", path: "/" } }: { items: { name: string; path: string }[]; home?: { name: string; path: string } }) {
  const all = [home, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="t-meta text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <>
                  <Link href={it.path} className="hover:text-ink">{it.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page" className="text-ink">{it.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(all)} />
    </>
  );
}

export function PageHero({
  crumbs,
  home,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs?: { name: string; path: string }[];
  home?: { name: string; path: string };
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-grid border-b border-line">
      <div className="container-x pb-16 pt-10 md:pb-24 md:pt-14">
        {crumbs && <Breadcrumbs items={crumbs} home={home} />}
        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-9">
            {eyebrow && <div className="hero-in"><Eyebrow>{eyebrow}</Eyebrow></div>}
            <h1 className="t-h1 hero-in-2 mt-6">{title}</h1>
          </div>
          {intro && (
            <div className="hero-in-3 t-lead text-body lg:col-span-7 lg:col-start-1">{intro}</div>
          )}
        </div>
        {children && <div className="hero-in-3 mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-left">
            <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{f.q}</h3>
            <Plus className="size-5 shrink-0 text-blue transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="max-w-3xl pb-6 text-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = <>Have a product<br />worth building?</>,
  text = "Let's turn the idea into a system your business can actually use.",
  start = { label: "Start a Project", href: "/contact" },
  work = { label: "View Our Work", href: "/work" },
}: {
  title?: React.ReactNode;
  text?: string;
  start?: { label: string; href: string };
  work?: { label: string; href: string };
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <h2 className="t-h1 reveal text-white lg:col-span-8">{title}</h2>
        <div className="reveal lg:col-span-4">
          <p className="t-lead text-white/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={start.href} variant="light">{start.label}</ButtonLink>
            <ButtonLink href={work.href} variant="outlineLight">{work.label}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Chips({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-[3px] border px-2.5 py-1 font-mono text-[0.8125rem] ${light ? "border-white/20 text-white/80" : "border-line bg-white text-body"}`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Real product screenshot inside a thin browser frame. */
export function Shot({
  src,
  alt,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  ratio = "aspect-[16/10]",
  mobile,
  bare,
  grid,
  position = "object-top",
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  ratio?: string;
  mobile?: boolean;
  bare?: boolean; // photos: no browser chrome
  grid?: { src: string; alt?: string }[]; // 3-up preview instead of one image — same frame, same chrome bar
  position?: string; // object-position utility; override when the default center crop cuts off left-anchored text
}) {
  return (
    <figure className={`overflow-hidden rounded-md border border-ink/85 bg-white shadow-[0_1px_0_rgb(14_23_38/0.04),0_6px_16px_-8px_rgb(14_23_38/0.35),0_24px_48px_-28px_rgb(14_23_38/0.28)] ${className}`}>
      {!mobile && !bare && (
        <div className="flex h-7 items-center gap-1.5 border-b border-line bg-mist px-3" aria-hidden="true">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
      )}
      {grid ? (
        <div className={`grid grid-cols-3 gap-3 bg-mist p-4 ${ratio}`}>
          {grid.map((g) => (
            <div key={g.src} className="relative overflow-hidden rounded border border-line bg-white">
              <Image src={g.src} alt={g.alt ?? ""} fill sizes="15vw" className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      ) : (
        <div className={`relative ${mobile ? "aspect-[9/19]" : ratio} overflow-hidden`}>
          <Image
            src={src!}
            alt={alt!}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover ${mobile ? "object-top" : position} transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]`}
          />
        </div>
      )}
    </figure>
  );
}

/* ---- Device mockups (home hero) -----------------------------------------------------------
   Sizes use container-query units (cqw) so rims, radii and the notch scale with the device.
   Each device is rim (metal) → bezel (black glass) → screen, with radii kept concentric:
   inner radius = outer radius − padding. */
const rim = "bg-[linear-gradient(145deg,#6b7482_0%,#2a313b_22%,#161b22_50%,#2a313b_78%,#5d6674_100%)]";
const bezel = "bg-[#0b0e13] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)]";
const depth =
  "shadow-[0_1px_2px_rgb(14_23_38/0.12),0_10px_24px_-10px_rgb(14_23_38/0.3),0_40px_80px_-36px_rgb(14_23_38/0.5)]";
const glare =
  "pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.16)_0%,rgb(255_255_255/0.05)_26%,transparent_40%)]";

type FrameProps = { src: string; alt: string; priority?: boolean; sizes?: string };
const screen = "object-cover object-top";

/** Monitor with a browser window. The stand is out of flow so anything positioned against this frame stays put. */
export function DesktopFrame({ src, alt, priority, sizes }: FrameProps) {
  return (
    <figure className="@container relative">
      <div className={`rounded-[1.5cqw] p-[0.25cqw] ${rim} ${depth}`}>
        <div className={`rounded-[1.25cqw] p-[0.8cqw] ${bezel}`}>
          <div className="relative overflow-hidden rounded-[0.45cqw] bg-white ring-1 ring-black/50">
            <div className="flex h-[4cqw] items-center gap-[0.8cqw] border-b border-line bg-[linear-gradient(#f6f7f9,#eceff3)] px-[1.5cqw]" aria-hidden="true">
              <span className="size-[1.05cqw] rounded-full bg-[#ec6a5e] ring-1 ring-black/10" />
              <span className="size-[1.05cqw] rounded-full bg-[#f4bf4f] ring-1 ring-black/10" />
              <span className="size-[1.05cqw] rounded-full bg-[#61c554] ring-1 ring-black/10" />
              <span className="mx-auto flex h-[2.3cqw] w-[38%] items-center justify-center rounded-[0.6cqw] bg-white shadow-[inset_0_0_0_1px_rgb(14_23_38/0.08)]">
                <Lock className="size-[1.1cqw] text-muted" />
              </span>
              <span className="w-[4.3cqw]" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={screen} />
            </div>
            <span aria-hidden="true" className={glare} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-full flex w-[30%] -translate-x-1/2 flex-col items-center">
        <span className="h-[4.6cqw] w-[34%] bg-[linear-gradient(90deg,#9aa3b0,#d9dee5_45%,#c3cad3_60%,#8f98a5)] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" />
        <span className="h-[1.1cqw] w-full rounded-t-[0.5cqw] rounded-b-[0.35cqw] bg-[linear-gradient(#eef1f4,#c1c8d1)] shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_10px_18px_-10px_rgb(14_23_38/0.5)]" />
      </div>
    </figure>
  );
}

/** Landscape tablet with the front camera in the side bezel. */
export function TabletFrame({ src, alt, priority, sizes }: FrameProps) {
  return (
    <figure className="@container">
      <div className={`rounded-[4.6cqw] p-[0.45cqw] ${rim} ${depth}`}>
        <div className={`relative rounded-[4.15cqw] p-[2.4cqw] ${bezel}`}>
          <span aria-hidden="true" className="absolute left-[0.75cqw] top-1/2 size-[0.95cqw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#3d5a80_0%,#141b26_55%,#07090d_100%)] ring-1 ring-white/10" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75cqw] bg-white ring-1 ring-black/50">
            {/* Wide screenshots: keep the left edge (sidebar) and crop from the right, never a sliver on both sides. */}
            <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-left-top contrast-[1.06] saturate-[1.1]" />
            <span aria-hidden="true" className={glare} />
          </div>
        </div>
      </div>
    </figure>
  );
}

/** Phone with a status bar and camera island, so the top of the screenshot is not covered. */
export function PhoneFrame({ src, alt, priority, sizes }: FrameProps) {
  const button = "absolute w-[1.4cqw] bg-[linear-gradient(90deg,#3a414c,#6b7482,#2a313b)]";
  return (
    <figure className="@container relative">
      <span aria-hidden="true" className={`${button} -right-[1.2cqw] top-[21%] h-[12%] rounded-r-[0.8cqw]`} />
      <span aria-hidden="true" className={`${button} -left-[1.2cqw] top-[14%] h-[4%] rounded-l-[0.8cqw]`} />
      <span aria-hidden="true" className={`${button} -left-[1.2cqw] top-[21%] h-[7%] rounded-l-[0.8cqw]`} />
      <span aria-hidden="true" className={`${button} -left-[1.2cqw] top-[30%] h-[7%] rounded-l-[0.8cqw]`} />
      <div className={`rounded-[16cqw] p-[0.9cqw] ${rim} ${depth}`}>
        <div className={`rounded-[15.1cqw] p-[3cqw] ${bezel}`}>
          <div className="relative overflow-hidden rounded-[12.1cqw] bg-white ring-1 ring-black/50">
            <div className="relative h-[10cqw]" aria-hidden="true">
              <span className="absolute left-1/2 top-[2.4cqw] flex h-[5.4cqw] w-[31%] -translate-x-1/2 items-center justify-end rounded-full bg-[#07090d] pe-[1.4cqw]">
                <span className="size-[2.4cqw] rounded-full bg-[radial-gradient(circle_at_35%_35%,#3d5a80_0%,#141b26_55%,#07090d_100%)]" />
              </span>
            </div>
            <div className="relative aspect-[9/19]">
              <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={screen} />
            </div>
            <span aria-hidden="true" className={glare} />
          </div>
        </div>
      </div>
    </figure>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "white" | "mist" | "navy";
}) {
  const tones = { paper: "", white: "bg-white", mist: "bg-mist", navy: "bg-navy text-white" };
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="container-x py-20 md:py-28">{children}</div>
    </section>
  );
}

export function NumberedList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-x-10 border-t border-line sm:grid-cols-2">
      {items.map((it, i) => (
        <li key={it.title} className="reveal border-b border-line py-7">
          <span className="font-mono text-sm text-blue">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 font-display text-xl font-semibold">{it.title}</h3>
          <p className="mt-2 text-body">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
