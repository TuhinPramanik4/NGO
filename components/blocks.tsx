import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { Chip, Ornament, Photo } from "@/components/ui";
import {
  donationTiers,
  impactStats,
  press,
  tone as toneMap,
  testimonials,
  type Program,
  type Story,
} from "@/lib/data";

/** Programme card: numbered, square, photograph first. */
export function ProgramCard({ p, index = 0 }: { p: Program; index?: number }) {
  const t = toneMap[p.tone];
  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <Link
        href={`/programs/${p.slug}`}
        className="card-lift group flex h-full flex-col border border-line bg-sand-50"
      >
        <Photo
          src={p.image}
          alt={p.name}
          className="aspect-[4/3]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
            <span className="figures text-2xl text-ink-mute">{String(index + 1).padStart(2, "0")}</span>
            <span className={`font-hindi text-[0.95rem] ${t.text}`}>{p.hindiName}</span>
          </div>
          <h3 className="display mt-5 text-[1.85rem] leading-[1.1] text-ink">{p.name}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
            <span className="link-draw">Read more</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/** Story entry: photograph, dateline, headline. */
export function StoryCard({ s, index = 0 }: { s: Story; index?: number }) {
  const t = toneMap[s.tone];
  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <Link href={`/impact#${s.slug}`} id={s.slug} className="group flex h-full scroll-mt-28 flex-col">
        <Photo
          src={s.image}
          alt={s.title}
          className="aspect-[5/4]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <Chip className={t.chip}>{s.program}</Chip>
          <span className="h-3 w-px bg-line" />
          <span className="text-xs italic text-ink-mute">{s.place}</span>
        </p>
        <h3 className="display mt-3 text-[1.75rem] leading-[1.12] text-ink">
          <span className="link-draw">{s.title}</span>
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
      </Link>
    </Reveal>
  );
}

/** Figures set like a printed annual report, divided by hairlines. */
export function ImpactBand({ limit = 6 }: { limit?: number }) {
  return (
    <section className="bg-river-900 py-24 text-sand-50 sm:py-32">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow !text-marigold-300">2011 – 2026</p>
            <h2 className="display mt-4 text-[2.6rem] sm:text-[3.6rem]">
              Our work, <em className="!text-marigold-300">in figures</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs font-display text-lg italic text-river-200">
              Drawn from the Sansthan&apos;s own field records.
            </p>
          </Reveal>
        </div>
        <Ornament tone="light" className="mt-12" />
        <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-3">
          {impactStats.slice(0, limit).map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-river-900 px-5 py-10 sm:px-8 sm:py-12">
              <dt className="sr-only">{s.label}</dt>
              <dd className="figures text-[3.4rem] leading-none text-sand-50 sm:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-4 text-[0.95rem] text-river-100">{s.label}</dd>
              {s.note && <dd className="mt-1 font-display text-base italic text-river-300">{s.note}</dd>}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function DonationBand() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="border border-ink p-2">
          <div className="border border-line px-6 py-14 text-center sm:px-14 sm:py-20">
            <p className="font-hindi text-2xl text-marigold-600">एक मुट्ठी अनाज</p>
            <h2 className="display mx-auto mt-4 max-w-3xl text-[2.6rem] text-ink sm:text-6xl">
              Your contribution can <em>transform lives.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-soft">
              Every rupee reaches the ground in Gopalganj. All gifts carry an 80-G
              receipt, issued the same day.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-px border border-line bg-line sm:grid-cols-3">
              {donationTiers.slice(0, 2).map((t) => (
                <Link
                  key={t.amount}
                  href={`/donate?amount=${t.amount}`}
                  className="group bg-sand-50 px-5 py-6 transition-colors duration-500 hover:bg-sand-100"
                >
                  <span className="figures block text-4xl text-ink">₹{t.amount.toLocaleString("en-IN")}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{t.label}</span>
                </Link>
              ))}
              <Link
                href="/donate"
                className="flex flex-col justify-center bg-river-900 px-5 py-6 text-sand-50 transition-colors duration-500 hover:bg-river-700"
              >
                <span className="figures block text-3xl">Any amount</span>
                <span className="mt-1 block text-sm text-river-200">Choose your own →</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PressStrip() {
  return (
    <section aria-label="As reported in" className="border-y border-line py-8">
      <div className="container-page flex flex-col items-center gap-4 lg:flex-row lg:gap-10">
        <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-mute">
          As reported in
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:justify-between lg:flex-1">
          {press.map((p) => (
            <li key={p} className="display text-[1.35rem] italic text-ink-soft">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal
          key={i}
          delay={i * 110}
          className={`flex flex-col py-8 md:px-10 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : "md:pl-0"} ${
            i === testimonials.length - 1 ? "md:pr-0" : ""
          }`}
        >
          <span aria-hidden className="display h-10 text-7xl leading-none text-marigold-500">“</span>
          <blockquote className="display mt-4 flex-1 text-[1.55rem] italic leading-snug text-ink">
            {t.quote}
          </blockquote>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {t.name} <span className="text-ink-mute">· {t.role}</span>
          </p>
        </Reveal>
      ))}
    </div>
  );
}
