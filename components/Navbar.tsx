"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Heart, Phone } from "lucide-react";
import { navLinks, org } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_2px_24px_-12px_rgba(20,81,47,0.4)] backdrop-blur"
          : "bg-cream/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 fill-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-brand-800">
              Shatakshi
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-brand-600/80">
              Seva Sansthan
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-100 text-brand-800"
                    : "text-ink/70 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${org.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <Phone className="h-4 w-4" />
            {org.phone}
          </a>
          <Link
            href="/donate"
            className="rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-saffron-500/30 transition-all hover:bg-saffron-600 hover:shadow-saffron-500/40"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl text-brand-800 hover:bg-brand-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-brand-100 bg-cream transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/volunteer"
            className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand-700"
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="mt-2 rounded-full bg-saffron-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-saffron-500/30"
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
