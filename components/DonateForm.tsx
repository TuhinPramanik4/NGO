"use client";

import { useState } from "react";
import { Heart, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";
import { donationTiers, programs } from "@/lib/data";

const categories = [
  "General Donation",
  ...programs.map((p) => p.donationCategory).filter((c) => c !== "General Donation"),
];
const uniqueCategories = Array.from(new Set(categories));

const presets = donationTiers.map((t) => t.amount);

export default function DonateForm({ defaultCause }: { defaultCause?: string }) {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [category, setCategory] = useState(
    uniqueCategories.includes(defaultCause ?? "")
      ? (defaultCause as string)
      : "General Donation"
  );
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const finalAmount = custom ? Number(custom) || 0 : amount;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Frontend-only: simulate gateway handoff (Razorpay integration goes here)
    setTimeout(() => setStatus("done"), 1400);
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-brand-100 bg-white p-10 text-center shadow-xl">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100">
          <CheckCircle2 className="h-9 w-9 text-brand-600" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">
          Thank you for your kindness
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          This is a frontend demo, so no payment was processed. In production
          you&apos;d now be handed to Razorpay to complete a{" "}
          <span className="font-semibold text-brand-700">
            ₹{finalAmount.toLocaleString("en-IN")}
          </span>{" "}
          {frequency === "monthly" ? "monthly " : ""}donation towards{" "}
          <span className="font-semibold text-brand-700">{category}</span>, and an
          80-G receipt would be emailed to you.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-brand-100 bg-white p-6 shadow-xl sm:p-8"
    >
      {/* Frequency */}
      <div className="grid grid-cols-2 gap-2 rounded-full bg-brand-50 p-1.5">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`rounded-full py-2.5 text-sm font-semibold capitalize transition-colors ${
              frequency === f
                ? "bg-white text-brand-800 shadow"
                : "text-ink/55 hover:text-brand-700"
            }`}
          >
            {f === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Amount presets */}
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-900">
          Choose an amount
        </label>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setAmount(p);
                setCustom("");
              }}
              className={`rounded-xl border py-3 font-display text-lg font-bold transition-colors ${
                !custom && amount === p
                  ? "border-brand-600 bg-brand-50 text-brand-800"
                  : "border-brand-200 text-ink/70 hover:border-brand-400"
              }`}
            >
              ₹{p.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <div className="relative mt-3">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-ink/50">
            ₹
          </span>
          <input
            type="number"
            min={1}
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded-xl border border-brand-200 py-3 pl-9 pr-4 outline-none transition-colors focus:border-brand-500"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-900">
          Direct my donation to
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-3 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 outline-none transition-colors focus:border-brand-500"
        >
          {uniqueCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Donor details */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Mobile number" name="mobile" type="tel" required />
        <Field label="PAN (optional, for 80-G)" name="pan" />
        <div className="sm:col-span-2">
          <Field label="Address" name="address" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading" || finalAmount <= 0}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-saffron-500 py-4 font-semibold text-white shadow-lg shadow-saffron-500/30 transition-all hover:bg-saffron-600 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Processing…
          </>
        ) : (
          <>
            <Heart className="h-5 w-5 fill-white" />
            Donate ₹{finalAmount.toLocaleString("en-IN")}
            {frequency === "monthly" ? " / month" : ""}
          </>
        )}
      </button>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink/50">
        <ShieldCheck className="h-4 w-4 text-brand-600" />
        Secure payments via Razorpay · UPI · Cards · Net Banking
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-ink/40">
        {["UPI", "Google Pay", "PhonePe", "Paytm", "Visa", "Mastercard", "Net Banking"].map(
          (m) => (
            <span key={m}>{m}</span>
          )
        )}
      </div>
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
