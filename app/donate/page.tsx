import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, ReceiptText, Repeat } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import DonateForm from "@/components/DonateForm";
import { donationTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support education, food, healthcare and dignity in the diara region of Gopalganj. Secure donations via Razorpay — UPI, cards and net banking. 80-G tax-exempt.",
};

const assurances = [
  { icon: ShieldCheck, title: "Secure & encrypted", desc: "Payments processed safely via Razorpay over HTTPS." },
  { icon: ReceiptText, title: "80-G tax benefit", desc: "Instant receipt with our 12-A & 80-G certified details." },
  { icon: Repeat, title: "One-time or monthly", desc: "Give once, or sustain the mission every month." },
  { icon: HeartHandshake, title: "100% to the field", desc: "Every rupee reaches the diara belt of Gopalganj." },
];

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ cause?: string }>;
}) {
  const { cause } = await searchParams;

  return (
    <>
      <PageHeader
        crumb="Donate"
        eyebrow="Your contribution can transform lives"
        title="Give kafan, roti, or shiksha"
        subtitle="Choose where your gift goes — a meal for an abandoned elder, a school day for a child, or an ambulance ride that saves a life."
      />

      <section className="container-page py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: assurances + impact */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Why give through Shatakshi?
            </h2>
            <p className="mt-3 leading-relaxed text-ink/65">
              A registered trust since 2011, working where the need is greatest —
              the flood-affected, school-less diara belt of Gopalganj.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {assurances.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-brand-100 bg-white p-5"
                >
                  <a.icon className="h-7 w-7 text-brand-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-brand-900">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-brand-50 p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-700">
                What your gift does
              </h3>
              <ul className="mt-4 space-y-3">
                {donationTiers.map((t) => (
                  <li
                    key={t.amount}
                    className="flex items-center gap-3 text-sm text-ink/70"
                  >
                    <span className="grid h-10 w-16 shrink-0 place-items-center rounded-lg bg-white font-display font-bold text-brand-700">
                      ₹{t.amount.toLocaleString("en-IN")}
                    </span>
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <DonateForm defaultCause={cause} />
        </div>
      </section>
    </>
  );
}
