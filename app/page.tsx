import Link from "next/link";
import { ArrowRight, Heart, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Photo, SectionHeading, TextLink } from "@/components/ui";
import {
  DonationBand,
  ImpactBand,
  PressStrip,
  ProgramCard,
  StoryCard,
  Testimonials,
} from "@/components/blocks";
import { helpline, org, pillars, programBySlug, programs, stories, tone } from "@/lib/data";
import { photo } from "@/lib/images";

const diaraFacts = [
  { value: "155 / 234", label: "panchayats in the district have no high school" },
  { value: "40%", label: "drop in attendance when floods move schools 5 km away" },
  { value: "1 in 4", label: "children in the diara drop out before Class 10" },
  { value: "3–5k", label: "children under 15 migrate for labour every year" },
];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
          <div>
            <p className="eyebrow">Gopalganj, Bihar · since {org.established}</p>
            <h1 className="display mt-6 text-[2.9rem] text-river-950 sm:text-7xl lg:text-[5.2rem]">
              A hundred eyes for the ones <em className="mark not-italic">no one sees.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              In the flood-hit diara belt of the Gandak river, we run free schools for
              first-generation learners, carry hot meals to abandoned elders, drive a
              free 24×7 ambulance and give the unclaimed a dignified farewell.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/donate" className="btn btn-primary">
                <Heart className="h-4 w-4" strokeWidth={2.5} /> Donate now
              </Link>
              <Link href="/volunteer" className="btn btn-ghost">Become a volunteer</Link>
              <span className="ml-2 hidden sm:inline">
                <TextLink href="/about">Learn more</TextLink>
              </span>
            </div>
            <p className="mt-10 flex items-center gap-3 text-sm text-ink-mute">
              <span className="font-hindi text-lg text-marigold-600">{org.motto}</span>
              <span className="h-px w-8 bg-line" />
              {org.mottoEn}
            </p>
          </div>

          {/* Collage */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <Photo
              src={photo.assembly}
              alt="Morning assembly at a Shatakshi learning centre"
              priority
              className="aspect-[4/4.4] w-[82%] shadow-[0_40px_80px_-40px_rgb(14_53_48/0.55)]"
              sizes="(min-width: 1024px) 420px, 82vw"
            />
            <Photo
              src={photo.ambulance}
              alt="The free Shatakshi ambulance"
              className="absolute -bottom-8 right-0 aspect-[3/4] w-[38%] border-[6px] border-sand-50 shadow-xl"
              sizes="200px"
            />
            <div className="absolute -left-3 bottom-16 rounded-2xl bg-white p-4 pr-6 shadow-xl sm:-left-8">
              <p className="display text-4xl text-river-900">800+</p>
              <p className="text-sm font-semibold text-ink-soft">children in free school</p>
            </div>
            <div className="absolute right-[10%] top-6 hidden rounded-full bg-river-900 px-4 py-2 text-sm font-semibold text-sand-50 shadow-lg sm:block">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-marigold-400" />
              Ambulance on call 24×7
            </div>
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ---------------- The name & three pillars ---------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why ‘Shatakshi’"
            title={<>The goddess who wept <span className="text-marigold-600">rivers</span> for a hungry land.</>}
            intro={
              <>
                In Indian tradition, Shatakshi — <span className="font-hindi">शताक्षी</span>, “the
                hundred-eyed” — saw the world suffering through drought and famine, and wept.
                Her tears became rivers that fed the land. We took her name for a simple reason:
                our work is about <strong className="text-river-900">seeing</strong> those everyone
                else overlooks.
              </>
            }
          />
          <div className="grid gap-4">
            {pillars.map((pl, i) => {
              const t = tone[pl.tone];
              return (
                <Reveal
                  key={pl.key}
                  delay={i * 90}
                  className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 sm:grid-cols-[8rem_1fr] sm:p-7"
                >
                  <div>
                    <p className={`font-hindi text-3xl ${t.text}`}>{pl.hindi}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">{pl.name}</p>
                  </div>
                  <div>
                    <p className="text-lg leading-snug text-river-950">{pl.line}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {pl.programs.length > 0 ? (
                        pl.programs.map((slug) => {
                          const p = programBySlug(slug)!;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/programs/${slug}`}
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold transition-opacity hover:opacity-80 ${t.chip}`}
                              >
                                {p.name.replace("Maa Shatakshi ", "")}
                              </Link>
                            </li>
                          );
                        })
                      ) : (
                        <li className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${t.chip}`}>
                          {helpline.name}
                        </li>
                      )}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ImpactBand />

      {/* ---------------- Programs ---------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Six programs. One idea: dignity."
              intro="From a child's first alphabet to a stranger's last rites, each program answers a need we saw on the ground."
            />
            <TextLink href="/programs">All programs</TextLink>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <ProgramCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Where we work ---------------- */}
      <section className="bg-sand-100 py-20 sm:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="The diara: land the river gives, and takes back."
              intro="The Gandak floods six of Gopalganj's fourteen blocks every year. When the water comes, it doesn't just take homes and crops — it takes a childhood."
            />
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {diaraFacts.map((f, i) => (
                <Reveal key={f.label} delay={i * 70}>
                  <dt className="display text-4xl text-sindoor-600">{f.value}</dt>
                  <dd className="mt-2 text-sm leading-snug text-ink-soft">{f.label}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal className="grid gap-4">
            <Photo
              src={photo.khapVillage}
              alt="Khap village in the diara of the Gandak"
              className="aspect-[16/8]"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="grid grid-cols-2 gap-4">
              <Photo src={photo.floodHomes} alt="Homes after the flood" className="aspect-[4/3]" sizes="280px" />
              <Photo src={photo.floodSchool} alt="A school building in flood silt" className="aspect-[4/3]" sizes="280px" />
            </div>
            <p className="text-sm text-ink-mute">Khap village and the flood-hit diara, photographed by Team Shatakshi.</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Founder ---------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="grid overflow-hidden rounded-[2rem] bg-river-950 text-sand-50 lg:grid-cols-[0.55fr_1.45fr]">
            <Photo
              src={photo.founder}
              alt="Naveen Shrivastava, founder"
              rounded="rounded-none"
              className="aspect-[4/4.2] lg:aspect-auto"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
            <div className="flex flex-col justify-center p-8 sm:p-14">
              <p className="eyebrow !text-marigold-300">How it began</p>
              <blockquote className="display mt-6 text-3xl leading-tight sm:text-[2.6rem]">
                “If this were your brother, what would you do?”
              </blockquote>
              <p className="mt-6 max-w-xl leading-relaxed text-river-200">
                Naveen Shrivastava was preparing for the IAS in Prayagraj when his brother
                drowned in the Ganga. Searching the river, he found body after unclaimed body.
                A boatman's question turned his life back home — to Manikpur, Gopalganj — and
                in 2011, with his wife Shilpi Saxena, Shatakshi began.
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn btn-light">
                  Our story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Stories ---------------- */}
      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Latest from the field" title="Stories of change" />
            <TextLink href="/impact">All impact stories</TextLink>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map((s, i) => (
              <StoryCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Voices ---------------- */}
      <section className="bg-sand-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="In their words" title="Voices from the diara" align="center" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <DonationBand />

      {/* ---------------- Helpline strip ---------------- */}
      <section className="pb-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] border border-line p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-hindi text-lg text-sindoor-600">{helpline.hindiName}</p>
              <p className="display mt-1 text-2xl text-river-950">
                Need an ambulance, or help with a government scheme?
              </p>
            </div>
            <a href={`tel:+${org.phoneRaw}`} className="btn btn-dark">
              <Phone className="h-4 w-4" /> {org.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
