import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DonationCTA from "@/components/DonationCTA";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the six initiatives of Shatakshi Seva Sansthan — from Mission Arms to Pen and Annapurna Kitchen to the free ambulance service and dignified last rites.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        crumb="Programs"
        eyebrow="What we do"
        title="Six programs, one promise of dignity"
        subtitle="Each initiative answers a real need of the diara belt — education, food, healthcare, empowerment, disaster resilience and the right to a dignified farewell."
      />

      {/* Quick nav */}
      <section className="border-b border-brand-100 bg-white/70 backdrop-blur">
        <div className="container-page flex gap-3 overflow-x-auto py-4">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="whitespace-nowrap rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
            >
              {p.name}
            </a>
          ))}
        </div>
      </section>

      <div className="container-page space-y-20 py-20">
        {programs.map((program, i) => {
          const Icon = program.icon;
          const reversed = i % 2 === 1;
          return (
            <Reveal
              key={program.slug}
              id={program.slug}
              className="scroll-mt-28"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reversed ? "" : ""
                }`}
              >
                {/* Visual */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <div
                    className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br ${program.color} p-8 text-white shadow-xl`}
                  >
                    <div className="bg-dot-grid absolute inset-0 opacity-10" />
                    <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                      <Icon className="h-8 w-8" />
                    </span>
                    <div className="relative">
                      {program.hindiName && (
                        <p className="font-display text-2xl font-bold">
                          {program.hindiName}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-white/80">
                        {program.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {program.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-2xl border border-brand-100 bg-white p-4 text-center"
                      >
                        <p className="font-display text-lg font-extrabold text-brand-700">
                          {h.value}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-tight text-ink/55">
                          {h.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Copy */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="text-sm font-semibold uppercase tracking-wider text-saffron-600">
                    Program {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-3xl font-bold text-brand-900">
                    {program.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink/70">
                    {program.overview}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {program.objectives.map((o) => (
                      <li key={o} className="flex gap-2.5 text-sm text-ink/70">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/donate?cause=${encodeURIComponent(
                      program.donationCategory
                    )}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    Support this program
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <DonationCTA />
      <div className="h-8" />
    </>
  );
}
