import Link from "next/link";

/**
 * The Shatakshi mark.
 * A ring in three parts — Shiksha, Seva, Jagrukta (the three pillars from the
 * original logo) — holding a single drop. The drop reads as both the diya's
 * flame and the tear of Shatakshi, the hundred-eyed goddess whose tears became
 * rivers that fed a famished land.
 */
export function LogoMark({
  className = "h-10 w-10",
  ring = "currentColor",
  flame = "var(--color-marigold-500)",
  core = "var(--color-marigold-200)",
  animated = false,
}: {
  className?: string;
  ring?: string;
  flame?: string;
  core?: string;
  animated?: boolean;
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke={ring}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="35.9 6"
        transform="rotate(160 24 24)"
      />
      <g className={animated ? "animate-flicker" : undefined}>
        <path
          d="M24 10.5c0 0 8 9.4 8 16.2a8 8 0 0 1-16 0c0-6.8 8-16.2 8-16.2z"
          fill={flame}
        />
        <path
          d="M24 20.5c0 0 3.6 4.4 3.6 7.3a3.6 3.6 0 0 1-7.2 0c0-2.9 3.6-7.3 3.6-7.3z"
          fill={core}
        />
      </g>
    </svg>
  );
}

export function Wordmark({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const main = tone === "dark" ? "text-river-950" : "text-sand-50";
  const sub = tone === "dark" ? "text-sindoor-600" : "text-marigold-300";
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className={`display text-[1.7rem] font-semibold ${main}`}>
        Shatakshi
      </span>
      <span
        className={`mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.34em] ${sub}`}
      >
        Seva Sansthan
      </span>
    </span>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Shatakshi Seva Sansthan — home"
      className="group flex items-center gap-2.5"
    >
      <LogoMark
        className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:rotate-[20deg]"
        ring={tone === "dark" ? "var(--color-river-800)" : "var(--color-sand-50)"}
      />
      <Wordmark tone={tone} />
    </Link>
  );
}
