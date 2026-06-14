import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/data";

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_12px_40px_-24px_rgba(20,81,47,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,81,47,0.45)]"
    >
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${program.color} opacity-10 transition-transform duration-500 group-hover:scale-150`}
      />
      <span
        className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${program.color} text-white shadow-lg`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="relative mt-5 font-display text-lg font-bold text-brand-900">
        {program.name}
      </h3>
      {program.hindiName && (
        <p className="relative mt-0.5 text-sm text-brand-600/70">
          {program.hindiName}
        </p>
      )}
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink/65">
        {program.summary}
      </p>
      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
