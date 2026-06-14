# Shatakshi Seva Sansthan — Website

Frontend for the NGO **Shatakshi Seva Sansthan** (Shatakshi Educational & Welfare Trust), a registered trust working since 2011 in the flood-affected diara belt of Gopalganj, Bihar.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, animated impact stats, mission, programs, stories, testimonials, donation CTA |
| `/about` | Founder story, vision & mission, where we work, core values, team, recognition |
| `/programs` | The six initiatives with overview, objectives and highlights (anchored sections) |
| `/impact` | Impact stories grid + headline numbers |
| `/gallery` | Filterable photo/video gallery (placeholders) |
| `/blog` | Blog & news listing |
| `/volunteer` | Volunteer registration form |
| `/donate` | Donation flow — tiers, custom amount, category, donor details (Razorpay-ready UI) |
| `/contact` | Contact info, Google Maps embed, inquiry form |

## Project structure

```
app/            # routes (App Router) + globals.css + layout
components/     # Navbar, Footer, Hero, cards, forms, animations
lib/data.ts     # all site content (org info, programs, stats, stories, team…)
```

## Notes / next steps (backend)

This is **frontend only**. The forms (donate, volunteer, contact) simulate success
on the client — they don't persist data yet. To go live:

- **Donations:** wire the donate form to **Razorpay** (UPI / cards / net banking) and
  generate 80-G receipts.
- **Forms:** connect volunteer & contact forms to an API / CMS, add reCAPTCHA + email
  notifications.
- **Content:** swap gradient placeholders in the gallery/stories for real photos, and
  manage programs/blogs/gallery via a CMS (Strapi or custom admin per the SRS).

## Theme

- **Brand green** (`brand-*`) — *Seva Parmo Dharma*
- **Saffron** (`saffron-*`) — accents / calls to action

Defined in `app/globals.css` via Tailwind v4 `@theme`.
