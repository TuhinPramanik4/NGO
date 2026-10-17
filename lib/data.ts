import {
  BookOpen,
  Droplets,
  HeartHandshake,
  UtensilsCrossed,
  Ambulance,
  Flame,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { px, pool, photo } from "./images";

export const org = {
  name: "Shatakshi Seva Sansthan",
  registeredName: "Shatakshi Educational & Welfare Trust",
  motto: "सेवा परमो धर्मः",
  mottoEn: "Service is the highest duty",
  promise: "No one unseen.",
  established: "2011",
  regNo: "16100",
  exemptions: "Indian Trusts Act, 1882 · 12-A & 80-G certified",
  phone: "+91 83406 00249",
  phoneRaw: "918340600249",
  email: "naveenranjan8@gmail.com",
  address:
    "Manikpur, Shrivastav Road, near Shiv Mandir, Gopalganj, Bihar 841428",
  founder: "Naveen Shrivastava",
  partner: "Share India",
};

/* ------------------------------------------------------------------ */
/* Tones — every program belongs to one of three brand colours.        */
/* Class strings are written out in full so Tailwind can see them.     */
/* ------------------------------------------------------------------ */

export type Tone = "river" | "marigold" | "sindoor";

export const tone: Record<
  Tone,
  { chip: string; icon: string; text: string; ring: string; solid: string }
> = {
  river: {
    chip: "text-river-600",
    icon: "bg-river-100 text-river-700",
    text: "text-river-700",
    ring: "ring-river-200",
    solid: "bg-river-800 text-sand-50",
  },
  marigold: {
    chip: "text-marigold-700",
    icon: "bg-marigold-100 text-marigold-700",
    text: "text-marigold-700",
    ring: "ring-marigold-200",
    solid: "bg-marigold-500 text-river-950",
  },
  sindoor: {
    chip: "text-sindoor-600",
    icon: "bg-sindoor-100 text-sindoor-600",
    text: "text-sindoor-600",
    ring: "ring-sindoor-100",
    solid: "bg-sindoor-600 text-sand-50",
  },
};

/* ------------------------------------------------------------------ */
/* The three pillars — from the original deck: शिक्षा · सेवा · जागरूकता */
/* ------------------------------------------------------------------ */

export const pillars = [
  {
    key: "shiksha",
    hindi: "शिक्षा",
    name: "Education",
    tone: "river" as Tone,
    line: "The first and most essential condition of human growth.",
    programs: ["mission-arms-to-pen", "voice-of-silence", "jal-pathshala"],
  },
  {
    key: "seva",
    hindi: "सेवा",
    name: "Service",
    tone: "marigold" as Tone,
    line: "Food at the door, an ambulance at midnight, a dignified farewell.",
    programs: ["annapurna-kitchen", "life-line-ambulance", "antim-vidai"],
  },
  {
    key: "jagrukta",
    hindi: "जागरूकता",
    name: "Awareness",
    tone: "sindoor" as Tone,
    line: "A 24×7 bridge between government schemes and the people they are for.",
    programs: [],
  },
];

/* ------------------------------------------------------------------ */
/* Impact numbers — all taken from the organisation's own deck.        */
/* ------------------------------------------------------------------ */

export type Stat = { label: string; value: number; suffix?: string; note?: string };

export const impactStats: Stat[] = [
  { label: "Children in free schooling", value: 800, suffix: "+", note: "across 4 centres" },
  { label: "Unclaimed bodies given last rites", value: 1200, suffix: "+", note: "since the beginning" },
  { label: "Elders fed, every single day", value: 47, note: "within a 12 km radius" },
  { label: "Villages on the ambulance line", value: 25, note: "24 × 7, free" },
  { label: "Welfare documents made", value: 1000, suffix: "+", note: "ration, Ayushman, job cards" },
  { label: "COVID patients carried to care", value: 183, note: "during the pandemic" },
];

/* ------------------------------------------------------------------ */
/* Programs                                                             */
/* ------------------------------------------------------------------ */

export type Program = {
  slug: string;
  name: string;
  hindiName: string;
  pillar: "shiksha" | "seva";
  tone: Tone;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  origin?: string;
  overview: string;
  objectives: string[];
  highlights: { label: string; value: string }[];
  donationCategory: string;
  image: string;
  gallery: string[];
};

export const programs: Program[] = [
  {
    slug: "mission-arms-to-pen",
    name: "Mission Arms to Pen",
    hindiName: "मिशन हथियार से कलम",
    pillar: "shiksha",
    tone: "river",
    icon: BookOpen,
    tagline: "Where parents once held guns, their children now hold pens.",
    summary:
      "Free schooling for first-generation learners in the flood-hit diara belt of Gopalganj.",
    origin:
      "In the diara belt, schools shift up to 5 km away for four months of every flood season, attendance drops by 40%, and one in four children drops out.",
    overview:
      "Mission Arms to Pen began with a single learning centre in Khap-Maksudpur. With support from Share India it now runs four centres — Khap Maksudpur, Maghi Magurha, Nawada Diyara and Manikpur — teaching nearly 800 children. Most are the first in their families to write क, ख, ग or A, B, C, D.",
    objectives: [
      "Bring diara children into the educational mainstream",
      "Reach first-generation learners with free, dignified schooling",
      "Cut child labour, child marriage and distress migration",
      "Build community belief in the value of education",
    ],
    highlights: [
      { label: "Children enrolled", value: "800+" },
      { label: "Learning centres", value: "4" },
      { label: "People in reach", value: "40–50k" },
    ],
    donationCategory: "Education",
    image: photo.classroom,
    gallery: [photo.schoolWelcome, photo.assembly, photo.rows, photo.students],
  },
  {
    slug: "voice-of-silence",
    name: "Voice of Silence",
    hindiName: "ख़ामोशी की आवाज़",
    pillar: "shiksha",
    tone: "sindoor",
    icon: HeartHandshake,
    tagline: "A good daughter becomes a good mother — and changes a generation.",
    summary:
      "Health, mental-wellbeing and skills education for the girls of the diara region.",
    origin:
      "In flood and hardship, daughters are hit first. Here, people die later — dreams die first. Girls' dropout runs about 25% higher than boys'.",
    overview:
      "Voice of Silence connects girls at Shatakshi's learning centres with health education, mental-wellbeing support, art and skill development for their all-round growth. Its effect shows in fewer child marriages — and in girls like Rishita Kumari, who cleared the All-India Sainik School written examination.",
    objectives: [
      "End child marriage through education and awareness",
      "Health and mental-wellbeing education for girls",
      "Art, craft and life skills for self-reliance",
      "Create role models for the next generation",
    ],
    highlights: [
      { label: "Focus", value: "Girls & women" },
      { label: "Milestone", value: "Sainik School" },
      { label: "Seen in", value: "Fewer child marriages" },
    ],
    donationCategory: "Women Empowerment",
    image: photo.students,
    gallery: [photo.classroom, photo.schoolWelcome],
  },
  {
    slug: "jal-pathshala",
    name: "Disaster Relief & Jal Pathshala",
    hindiName: "आपदा राहत एवं जल पाठशाला",
    pillar: "shiksha",
    tone: "river",
    icon: Droplets,
    tagline: "Water everywhere in the flood — and not a drop to drink.",
    summary:
      "Flood relief, plus a ‘water school’ that teaches conservation and preparedness.",
    origin:
      "The Gandak floods six of Gopalganj's fourteen blocks every year. In June the same land runs dry and animals die by the hundred.",
    overview:
      "Jal Pathshala teaches children and villagers why water matters — conservation, its link to farming and health — and, just as urgently, what to do for yourself and your family when the annual flood arrives. In the flood season the team turns to relief and rapid response.",
    objectives: [
      "Flood relief and rapid response in the diara belt",
      "Teach water conservation and its link to life",
      "Prepare families before the flood season",
      "Protect livestock and the environment",
    ],
    highlights: [
      { label: "Flood-hit blocks", value: "6 of 14" },
      { label: "Audience", value: "Children & families" },
      { label: "Focus", value: "Preparedness" },
    ],
    donationCategory: "Disaster Relief",
    image: photo.floodHomes,
    gallery: [photo.floodSchool, photo.khapVillage],
  },
  {
    slug: "annapurna-kitchen",
    name: "Maa Shatakshi Annapurna Kitchen",
    hindiName: "माँ शताक्षी अन्नपूर्णा रसोई",
    pillar: "seva",
    tone: "marigold",
    icon: UtensilsCrossed,
    tagline: "One fistful of grain — एक मुट्ठी अनाज — for those with no one.",
    summary:
      "A hot meal carried every day to the doorsteps of abandoned and helpless elders.",
    origin:
      "In almost every village there are two or three elders with no one left — often left behind by children who moved to the city.",
    overview:
      "Team Shatakshi carries fresh food, every day, to the huts of 47 destitute, abandoned, blind and disabled elders across a 12-kilometre radius of Manikpur. The mind lives on relationships; the body lives on food — the kitchen tries to give both. It has been covered by Dainik Jagran and ETV Bharat.",
    objectives: [
      "A daily hot meal at every abandoned elder's door",
      "Restore dignity to the most neglected",
      "Widen the radius so more elders are reached",
      "Rally villages around ‘one fistful of grain’",
    ],
    highlights: [
      { label: "Fed every day", value: "47" },
      { label: "Radius", value: "12 km" },
      { label: "Cost to them", value: "Free" },
    ],
    donationCategory: "Food",
    image: photo.annapurna,
    gallery: [photo.ekMutthi, photo.founders],
  },
  {
    slug: "life-line-ambulance",
    name: "Shatakshi Life Line",
    hindiName: "निःशुल्क एंबुलेंस सेवा",
    pillar: "seva",
    tone: "marigold",
    icon: Ambulance,
    tagline: "A free ambulance that answers at midnight, in the flood.",
    summary:
      "A free 24×7 ambulance linking 25 villages to the Sadar Hospital.",
    origin:
      "It began after a pregnant mother and her newborn died during childbirth for want of transport.",
    overview:
      "Shatakshi Life Line runs a free 24×7 ambulance across 25 villages, taking patients to the Sadar Hospital when they need it — hundreds of lives have been saved. During COVID-19 it carried 183 patients to care centres, brought 48 who had died home to their families, and gave last rites to 22 whose families could not.",
    objectives: [
      "Free emergency transport across 25 villages",
      "Fewer maternal and infant deaths from delay",
      "Stand by communities through floods and pandemics",
      "A helpline that always answers",
    ],
    highlights: [
      { label: "Villages", value: "25" },
      { label: "COVID patients", value: "183" },
      { label: "Availability", value: "24 × 7" },
    ],
    donationCategory: "Ambulance",
    image: photo.ambulance,
    gallery: [photo.team],
  },
  {
    slug: "antim-vidai",
    name: "Antim Vidai",
    hindiName: "अंतिम विदाई",
    pillar: "seva",
    tone: "marigold",
    icon: Flame,
    tagline: "For us, no body is ‘unclaimed’. Every soul is a relation.",
    summary:
      "Dignified last rites for unidentified and abandoned bodies, more than 1,200 so far.",
    origin:
      "Searching the Ganga for his drowned brother, the founder found many unclaimed bodies. A boatman asked: “If this were your brother, what would you do?”",
    overview:
      "That question became a calling. Shatakshi has since performed the last rites of more than 1,200 unidentified people, because a final farewell is every human being's social and religious right. The work has been covered by ETV Bharat, The Hindu, BBC Urdu and Dainik Jagran.",
    objectives: [
      "Dignified last rites for unidentified bodies",
      "Uphold every person's right to a farewell",
      "Support families who cannot perform rites",
      "Protect public health and the environment",
    ],
    highlights: [
      { label: "Farewells given", value: "1,200+" },
      { label: "Covered by", value: "The Hindu, BBC" },
      { label: "Principle", value: "Dignity for all" },
    ],
    donationCategory: "General",
    image: px(pool.diya[0], 1100, 850),
    gallery: [],
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);

export const helpline = {
  name: "Shatakshi Helpline",
  hindiName: "शताक्षी हेल्पलाइन",
  icon: Megaphone,
  summary:
    "A 24×7 bridge between government schemes and rural families — ration cards, MGNREGA job cards, Ayushman cards, vaccination and widow pensions. Over 1,000 documents were made during COVID-19, and returning migrant workers were linked to government skill centres so they could build livelihoods at home.",
};

/* ------------------------------------------------------------------ */
/* Stories                                                              */
/* ------------------------------------------------------------------ */

export type Story = {
  slug: string;
  programSlug?: string;
  title: string;
  place: string;
  program: string;
  tone: Tone;
  summary: string;
  image: string;
};

export const stories: Story[] = [
  {
    slug: "gun-belt-to-classroom",
    programSlug: "mission-arms-to-pen",
    title: "From a gun-belt village to a classroom of 800",
    place: "Khap Maksudpur, diara",
    program: "Mission Arms to Pen",
    tone: "river",
    summary:
      "Four centres now teach nearly 800 first-generation learners where, a generation ago, parents carried guns.",
    image: photo.assembly,
  },
  {
    slug: "rishita-sainik-school",
    programSlug: "voice-of-silence",
    title: "Rishita clears the Sainik School exam",
    place: "Gopalganj",
    program: "Voice of Silence",
    tone: "sindoor",
    summary:
      "A daughter of the diara, mentored at a Shatakshi centre, cleared the All-India Sainik School written exam.",
    image: photo.classroom,
  },
  {
    slug: "47-elders",
    programSlug: "annapurna-kitchen",
    title: "47 elders, one hot meal, every single day",
    place: "Manikpur, Gopalganj",
    program: "Annapurna Kitchen",
    tone: "marigold",
    summary:
      "Fresh food carried to the doorsteps of 47 abandoned elders across a 12 km radius — covered by Dainik Jagran.",
    image: photo.annapurna,
  },
  {
    slug: "covid-life-line",
    programSlug: "life-line-ambulance",
    title: "183 patients carried to care during COVID-19",
    place: "COVID-19, 2020–21",
    program: "Shatakshi Life Line",
    tone: "marigold",
    summary:
      "When no other help came, the free ambulance carried 183 patients to care and brought 48 who had died home to their families.",
    image: photo.ambulance,
  },
  {
    slug: "1200-farewells",
    programSlug: "antim-vidai",
    title: "A brother's grief became 1,200 farewells",
    place: "Gopalganj",
    program: "Antim Vidai",
    tone: "marigold",
    summary:
      "One question on a riverbank set Naveen Shrivastava on a path of dignified last rites for the unidentified.",
    image: px(pool.diya[1], 800, 600),
  },
  {
    slug: "1000-documents",
    title: "1,000+ welfare documents in a pandemic",
    place: "COVID-19, 2020–21",
    program: "Awareness",
    tone: "sindoor",
    summary:
      "Ration cards, job cards, Ayushman cards and widow pensions — made for families who did not know they were entitled.",
    image: photo.team,
  },
];

export const testimonials = [
  {
    quote:
      "Where there was once a gun in a parent's hand, today there is a pen in their child's. That is the change in our village.",
    name: "A parent",
    role: "Khap Maksudpur",
  },
  {
    quote:
      "I am the first in my family to read and write. My teachers believed in me before I believed in myself.",
    name: "A student",
    role: "Mission Arms to Pen",
  },
  {
    quote:
      "When no ambulance would come, Shatakshi Life Line did — at midnight, in the flood, for free.",
    name: "A villager",
    role: "Diara region",
  },
];

export const press = ["The Hindu", "BBC Urdu", "ETV Bharat", "Dainik Jagran", "DD News Bihar", "Humans of Bombay", "Chauthi Duniya"];

/* ------------------------------------------------------------------ */
/* Site chrome                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/blog" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export const coreValues = [
  { title: "Humanity", hindi: "मानवता", desc: "Every life deserves dignity — in living and in leaving." },
  { title: "Education", hindi: "शिक्षा", desc: "The first and most essential condition of human growth." },
  { title: "Equality", hindi: "समानता", desc: "Daughters and sons, rich and poor, stand equal." },
  { title: "Transparency", hindi: "पारदर्शिता", desc: "Honest work, open accounts, answerable service." },
  { title: "Service", hindi: "सेवा", desc: "Seva is the highest path a human life can take." },
];

export const team = [
  { name: "Naveen Shrivastava", role: "Founder", image: photo.founder },
  { name: "Shilpi Saxena", role: "Co-founder & Trustee" },
  { name: "Nilesh Tripathi", role: "Core team" },
  { name: "Pradeep Sinha", role: "Core team" },
  { name: "Dilip Sinha", role: "Core team" },
  { name: "Raju Shahi", role: "Core team" },
];

export const blogPosts = [
  {
    slug: "diara-needs-schools",
    title: "Why the diara belt of Gopalganj needs more schools",
    category: "Education",
    date: "May 2026",
    excerpt:
      "Of 234 panchayats in the district, around 155 have no high school. Here is what one more learning centre changes.",
    image: photo.rows,
  },
  {
    slug: "annapurna-in-dainik-jagran",
    title: "Annapurna Kitchen featured in Dainik Jagran",
    category: "Announcements",
    date: "Jul 2024",
    excerpt:
      "A small idea that now reaches the homes of helpless elders across a 12 km radius.",
    image: photo.ekMutthi,
  },
  {
    slug: "voice-of-silence-child-marriage",
    title: "Ending child marriage, one classroom at a time",
    category: "Women Empowerment",
    date: "Apr 2026",
    excerpt:
      "How health, mental-wellbeing and skills education is quietly changing what girls in the diara expect from life.",
    image: photo.students,
  },
  {
    slug: "flood-season-jal-pathshala",
    title: "Getting ready for the flood season with Jal Pathshala",
    category: "Disaster Relief",
    date: "Jun 2026",
    excerpt:
      "Every year the diara floods. Here is what families learn at the ‘water school’ to keep themselves safe.",
    image: photo.floodSchool,
  },
  {
    slug: "mauritius-recognition",
    title: "Recognition from the former President of Mauritius",
    category: "Events",
    date: "Mar 2026",
    excerpt:
      "Team Shatakshi's work in the diara was honoured in March 2026.",
    image: photo.award,
  },
];

export const blogCategories = ["All", "Education", "Women Empowerment", "Disaster Relief", "Health", "Events", "Announcements"];

export type GalleryItem = { src: string; alt: string; category: string; w: number; h: number };

export const galleryCategories = ["All", "Education", "Food", "Ambulance", "Disaster Relief", "Events"];

export const gallery: GalleryItem[] = [
  { src: photo.schoolWelcome, alt: "Children outside Shatakshi Free Bal Vidyapeeth", category: "Education", w: 340, h: 255 },
  { src: photo.assembly, alt: "Morning assembly of students in uniform", category: "Education", w: 423, h: 406 },
  { src: photo.classroom, alt: "A teacher leading an open-air class", category: "Education", w: 382, h: 254 },
  { src: photo.ambulance, alt: "The free Shatakshi ambulance", category: "Ambulance", w: 264, h: 408 },
  { src: photo.annapurna, alt: "Tiffins lined up at Annapurna Kitchen", category: "Food", w: 431, h: 323 },
  { src: photo.students, alt: "Students seated together at a centre", category: "Education", w: 400, h: 225 },
  { src: photo.floodHomes, alt: "Homes in the diara after the flood", category: "Disaster Relief", w: 504, h: 175 },
  { src: photo.ekMutthi, alt: "‘Ek mutthi anaj’ campaign banner", category: "Food", w: 430, h: 313 },
  { src: photo.team, alt: "Team Shatakshi volunteers", category: "Events", w: 362, h: 204 },
  { src: photo.rows, alt: "Students in rows on the ground", category: "Education", w: 400, h: 191 },
  { src: photo.award, alt: "Recognition from the former President of Mauritius", category: "Events", w: 381, h: 386 },
  { src: photo.floodSchool, alt: "A school building surrounded by flood silt", category: "Disaster Relief", w: 495, h: 182 },
  { src: photo.founders, alt: "The founders at Maa Shatakshi Rasoi", category: "Food", w: 309, h: 233 },
  { src: photo.khapVillage, alt: "Khap village in the diara", category: "Disaster Relief", w: 716, h: 251 },
];

export const donationTiers = [
  { amount: 500, label: "A week of hot meals for one elder" },
  { amount: 1000, label: "A month of books and supplies for a child" },
  { amount: 2500, label: "Fuel for emergency ambulance runs" },
  { amount: 5000, label: "A term of schooling for a child" },
];

export const donationCategories = [
  { key: "General", label: "Where it's needed most" },
  { key: "Education", label: "Mission Arms to Pen" },
  { key: "Food", label: "Annapurna Kitchen" },
  { key: "Ambulance", label: "Shatakshi Life Line" },
  { key: "Women Empowerment", label: "Voice of Silence" },
  { key: "Disaster Relief", label: "Disaster Relief" },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
];
