import type { Metadata } from "next";
import { Ambulance, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui";
import { org, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Shatakshi Seva Sansthan in Manikpur, Gopalganj, Bihar.",
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call", value: org.phone, href: `tel:+${org.phoneRaw}` },
    { icon: Mail, label: "Email", value: org.email, href: `mailto:${org.email}` },
    { icon: MapPin, label: "Office", value: org.address, href: "https://maps.google.com/?q=Manikpur+Gopalganj+Bihar+841428" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        hindi="संपर्क"
        title="Talk to us."
        intro="For partnerships, CSR, media or simply to visit a centre — we'd love to hear from you."
      />
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`tel:+${org.phoneRaw}`}
              className="flex items-center gap-4 rounded-[var(--radius-card)] bg-sindoor-600 p-6 text-sand-50 transition-colors hover:bg-sindoor-700"
            >
              <Ambulance className="h-8 w-8 shrink-0" />
              <span>
                <span className="block text-sm font-semibold opacity-80">Emergency · free ambulance · 24×7</span>
                <span className="display text-2xl">{org.phone}</span>
              </span>
            </a>
            {cards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Office" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex gap-4 rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line transition-shadow hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-river-50 text-river-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-mute">{label}</span>
                  <span className="mt-1 block break-words font-semibold text-river-950">{value}</span>
                </span>
              </a>
            ))}
            <div className="overflow-hidden rounded-[var(--radius-card)] ring-1 ring-line">
              <iframe
                title="Map — Manikpur, Gopalganj"
                src="https://www.google.com/maps?q=Manikpur,+Gopalganj,+Bihar+841428&output=embed"
                loading="lazy"
                className="h-72 w-full grayscale-[40%]"
              />
            </div>
            <ul className="flex flex-wrap gap-2 pt-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-line hover:ring-river-900">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
