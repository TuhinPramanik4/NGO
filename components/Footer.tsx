import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/brand/Logo";
import { org, programs, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-river-950 text-river-100">
      <div className="bg-river-lines absolute inset-0" aria-hidden />
      <div className="container-page relative">
        {/* Sign-off */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 md:flex-row md:items-end">
          <div>
            <p className="font-hindi text-2xl text-marigold-300">{org.motto}</p>
            <p className="display mt-3 max-w-xl text-4xl text-sand-50 sm:text-5xl">
              No one unseen.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/donate" className="btn btn-primary">Donate</Link>
            <Link href="/volunteer" className="btn btn-light">Volunteer with us</Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10" ring="var(--color-sand-50)" />
              <Wordmark tone="light" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-river-200">
              {org.registeredName}. Working in the flood-hit diara belt of
              Gopalganj, Bihar since {org.established}.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-river-300">
              Reg. No. {org.regNo} · {org.exemptions}
              <br />
              Donations are eligible for tax deduction under Section 80-G.
            </p>
          </div>

          <FooterCol title="Our work" className="lg:col-span-3">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}`} className="hover:text-white">
                  {p.name.replace("Maa Shatakshi ", "")}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Organisation" className="lg:col-span-2">
            {[
              ["About us", "/about"],
              ["Impact stories", "/impact"],
              ["Gallery", "/gallery"],
              ["News", "/blog"],
              ["Volunteer", "/volunteer"],
              ["Brand", "/brand"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="hover:text-white">{l}</Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Reach us" className="lg:col-span-3">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marigold-400" />
              <span>{org.address}</span>
            </li>
            <li>
              <a href={`tel:+${org.phoneRaw}`} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-marigold-400" />
                {org.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${org.email}`} className="flex gap-3 break-all hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-marigold-400" />
                {org.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-xs text-river-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {org.registeredName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-sand-50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-river-200">{children}</ul>
    </div>
  );
}
