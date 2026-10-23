import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { Photo } from "@/components/ui";
import { donationTiers, gallery, impactStats, press, type Program, type Story } from "@/lib/data";
import { big, stock } from "@/lib/images";

/** Programme tile: the photograph is the card; title sits on it. */
export function ProgramCard({
  p,
  index = 0,
  size = "md",
}: {
  p: Program;
  index?: number;
  size?: "md" | "lg";
}) {
  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <Link
        href={`/programs/${p.slug}`}
        className={`group relative isolate flex h-full flex-col justify-end overflow-hidden bg-river-900 text-sand-50 ${
          size === "lg" ? "min-h-[460px] lg:min-h-[620px]" : "min-h-[380px]"
        }`}
      >
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes={size === "lg" ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="-z-20 object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
        />
        <div className="scrim-bottom absolute inset-0 -z-10" />
        <div className="p-6 sm:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sand-50/75">
            {p.pillar === "shiksha" ? "Education" : "Service"}
          </p>
          <h3 className={`display mt-2 ${size === "lg" ? "text-4xl sm:text-5xl" : "text-[2rem]"} leading-[1.05]`}>
            {p.name}
          </h3>
          <p className={`mt-3 max-w-md text-sand-50/85 ${size === "lg" ? "text-lg" : ""}`}>{p.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
            <span className="link-draw">Read more</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/** Story card for grids (Impact page, programme pages). */
export function StoryCard({ s, index = 0 }: { s: Story; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <article id={s.slug} className="flex h-full scroll-mt-28 flex-col">
        <Photo src={s.image} alt={s.title} className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        <p className="mt-5 text-xs text-ink-mute">
          {s.program} · {s.place}
        </p>
        <h3 className="display mt-2 text-[1.75rem] leading-[1.12] text-ink">{s.title}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
      </article>
    </Reveal>
  );
}

/** Story as a wide row: photograph left, text right. */
export function StoryRow({ s, index = 0 }: { s: Story; index?: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="grid gap-6 border-t border-line py-10 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-10">
        <Photo src={s.image} alt={s.title} className="aspect-[4/3]" sizes="(min-width: 640px) 40vw, 100vw" />
        <div className="self-center">
          <p className="text-xs text-ink-mute">{s.program} · {s.place}</p>
          <h3 className="display mt-2 text-[2rem] leading-[1.1] text-ink sm:text-[2.4rem]">{s.title}</h3>
          <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">{s.summary}</p>
        </div>
      </article>
    </Reveal>
  );
}

/** The key numbers, set quietly in a row. */
export function ImpactBand({ limit = 4 }: { limit?: number }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-y-10 border-y border-ink py-10 lg:grid-cols-4">
          {impactStats.slice(0, limit).map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`px-3 sm:px-6 ${i % 2 ? "border-l border-line" : ""} ${i === 2 ? "lg:border-l lg:border-line" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="figures text-[3.2rem] leading-none text-ink sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-3 text-[0.95rem] leading-snug text-ink-soft">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Full-width photograph with the donation ask over it. */
export function DonationBand() {
  return (
    <section className="relative isolate overflow-hidden bg-river-950 py-28 text-sand-50 sm:py-40">
      <ParallaxImage src={big(stock.grainField)} alt="Women spreading grain to dry" className="-z-20" />
      <div className="scrim-full absolute inset-0 -z-10" />
      <Reveal className="container-page text-center">
        <h2 className="display mx-auto max-w-3xl text-[2.7rem] sm:text-[4.2rem]">
          Your contribution can transform lives
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-sand-50/85">
          Every rupee reaches the ground in Gopalganj. Every gift gets an 80-G receipt the same day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {donationTiers.slice(0, 2).map((t) => (
            <Link key={t.amount} href={`/donate?amount=${t.amount}`} className="btn btn-light !px-7">
              Donate ₹{t.amount.toLocaleString("en-IN")}
            </Link>
          ))}
          <Link href="/donate" className="btn btn-primary !px-7">Choose an amount</Link>
        </div>
      </Reveal>
    </section>
  );
}

/** A tight mosaic of the Sansthan's own photographs. */
export function PhotoMosaic() {
  const pick = gallery.slice(0, 7);
  const spans = ["col-span-2 row-span-2", "", "", "row-span-2", "col-span-2", "", ""];
  return (
    <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[190px] lg:grid-cols-4">
      {pick.map((g, i) => (
        <Reveal key={g.src} delay={i * 60} className={`${spans[i] ?? ""} relative`}>
          <Photo src={g.src} alt={g.alt} className="h-full w-full" sizes="(min-width: 1024px) 25vw, 50vw" />
        </Reveal>
      ))}
    </div>
  );
}

export function PressStrip() {
  return (
    <section aria-label="As reported in" className="border-y border-line py-8">
      <div className="container-page flex flex-col items-center gap-4 lg:flex-row lg:gap-10">
        <p className="shrink-0 text-xs text-ink-mute">As reported in</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:flex-1 lg:justify-between">
          {press.map((p) => (
            <li key={p} className="display text-[1.35rem] italic text-ink-soft">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
