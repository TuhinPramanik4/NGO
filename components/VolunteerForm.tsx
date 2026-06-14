"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { programs } from "@/lib/data";

const interests = [
  "Education",
  "Food Distribution",
  "Ambulance Service",
  "Disaster Relief",
  "Events",
  ...programs.map((p) => p.name),
];
const uniqueInterests = Array.from(new Set(interests));

export default function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (i: string) =>
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1300);
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-brand-100 bg-white p-10 text-center shadow-xl">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100">
          <CheckCircle2 className="h-9 w-9 text-brand-600" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">
          Welcome to Team Shatakshi!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          Your application has been received (demo — no data was stored). Our team
          will reach out on your mobile number to take the next step.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setSelected([]);
          }}
          className="mt-7 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-brand-100 bg-white p-6 shadow-xl sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Mobile number" name="mobile" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Occupation" name="occupation" />
        <div className="sm:col-span-2">
          <Field label="Address" name="address" />
        </div>
        <div className="sm:col-span-2">
          <Field label="Your skills (e.g. teaching, driving, design)" name="skills" />
        </div>
      </div>

      <div className="mt-6">
        <span className="text-sm font-semibold text-brand-900">
          Areas of interest
        </span>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {uniqueInterests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selected.includes(i)
                  ? "bg-brand-700 text-white"
                  : "border border-brand-200 text-brand-700 hover:bg-brand-100"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="block">
          <span className="text-sm font-semibold text-brand-900">
            Availability
          </span>
          <select
            name="availability"
            className="mt-1.5 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 outline-none transition-colors focus:border-brand-500"
          >
            <option>Weekends</option>
            <option>Weekdays</option>
            <option>A few hours a week</option>
            <option>Full-time</option>
            <option>Remote / online only</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-4 font-semibold text-white shadow-lg shadow-brand-700/25 transition-all hover:bg-brand-800 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send className="h-4.5 w-4.5" /> Become a Volunteer
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-brand-900">
        {label}
        {required && <span className="text-saffron-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-3 outline-none transition-colors focus:border-brand-500"
      />
    </label>
  );
}
