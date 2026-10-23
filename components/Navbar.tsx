"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { navLinks, org } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      {/* Masthead strip */}
      <div className="hidden bg-river-950 text-[0.72rem] tracking-[0.06em] text-river-200 md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p>
            <span className="font-hindi text-[0.85rem] text-marigold-300">{org.motto}</span>
            <span className="mx-3 text-river-500">|</span>
            Regd. Trust No. {org.regNo} · 12-A &amp; 80-G
          </p>
          <a href={`tel:+${org.phoneRaw}`} className="transition-colors hover:text-white">
            Ambulance &amp; helpline, 24 hours · <span className="text-sand-50">{org.phone}</span>
          </a>
        </div>
      </div>

      <div
        className={`border-b bg-sand-50/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${
          scrolled || open ? "border-line shadow-[0_8px_30px_-24px_rgb(29_27_23/0.5)]" : "border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className={`container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-out-soft)] ${
            scrolled ? "h-16" : "h-[84px]"
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`group relative py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive(l.href) ? "text-sindoor-600" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-500 ${
                      isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/donate" className="btn btn-primary hidden !px-5 !py-3 sm:inline-flex">
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center border border-line text-ink lg:hidden"
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
        className={`fixed inset-x-0 bottom-0 overflow-y-auto bg-sand-50 lg:hidden ${scrolled ? "top-16" : "top-[84px]"}`}
      >
        <ul className="container-page py-6">
          {[{ label: "Home", href: "/" }, ...navLinks].map((l, i) => (
            <li key={l.href} className="border-b border-line">
              <Link
                href={l.href}
                className={`display flex items-baseline gap-4 py-4 text-3xl ${
                  isActive(l.href) ? "text-sindoor-600" : "text-ink"
                }`}
              >
                <span className="font-sans text-xs tracking-[0.2em] text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-page grid gap-3 pb-10">
          <Link href="/donate" className="btn btn-primary w-full">Donate</Link>
          <a href={`tel:+${org.phoneRaw}`} className="btn btn-ghost w-full">Call {org.phone}</a>
        </div>
      </div>
    </header>
  );
}
