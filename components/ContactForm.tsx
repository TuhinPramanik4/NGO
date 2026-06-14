"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };

  if (status === "done") {
    return (
      <div className="grid place-items-center rounded-3xl border border-brand-100 bg-white p-10 text-center shadow-xl">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100">
          <CheckCircle2 className="h-9 w-9 text-brand-600" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-900">
          Message sent
        </h3>
        <p className="mt-3 max-w-md text-ink/65">
          Thank you for reaching out (demo — nothing was stored). We&apos;ll get
          back to you on the email you provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
        >
          Send another message
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
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Mobile number" name="mobile" type="tel" />
        <Field label="Subject" name="subject" required />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-medium text-brand-900">
          Message<span className="text-saffron-600"> *</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none rounded-xl border border-brand-200 px-4 py-3 outline-none transition-colors focus:border-brand-500"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-4 font-semibold text-white shadow-lg shadow-brand-700/25 transition-all hover:bg-brand-800 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4.5 w-4.5" /> Send message
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-ink/45">
        Protected by reCAPTCHA · spam protection enabled in production.
      </p>
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
