import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import { px, pool } from "@/lib/images";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProgramCard from "@/components/ProgramCard";
import Testimonials from "@/components/Testimonials";
import DonationCTA from "@/components/DonationCTA";
import { impactStats, programs, stories } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Impact stats */}
      <section className="container-page -mt-2 py-20">
        <SectionHeading
          eyebrow="Our impact so far"
          title="A decade of seva, measured in lives"
          subtitle="Numbers from the flood-affected diara belt of Gopalganj — every figure is a person reached."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 text-center shadow-[0_12px_40px_-28px_rgba(20,81,47,0.4)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-saffron-400" />
              <p className="font-display text-4xl font-extrabold text-brand-700 sm:text-5xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-ink/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-brand-50/60">
        <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
              Our Mission
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
              Shiksha, Seva &amp; Jagrukta — our three guiding lamps
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              In the diara region, people don&apos;t die in the flood first —
              their dreams do. We work as a mission to change that: bringing free
              education to first-generation learners, dignified service to the
              forgotten, and awareness that connects villagers to their rights.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
              >
                About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-6 py-3 font-semibold text-brand-800 transition-colors hover:bg-brand-100"
              >
                Impact Stories
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="grid gap-4 sm:grid-cols-3">
            {[
              { word: "Shiksha", en: "Education", grad: "from-brand-600/85 to-brand-900/90", img: px(pool.school[4], 500, 700) },
              { word: "Seva", en: "Service", grad: "from-saffron-600/80 to-saffron-900/90", img: px(pool.food[3], 500, 700) },
              { word: "Jagrukta", en: "Awareness", grad: "from-sky-700/80 to-sky-950/90", img: px(pool.volunteer[1], 500, 700) },
            ].map((c) => (
              <div
                key={c.word}
                className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white shadow-lg"
              >
                <Image
                  src={c.img}
                  alt={c.en}
                  fill
                  sizes="(max-width: 640px) 100vw, 16vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.grad}`} />
                <p className="relative font-display text-xl font-bold drop-shadow">
                  {c.word}
                </p>
                <p className="relative text-sm text-white/85 drop-shadow">{c.en}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="container-page py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="Six programs, one promise of dignity"
            subtitle="From classrooms in the diara belt to last rites for the unclaimed — service that meets people where they are."
          />
          <Link
            href="/programs"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-100"
          >
            All programs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder quote band */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950">
        <div className="container-page py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-12 w-12 text-saffron-400/60" />
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              &ldquo;Where there was once a gun in a parent&apos;s hand, today
              there is a pen in their child&apos;s.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-saffron-300">
              Naveen Shrivastava · Founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact stories preview */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Impact stories"
          title="Real people, real change"
          subtitle="The moments that show what a fistful of grain, a free ride or a free classroom can do."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_12px_40px_-28px_rgba(20,81,47,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-45 mix-blend-multiply`}
                  />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {s.program}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                    {s.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {s.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Read all stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Testimonials />

      <DonationCTA />

      <div className="h-8" />
    </>
  );
}
