import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/brand/Logo";
import { org, programs, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-river-950 text-river-200">
      <div className="container-page">
        {/* Sign-off */}
        <div className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="font-hindi text-2xl text-marigold-300">{org.motto}</p>
            <p className="display mt-4 max-w-2xl text-[2.6rem] leading-[1.08] text-sand-50 sm:text-6xl">
              Service is the <em className="!text-marigold-300">highest duty.</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/donate" className="btn btn-primary">Make a donation</Link>
            <Link href="/volunteer" className="btn btn-light">Volunteer</Link>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10" ring="var(--color-sand-50)" />
              <Wordmark tone="light" />
            </div>
            <p className="mt-6 max-w-sm font-display text-lg italic leading-snug text-river-100">
              {org.registeredName}, serving the flood-hit diara of Gopalganj since {org.established}.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-river-300">
              Regd. No. {org.regNo} · {org.exemptions}.
              <br />
              Donations qualify for deduction under Section 80-G.
            </p>
          </div>

          <FooterCol title="Programmes" className="lg:col-span-3">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}`} className="link-draw hover:text-white">
                  {p.name.replace("Maa Shatakshi ", "")}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="The Sansthan" className="lg:col-span-2">
            {[
              ["About us", "/about"],
              ["Impact stories", "/impact"],
              ["Gallery", "/gallery"],
              ["News", "/blog"],
              ["Volunteer", "/volunteer"],
              ["Brand", "/brand"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="link-draw hover:text-white">{l}</Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Write or call" className="lg:col-span-3">
            <li className="leading-relaxed">{org.address}</li>
            <li>
              <a href={`tel:+${org.phoneRaw}`} className="link-draw hover:text-white">{org.phone}</a>
            </li>
            <li>
              <a href={`mailto:${org.email}`} className="link-draw break-all hover:text-white">{org.email}</a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-xs tracking-[0.04em] text-river-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {org.registeredName}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.16em]">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">{s.label}</a>
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
      <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-marigold-300">{title}</h3>
      <ul className="mt-6 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
