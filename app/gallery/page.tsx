import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { promoVideo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from the field — education centres, the Annapurna Kitchen, the free ambulance service, disaster relief and events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        crumb="Gallery"
        eyebrow="Moments from the field"
        title="Seva, in pictures"
        subtitle="A glimpse of life across our learning centres, kitchen rounds, ambulance calls and community events. (Image placeholders — drop in real photos when ready.)"
      />
      {/* Featured video */}
      <section className="container-page pt-14">
        <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-950 shadow-xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col justify-center p-8 text-white sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-saffron-200">
                <PlayCircle className="h-4 w-4" />
                Watch our story
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">
                A decade of seva, in motion
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
                From classrooms in the diara belt to meals at an elder&apos;s
                doorstep — see the mission of Shatakshi Seva Sansthan come alive.
              </p>
            </div>
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://player.vimeo.com/video/${promoVideo.vimeoId}?title=0&byline=0&portrait=0`}
                title="Shatakshi Seva Sansthan"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
