import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";

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
      <section className="container-page py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
