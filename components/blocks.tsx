import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { Chip, Photo } from "@/components/ui";
import {
  donationTiers,
  impactStats,
  press,
  tone as toneMap,
  testimonials,
  type Program,
  type Story,
} from "@/lib/data";

export function ProgramCard({ p, index = 0 }: { p: Program; index?: number }) {
  const t = toneMap[p.tone];
  const Icon = p.icon;
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <Link
        href={`/programs/${p.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgb(14_53_48/0.45)]"
      >
        <div className="relative">
          <Photo
            src={p.image}
            alt={p.name}
            rounded="rounded-none"
            className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <span className={`absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full shadow-sm ${t.icon}`}>
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className={`font-hindi text-[0.95rem] ${t.text}`}>{p.hindiName}</p>
          <h3 className="display mt-1.5 text-2xl text-river-950">{p.name}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.summary}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-river-800">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function StoryCard({ s, index = 0 }: { s: Story; index?: number }) {
  const t = toneMap[s.tone];
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <Link href={`/impact#${s.slug}`} id={s.slug} className="group flex h-full scroll-mt-28 flex-col">
        <Photo
          src={s.image}
          alt={s.title}
          className="aspect-[5/4]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="mt-5 flex items-center gap-3">
          <Chip className={t.chip}>{s.program}</Chip>
          <span className="text-xs font-semibold text-ink-mute">{s.place}</span>
        </div>
        <h3 className="display mt-3 text-[1.6rem] leading-tight text-river-950 decoration-marigold-400 decoration-2 underline-offset-4 group-hover:underline">
          {s.title}
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{s.summary}</p>
      </Link>
    </Reveal>
  );
}

/** Big numbers on a dark river band. */
export function ImpactBand({ limit = 6 }: { limit?: number }) {
  return (
    <section className="relative overflow-hidden bg-river-900 py-20 text-sand-50 sm:py-28">
      <div className="bg-river-lines absolute inset-0" aria-hidden />
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow !text-marigold-300">Fifteen years, in numbers</p>
            <h2 className="display mt-4 max-w-xl text-4xl sm:text-5xl">
              Small team. <span className="text-marigold-300">Real</span> reach.
            </h2>
          </div>
          <p className="max-w-sm text-river-200">
            Every figure comes from our own field records. No estimates dressed up as outcomes.
          </p>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 lg:grid-cols-3">
          {impactStats.slice(0, limit).map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="bg-river-900 p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="display text-5xl text-sand-50 sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-3 font-semibold text-river-100">{s.label}</dd>
              {s.note && <dd className="mt-1 text-sm text-river-300">{s.note}</dd>}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function DonationBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-marigold-500 px-6 py-14 sm:px-14 sm:py-16">
          <svg
            aria-hidden
            viewBox="0 0 48 48"
            className="absolute -right-16 -top-16 h-80 w-80 text-marigold-400 sm:h-[26rem] sm:w-[26rem]"
          >
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="3.2" strokeDasharray="35.9 6" transform="rotate(160 24 24)" />
          </svg>
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-hindi text-xl text-river-900">एक मुट्ठी अनाज</p>
              <h2 className="display mt-2 text-4xl text-river-950 sm:text-5xl">
                Your contribution can transform lives.
              </h2>
              <p className="mt-4 max-w-md text-river-900/80">
                Every rupee goes to the ground in Gopalganj. All donations are
                eligible for 80-G tax benefit, with an instant receipt.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {donationTiers.slice(0, 2).map((t) => (
                <Link
                  key={t.amount}
                  href={`/donate?amount=${t.amount}`}
                  className="group rounded-2xl bg-sand-50 p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="display text-3xl text-river-950">
                    ₹{t.amount.toLocaleString("en-IN")}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{t.label}</span>
                </Link>
              ))}
              <Link
                href="/donate"
                className="flex items-center justify-between rounded-2xl bg-river-950 p-5 font-bold text-sand-50 transition-colors hover:bg-river-900 sm:col-span-2"
              >
                Choose your own amount
                <ArrowUpRight className="h-5 w-5 text-marigold-300" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PressStrip() {
  const items = [...press, ...press];
  return (
    <section aria-label="Featured in" className="border-y border-line bg-sand-100 py-6">
      <div className="container-page flex items-center gap-8">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
          As featured in
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <ul className="animate-marquee flex w-max gap-12">
            {items.map((p, i) => (
              <li
                key={i}
                aria-hidden={i >= press.length}
                className="display whitespace-nowrap text-xl text-river-800/70"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal
          key={i}
          delay={i * 90}
          className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7"
        >
          <Quote className="h-7 w-7 text-marigold-500" />
          <blockquote className="display mt-4 flex-1 text-xl leading-snug text-river-950">
            “{t.quote}”
          </blockquote>
          <p className="mt-6 text-sm">
            <span className="font-bold text-river-900">{t.name}</span>
            <span className="text-ink-mute"> · {t.role}</span>
          </p>
        </Reveal>
      ))}
    </div>
  );
}
