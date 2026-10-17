"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Design build only: POST to the inquiry API + reCAPTCHA once the backend exists.
    setTimeout(() => setStatus("done"), 1000);
  };

  if (status === "done") {
    return (
      <div className="rounded-[1.5rem] bg-white p-10 text-center ring-1 ring-line">
        <CheckCircle2 className="mx-auto h-12 w-12 text-river-600" />
        <h2 className="display mt-5 text-3xl text-river-950">Message received.</h2>
        <p className="mt-3 text-ink-soft">We reply to every message, usually within two working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-line sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Name *</span>
          <input required autoComplete="name" className="field" />
        </label>
        <label className="block">
          <span className="field-label">Mobile</span>
          <input type="tel" autoComplete="tel" className="field" />
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Email *</span>
          <input required type="email" autoComplete="email" className="field" />
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Subject *</span>
          <select required className="field" defaultValue="">
            <option value="" disabled>Choose a topic</option>
            <option>General inquiry</option>
            <option>CSR / partnership</option>
            <option>Donation &amp; 80-G receipt</option>
            <option>Media</option>
            <option>Need help</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Message *</span>
          <textarea required rows={5} className="field resize-y" />
        </label>
      </div>
      {/* Honeypot — real spam protection (reCAPTCHA) is added with the backend */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button type="submit" disabled={status === "loading"} className="btn btn-dark mt-7 w-full py-4">
        {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Send className="h-4 w-4" /> Send message</>}
      </button>
    </form>
  );
}
