"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import useInView from "@/components/useInView";

/**
 * A field photograph. Unveils from the bottom when scrolled into view.
 * Pass `caption` for an italic, print-style caption under the frame.
 */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  caption,
  reveal = true,
  frameClass = "",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  caption?: React.ReactNode;
  reveal?: boolean;
  frameClass?: string;
  rounded?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const frame = (
    <div
      ref={ref}
      className={`photo card-img ${reveal ? `photo-reveal ${inView ? "is-visible" : ""}` : ""} ${caption ? frameClass : className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
  if (!caption) return frame;
  return (
    <figure className={className}>
      {frame}
      <figcaption className="mt-3 border-l border-sindoor-500 pl-3 font-display text-[0.98rem] italic leading-snug text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
}

/** A thin rule with a small lamp-flame in the middle. */
export function Ornament({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "bg-line" : "bg-white/15";
  return (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className={`h-px flex-1 ${line}`} />
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-marigold-500">
        <path d="M12 3c0 0 5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10z" fill="currentColor" />
      </svg>
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${tone === "light" ? "!text-marigold-300" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`display mt-4 text-[2.5rem] sm:text-[3.4rem] ${
          tone === "light" ? "text-sand-50 [&_em]:!text-marigold-300" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[1.08rem] leading-[1.75] ${
            tone === "light" ? "text-river-200" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Interior-page header: breadcrumb, title, standfirst, double rule. */
export function PageHero({
  eyebrow,
  title,
  intro,
  hindi,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  hindi?: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <div className="container-page pb-14 pt-12 sm:pb-20 sm:pt-20">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-ink-mute">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-sindoor-600">{eyebrow}</span>
        </nav>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h1 className="display max-w-4xl text-[3rem] text-ink sm:text-7xl lg:text-[5.4rem]">
              {title}
            </h1>
          </Reveal>
          {hindi && (
            <Reveal delay={120}>
              <p className="font-hindi text-4xl text-marigold-600 lg:text-5xl">{hindi}</p>
            </Reveal>
          )}
        </div>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl font-display text-[1.45rem] italic leading-snug text-ink-soft">
              {intro}
            </p>
          </Reveal>
        )}
        {children}
      </div>
      <div className="container-page">
        <div className="rule-double" />
      </div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-ink" : "text-sand-50"
      }`}
    >
      <span className="link-draw">{children}</span>
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </Link>
  );
}

/** Small-caps category label (no pill). */
export function Chip({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${className}`}>
      {children}
    </span>
  );
}
