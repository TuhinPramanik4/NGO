import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Updates, announcements and field notes from Shatakshi Seva Sansthan — education, women empowerment, disaster relief and more.",
};

const categories = [
  "All",
  "Education",
  "Women Empowerment",
  "Disaster Relief",
  "Health",
  "Events",
  "Announcements",
];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        crumb="Blog"
        eyebrow="Blog & news"
        title="Stories, updates & announcements"
        subtitle="Notes from the field and news of the mission's progress across the diara belt of Gopalganj."
      />

      <section className="container-page py-16">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                i === 0
                  ? "bg-brand-700 text-white"
                  : "border border-brand-200 text-brand-700"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured */}
        <Reveal className="mt-10">
          <article className="group grid overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_16px_50px_-30px_rgba(20,81,47,0.5)] lg:grid-cols-2">
            <div className="relative min-h-64 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${featured.color} opacity-40 mix-blend-multiply`}
              />
              <span className="absolute left-6 top-6 inline-flex rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand-600">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date} · Featured
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-brand-900">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink/65">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_12px_40px_-28px_rgba(20,81,47,0.4)] transition-all hover:-translate-y-1.5">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-40 mix-blend-multiply`}
                  />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand-600">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
