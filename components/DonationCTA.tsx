import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { donationTiers } from "@/lib/data";

export default function DonationCTA() {
  return (
    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-7 py-14 sm:px-14">
        <div className="bg-dot-grid absolute inset-0 opacity-[0.06]" />
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl"
          aria-hidden
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-saffron-200">
              <Heart className="h-3.5 w-3.5 fill-saffron-300 text-saffron-300" />
              Your contribution can transform lives
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Kafan for one. Roti for another.
              <br className="hidden sm:block" /> Shiksha for a child.
            </h2>
            <p className="mt-4 max-w-lg text-brand-100/80">
              Every rupee reaches the diara belt of Gopalganj — as a meal for an
              abandoned elder, a school day for a first-generation learner, or a
              dignified farewell for the forgotten.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-saffron-900/30 transition-all hover:bg-saffron-400"
              >
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {donationTiers.map((tier) => (
              <Link
                key={tier.amount}
                href="/donate"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-saffron-400/50 hover:bg-white/10"
              >
                <span className="font-display text-2xl font-bold text-white">
                  ₹{tier.amount.toLocaleString("en-IN")}
                </span>
                <p className="mt-1 text-xs leading-snug text-brand-100/70">
                  {tier.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
