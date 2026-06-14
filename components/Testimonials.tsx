import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Voices from the ground"
        title="The change, in their words"
        subtitle="Beneficiaries, students and volunteers on what Shatakshi means to the diara region."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name + i}
            delay={i * 120}
            className="relative flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_12px_40px_-28px_rgba(20,81,47,0.4)]"
          >
            <Quote className="h-9 w-9 text-brand-200" />
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-brand-50 pt-5">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-brand-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">{t.name}</p>
                <p className="text-xs text-ink/55">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
