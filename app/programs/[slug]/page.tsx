import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";
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
  const related = stories.filter((s) => s.programSlug === p.slug);
  const others = programs.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-river-950 text-sand-50 lg:min-h-[min(72vh,720px)]">
        <ParallaxImage src={p.image} alt={p.name} priority className="-z-20" />
        <div className="scrim-bottom absolute inset-0 -z-10" />
        <div className="container-page pb-12 pt-32 sm:pb-16">
          <Link href="/programs" className="rise inline-flex items-center gap-2 text-sm text-sand-50/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All programmes
          </Link>
          <p className="rise font-hindi mt-8 text-2xl text-marigold-200" style={{ animationDelay: "80ms" }}>{p.hindiName}</p>
          <h1 className="rise display mt-2 max-w-4xl text-5xl sm:text-7xl" style={{ animationDelay: "140ms" }}>{p.name}</h1>
          <p className="rise mt-5 max-w-2xl text-xl leading-relaxed text-sand-50/85" style={{ animationDelay: "220ms" }}>{p.tagline}</p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
            <Link href={`/donate?cause=${encodeURIComponent(p.donationCategory)}`} className="btn btn-primary">
              Support this programme
            </Link>
            <Link href="/volunteer" className="btn btn-light">Volunteer</Link>
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
              <p className="eyebrow">About the programme</p>
              <p className="mt-5 text-xl leading-relaxed text-ink-soft">{p.overview}</p>
            </Reveal>
          </div>
          <Reveal className="h-fit rounded-[var(--radius-card)] bg-sand-100 p-8 lg:sticky lg:top-32">
            <h2 className="display text-2xl text-river-950">Objectives</h2>
            <ul className="mt-6 space-y-4">
              {p.objectives.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center  ${t.icon}`}>
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
            <SectionHeading title="From our centres" intro="Photographs taken by Team Shatakshi." />
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
            <SectionHeading eyebrow="Keep exploring" title="Other programmes" />
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
