import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Award, MapPin, CheckCircle2 } from "lucide-react";
import { px, pool } from "@/lib/images";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import DonationCTA from "@/components/DonationCTA";
import { org, coreValues, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Shatakshi Seva Sansthan — a registered trust born from personal grief, now serving the flood-affected diara region of Gopalganj, Bihar since 2011.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Who we are"
        title="A mission born from grief, grown into hope"
        subtitle="Shatakshi Educational & Welfare Trust has worked since 2011 to bring positive change to the flood-affected diara belt of Gopalganj, Bihar."
      />

      {/* Story */}
      <section className="container-page py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-brand-900">
              How it began
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink/70">
              <p>
                Born in Manikpur village of Gopalganj, founder{" "}
                <span className="font-semibold text-brand-700">
                  Naveen Shrivastava
                </span>{" "}
                dreamed of joining the Indian Administrative Service and travelled
                to Prayagraj to prepare. But the death of his brother — and the
                unclaimed bodies he encountered while searching the Ganga —
                changed the direction of his life.
              </p>
              <p>
                On the riverbank, a boatman asked him a single question:{" "}
                <span className="font-medium italic text-brand-800">
                  &ldquo;If this body were your brother&apos;s, what would you
                  do?&rdquo;
                </span>{" "}
                That question set him on the path of seva. With his wife Shilpi
                Saxena and his brother Vikas&apos;s inspiration, Shatakshi Seva
                Sansthan was founded in 2011.
              </p>
              <p>
                Today, with the partnership of Share India and a dedicated team,
                the diara region has education and service where there was once
                only hardship — kafan for one, roti for another, and shiksha for a
                child.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Established", v: org.established },
                { k: "Reg. No.", v: org.regNo },
                { k: "Certified", v: "12-A & 80-G" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-2xl border border-brand-100 bg-white p-5"
                >
                  <p className="font-display text-2xl font-bold text-brand-700">
                    {b.v}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-ink/55">
                    {b.k}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-5">
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-50/85">
                A diara region where no child is denied education, no elder dies of
                neglect, and every human — in life and in death — is treated with
                dignity.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-saffron-500 to-saffron-700 p-8 text-white shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                To drive sustainable human development through education, service
                and awareness in the flood-affected, socially vulnerable
                communities of Gopalganj.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image banner */}
      <section className="container-page pb-4">
        <Reveal className="relative overflow-hidden rounded-[2rem] shadow-xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src={px(pool.village[2], 1600, 700)}
              alt="A village in the flood-affected diara belt of Gopalganj"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14">
              <p className="max-w-xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                &ldquo;People here don&apos;t die in the flood first — their
                dreams do.&rdquo;
              </p>
              <p className="mt-3 text-sm text-brand-100/80">
                The diara region of Gopalganj, our karmabhoomi since 2011.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Where we work */}
      <section className="bg-brand-50/60">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Where we work"
            title="The diara belt of Gopalganj"
            subtitle="The Gandak river floods 6 of the district's 14 blocks every year. Of 234 panchayats, around 155 have no high school. This is where we serve."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "30 lakh", label: "District population, ~94% rural" },
              { stat: "6 / 14", label: "Blocks flooded every year" },
              { stat: "155", label: "Panchayats with no high school" },
              { stat: "4", label: "Learning centres run by Shatakshi" },
            ].map((d) => (
              <Reveal
                key={d.label}
                className="rounded-3xl border border-brand-100 bg-white p-6"
              >
                <MapPin className="h-6 w-6 text-saffron-500" />
                <p className="mt-3 font-display text-3xl font-extrabold text-brand-700">
                  {d.stat}
                </p>
                <p className="mt-1 text-sm text-ink/60">{d.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="What we stand for"
          title="Our core values"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 80}
              className="rounded-3xl border border-brand-100 bg-white p-6"
            >
              <CheckCircle2 className="h-7 w-7 text-brand-500" />
              <h3 className="mt-4 font-display text-lg font-bold text-brand-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-50/60">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="The people behind the mission"
            title="Team Shatakshi"
            subtitle="A founder, a family and a band of volunteers who turned their birthplace into their karmabhoomi."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i % 3) * 100}
                className="flex items-center gap-4 rounded-3xl border border-brand-100 bg-white p-6"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white">
                  {m.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-900">
                    {m.name}
                  </h3>
                  <p className="text-sm text-ink/60">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-saffron-200 bg-saffron-50 p-8 text-center sm:flex-row sm:text-left">
            <Award className="h-12 w-12 shrink-0 text-saffron-600" />
            <div>
              <h3 className="font-display text-lg font-bold text-saffron-900">
                Recognised internationally
              </h3>
              <p className="mt-1 text-sm text-saffron-800/80">
                Founder Naveen Shrivastava — &ldquo;The good Samaritan from
                Bihar&rdquo; — has been honoured with an award from the former
                President of Mauritius and featured by ETV Bharat, BBC and The
                Hindu for his humanitarian work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <DonationCTA />
      <div className="h-8" />
    </>
  );
}
