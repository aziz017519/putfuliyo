# Abdul Aziz — Portfolio

A dark, animated single-page portfolio built with **Next.js**, **TypeScript** and **Tailwind CSS v4**. Every piece of content comes from Abdul Aziz's résumé (see `public/resume.pdf`).

## Sections

- **Hero** — name, role, live code card, résumé download, socials
- **About** — career objective, education (HSC), Programming Hero course, languages, interests, stats
- **Projects** — filterable project cards (live, in progress, practice builds)
- **Skills** — filterable skill explorer with animated proficiency bars
- **Contact** — email / GitHub / phone / location cards and a mailto-powered contact form
- **Footer** — quick links, other places, connect CTA

## Tech

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router)                        |
| Language   | TypeScript                                    |
| Styling    | Tailwind CSS v4                                |
| Icons      | lucide-react + hand-made brand SVGs            |
| Fonts      | Sora, Inter, Caveat, JetBrains Mono (next/font) |
| Extras     | Canvas starfield, scroll reveals, scroll spy   |

No UI kit, no animation library — just React, CSS keyframes and a couple of small hooks.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Editing content

All copy lives in `lib/data.ts` — profile, objective, skills (with levels), projects, filters and contact subjects. Section components read from there, so content changes don't require touching markup.

The résumé is served from `public/resume.pdf` and linked from the hero and the header CTA.

## Notes

- The contact form opens the visitor's default email app with a pre-filled message (`mailto:`). Nothing is stored server-side.
- Project entries that aren't live are explicitly labelled **In Progress** or **Practice** — no invented case studies.
- All motion is disabled automatically for visitors using `prefers-reduced-motion`.
