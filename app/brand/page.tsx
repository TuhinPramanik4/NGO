import type { Metadata } from "next";
import { Check, Heart, X } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/brand/Logo";
import { Chip, PageHero, Photo, SectionHeading } from "@/components/ui";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Brand guidelines",
  description: "The Shatakshi identity — mark, colour, type, voice and photography.",
  robots: { index: false },
};

const palette = [
  {
    name: "River",
    role: "Primary ink · the Gandak",
    swatches: [
      ["950", "#0C1D18"], ["900", "#142C25"], ["800", "#1B3930"], ["700", "#22463B"],
      ["500", "#3B6A5B"], ["300", "#86AA9B"], ["100", "#D9E5DF"], ["50", "#EEF3F0"],
    ],
  },
  {
    name: "Marigold",
    role: "Second ink · the one action that matters",
    swatches: [
      ["800", "#6A4418"], ["700", "#87561B"], ["600", "#A86D1F"], ["500", "#C4862B"],
      ["400", "#D19A40"], ["300", "#DDB062"], ["100", "#F5E5C4"], ["50", "#FBF4E6"],
    ],
  },
  {
    name: "Sindoor",
    role: "Emphasis · italics, labels, drop caps",
    swatches: [["700", "#6B2016"], ["600", "#86291C"], ["500", "#9C3324"], ["100", "#EED3CB"], ["50", "#F8ECE8"]],
  },
  {
    name: "Paper",
    role: "Canvas · ivory stock",
    swatches: [["400", "#B9A581"], ["300", "#D4C4A6"], ["200", "#E5DAC5"], ["100", "#F0E9DB"], ["50", "#F8F4EC"]],
  },
];

const voice = [
  {
    do: "Name the person and the number. “47 elders eat every day.”",
    dont: "Vague scale. “Thousands of lives transformed.”",
  },
  {
    do: "Dignity first. “Elders no one visits.”",
    dont: "Pity. “Poor, helpless, miserable villagers.”",
  },
  {
    do: "Plain, warm English with Hindi where it carries meaning.",
    dont: "NGO jargon. “Holistic multi-stakeholder interventions.”",
  },
  {
    do: "Specific asks. “₹500 — a week of meals.”",
    dont: "Guilt. “If you don't give, they will suffer.”",
  },
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand guidelines · v1"
        hindi="शताक्षी"
        title={<>Paper, ink, and <em>a hundred eyes</em></>}
        intro="Shatakshi (शताक्षी) is the hundred-eyed goddess who wept for a famished world until her tears became rivers. The identity is built on that image: an eye that notices, water that nourishes, and a flame that keeps vigil."
      />

      {/* Mark */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="01 · The mark"
            title="A ring of three, holding one drop."
            intro="The ring keeps the three-part circle of the original logo — शिक्षा, सेवा, जागरूकता. The drop is both the diya's flame and Shatakshi's tear. Together they read as an eye."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="grid aspect-square place-items-center rounded-[var(--radius-card)] bg-white ring-1 ring-line">
              <LogoMark className="h-40 w-40" ring="var(--color-river-800)" animated />
            </div>
            <div className="grid aspect-square place-items-center rounded-[var(--radius-card)] bg-river-950">
              <LogoMark className="h-40 w-40" ring="var(--color-sand-50)" animated />
            </div>
            <div className="grid aspect-square place-items-center rounded-[var(--radius-card)] bg-marigold-500">
              <LogoMark className="h-40 w-40" ring="var(--color-river-950)" flame="var(--color-sand-50)" core="var(--color-marigold-300)" />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-center gap-3 rounded-[var(--radius-card)] bg-white p-12 ring-1 ring-line">
              <LogoMark className="h-14 w-14" ring="var(--color-river-800)" />
              <Wordmark className="scale-125 origin-left" />
            </div>
            <div className="flex items-center justify-center gap-3 rounded-[var(--radius-card)] bg-river-900 p-12">
              <LogoMark className="h-14 w-14" ring="var(--color-sand-50)" />
              <span className="flex flex-col leading-none">
                <span className="font-hindi text-4xl text-sand-50">शताक्षी</span>
                <span className="font-hindi mt-1 text-base text-river-200">सेवा संस्थान</span>
              </span>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 text-sm text-ink-soft sm:grid-cols-3">
            <li><strong className="text-river-950">Clear space:</strong> keep the height of the drop free on every side.</li>
            <li><strong className="text-river-950">Minimum size:</strong> 24px for the mark alone, 120px wide for the lockup.</li>
            <li><strong className="text-river-950">Don't:</strong> recolour the drop, add shadows, or put the mark on busy photos.</li>
          </ul>

          <div className="mt-10 flex items-center gap-6 rounded-[var(--radius-card)] bg-sand-100 p-6">
            <Photo src={photo.originalLogo} alt="The original Shatakshi logo" className="h-24 w-24 shrink-0" rounded="" sizes="96px" />
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="text-river-950">Evolved, not replaced.</strong> The original seal —
              three segments, the saffron ribbon and <span className="font-hindi">सेवा परमो धर्मः</span> —
              stays in use for certificates and official documents. The new mark is for screens, signage and uniforms.
            </p>
          </div>
        </div>
      </section>

      {/* Colour */}
      <section className="bg-sand-100 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="02 · Colour"
            title={<>Paper, ink, and <em>one warm colour</em></>}
            intro="Printed like a two-ink job: mostly paper and river-green ink, with marigold kept for the single most important action on a page, usually Donate."
          />
          <div className="mt-12 space-y-8">
            {palette.map((p) => (
              <div key={p.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl text-river-950">{p.name}</h3>
                  <p className="text-sm text-ink-mute">{p.role}</p>
                </div>
                <ul className="mt-4 grid grid-cols-4 overflow-hidden rounded-[var(--radius-card)] ring-1 ring-line sm:grid-cols-8">
                  {p.swatches.map(([step, hex]) => {
                    const dark = Number(step) >= 500;
                    return (
                      <li key={step} className="h-28 p-3" style={{ background: hex }}>
                        <p className={`text-xs font-bold ${dark ? "text-white" : "text-river-950"}`}>{step}</p>
                        <p className={`text-[0.7rem] ${dark ? "text-white/75" : "text-ink-soft"}`}>{hex}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Text pairs that pass WCAG AA: ink on paper · paper on river-900 · ink on marigold-500 · paper on sindoor-600.
          </p>
        </div>
      </section>

      {/* Type */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="03 · Typography" title={<>A classic serif, a newspaper sans, and <em>Devanagari</em></>} />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-line">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">Display · Cormorant Garamond</p>
              <p className="display mt-6 text-6xl text-river-950">Aa</p>
              <p className="display mt-4 text-3xl text-river-950">Serving those <em>the world forgets.</em></p>
              <p className="mt-4 text-sm text-ink-soft">Headlines, figures, quotes and captions. Italic carries emphasis, in sindoor.</p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-line">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">Text · Libre Franklin</p>
              <p className="mt-6 text-6xl text-river-950">Aa</p>
              <p className="mt-4 text-lg text-ink-soft">
                A newspaper sans for body copy, forms and small-caps labels. Plain and legible on
                inexpensive phone screens.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-line">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">Hindi · Tiro Devanagari</p>
              <p className="font-hindi mt-6 text-6xl text-marigold-600">अ</p>
              <p className="font-hindi mt-4 text-3xl text-river-950">सेवा परमो धर्मः</p>
              <p className="mt-4 text-sm text-ink-soft">Program names, the motto and Hindi accents. Ready for the full Hindi site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="bg-river-950 py-20 text-sand-50 sm:py-24">
        <div className="container-page">
          <SectionHeading tone="light" eyebrow="04 · Voice" title={<>Speak like a neighbour, <em>not a brochure</em></>} />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {voice.map((v) => (
              <div key={v.do} className="grid gap-3 rounded-[var(--radius-card)] border border-white/10 p-6">
                <p className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-marigold-300" /> {v.do}</p>
                <p className="flex gap-3 text-river-300"><X className="mt-0.5 h-5 w-5 shrink-0 text-sindoor-100/60" /> {v.dont}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="05 · Photography"
            title="Real, unposed, at eye level"
            intro="Use Team Shatakshi's own photos. Shoot people at their eye level, with their consent, doing something — learning, cooking, serving. Never show the deceased, and never use a beneficiary's suffering as a hook. Every photo gets the same warm, slightly matte grade and an italic caption, so phone shots sit together like plates in a book."
          />
          <div className="grid grid-cols-2 gap-4">
            <Photo src={photo.classroom} alt="Classroom example" className="aspect-[4/3]" sizes="280px" />
            <Photo src={photo.team} alt="Team example" className="aspect-[4/3]" sizes="280px" />
            <Photo src={photo.annapurna} alt="Kitchen example" className="col-span-2 aspect-[16/7]" sizes="560px" />
          </div>
        </div>
      </section>

      {/* UI */}
      <section className="bg-sand-100 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="06 · Interface" title="Components" />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="btn btn-primary"><Heart className="h-4 w-4" /> Donate</span>
            <span className="btn btn-dark">Primary action</span>
            <span className="btn btn-ghost">Secondary</span>
            <Chip className="bg-river-50 text-river-700">शिक्षा · Education</Chip>
            <Chip className="bg-marigold-50 text-marigold-700">सेवा · Service</Chip>
            <Chip className="bg-sindoor-50 text-sindoor-600">जागरूकता · Awareness</Chip>
          </div>
          <div className="mt-8 max-w-md">
            <label className="field-label" htmlFor="demo">Form field</label>
            <input id="demo" className="field" placeholder="A ruled line, like a printed form" />
          </div>
        </div>
      </section>
    </>
  );
}
