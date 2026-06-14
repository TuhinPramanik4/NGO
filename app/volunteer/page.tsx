import type { Metadata } from "next";
import { HandHeart, Users, GraduationCap, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join Team Shatakshi. Teach a child, ride along with the ambulance, or help run the Annapurna Kitchen in the diara region of Gopalganj.",
};

const reasons = [
  { icon: GraduationCap, title: "Teach & mentor", desc: "Help first-generation learners read, write and dream bigger." },
  { icon: HandHeart, title: "Serve on the ground", desc: "Join meal rounds, relief drives and community awareness work." },
  { icon: Users, title: "Lend your skills", desc: "Design, tech, fundraising, logistics — every skill finds a place." },
  { icon: Sparkles, title: "Be the change", desc: "Turn a few hours a week into lasting impact for a forgotten region." },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        crumb="Volunteer"
        eyebrow="Become a volunteer"
        title="Give your time, change a life"
        subtitle="The mission grew from one family to a whole community of helpers. There's a place for you in it."
      />

      <section className="container-page py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Why volunteer with us
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-brand-100 bg-white p-5"
                >
                  <r.icon className="h-7 w-7 text-brand-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-brand-900">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white">
              <h3 className="font-display text-lg font-bold">
                How it works
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-brand-50/85">
                {[
                  "You submit the form with your interests and availability.",
                  "Our team receives a notification and reviews your application.",
                  "We call you to align on a role that fits.",
                  "You receive a confirmation and join Team Shatakshi.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
