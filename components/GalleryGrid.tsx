"use client";

import { useState } from "react";
import { Camera, Play } from "lucide-react";
import { galleryCategories } from "@/lib/data";

type Item = {
  title: string;
  category: string;
  color: string;
  video?: boolean;
  span?: boolean;
};

const items: Item[] = [
  { title: "First day at Khap Maksudpur centre", category: "Education", color: "from-brand-500 to-brand-700", span: true },
  { title: "Annapurna Kitchen meal round", category: "Food Distribution", color: "from-saffron-500 to-saffron-700" },
  { title: "Life Line ambulance on call", category: "Ambulance Service", color: "from-sky-500 to-sky-700" },
  { title: "Flood relief in the diara belt", category: "Disaster Relief", color: "from-cyan-500 to-cyan-700" },
  { title: "Voice of Silence workshop", category: "Education", color: "from-rose-500 to-rose-700" },
  { title: "Republic Day at the centre", category: "Events", color: "from-emerald-500 to-emerald-700", video: true },
  { title: "Maha Aarti, Manikpur", category: "Events", color: "from-amber-500 to-orange-700" },
  { title: "Feeding 47 elders, daily", category: "Food Distribution", color: "from-saffron-600 to-saffron-800", span: true },
  { title: "Water awareness drive", category: "Disaster Relief", color: "from-teal-500 to-teal-700" },
  { title: "Children of Nawada Diyara", category: "Education", color: "from-brand-600 to-brand-800" },
  { title: "Patient transport to Sadar", category: "Ambulance Service", color: "from-blue-500 to-blue-700" },
  { title: "Award felicitation event", category: "Events", color: "from-violet-500 to-violet-700" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
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
          <figure
            key={item.title + i}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${
              item.color
            } shadow-lg ${item.span ? "sm:col-span-2 sm:row-span-2" : ""}`}
          >
            <div className="bg-dot-grid absolute inset-0 opacity-10" />
            <div className="absolute inset-0 grid place-items-center text-white/40 transition-transform duration-500 group-hover:scale-110">
              {item.video ? (
                <Play className="h-12 w-12 fill-white/30" />
              ) : (
                <Camera className="h-10 w-10" />
              )}
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-saffron-200">
                {item.category}
              </span>
              <p className="text-sm font-medium text-white">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-ink/50">
          No items in this category yet.
        </p>
      )}
    </div>
  );
}
