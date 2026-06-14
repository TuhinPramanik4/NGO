import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignCls =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? "bg-white/10 text-saffron-200"
              : "bg-brand-100 text-brand-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-brand-100/80" : "text-ink/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
