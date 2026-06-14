import {
  BookOpen,
  Droplets,
  HeartHandshake,
  UtensilsCrossed,
  Ambulance,
  Flame,
  type LucideIcon,
} from "lucide-react";

export const org = {
  name: "Shatakshi Seva Sansthan",
  registeredName: "Shatakshi Educational & Welfare Trust",
  tagline: "सेवा परमो धर्मः — Service is the supreme duty",
  mantra: "Shiksha · Seva · Jagrukta (Education · Service · Awareness)",
  established: "2011",
  regNo: "16100",
  exemptions: "Registered under Indian Trusts Act 1882 · 12-A & 80-G certified",
  phone: "+91 83406 00249",
  phoneRaw: "918340600249",
  email: "naveenranjan8@gmail.com",
  address:
    "Manikpur, Shrivastav Road, near Shiv Mandir, Dist. Gopalganj, Bihar — 841428",
  founder: "Naveen Shrivastava",
  partner: "Share India",
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const impactStats: Stat[] = [
  { label: "Children Educated", value: 800, suffix: "+" },
  { label: "Unclaimed Bodies Cremated", value: 1200, suffix: "+" },
  { label: "Elderly Fed Daily", value: 47 },
  { label: "Villages Reached", value: 30, suffix: "+" },
];

export type Program = {
  slug: string;
  name: string;
  hindiName?: string;
  tagline: string;
  icon: LucideIcon;
  color: string; // tailwind gradient classes
  accent: string;
  summary: string;
  overview: string;
  objectives: string[];
  highlights: { label: string; value: string }[];
  donationCategory: string;
};

export const programs: Program[] = [
  {
    slug: "mission-arms-to-pen",
    name: "Mission Arms to Pen",
    hindiName: "मिशन हथियार से कलम",
    tagline: "Where hands once held guns, children now hold pens.",
    icon: BookOpen,
    color: "from-brand-500 to-brand-700",
    accent: "brand",
    summary:
      "Free education for the first-generation learners of the flood-hit diara belt of Gopalganj.",
    overview:
      "Launched in the Khap-Maksudpur area of the diara region, Mission Arms to Pen began with a single learning centre offering free education. Today, with support from Share India, four centres run across Khap Maksudpur, Maghi Magurha, Nawada Diyara and Manikpur — together teaching nearly 800 children, most of them the first in their families to ever learn 'A B C D'.",
    objectives: [
      "Bring children of the diara belt into the educational mainstream",
      "Reach first-generation learners with free, dignified schooling",
      "Reduce child labour, child marriage and migration",
      "Build community awareness around the value of education",
    ],
    highlights: [
      { label: "Children enrolled", value: "800+" },
      { label: "Learning centres", value: "4" },
      { label: "Population impacted", value: "40,000+" },
    ],
    donationCategory: "Education Donation",
  },
  {
    slug: "voice-of-silence",
    name: "Voice of Silence",
    hindiName: "खामोशी की आवाज़",
    tagline: "A good daughter becomes a good mother — and changes a generation.",
    icon: HeartHandshake,
    color: "from-rose-500 to-rose-700",
    accent: "rose",
    summary:
      "Empowerment, health and skill education for girls and women of the diara region.",
    overview:
      "In disaster and hardship, daughters suffer first — facing child marriage, malnutrition and superstition. Voice of Silence connects girls at our learning centres with health education, mental-wellbeing support, arts and skill development for their all-round growth. Its impact shows in falling child-marriage rates — and in girls like Rishita Kumari, who cleared the All-India Sainik School written exam.",
    objectives: [
      "End child marriage through education and awareness",
      "Provide health and mental-wellbeing education to girls",
      "Build art, craft and life-skills for self-reliance",
      "Create role models who inspire the next generation",
    ],
    highlights: [
      { label: "Focus", value: "Girls & Women" },
      { label: "Milestone", value: "Sainik School qualifier" },
      { label: "Outcome", value: "Lower child marriage" },
    ],
    donationCategory: "Women Empowerment",
  },
  {
    slug: "annapurna-kitchen",
    name: "Maa Shatakshi Annapurna Kitchen",
    hindiName: "अन्नपूर्णा रसोई",
    tagline: "A fistful of grain today, a meal of dignity tomorrow.",
    icon: UtensilsCrossed,
    color: "from-saffron-500 to-saffron-700",
    accent: "saffron",
    summary:
      "Hot meals delivered every day to the doorsteps of helpless and abandoned elderly.",
    overview:
      'Built on the thought "a fistful of grain for the needy", Annapurna Kitchen carries hot, fresh food right to the huts of destitute, abandoned, blind and disabled elders. Team Shatakshi currently feeds 47 helpless elderly people every single day across a 12-kilometre radius — so that no one in our villages dies of hunger and neglect.',
    objectives: [
      "Deliver a daily hot meal to abandoned elders' doorsteps",
      "Restore dignity to the most neglected in rural Gopalganj",
      "Expand the radius so more helpless people are reached",
      "Mobilise the community around 'one fistful of grain'",
    ],
    highlights: [
      { label: "Fed every day", value: "47" },
      { label: "Coverage radius", value: "12 km" },
      { label: "Cost", value: "Free, daily" },
    ],
    donationCategory: "Food Donation",
  },
  {
    slug: "free-ambulance-service",
    name: "Shatakshi Life Line",
    hindiName: "निःशुल्क एंबुलेंस सेवा",
    tagline: "A 24×7 lifeline for villages the system forgot.",
    icon: Ambulance,
    color: "from-sky-500 to-sky-700",
    accent: "sky",
    summary:
      "A free 24×7 ambulance service connecting 25 villages to emergency healthcare.",
    overview:
      "Born after a pregnant mother and her newborn were lost for want of timely transport, Shatakshi Life Line runs a free 24×7 ambulance linking 25 villages to the Sadar Hospital. During COVID-19 it carried 183 patients to care centres and returned 48 deceased to their families — saving hundreds of lives when help was nowhere else to be found.",
    objectives: [
      "Provide free emergency transport across 25 villages",
      "Cut maternal and infant deaths from delayed care",
      "Stand by communities through disasters and pandemics",
      "Keep a 24×7 helpline that always answers",
    ],
    highlights: [
      { label: "Villages linked", value: "25" },
      { label: "COVID patients moved", value: "183" },
      { label: "Availability", value: "24 × 7" },
    ],
    donationCategory: "Ambulance Support",
  },
  {
    slug: "disaster-water-preservation",
    name: "Disaster Relief & Jal Pathshala",
    hindiName: "आपदा राहत एवं जल पाठशाला",
    tagline: "Water all around, yet not a drop to drink.",
    icon: Droplets,
    color: "from-cyan-500 to-cyan-700",
    accent: "cyan",
    summary:
      "Emergency flood relief plus a 'water school' teaching conservation and preparedness.",
    overview:
      "Bihar is among India's most flood-affected states, and Gopalganj's diara belt floods every year. Jal Pathshala teaches children and communities about the value of water, its conservation, and the link between water, agriculture, health and the environment — alongside practical guidance on how to protect themselves and their families when the floods arrive.",
    objectives: [
      "Run flood relief and rapid response in the diara belt",
      "Teach water conservation and its link to life",
      "Prepare families for the annual flood season",
      "Protect livestock and the environment during disasters",
    ],
    highlights: [
      { label: "Theme", value: "Environment" },
      { label: "Audience", value: "Children & villagers" },
      { label: "Focus", value: "Preparedness" },
    ],
    donationCategory: "Disaster Relief",
  },
  {
    slug: "antim-vidai",
    name: "Antim Vidai — Last Rites",
    hindiName: "लावारिस शवों का अंतिम संस्कार",
    tagline: "For us, no body is 'unclaimed' — every soul is a relation.",
    icon: Flame,
    color: "from-amber-600 to-orange-800",
    accent: "amber",
    summary:
      "Dignified last rites for unidentified and abandoned bodies — over 1,200 to date.",
    overview:
      'This service began with a personal grief: while searching the Ganga for his drowned brother, the founder encountered many unclaimed bodies. A boatman asked, "If this were your brother, what would you do?" That question changed everything. Shatakshi has since performed the last rites of over 1,200 unidentified people — because the dignity of a final farewell is every human\'s social and religious right.',
    objectives: [
      "Give dignified last rites to unidentified bodies",
      "Uphold every human's right to a final farewell",
      "Support families who cannot perform rites themselves",
      "Protect public health and the environment",
    ],
    highlights: [
      { label: "Last rites performed", value: "1,200+" },
      { label: "Recognised by", value: "ETV Bharat, BBC" },
      { label: "Principle", value: "Dignity for all" },
    ],
    donationCategory: "General Donation",
  },
];

export type Story = {
  title: string;
  date: string;
  program: string;
  summary: string;
  color: string;
};

export const stories: Story[] = [
  {
    title: "From a gun-belt village to a classroom of 800",
    date: "Khap Maksudpur, Diara",
    program: "Mission Arms to Pen",
    summary:
      "Where parents once carried guns, their children now carry pens. Four centres now teach nearly 800 first-generation learners across the diara belt.",
    color: "from-brand-500 to-brand-700",
  },
  {
    title: "Rishita clears the Sainik School exam",
    date: "Voice of Silence",
    program: "Voice of Silence",
    summary:
      "A daughter of the diara region, mentored at a Shatakshi centre, qualified the All-India Sainik School written examination — an inspiration for an entire community.",
    color: "from-rose-500 to-rose-700",
  },
  {
    title: "47 elders, one hot meal, every single day",
    date: "Manikpur, Gopalganj",
    program: "Annapurna Kitchen",
    summary:
      "Maa Shatakshi Annapurna Kitchen carries fresh food to the doorsteps of 47 abandoned elders daily, across a 12 km radius — covered by Dainik Jagran and ETV Bharat.",
    color: "from-saffron-500 to-saffron-700",
  },
  {
    title: "183 lives moved to safety during COVID-19",
    date: "Pandemic Response",
    program: "Shatakshi Life Line",
    summary:
      "When help was nowhere to be found, the free ambulance carried 183 COVID patients to care and returned 48 of the deceased to their families with dignity.",
    color: "from-sky-500 to-sky-700",
  },
  {
    title: "A brother's grief becomes 1,200 farewells",
    date: "Antim Vidai",
    program: "Antim Vidai",
    summary:
      "A single question on a riverbank set Naveen Shrivastava on a path that has given dignified last rites to more than 1,200 unidentified people.",
    color: "from-amber-600 to-orange-800",
  },
  {
    title: "1,000+ documents made during the pandemic",
    date: "Shatakshi Helpline",
    program: "Awareness",
    summary:
      "Through a 24×7 helpline, the team linked villagers to ration cards, MGNREGA job cards, Ayushman cards and widow pensions — over 1,000 made during COVID-19.",
    color: "from-emerald-500 to-emerald-700",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Where there was once a gun in a parent's hand, today there is a pen in their child's. That is the change Shatakshi has brought to our village.",
    name: "A parent",
    role: "Khap Maksudpur",
  },
  {
    quote:
      "I am the first in my family to read and write. My teachers at the centre believed in me before I believed in myself.",
    name: "A student",
    role: "Mission Arms to Pen",
  },
  {
    quote:
      "When no ambulance would come, Shatakshi Life Line did — at midnight, in the flood, for free. They saved my mother.",
    name: "A villager",
    role: "Diara region",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const coreValues = [
  { title: "Humanity", desc: "Every life deserves dignity, care and a chance." },
  { title: "Education", desc: "The first and most essential condition of human growth." },
  { title: "Equality", desc: "Daughters and sons, rich and poor — all stand equal." },
  { title: "Transparency", desc: "Honest work, open accounts, accountable service." },
  { title: "Service", desc: "Seva is the highest path a human life can take." },
];

export const team = [
  { name: "Naveen Shrivastava", role: "Founder", initials: "NS" },
  { name: "Shilpi Saxena", role: "Co-founder & Trustee", initials: "SS" },
  { name: "Nilesh Tripathi", role: "Senior Member", initials: "NT" },
  { name: "Pradeep Sinha", role: "Member", initials: "PS" },
  { name: "Dilip Sinha", role: "Member", initials: "DS" },
  { name: "Team Shatakshi", role: "Volunteers on the ground", initials: "TS" },
];

export const blogPosts = [
  {
    title: "Why the diara belt of Gopalganj needs more schools",
    category: "Education",
    date: "May 2026",
    excerpt:
      "Of 234 panchayats in the district, around 155 have no high school. Here is why every additional learning centre changes lives.",
    color: "from-brand-500 to-brand-700",
  },
  {
    title: "Maa Shatakshi Annapurna Kitchen featured in Dainik Jagran",
    category: "Announcements",
    date: "Jul 2024",
    excerpt:
      "A small initiative that now reaches the homes of helpless elders across a 12 km radius — covered by leading newspapers.",
    color: "from-saffron-500 to-saffron-700",
  },
  {
    title: "Voice of Silence: ending child marriage through education",
    category: "Women Empowerment",
    date: "Apr 2026",
    excerpt:
      "How connecting girls to health, mental and skill education is quietly transforming the future of the diara region.",
    color: "from-rose-500 to-rose-700",
  },
  {
    title: "Preparing for the flood season with Jal Pathshala",
    category: "Disaster Relief",
    date: "Jun 2026",
    excerpt:
      "Every year the diara region floods. Here is what families learn at our 'water school' to keep themselves safe.",
    color: "from-cyan-500 to-cyan-700",
  },
];

export const galleryCategories = [
  "All",
  "Education",
  "Food Distribution",
  "Ambulance Service",
  "Disaster Relief",
  "Events",
];

export const donationTiers = [
  { amount: 500, label: "Feeds an elder for a week", category: "Food Donation" },
  { amount: 1000, label: "A month of school supplies", category: "Education Donation" },
  { amount: 2500, label: "Supports an ambulance run", category: "Ambulance Support" },
  { amount: 5000, label: "Sponsors a child's term", category: "Education Donation" },
];
