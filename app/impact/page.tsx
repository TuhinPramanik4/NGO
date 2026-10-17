import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { DonationBand, ImpactBand, StoryCard, Testimonials } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { stories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impact stories",
  description: "Stories of change from the diara belt of Gopalganj, Bihar.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        hindi="बदलाव"
        title={<>Change you can <em className="mark not-italic">name</em>.</>}
        intro="Not abstractions — a girl who cleared the Sainik School exam, 47 elders who eat every day, 183 patients who reached a hospital in time."
      />
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <StoryCard key={s.slug} s={s} index={i} />
          ))}
        </div>
      </section>
      <ImpactBand />
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Testimonials" title="In their words" align="center" />
          <div className="mt-12"><Testimonials /></div>
        </div>
      </section>
      <DonationBand />
    </>
  );
}
