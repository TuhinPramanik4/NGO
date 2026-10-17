import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Chip, PageHero, Photo } from "@/components/ui";
import { blogCategories, blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & blog",
  description: "Updates, announcements and field notes from Shatakshi Seva Sansthan.",
};

export default function BlogPage() {
  const [lead, ...rest] = blogPosts;
  return (
    <>
      <PageHero eyebrow="News & blog" hindi="समाचार" title="Notes from the field." />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {blogCategories.map((c, i) => (
              <li key={c}>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${i === 0 ? "bg-river-900 text-sand-50" : "bg-white text-ink-soft ring-1 ring-line"}`}>
                  {c}
                </span>
              </li>
            ))}
          </ul>

          {/* Lead story */}
          <Reveal as="article" className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <Photo src={lead.image} alt={lead.title} className="aspect-[16/10]" sizes="(min-width: 1024px) 560px, 100vw" />
            <div>
              <div className="flex items-center gap-3">
                <Chip className="bg-river-50 text-river-700">{lead.category}</Chip>
                <span className="text-sm text-ink-mute">{lead.date}</span>
              </div>
              <h2 className="display mt-4 text-4xl text-river-950 sm:text-5xl">{lead.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead.excerpt}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-6 gap-y-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((b, i) => (
              <Reveal as="article" key={b.slug} delay={i * 70}>
                <Photo src={b.image} alt={b.title} className="aspect-[4/3]" sizes="(min-width: 1024px) 280px, 50vw" />
                <div className="mt-4 flex items-center gap-3">
                  <Chip className="bg-marigold-50 text-marigold-700">{b.category}</Chip>
                  <span className="text-xs text-ink-mute">{b.date}</span>
                </div>
                <h3 className="display mt-3 text-xl leading-snug text-river-950">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
