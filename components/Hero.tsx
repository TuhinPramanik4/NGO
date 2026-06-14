import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import { org } from "@/lib/data";
import { px, pool } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-saffron-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-saffron-500" />
            Est. {org.established} · Gopalganj, Bihar
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-brand-950 sm:text-5xl lg:text-6xl">
            Where guns once were,
            <span className="relative whitespace-nowrap text-brand-600">
              {" "}
              pens now are
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            For over a decade, Shatakshi Seva Sansthan has carried{" "}
            <span className="font-semibold text-brand-700">education</span>,{" "}
            <span className="font-semibold text-brand-700">service</span> and{" "}
            <span className="font-semibold text-brand-700">awareness</span> into
            the flood-affected diara belt of Gopalganj — to the children, the
            elderly and the forgotten.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-4 font-semibold text-white shadow-xl shadow-saffron-500/30 transition-all hover:bg-saffron-600"
            >
              Donate Now
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/60 px-6 py-4 font-semibold text-brand-800 backdrop-blur transition-colors hover:bg-white"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                <Play className="h-3.5 w-3.5 fill-brand-700" />
              </span>
              Our Story
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-ink/60">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-600" />
            <span>
              Registered Trust · 12-A &amp; 80-G certified · Donations are
              tax-exempt
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/30">
            <Image
              src={px(pool.school[3], 900, 1100)}
              alt="Children learning at a Shatakshi education centre"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-900/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 text-white">
              <div>
                <p className="font-display text-2xl font-bold leading-snug drop-shadow">
                  सेवा परमो धर्मः
                </p>
                <p className="mt-1 text-sm text-white/85 drop-shadow">
                  Service is the supreme duty
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 text-white">
              <p className="text-sm leading-relaxed text-white/90 drop-shadow">
                &ldquo;If this body were your brother, what would you do?&rdquo; —
                the question that began a mission of dignity for the forgotten.
              </p>
              <div className="flex items-center gap-3 border-t border-white/20 pt-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 font-display font-bold backdrop-blur">
                  NS
                </span>
                <div>
                  <p className="font-semibold">{org.founder}</p>
                  <p className="text-xs text-white/70">Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat chip */}
          <div className="absolute -bottom-5 -left-3 animate-float-slow rounded-2xl border border-brand-100 bg-white p-4 shadow-xl shadow-brand-900/10 sm:-left-8">
            <p className="font-display text-2xl font-extrabold text-brand-700">
              1,200+
            </p>
            <p className="text-xs text-ink/60">dignified last rites</p>
          </div>
          <div className="absolute -right-2 top-8 animate-float-slow rounded-2xl border border-saffron-100 bg-white p-4 shadow-xl shadow-saffron-900/10 [animation-delay:1.5s] sm:-right-6">
            <p className="font-display text-2xl font-extrabold text-saffron-600">
              800+
            </p>
            <p className="text-xs text-ink/60">children in school</p>
          </div>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="border-y border-brand-100 bg-white/50 py-5 backdrop-blur">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-sm font-medium text-ink/50">
          <span>As featured in</span>
          {["ETV Bharat", "BBC", "The Hindu", "Dainik Jagran", "DD News Bihar"].map(
            (m) => (
              <span key={m} className="font-display font-bold text-brand-700/70">
                {m}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
