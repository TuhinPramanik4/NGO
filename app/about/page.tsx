import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, Photo, SectionHeading } from "@/components/ui";
import { DonationBand, PressStrip } from "@/components/blocks";
import { coreValues, org, team } from "@/lib/data";
import { photo, big, stock } from "@/lib/images";

export const metadata: Metadata = {
  title: "About us",
  description:
"The story of Shatakshi Seva Sansthan — founded in 2011 in Manikpur, Gopalganj by Naveen Shrivastava and Shilpi Saxena.",
};

const timeline = [
  { year: "Before 2011", text: "Searching the Ganga for his drowned brother, Naveen Shrivastava finds many unclaimed bodies — and begins giving them last rites." },
  { year: "2011", text: "Shatakshi Educational & Welfare Trust is registered in Gopalganj, inspired by his brother Vikas." },
  { year: "Diara", text: "Mission Arms to Pen opens its first free learning centre in Khap-Maksudpur." },
  { year: "Life Line", text: "After a mother and newborn die for want of transport, the free 24×7 ambulance begins." },
  { year: "COVID-19", text: "183 patients carried to care, 1,000+ welfare documents made, migrant workers linked to skill centres." },
  { year: "Today", text: "4 centres, ~800 children, 47 elders fed daily, 1,200+ farewells — and recognition from the former President of Mauritius." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        image={big(stock.villageHouse)}
        imageAlt="A woman walking past a village house in Bihar"
        title={<>Fifteen years of <em>service</em> in the diara</>}
        intro={`${org.registeredName} — known as ${org.name} — was founded in ${org.established} in Gopalganj, Bihar. It is registered under the Indian Trusts Act, 1882, and certified under Sections 12-A and 80-G of the Income Tax Act.`}
      />

      {/* Founder */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative lg:sticky lg:top-32">
            <Photo src={photo.founders} alt="The Shatakshi founders at Maa Shatakshi Rasoi" className="aspect-[4/3]" sizes="(min-width: 1024px) 460px, 100vw" />
            <div className="absolute -bottom-6 right-6 w-36 overflow-hidden  border-[5px] border-sand-50 shadow-xl">
              <Photo src={photo.founder} alt="Naveen Shrivastava" rounded="rounded-none" className="aspect-[4/5]" sizes="150px" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Founder's message"
              title="Some problems choose the person who will solve them."
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Born in Manikpur village in Gopalganj, Naveen Shrivastava studied in the village
                and knew the hardships of rural life first-hand. His dream was the Indian
                Administrative Service, and he went to Prayagraj to prepare for it.
              </p>
              <p>
                Then his brother drowned in the Ganga. In the days of searching, the pain of
                the unclaimed bodies he found changed the direction of his life. His teachers
                told him: <em>“Serving your parents and elders — and changing the land you were
                born on for the better — is your responsibility.”</em>
              </p>
              <p>
                He made his birthplace his karmabhoomi. His wife, Shilpi Saxena, has been beside
                him at every step. Together with Nilesh Tripathi, Pradeep Sinha, Dilip Sinha,
                Parimal, Raju Shahi, Team Shatakshi and partner Share India, they have brought
                <strong className="text-river-900"> a shroud for some, bread for some, and
                education for others</strong> to the diara.
              </p>
              <p className="display pt-2 text-2xl text-river-900">— Naveen Shrivastava, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="bg-river-950 py-20 text-sand-50 sm:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            {
              k: "Vision",
              h: "A diara where no child, elder or stranger is left unseen.",
              p: "Sustainable human development and lasting positive change in the flood-affected regions of Bihar.",
            },
            {
              k: "Mission",
              h: "Shiksha, Seva, Jagrukta — education, service and awareness.",
              p: "Working as a campaign in the flood-hit diara of Gopalganj and the Gandak basin: free schooling, humanitarian service, and a bridge between government schemes and the people they are meant for.",
            },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 100} className="rounded-[var(--radius-card)] border border-white/10 p-8 sm:p-10">
              <p className="eyebrow !text-marigold-300">{b.k}</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">{b.h}</h2>
              <p className="mt-5 leading-relaxed text-river-200">{b.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Our journey" title="From one riverbank to four centres." />
          <ol className="relative border-l-2 border-line pl-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 60} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4  border-[3px] border-sand-50 bg-marigold-500 ring-2 ring-marigold-200" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-marigold-700">{t.year}</p>
                <p className="mt-2 text-lg leading-relaxed text-river-950">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Core values" title="What we hold on to." align="center" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded-[var(--radius-card)] bg-white p-6">
                <p className="font-hindi text-2xl text-marigold-600">{v.hindi}</p>
                <h3 className="display mt-2 text-xl text-river-950">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <SectionHeading eyebrow="Team Shatakshi" title="The people on the ground." intro="A core team, dozens of volunteers, and a partner in Share India." />
            <Photo src={photo.team} alt="Team Shatakshi volunteers in uniform" className="aspect-[16/9]" sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 60}>
                {m.image ? (
                  <Photo src={m.image} alt={m.name} className="aspect-square" sizes="200px" />
                ) : (
                  <div className="grid aspect-square place-items-center rounded-[var(--radius-card)] bg-river-50">
                    <span className="display text-4xl text-river-300">
                      {m.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                )}
                <p className="mt-3 font-bold text-river-950">{m.name}</p>
                <p className="text-sm text-ink-mute">{m.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Recognition */}
      <section className="pb-6">
        <div className="container-page">
          <Reveal className="grid items-center gap-10 rounded-[2rem] bg-marigold-50 p-8 sm:p-12 lg:grid-cols-[0.6fr_1.4fr]">
            <Photo src={photo.award} alt="Recognition from the former President of Mauritius, March 2026" className="aspect-square" sizes="320px" />
            <div>
              <p className="eyebrow">Recognition</p>
              <h2 className="display mt-4 text-3xl text-river-950 sm:text-4xl">
                Honoured by the former President of Mauritius, March 2026.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The work of Team Shatakshi has been featured by The Hindu (“The good Samaritan
                from Bihar who is giving a dignified farewell to strangers”), BBC Urdu, ETV
                Bharat, DD News Bihar, Dainik Jagran and Humans of Bombay.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mt-20"><PressStrip /></div>
      <DonationBand />
    </>
  );
}
