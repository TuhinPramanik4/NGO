import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Ornament, Photo, SectionHeading, TextLink } from "@/components/ui";
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
  { value: "155 of 234", label: "panchayats in the district have no high school" },
  { value: "40%", label: "fall in attendance when floods move schools 5 km away" },
  { value: "1 in 4", label: "children in the diara leave school before Class 10" },
  { value: "3,000+", label: "children under fifteen migrate for labour each year" },
];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section>
        <div className="container-page grid gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-7 lg:pt-6">
            <div className="rise">
              <p className="eyebrow">Gopalganj, Bihar · Since {org.established}</p>
            </div>
            <div className="rise" style={{ animationDelay: "120ms" }}>
              <h1 className="display mt-7 text-[3.3rem] leading-[0.98] text-ink sm:text-[5.2rem] lg:text-[6.2rem]">
                Serving those <em>the world forgets.</em>
              </h1>
            </div>
            <div className="rise" style={{ animationDelay: "260ms" }}>
              <p className="mt-8 max-w-xl font-display text-[1.45rem] italic leading-[1.45] text-ink-soft">
                Free schooling for first-generation learners, a hot meal at the door of
                abandoned elders, an ambulance at midnight, and a dignified farewell for
                the unclaimed: in the flood-hit diara of the Gandak.
              </p>
            </div>
            <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "380ms" }}>
              <Link href="/donate" className="btn btn-primary">Donate now</Link>
              <Link href="/volunteer" className="btn btn-ghost">Become a volunteer</Link>
              <TextLink href="/about">Learn more</TextLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              src={photo.assembly}
              alt="Morning assembly at a Shatakshi learning centre"
              priority
              className="w-full"
              frameClass="aspect-[4/4.6]"
              sizes="(min-width: 1024px) 460px, 100vw"
              caption="Morning assembly at the Khap Maksudpur centre, Mission Arms to Pen."
            />
          </div>
        </div>

        {/* Standfirst figures */}
        <div className="container-page">
          <Reveal className="grid border-y border-ink py-5 text-center sm:grid-cols-3">
            {[
              ["800", "children in free school"],
              ["47", "elders fed every day"],
              ["1,200+", "unclaimed given last rites"],
            ].map(([n, l], i) => (
              <p
                key={l}
                className={`py-3 font-display text-xl italic text-ink-soft ${i ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}
              >
                <span className="figures mr-2 not-italic text-3xl text-ink">{n}</span>
                {l}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- The name ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our name" title={<>Why we are called <em>Shatakshi</em></>} />
            <Reveal delay={120}>
              <p className="font-hindi mt-8 text-6xl text-marigold-600">शताक्षी</p>
              <p className="mt-2 font-display text-lg italic text-ink-mute">“the one with a hundred eyes”</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="prose-classic text-[1.12rem] leading-[1.8] text-ink-soft lg:col-span-6 lg:col-start-7">
            <p className="dropcap">
              In Indian tradition, Shatakshi is the goddess who looked upon a world parched by
              drought and famine with a hundred eyes, and wept. Her tears became rivers, and the
              rivers fed the land.
            </p>
            <p>
              We took her name because our work begins with <em className="text-ink">seeing</em>: the
              girl who has quietly left school, the elder no one visits, the body on the riverbank
              that no one has come for. Our mantra is three words: शिक्षा, सेवा, जागरूकता.
              Education, service, awareness.
            </p>
          </Reveal>
        </div>

        <div className="container-page mt-20">
          <div className="grid border-t border-ink md:grid-cols-3">
            {pillars.map((pl, i) => {
              const t = tone[pl.tone];
              return (
                <Reveal
                  key={pl.key}
                  delay={i * 120}
                  className={`py-10 md:px-8 ${i === 0 ? "md:pl-0" : "border-t border-line md:border-l md:border-t-0"} ${i === 2 ? "md:pr-0" : ""}`}
                >
                  <p className={`font-hindi text-4xl ${t.text}`}>{pl.hindi}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-mute">{pl.name}</p>
                  <p className="mt-5 font-display text-xl leading-snug text-ink">{pl.line}</p>
                  <ul className="mt-6 space-y-2 text-[0.95rem]">
                    {pl.programs.length > 0 ? (
                      pl.programs.map((slug) => (
                        <li key={slug}>
                          <Link href={`/programs/${slug}`} className="group inline-flex gap-2 text-ink-soft hover:text-ink">
                            <span className="text-marigold-500">—</span>
                            <span className="link-draw">{programBySlug(slug)!.name.replace("Maa Shatakshi ", "")}</span>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="inline-flex gap-2 text-ink-soft">
                        <span className="text-marigold-500">—</span> {helpline.name}
                      </li>
                    )}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ImpactBand />

      {/* ---------------- Programmes ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Our Programmes"
              intro="Six programmes, each begun because the team saw a need on the ground and could not look away."
            />
            <Reveal><TextLink href="/programs">All programmes</TextLink></Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <ProgramCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Where we work ---------------- */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where we work"
              title={<>The diara, land the river <em>gives and takes back</em></>}
              intro="The Gandak floods six of Gopalganj's fourteen blocks every year. When the water comes, it takes more than homes and crops. It takes a childhood."
            />
            <dl className="mt-12 grid grid-cols-2 gap-x-8">
              {diaraFacts.map((f, i) => (
                <Reveal key={f.label} delay={i * 90} className="border-t border-ink/70 py-5">
                  <dt className="figures text-[2.3rem] leading-none text-sindoor-600">{f.value}</dt>
                  <dd className="mt-3 text-sm leading-snug text-ink-soft">{f.label}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <div className="grid content-start gap-6 lg:col-span-6 lg:col-start-7">
            <Photo
              src={photo.khapVillage}
              alt="Khap village in the diara of the Gandak"
              frameClass="aspect-[16/8]"
              sizes="(min-width: 1024px) 560px, 100vw"
              caption="Khap village, on the Gandak's floodplain."
            />
            <div className="grid grid-cols-2 gap-6">
              <Photo src={photo.floodHomes} alt="Homes after the flood" frameClass="aspect-[4/3]" sizes="280px" caption="After the water recedes." />
              <Photo src={photo.floodSchool} alt="A school building in flood silt" frameClass="aspect-[4/3]" sizes="280px" caption="A school, buried in silt." />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Founder ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
            <Photo
              src={photo.founder}
              alt="Naveen Shrivastava, founder"
              frameClass="aspect-[4/5]"
              sizes="(min-width: 1024px) 340px, 320px"
              caption="Naveen Shrivastava, founder."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow">How it began</p>
              <blockquote className="display mt-6 text-[2.4rem] italic leading-[1.1] text-ink sm:text-[3.4rem]">
                “If this were your brother, what would you do?”
              </blockquote>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.8] text-ink-soft">
                Naveen Shrivastava was preparing for the civil services in Prayagraj when his
                brother drowned in the Ganga. Searching the river, he found body after unclaimed
                body. A boatman&apos;s question turned him back home to Manikpur, and in 2011,
                with his wife Shilpi Saxena, the Sansthan began.
              </p>
              <div className="mt-8"><TextLink href="/about">Read our story</TextLink></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Stories ---------------- */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading eyebrow="From the field" title="Stories of change" />
            <Reveal><TextLink href="/impact">All stories</TextLink></Reveal>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map((s, i) => (
              <StoryCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ---------------- Voices ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="In their words" title="Voices from the diara" align="center" />
          <Ornament className="mx-auto mt-10 max-w-xs" />
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>

      <div className="bg-sand-100"><DonationBand /></div>

      {/* ---------------- Helpline ---------------- */}
      <section className="py-14">
        <Reveal className="container-page text-center">
          <p className="font-display text-2xl italic text-ink-soft">
            Need an ambulance, or help with a government scheme? Call the {helpline.name}, day or night:
          </p>
          <a href={`tel:+${org.phoneRaw}`} className="figures mt-3 inline-block text-4xl text-ink hover:text-sindoor-600">
            {org.phone}
          </a>
        </Reveal>
      </section>
    </>
  );
}
