"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories } from "@/lib/data";
import { px, pool } from "@/lib/images";

type Item = {
  title: string;
  category: string;
  src: string;
  span?: boolean;
};

const items: Item[] = [
  { title: "First day at Khap Maksudpur centre", category: "Education", src: px(pool.school[1], 900, 900), span: true },
  { title: "Annapurna Kitchen meal round", category: "Food Distribution", src: px(pool.food[1], 600, 600) },
  { title: "Life Line ambulance on call", category: "Ambulance Service", src: px(pool.ambulance[1], 600, 600) },
  { title: "Flood relief in the diara belt", category: "Disaster Relief", src: px(pool.flood[1], 600, 600) },
  { title: "Voice of Silence workshop", category: "Education", src: px(pool.women[1], 600, 600) },
  { title: "Community gathering at the centre", category: "Events", src: px(pool.volunteer[1], 600, 600) },
  { title: "A diya for the forgotten", category: "Events", src: px(pool.diya[1], 600, 600) },
  { title: "Feeding 47 elders, daily", category: "Food Distribution", src: px(pool.food[3], 900, 900), span: true },
  { title: "Water awareness drive", category: "Disaster Relief", src: px(pool.village[2], 600, 600) },
  { title: "Children of Nawada Diyara", category: "Education", src: px(pool.school[5], 600, 600) },
  { title: "Patient transport to Sadar Hospital", category: "Ambulance Service", src: px(pool.ambulance[2], 600, 600) },
  { title: "Volunteers of Team Shatakshi", category: "Events", src: px(pool.volunteer[4], 600, 600) },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2.5">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-brand-700 text-white shadow-lg shadow-brand-700/25"
                : "border border-brand-200 text-brand-700 hover:bg-brand-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.title + i}
            onClick={() => setLightbox(item)}
            className={`group relative overflow-hidden rounded-2xl bg-brand-100 text-left shadow-lg ${
              item.span ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-saffron-200">
                {item.category}
              </span>
              <p className="text-sm font-medium text-white">{item.title}</p>
            </figcaption>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-ink/50">
          No items in this category yet.
        </p>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src={lightbox.src.replace(/w=\d+&h=\d+/, "w=1400&h=1000")}
              alt={lightbox.title}
              width={1400}
              height={1000}
              className="h-auto w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-saffron-300">
                {lightbox.category}
              </span>
              <p className="text-lg font-semibold text-white">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
