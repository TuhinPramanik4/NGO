import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import DonationCTA from "@/components/DonationCTA";
import { stories, impactStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Stories of change from the diara region of Gopalganj — first-generation learners, lives saved by a free ambulance, and dignity restored to the forgotten.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        crumb="Impact"
        eyebrow="Impact stories"
        title="The change, one life at a time"
        subtitle="Behind every number is a person. Here are the moments that define a decade of seva in the diara belt."
      />

      {/* Stat band */}
      <section className="border-b border-brand-100 bg-brand-900">
        <div className="container-page grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-saffron-400">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-brand-100/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_12px_40px_-28px_rgba(20,81,47,0.4)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,81,47,0.45)]">
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${s.color} p-6`}>
                  <div className="bg-dot-grid absolute inset-0 opacity-10" />
                  <span className="relative inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {s.program}
                  </span>
                  <ArrowUpRight className="absolute bottom-5 right-5 h-6 w-6 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
      </section>

      <DonationCTA />
      <div className="h-8" />
    </>
  );
}
