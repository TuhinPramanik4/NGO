import type { Metadata } from "next";
import { big, stock } from "@/lib/images";
import { PageHero } from "@/components/ui";
import { DonationBand, ImpactBand, StoryCard } from "@/components/blocks";
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
        image={big(stock.flagDay)}
        imageAlt="Schoolchildren waving flags"
        title="Impact Stories"
        intro="A girl who cleared the Sainik School examination, forty-seven elders who eat every day, and patients who reached hospital in time."
      />
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <StoryCard key={s.slug} s={s} index={i} />
          ))}
        </div>
      </section>
      <ImpactBand />
      <DonationBand />
    </>
  );
}
