"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { navLinks, org } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-river-950 text-[0.78rem] text-river-100 md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p>
            <span className="font-hindi text-marigold-300">{org.motto}</span>
            <span className="mx-2 text-river-500">·</span>
            Reg. No. {org.regNo} · 12-A &amp; 80-G certified
          </p>
          <a href={`tel:+${org.phoneRaw}`} className="hover:text-white">
            24×7 helpline &amp; ambulance: <strong className="text-white">{org.phone}</strong>
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-line bg-sand-50/90 backdrop-blur-md"
            : "border-transparent bg-sand-50"
        }`}
      >
        <nav
          aria-label="Main"
          className="container-page flex h-[72px] items-center justify-between gap-6"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                    isActive(l.href)
                      ? "text-river-900"
                      : "text-ink-soft hover:text-river-900"
                  }`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-marigold-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/donate" className="btn btn-primary hidden sm:inline-flex">
              <Heart className="h-4 w-4" strokeWidth={2.5} />
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-river-900 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-sand-50 lg:hidden"
      >
        <ul className="container-page divide-y divide-line py-4">
          {[{ label: "Home", href: "/" }, ...navLinks].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`display flex items-center justify-between py-4 text-2xl ${
                  isActive(l.href) ? "text-marigold-600" : "text-river-950"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-page grid gap-3 pb-10">
          <Link href="/donate" className="btn btn-primary w-full">
            <Heart className="h-4 w-4" /> Donate now
          </Link>
          <a href={`tel:+${org.phoneRaw}`} className="btn btn-ghost w-full">
            Call {org.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
