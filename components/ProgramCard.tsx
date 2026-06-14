import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/data";

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_12px_40px_-24px_rgba(20,81,47,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,81,47,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-55 mix-blend-multiply`}
        />
        <span
          className={`absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${program.color} text-white shadow-lg ring-2 ring-white/40`}
        >
          <Icon className="h-5.5 w-5.5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-brand-900">
          {program.name}
        </h3>
        {program.hindiName && (
          <p className="mt-0.5 text-sm text-brand-600/70">{program.hindiName}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
          {program.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
