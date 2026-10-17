"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import useInView from "@/components/useInView";
import ParallaxImage from "@/components/ParallaxImage";

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

/** Interior-page header. With `image`, the title sits over a full-width photograph. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  hindi?: string;
  children?: React.ReactNode;
}) {
  if (image) {
    return (
      <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-river-950 text-sand-50 sm:min-h-[560px] lg:min-h-[min(64vh,640px)]">
        <ParallaxImage src={image} alt={imageAlt} priority className="-z-10" />
        <div className="scrim-bottom absolute inset-0 -z-10" />
        <div className="container-page pb-12 pt-32 sm:pb-16">
          <nav aria-label="Breadcrumb" className="rise text-xs uppercase tracking-[0.2em] text-sand-50/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>{eyebrow}</span>
          </nav>
          <h1 className="rise display mt-5 max-w-4xl text-[2.9rem] sm:text-7xl" style={{ animationDelay: "100ms" }}>
            {title}
          </h1>
          {intro && (
            <p className="rise mt-5 max-w-2xl text-lg leading-relaxed text-sand-50/85" style={{ animationDelay: "200ms" }}>
              {intro}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="container-page pb-14 pt-12 sm:pb-20 sm:pt-20">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-ink-mute">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <span>{eyebrow}</span>
        </nav>
        <h1 className="display mt-8 max-w-4xl text-[3rem] text-ink sm:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
        {children}
      </div>
      <div className="container-page"><div className="rule" /></div>
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
