import type { Metadata } from "next";
import { BadgeCheck, FileText, Landmark, ShieldCheck } from "lucide-react";
import DonateForm from "@/components/forms/DonateForm";
import { Photo } from "@/components/ui";
import { org } from "@/lib/data";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Shatakshi Seva Sansthan. 80-G tax benefit, instant receipt, UPI and cards via Razorpay.",
};

const trust = [
  { icon: BadgeCheck, title: "80-G tax benefit", text: "Save tax on every gift. Add your PAN for a compliant receipt." },
  { icon: Landmark, title: "Registered trust", text: `Reg. No. ${org.regNo} · Indian Trusts Act, 1882 · 12-A certified.` },
  { icon: FileText, title: "Instant receipt", text: "Emailed immediately, downloadable as a PDF." },
  { icon: ShieldCheck, title: "Secure payment", text: "Processed by Razorpay. We never see your card details." },
];

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ amount?: string; cause?: string }>;
}) {
  const sp = await searchParams;
  const amount = sp.amount ? Number(sp.amount) : undefined;

  return (
    <>
      <section className="relative overflow-hidden bg-river-950 text-sand-50">
        <div className="bg-river-lines absolute inset-0" aria-hidden />
        <div className="container-page relative grid gap-12 pb-20 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24 lg:pt-20">
          <div>
            <p className="eyebrow !text-marigold-300">Donate</p>
            <h1 className="display mt-5 text-5xl sm:text-6xl">Be the hundredth eye.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-river-200">
              ₹500 carries a week of hot meals to an elder no one else visits. ₹5,000 keeps a
              first-generation learner in school for a term.
            </p>
            <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-2">
              <Photo src={photo.annapurna} alt="Annapurna Kitchen tiffins" className="aspect-[4/3]" sizes="260px" />
              <Photo src={photo.classroom} alt="A Shatakshi classroom" className="aspect-[4/3]" sizes="260px" />
            </div>
            <p className="mt-10 hidden max-w-sm text-sm text-river-300 lg:block">
              Prefer a bank transfer or a CSR partnership? Write to{" "}
              <a href={`mailto:${org.email}`} className="text-marigold-300 underline underline-offset-4">{org.email}</a>.
            </p>
          </div>
          <div>
            <DonateForm defaultAmount={amount} defaultCause={sp.cause} />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <ul className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-river-50 text-river-700">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold text-river-950">{title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
