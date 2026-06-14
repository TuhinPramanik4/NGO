import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { org, navLinks, programs } from "@/lib/data";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-950 text-brand-100">
      <div className="bg-dot-grid absolute inset-0 opacity-[0.04]" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <Heart className="h-5 w-5 fill-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Shatakshi Seva Sansthan
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200/80">
              {org.tagline}. Working since {org.established} in the flood-affected
              diara region of Gopalganj, Bihar — for education, dignity and
              humanitarian service.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-brand-200 transition-colors hover:bg-saffron-500 hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-300">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-200/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-300">
              Programs
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs#${p.slug}`}
                    className="text-brand-200/80 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-300">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-saffron-400" />
                <span className="text-brand-200/80">{org.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${org.phoneRaw}`}
                  className="flex items-center gap-3 text-brand-200/80 hover:text-white"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-saffron-400" />
                  {org.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${org.email}`}
                  className="flex items-center gap-3 break-all text-brand-200/80 hover:text-white"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-saffron-400" />
                  {org.email}
                </a>
              </li>
            </ul>
            <Link
              href="/donate"
              className="mt-5 inline-flex rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron-600"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-300/70 sm:flex-row">
          <p>
            © {org.established}–2026 {org.name}. Reg. No. {org.regNo} ·{" "}
            {org.exemptions}
          </p>
          <p>
            Built with seva. In partnership with{" "}
            <span className="text-brand-100">{org.partner}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
