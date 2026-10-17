import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/** A framed field photo with the brand's warm grade and grain. */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  rounded = "rounded-[var(--radius-card)]",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
}) {
  return (
    <div className={`photo ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
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
        className={`display mt-4 text-[2.2rem] sm:text-5xl ${
          tone === "light" ? "text-sand-50" : "text-river-950"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "light" ? "text-river-200" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Interior-page header. */
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
    <section className="relative overflow-hidden border-b border-line">
      {hindi && (
        <span
          aria-hidden
          className="font-hindi pointer-events-none absolute -right-6 -top-10 select-none text-[11rem] leading-none text-sand-200/80 sm:text-[16rem]"
        >
          {hindi}
        </span>
      )}
      <div className="container-page relative pb-16 pt-14 sm:pb-20 sm:pt-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-[2.6rem] text-river-950 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-bold text-river-800 underline decoration-marigold-400 decoration-2 underline-offset-[6px] hover:text-river-950"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Chip({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
