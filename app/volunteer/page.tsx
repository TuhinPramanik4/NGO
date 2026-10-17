import type { Metadata } from "next";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { PageHero, Photo } from "@/components/ui";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join Team Shatakshi — teach, cook, drive, document or fundraise.",
};

const steps = [
  ["Register", "Tell us who you are and what you'd like to do."],
  ["We call you", "Someone from the team reaches out within a week."],
  ["Meet the team", "An orientation visit to a centre in Gopalganj — or a call if you're remote."],
  ["Start serving", "Teaching, kitchen runs, flood relief, media — wherever you fit."],
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        hindi="साथ"
        title={<>Volunteer <em>with us</em></>}
        intro="Team Shatakshi runs on volunteers — teachers, cooks, drivers, photographers and people who simply show up during the flood."
      />
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Photo src={photo.team} alt="Team Shatakshi volunteers" className="aspect-[16/10]" sizes="(min-width: 1024px) 460px, 100vw" />
            <h2 className="display mt-12 text-3xl text-river-950">How it works</h2>
            <ol className="mt-6 space-y-6">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="display grid h-10 w-10 shrink-0 place-items-center  bg-marigold-100 text-lg text-marigold-700">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-river-950">{t}</span>
                    <span className="text-ink-soft">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
