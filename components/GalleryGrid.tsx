"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Share2, X } from "lucide-react";
import { gallery, galleryCategories } from "@/lib/data";

export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  const current = active !== null ? items[active] : null;

  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  const share = async () => {
    if (!current) return;
    const data = { title: "Shatakshi Seva Sansthan", text: current.alt, url: window.location.href };
    if (navigator.share) await navigator.share(data).catch(() => {});
    else await navigator.clipboard?.writeText(window.location.href);
  };

  return (
    <>
      <div role="tablist" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={` px-4 py-2 text-sm font-bold transition-colors ${
              cat === c ? "bg-river-900 text-sand-50" : "bg-white text-ink-soft ring-1 ring-line hover:text-river-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((g, i) => (
          <li key={g.src} className="break-inside-avoid">
            <button
              onClick={() => setActive(i)}
              className="group block w-full text-left"
              aria-label={`Open photo: ${g.alt}`}
            >
              <span className="photo block rounded-[var(--radius-card)]">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-2 flex items-center justify-between text-sm">
                <span className="text-ink-soft">{g.alt}</span>
                <span className="shrink-0 pl-3 text-xs font-bold text-marigold-700">{g.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-river-950/95 p-4 text-sand-50 backdrop-blur sm:p-8"
          onClick={(e) => e.target === e.currentTarget && setActive(null)}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-river-200">
              {active! + 1} / {items.length} · {current.category}
            </p>
            <div className="flex gap-2">
              <button onClick={share} aria-label="Share" className="grid h-11 w-11 place-items-center  bg-white/10 hover:bg-white/20">
                <Share2 className="h-5 w-5" />
              </button>
              <button ref={closeRef} onClick={() => setActive(null)} aria-label="Close" className="grid h-11 w-11 place-items-center  bg-white/10 hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center gap-4 py-6">
            <button onClick={() => step(-1)} aria-label="Previous" className="hidden h-12 w-12 shrink-0 place-items-center  bg-white/10 hover:bg-white/20 sm:grid">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              className="max-h-[75vh] w-auto max-w-full  object-contain"
              style={{ width: Math.min(current.w * 1.6, 1100) }}
            />
            <button onClick={() => step(1)} aria-label="Next" className="hidden h-12 w-12 shrink-0 place-items-center  bg-white/10 hover:bg-white/20 sm:grid">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <p className="display text-center text-xl">{current.alt}</p>
          <div className="mt-4 flex justify-center gap-3 sm:hidden">
            <button onClick={() => step(-1)} className="btn btn-light">Previous</button>
            <button onClick={() => step(1)} className="btn btn-light">Next</button>
          </div>
        </div>
      )}
    </>
  );
}
