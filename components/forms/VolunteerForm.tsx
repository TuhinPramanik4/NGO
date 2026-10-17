"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const interests = ["Teaching", "Annapurna Kitchen", "Ambulance & helpline", "Flood relief", "Women & girls", "Photography & media", "Fundraising"];
const availability = ["Weekends", "Weekdays", "Flood season", "Remote / online"];

export default function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Design build only: POST to the volunteer API + reCAPTCHA once the backend exists.
    setTimeout(() => setStatus("done"), 1000);
  };

  if (status === "done") {
    return (
      <div className="rounded-[1.5rem] bg-white p-10 text-center ring-1 ring-line">
        <CheckCircle2 className="mx-auto h-12 w-12 text-river-600" />
        <h2 className="display mt-5 text-3xl text-river-950">Welcome to Team Shatakshi.</h2>
        <p className="mx-auto mt-3 max-w-sm text-ink-soft">
          We&apos;ve received your details. Someone from the team will call you within a week.
          A confirmation email is on its way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-line sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="field-label">Full name *</span>
          <input required autoComplete="name" className="field" />
        </label>
        <label className="block">
          <span className="field-label">Mobile *</span>
          <input required type="tel" autoComplete="tel" className="field" />
        </label>
        <label className="block">
          <span className="field-label">Email *</span>
          <input required type="email" autoComplete="email" className="field" />
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Address</span>
          <input autoComplete="street-address" className="field" />
        </label>
        <label className="block">
          <span className="field-label">Occupation</span>
          <input className="field" />
        </label>
        <label className="block">
          <span className="field-label">Skills</span>
          <input placeholder="e.g. teaching, driving, design" className="field" />
        </label>
      </div>

      <fieldset className="mt-7">
        <legend className="field-label">Areas of interest</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {interests.map((i) => (
            <label key={i} className="cursor-pointer">
              <input type="checkbox" name="interest" value={i} className="peer sr-only" />
              <span className="inline-flex  px-4 py-2 text-sm font-semibold ring-1 ring-line transition-colors peer-checked:bg-river-900 peer-checked:text-sand-50 peer-checked:ring-river-900 peer-focus-visible:outline-2 peer-focus-visible:outline-marigold-500">
                {i}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="field-label">Availability</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {availability.map((a) => (
            <label key={a} className="cursor-pointer">
              <input type="checkbox" name="availability" value={a} className="peer sr-only" />
              <span className="inline-flex  px-4 py-2 text-sm font-semibold ring-1 ring-line transition-colors peer-checked:bg-marigold-500 peer-checked:text-river-950 peer-checked:ring-marigold-500 peer-focus-visible:outline-2 peer-focus-visible:outline-marigold-500">
                {a}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" disabled={status === "loading"} className="btn btn-dark mt-8 w-full py-4">
        {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : "Register as a volunteer"}
      </button>
    </form>
  );
}
