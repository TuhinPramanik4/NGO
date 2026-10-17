import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { PageHero, SectionHeading } from "@/components/ui";
import { promoVideo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from Shatakshi's work in Gopalganj, Bihar.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        hindi="झलक"
        title="Gallery"
        intro="Photographs taken by Team Shatakshi in classrooms, kitchens, ambulances and the flood itself."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>
      <section className="bg-river-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading tone="light" eyebrow="Video" title="A film about our work" />
          <div className="mt-10 aspect-video overflow-hidden rounded-[var(--radius-card)] bg-black">
            <iframe
              src={`https://player.vimeo.com/video/${promoVideo.vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
              title="Shatakshi Seva Sansthan — film"
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
