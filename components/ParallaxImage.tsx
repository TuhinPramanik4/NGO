"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * A full-bleed photograph that drifts slightly slower than the page.
 * Movement is capped at ±8% and switched off for reduced-motion users.
 */
export default function ParallaxImage({
  src,
  alt,
  priority = false,
  strength = 0.12,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  strength?: number;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      if (!el || !img.current) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.current.style.transform = `translate3d(0, ${(-progress * strength * 100).toFixed(2)}%, 0) scale(1.18)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={wrap} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div ref={img} className="absolute inset-0 scale-[1.18] will-change-transform">
        <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
