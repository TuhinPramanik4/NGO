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

// Large stock photographs for full-width moments in the demo. All Pexels,
// all rural India. Swap for the Sansthan's own high-resolution photos later.
export const stock = {
  alphabetWall: 20556421, // children by a Hindi alphabet chart
  classroom: 18012456,
  girlsClassroom: 1895114,
  schoolgirls: 3920704,
  flagDay: 16118310,
  womenGathering: 14995279,
  womenFields: 20356777,
  grainField: 20407441,
  elderWoman: 15759710,
  eldersOnGhat: 1370281,
  floodGhat: 33329468,
  floodTemple: 33329471,
  riverPlain: 5399393,
  villageHouse: 24428857,
  duskWalk: 13354592,
  diyas: 13689170,
} as const;

export const big = (id: number, w = 2400, h = 1500) => px(id, w, h);

// The NGO's own promotional video (from shatakshi.org).
export const promoVideo = { vimeoId: "844853329" };
