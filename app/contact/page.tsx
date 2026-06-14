import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { org } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shatakshi Seva Sansthan — Manikpur, Gopalganj, Bihar. Phone, email and inquiry form for partnerships, donations and volunteering.",
};

export default function ContactPage() {
  const cards = [
    { icon: MapPin, title: "Visit us", lines: [org.address] },
    {
      icon: Phone,
      title: "Call us",
      lines: [org.phone, "24×7 helpline & ambulance"],
      href: `tel:${org.phoneRaw}`,
    },
    { icon: Mail, title: "Email us", lines: [org.email], href: `mailto:${org.email}` },
    { icon: Clock, title: "Service hours", lines: ["Office: 9 AM – 6 PM", "Helpline: round the clock"] },
  ];

  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        subtitle="Questions, partnerships, press or just a hello — reach out and our team will respond."
      />

      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Inner = (
              <>
                <c.icon className="h-7 w-7 text-brand-600" />
                <h3 className="mt-3 font-display text-base font-bold text-brand-900">
                  {c.title}
                </h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm leading-relaxed text-ink/60">
                    {l}
                  </p>
                ))}
              </>
            );
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                className="rounded-3xl border border-brand-100 bg-white p-6 transition-colors hover:border-brand-300"
              >
                {Inner}
              </a>
            ) : (
              <div
                key={c.title}
                className="rounded-3xl border border-brand-100 bg-white p-6"
              >
                {Inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* Map */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Find us in Gopalganj
            </h2>
            <p className="mt-3 leading-relaxed text-ink/65">
              Our office is in Manikpur, on Shrivastav Road near the Shiv Mandir,
              in the diara belt of district Gopalganj, Bihar.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-brand-100 shadow-lg">
              <iframe
                title="Shatakshi Seva Sansthan location — Gopalganj"
                src="https://www.google.com/maps?q=Gopalganj,Bihar&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Send us a message
            </h2>
            <p className="mt-3 mb-6 leading-relaxed text-ink/65">
              Fill out the form and we&apos;ll get back to you as soon as we can.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
