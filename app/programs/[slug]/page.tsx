import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Photo, SectionHeading } from "@/components/ui";
import { ProgramCard, StoryCard } from "@/components/blocks";
import { programBySlug, programs, stories, tone } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) return {};
  return { title: p.name, description: p.summary };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) notFound();

  const t = tone[p.tone];
  const Icon = p.icon;
  const related = stories.filter((s) => s.programSlug === p.slug);
  const others = programs.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page pb-16 pt-10 sm:pb-20">
          <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-river-900">
            <ArrowLeft className="h-4 w-4" /> All programs
          </Link>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${t.chip}`}>
                <Icon className="h-4 w-4" />
                {p.pillar === "shiksha" ? "शिक्षा · Education" : "सेवा · Service"}
              </span>
              <p className={`font-hindi mt-6 text-2xl ${t.text}`}>{p.hindiName}</p>
              <h1 className="display mt-2 text-5xl text-river-950 sm:text-6xl lg:text-7xl">{p.name}</h1>
              <p className="display mt-6 max-w-xl text-2xl leading-snug text-ink-soft">{p.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={`/donate?cause=${encodeURIComponent(p.donationCategory)}`} className="btn btn-primary">
                  <Heart className="h-4 w-4" /> Support {p.name.replace("Maa Shatakshi ", "")}
                </Link>
                <Link href="/volunteer" className="btn btn-ghost">Volunteer</Link>
              </div>
            </div>
            <Photo src={p.image} alt={p.name} priority className="aspect-[4/3.4]" sizes="(min-width: 1024px) 480px, 100vw" />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-river-900 text-sand-50">
        <dl className="container-page grid grid-cols-1 divide-white/10 sm:grid-cols-3 sm:divide-x">
          {p.highlights.map((h) => (
            <div key={h.label} className="py-8 sm:px-8 sm:first:pl-0">
              <dt className="text-sm text-river-200">{h.label}</dt>
              <dd className="display mt-1 text-4xl">{h.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {p.origin && (
              <Reveal className={`rounded-[var(--radius-card)] p-7 ring-1 ${t.ring} bg-white`}>
                <p className="eyebrow">Why it exists</p>
                <p className="display mt-4 text-2xl leading-snug text-river-950">{p.origin}</p>
              </Reveal>
            )}
            <Reveal className="mt-12">
              <p className="eyebrow">Program overview</p>
              <p className="mt-5 text-xl leading-relaxed text-ink-soft">{p.overview}</p>
            </Reveal>
          </div>
          <Reveal className="h-fit rounded-[var(--radius-card)] bg-sand-100 p-8 lg:sticky lg:top-32">
            <h2 className="display text-2xl text-river-950">Objectives</h2>
            <ul className="mt-6 space-y-4">
              {p.objectives.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${t.icon}`}>
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-river-950">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {p.gallery.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <SectionHeading eyebrow="From the field" title="Photos" />
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {p.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 60}>
                  <Photo src={src} alt={`${p.name} — field photo ${i + 1}`} className="aspect-[4/3]" sizes="(min-width: 1024px) 280px, 50vw" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-sand-100 py-20 sm:py-28">
          <div className="container-page">
            <SectionHeading eyebrow="Success stories" title="What changed" />
            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => <StoryCard key={s.slug} s={s} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Keep exploring" title="Other programs" />
            <Link href="/programs" className="hidden items-center gap-1.5 font-bold text-river-800 sm:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => <ProgramCard key={o.slug} p={o} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
