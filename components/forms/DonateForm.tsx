"use client";

import { useState } from "react";
import { Download, Heart, Loader2, Lock } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { donationCategories, donationTiers, org } from "@/lib/data";

export default function DonateForm({
  defaultAmount,
  defaultCause,
}: {
  defaultAmount?: number;
  defaultCause?: string;
}) {
  const presetHit = donationTiers.some((t) => t.amount === defaultAmount);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(presetHit ? defaultAmount! : 1000);
  const [custom, setCustom] = useState(defaultAmount && !presetHit ? String(defaultAmount) : "");
  const [cause, setCause] = useState(
    donationCategories.some((c) => c.key === defaultCause) ? defaultCause! : "General"
  );
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const finalAmount = custom ? Math.max(0, Math.floor(Number(custom))) || 0 : amount;
  const tierNote = donationTiers.find((t) => t.amount === finalAmount)?.label;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Design build only: Razorpay checkout is opened here once the backend exists.
    setTimeout(() => setStatus("done"), 1200);
  };

  if (status === "done") {
    const receiptNo = `SSS-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 90000) + 10000)}`;
    return (
      <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_30px_60px_-30px_rgb(14_53_48/0.35)] ring-1 ring-line sm:p-8">
        <p className="eyebrow">Thank you</p>
        <h2 className="display mt-3 text-3xl text-river-950">You just made someone seen.</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Preview only — no payment was taken. In production, Razorpay confirms the payment and
          this receipt is emailed and available as a PDF.
        </p>

        {/* Receipt preview */}
        <div className="mt-6 rounded-2xl border border-dashed border-sand-400 bg-sand-50 p-5">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-center gap-2">
              <LogoMark className="h-8 w-8" ring="var(--color-river-800)" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-river-950">{org.registeredName}</p>
                <p className="text-[0.7rem] text-ink-mute">Reg. {org.regNo} · 80-G</p>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-marigold-700">Receipt</p>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
            {[
              ["Receipt no.", receiptNo],
              ["Date", new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })],
              ["Donor", name || "—"],
              ["Towards", donationCategories.find((c) => c.key === cause)?.label ?? cause],
              ["Transaction ID", "pay_XXXXXXXXXXXX"],
              ["Amount", `₹${finalAmount.toLocaleString("en-IN")}${frequency === "monthly" ? " / month" : ""}`],
            ].map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-ink-mute">{k}</dt>
                <dd className="text-right font-semibold text-river-950">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn btn-dark" disabled>
            <Download className="h-4 w-4" /> Download PDF
          </button>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-ghost">
            Give again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[1.5rem] bg-white p-6 shadow-[0_30px_60px_-30px_rgb(14_53_48/0.35)] ring-1 ring-line sm:p-8"
    >
      {/* Step 1 */}
      <fieldset>
        <legend className="flex w-full items-center justify-between">
          <span className="display text-xl text-river-950">1 · Your gift</span>
        </legend>
        <div className="mt-4 grid grid-cols-2 gap-1 rounded-full bg-sand-100 p-1" role="radiogroup" aria-label="Frequency">
          {(["once", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={frequency === f}
              onClick={() => setFrequency(f)}
              className={`rounded-full py-2.5 text-sm font-bold transition-colors ${
                frequency === f ? "bg-white text-river-900 shadow-sm" : "text-ink-soft hover:text-river-900"
              }`}
            >
              {f === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Amount">
          {donationTiers.map((t) => {
            const on = !custom && amount === t.amount;
            return (
              <button
                key={t.amount}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => {
                  setAmount(t.amount);
                  setCustom("");
                }}
                className={`display rounded-xl py-3.5 text-xl transition-all ${
                  on
                    ? "bg-river-900 text-sand-50"
                    : "bg-white text-river-950 ring-1 ring-line hover:ring-river-400"
                }`}
              >
                ₹{t.amount.toLocaleString("en-IN")}
              </button>
            );
          })}
        </div>
        <label className="relative mt-3 block">
          <span className="sr-only">Custom amount in rupees</span>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-ink-mute">₹</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            placeholder="Other amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="field pl-9"
          />
        </label>
        <p className="mt-3 min-h-5 text-sm text-marigold-700" aria-live="polite">
          {tierNote ? `≈ ${tierNote}` : ""}
        </p>

        <label className="mt-3 block">
          <span className="field-label">Direct my gift to</span>
          <select value={cause} onChange={(e) => setCause(e.target.value)} className="field">
            {donationCategories.map((c) => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </label>
      </fieldset>

      {/* Step 2 */}
      <fieldset className="mt-8 border-t border-line pt-7">
        <legend className="display text-xl text-river-950">2 · Your details</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="field-label">Full name *</span>
            <input required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="field" />
          </label>
          <label className="block">
            <span className="field-label">Email *</span>
            <input required type="email" autoComplete="email" className="field" />
          </label>
          <label className="block">
            <span className="field-label">Mobile *</span>
            <input required type="tel" autoComplete="tel" pattern="[0-9+\s-]{10,15}" className="field" />
          </label>
          <label className="block">
            <span className="field-label">PAN <span className="font-normal text-ink-mute">(for 80-G)</span></span>
            <input
              pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]"
              title="10-character PAN, e.g. ABCDE1234F"
              className="field uppercase"
            />
          </label>
          <label className="block">
            <span className="field-label">Address</span>
            <input autoComplete="street-address" className="field" />
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === "loading" || finalAmount <= 0}
        className="btn btn-primary mt-8 w-full py-4 text-base disabled:opacity-60"
      >
        {status === "loading" ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Opening secure checkout…</>
        ) : (
          <>
            <Heart className="h-5 w-5" strokeWidth={2.5} />
            Give ₹{finalAmount.toLocaleString("en-IN")}
            {frequency === "monthly" ? " every month" : ""}
          </>
        )}
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-mute">
        <Lock className="h-3.5 w-3.5" /> Secured by Razorpay · UPI · GPay · PhonePe · Paytm · Cards · Net banking
      </p>
    </form>
  );
}
