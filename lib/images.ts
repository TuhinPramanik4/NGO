// The NGO's own field photos, extracted from their presentation deck.
// They are small phone shots (≈250–700px wide) — use them at card size,
// never full-bleed, until higher-resolution originals are supplied.
export const photo = {
  schoolWelcome: "/photos/school-welcome.jpg",
  classroom: "/photos/classroom.jpg",
  students: "/photos/students.jpg",
  assembly: "/photos/assembly.jpg",
  rows: "/photos/rows.jpg",
  khapVillage: "/photos/khap-village.jpg",
  ambulance: "/photos/ambulance.jpg",
  annapurna: "/photos/annapurna.jpg",
  ekMutthi: "/photos/ek-mutthi-anaj.jpg",
  floodSchool: "/photos/flood-school.jpg",
  floodHomes: "/photos/flood-homes.jpg",
  founders: "/photos/founders.jpg",
  founder: "/photos/founder.jpeg",
  award: "/photos/award.jpg",
  team: "/photos/team.jpg",
  originalLogo: "/photos/original-logo.jpg",
} as const;

// Free, license-friendly photos from Pexels — only where no real photo
// exists or where a real one would not be respectful (e.g. last rites).
export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const pool = {
  diya: [10182772, 13689170, 20302339, 33360798, 30425298, 10178166],
} as const;

// The NGO's own promotional video (from shatakshi.org).
export const promoVideo = { vimeoId: "844853329" };
