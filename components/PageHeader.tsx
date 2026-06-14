import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/80 to-cream">
      <div className="bg-dot-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-saffron-200/40 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-14 sm:py-20">
        <nav className="flex items-center gap-1.5 text-sm text-ink/50">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-brand-700">{crumb}</span>
        </nav>
        {eyebrow && (
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-brand-950 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
