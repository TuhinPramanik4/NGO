import type { Metadata } from "next";
import { big, stock } from "@/lib/images";
import Link from "next/link";
import { Megaphone, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PageHero, Photo } from "@/components/ui";
import { DonationBand } from "@/components/blocks";
import { helpline, org, pillars, programBySlug, tone } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
"Six programs across education, service and awareness — Mission Arms to Pen, Voice of Silence, Jal Pathshala, Annapurna Kitchen, Shatakshi Life Line and Antim Vidai.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        image={big(stock.girlsClassroom)}
        imageAlt="Girls in a village classroom"
        title="Our Programmes"
        intro="Every programme sits under शिक्षा, सेवा and जागरूकता — education, service and awareness — the three parts of the ring in our mark."
      >
        <nav aria-label="Pillars" className="rise mt-8 flex flex-wrap gap-2" style={{ animationDelay: "300ms" }}>
          {pillars.map((pl) => (
            <a key={pl.key} href={`#${pl.key}`} className="border border-sand-50/40 px-4 py-2 text-sm text-sand-50 transition-colors hover:bg-sand-50 hover:text-ink">
              <span className="font-hindi mr-1.5 font-normal">{pl.hindi}</span> {pl.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {pillars.slice(0, 2).map((pl) => {
        const t = tone[pl.tone];
        return (
          <section key={pl.key} id={pl.key} className="scroll-mt-28 border-b border-line py-20 sm:py-24">
            <div className="container-page">
              <div className="flex items-baseline gap-4">
                <h2 className={`font-hindi text-5xl ${t.text}`}>{pl.hindi}</h2>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink-mute">{pl.name}</p>
              </div>
              <p className="mt-3 max-w-xl text-lg text-ink-soft">{pl.line}</p>

              <div className="mt-12 grid gap-16">
                {pl.programs.map((slug, i) => {
                  const p = programBySlug(slug)!;
                  const pt = tone[p.tone];
                  const Icon = p.icon;
                  return (
                    <Reveal key={slug} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                      <Photo src={p.image} alt={p.name} className="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
                      <div>
                        <span className={`inline-grid h-12 w-12 place-items-center  ${pt.icon}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className={`font-hindi mt-5 text-lg ${pt.text}`}>{p.hindiName}</p>
                        <h3 className="display mt-1 text-4xl text-river-950">{p.name}</h3>
                        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.tagline}</p>
                        <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-line py-5">
                          {p.highlights.map((h) => (
                            <div key={h.label}>
                              <dt className="text-xs text-ink-mute">{h.label}</dt>
                              <dd className="display mt-1 text-xl text-river-900">{h.value}</dd>
                            </div>
                          ))}
                        </dl>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <Link href={`/programs/${p.slug}`} className="btn btn-dark">Explore programme</Link>
                          <Link href={`/donate?cause=${encodeURIComponent(p.donationCategory)}`} className="btn btn-ghost">
                            Support this
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Awareness */}
      <section id="jagrukta" className="scroll-mt-28 bg-river-950 py-20 text-sand-50 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-baseline gap-4">
              <h2 className="font-hindi text-5xl text-sindoor-100">जागरूकता</h2>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-river-300">Awareness</p>
            </div>
            <p className="mt-6 inline-flex items-center gap-2  bg-white/10 px-4 py-2 text-sm font-bold">
              <Megaphone className="h-4 w-4 text-marigold-300" /> {helpline.name}
            </p>
          </div>
          <div>
            <p className="display text-3xl leading-snug sm:text-4xl">
              A 24×7 bridge between government schemes and the families they were written for.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-river-200">{helpline.summary}</p>
            <a href={`tel:+${org.phoneRaw}`} className="btn btn-primary mt-8">
              <Phone className="h-4 w-4" /> Call the helpline
            </a>
          </div>
        </div>
      </section>

      <DonationBand />
    </>
  );
}
