# SK Travels

A visa consultancy and holiday-package site for SK Travels. Built with
Next.js (App Router), TypeScript, and Tailwind CSS, animated with
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `/` — homepage (hero, packages, process, latest articles, CTA)
- `/packages` — all packages, each with a cover photo
- `/packages/[slug]` — individual package detail page: full description, a
  photo per itinerary stop, every included feature, pricing, and a sticky
  enquiry sidebar
- `/visa-services` — Canada & New Zealand visa services
- `/articles` — SEO-optimized travel articles and visa guides
- `/articles/[slug]` — individual article with full metadata, Open Graph
  tags, and Article JSON-LD structured data for Google
- `/about`, `/contact`

## Content

- **Packages**: `src/data/packages.ts` — edit prices, itineraries, features,
  or add new packages here. Each package needs a `coverPhoto` and per-stop
  `photo`/`alt` (see `src/data/images.ts` for the photo ID registry).
- **Articles**: `src/data/articles.ts` — each article has `metaTitle`,
  `metaDescription`, `keywords`, and a `content` array of `paragraph` /
  `heading` / `list` sections that render automatically on the detail page.
  Article pages also emit `Article` JSON-LD for search engines.
- **Images**: sourced from Unsplash (free-to-use, licensed) via
  `src/data/images.ts`, optimized through `next/image` — no local image
  files to manage. To add your own photos, drop a photo ID (or your own
  hosted URL) in that file and reference it from `packages.ts` or
  `articles.ts`.

## Animation & performance

- `src/components/Reveal.tsx` provides `Reveal`, `RevealGroup`, and
  `RevealItem` — scroll-triggered fade/rise animations used across every
  page. They respect `prefers-reduced-motion` automatically.
- `src/components/PageTransition.tsx` gives route changes a smooth
  cross-fade instead of an abrupt reload.
- All animation uses only `opacity`/`transform`, which the browser can
  animate on the compositor thread without re-triggering layout — this
  keeps things smooth without slowing the site down.
- Every route is statically generated (`○` and `●` in the build output),
  and images are served through `next/image` with correctly sized
  `sizes` attributes.

## Notes

- Fonts (Fraunces for headings, Inter for body) are wired up via
  `next/font/google` in `src/app/layout.tsx`. They self-host automatically
  on first build as long as the machine has normal internet access.
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts`
  and `src/app/robots.ts` — update the `base` URL there once you have a
  real domain, and it will automatically include every package and
  article page.
- Update phone/WhatsApp/email in `src/data/site.ts`.
- Fully responsive throughout: mobile nav drawer, responsive image grids
  (1 → 2 → 3 columns), and fluid typography from small phones up to large
  desktop screens.
