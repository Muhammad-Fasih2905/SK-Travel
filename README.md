# SK Associates

Two-sided site for **SK Travels** (primary focus, fully built) and **SK Real Estate**
(placeholder page for now). Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it starts at the chooser page (`/`), which links to
`/travel` and `/real-estate`.

## Structure

- `/` — landing chooser between SK Travels and SK Real Estate
- `/travel` — travel homepage (hero, packages, process, latest articles, CTA)
- `/travel/packages` — all packages, each with a cover photo
- `/travel/packages/[slug]` — individual package detail page with a hero photo and a photo per itinerary stop
- `/travel/visa-services` — Canada & New Zealand visa services
- `/travel/articles` — SEO-optimized travel articles and visa guides
- `/travel/articles/[slug]` — individual article, with full metadata, Open Graph tags, and Article JSON-LD structured data for Google
- `/travel/about`, `/travel/contact`
- `/real-estate` — placeholder page

## Content

- **Packages**: `src/data/packages.ts` — edit prices, itineraries, features, or add new
  packages here. Each package needs a `coverPhoto` and per-stop `photo`/`alt` (see
  `src/data/images.ts` for the photo ID registry).
- **Articles**: `src/data/articles.ts` — each article has `metaTitle`, `metaDescription`,
  `keywords`, and a `content` array of `paragraph` / `heading` / `list` sections that
  render automatically on the detail page. Article pages also emit `Article` JSON-LD
  for search engines.
- **Images**: currently sourced from Unsplash (free-to-use, licensed) via
  `src/data/images.ts`, optimized through `next/image` — no local image files to manage.
  To add a package with your own photos, drop the photo ID (or swap in your own hosted
  URLs) in that file and reference it from `packages.ts` or `articles.ts`.

## Notes

- Fonts (Fraunces for headings, Inter for body) are wired up via `next/font/google`
  in `src/app/layout.tsx`. They self-host automatically on first build as long as
  the machine has normal internet access.
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and
  `src/app/robots.ts` — update the `base` URL there once you have a real domain, and
  it will automatically include every package and article page.
- Update phone/WhatsApp/email in `src/data/site.ts`.
- Fully responsive throughout: mobile nav drawer, responsive image grids (1 → 2 → 3
  columns), and fluid typography from small phones up to large desktop screens.
