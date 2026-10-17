import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { Photo, TextLink } from "@/components/ui";
import {
  DonationBand,
  ImpactBand,
  PhotoMosaic,
  PressStrip,
  ProgramCard,
  StoryRow,
} from "@/components/blocks";
import { org, programs, stories } from "@/lib/data";
import { big, photo, stock } from "@/lib/images";

// Tile widths: wide, narrow / narrow, wide / narrow, wide. The ambulance (a small real
// photo) stays in a narrow tile so it is not blown up.
const tileSpan = ["lg:col-span-2", "", "", "lg:col-span-2", "", "lg:col-span-2"];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-river-950 text-sand-50 lg:min-h-[min(calc(100vh-120px),860px)]">
        <ParallaxImage
          src={big(stock.alphabetWall)}
          alt="Children sitting by a Hindi alphabet chart in a village school"
          priority
          className="-z-20"
        />
        <div className="scrim-bottom absolute inset-0 -z-10" />
        <div className="container-page grid gap-10 pb-14 pt-40 sm:pb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="rise display text-[3.1rem] leading-[1] sm:text-[5rem] lg:text-[6rem]">
              Where the river floods, we stay.
            </h1>
            <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-sand-50/85 sm:text-xl" style={{ animationDelay: "150ms" }}>
              Since {org.established}, Shatakshi Seva Sansthan has worked in the flood-hit villages
              along the Gandak in Gopalganj, Bihar: free schools for 800 children, a daily meal for
              abandoned elders, a free ambulance, and last rites for those no one claims.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "280ms" }}>
              <Link href="/donate" className="btn btn-primary">Donate</Link>
              <Link href="/programs" className="btn btn-light">See our work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Who we are ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="display text-[1.9rem] leading-[1.3] text-ink sm:text-[2.5rem]">
              We are a small, registered trust in Manikpur, Gopalganj. Our founder came home after
              his brother drowned in the Ganga, and began doing the work no one else would.
            </p>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
              Fifteen years on, Team Shatakshi runs four learning centres in the diara, a kitchen
              that cooks for elders who have been left alone, a 24-hour ambulance and a helpline that
              connects families to the government schemes meant for them.
            </p>
            <div className="mt-8"><TextLink href="/about">About us</TextLink></div>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Photo
              src={photo.founders}
              alt="The founders at Maa Shatakshi Rasoi, Manikpur"
              frameClass="aspect-[4/3]"
              sizes="(min-width: 1024px) 400px, 100vw"
              caption="Naveen Shrivastava, Shilpi Saxena and the team at Maa Shatakshi Rasoi, Manikpur."
            />
          </div>
        </div>
      </section>

      {/* ---------------- Programmes ---------------- */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">What we do</h2>
            </Reveal>
            <Reveal><TextLink href="/programs">All programmes</TextLink></Reveal>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <div key={p.slug} className={tileSpan[i]}>
                <ProgramCard p={p} index={i} size={tileSpan[i] ? "lg" : "md"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- The question ---------------- */}
      <section className="relative isolate overflow-hidden bg-river-950 py-32 text-sand-50 sm:py-44">
        <ParallaxImage src={big(stock.riverPlain)} alt="A river winding through green floodplain" className="-z-20" />
        <div className="scrim-full absolute inset-0 -z-10" />
        <Reveal className="container-page">
          <blockquote className="display max-w-4xl text-[2.6rem] italic leading-[1.1] sm:text-[4.4rem]">
            “If this were your brother, what would you do?”
          </blockquote>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand-50/85">
            A boatman asked Naveen Shrivastava this while he searched the river for his brother&apos;s
            body. Since then the Sansthan has given more than 1,200 unclaimed people a proper farewell.
          </p>
          <div className="mt-8">
            <TextLink href="/programs/antim-vidai" tone="light">Antim Vidai</TextLink>
          </div>
        </Reveal>
      </section>

      <ImpactBand />

      {/* ---------------- Real photos ---------------- */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">From our centres</h2>
              <p className="mt-3 text-ink-soft">Photographs taken by Team Shatakshi.</p>
            </Reveal>
            <Reveal><TextLink href="/gallery">Gallery</TextLink></Reveal>
          </div>
          <div className="mt-10"><PhotoMosaic /></div>
        </div>
      </section>

      {/* ---------------- Stories ---------------- */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">Stories</h2>
            </Reveal>
            <Reveal><TextLink href="/impact">All stories</TextLink></Reveal>
          </div>
          {stories.slice(0, 3).map((s, i) => (
            <StoryRow key={s.slug} s={s} index={i} />
          ))}
        </div>
      </section>

      <PressStrip />
      <DonationBand />
    </>
  );
}
