# Gean Mapesos: portfolio

Personal site built with Next.js 16, Tailwind CSS 4 and Inter. The layout takes its cues from [alexcarpenter.me](https://alexcarpenter.me): a single typeface at a single size, a label / content / aside grid, and hairline dividers between sections. The typeface follows [jakub.kr](https://jakub.kr) and [samuelkraft.com](https://samuelkraft.com). The page follows the visitor's light or dark system setting.

## Editing content

All of the copy lives in [`lib/data.ts`](lib/data.ts): roles, bio, experience, projects, education, certifications and contact links. It drives both the website and the Typst resume—edit there and run `npm run build:resume` to keep [`public/Gean-Mapesos-Resume.pdf`](public/Gean-Mapesos-Resume.pdf) in sync without touching layout code.

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To sync [`lib/data.ts`](lib/data.ts) and recompile the downloadable resume PDF from [`resume/resume.typ`](resume/resume.typ) (requires [Typst](https://typst.app)):

```bash
npm run build:resume
```

## Structure

| Path | What it is |
| --- | --- |
| `app/page.tsx` | The page |
| `app/not-found.tsx` | Custom 404 page |
| `app/robots.ts`, `app/sitemap.ts` | Crawler rules and XML sitemap |
| `lib/data.ts` | All content |
| `app/opengraph-image.tsx` | Social preview card (1200×630), generated at build time |
| `app/icon.svg`, `app/apple-icon.tsx` | Favicon and home-screen icon |
| `components/` | Section grid, list entry, lightbox preview, scroll controls, links, icons, copy button |
| `assets/` | Inter TTFs for the social card and Typst resume ([SIL Open Font License](assets/OFL.txt)) |
| `assets/logos/` | Company and school logos shown beside Experience and Education |
| `assets/certificates/` | Certificate images, shown in a sideways row with lightbox preview under Certifications |
| `scripts/sync-resume-data.mjs` | Syncs `lib/data.ts` into `resume/data.json` for Typst |
| `resume/` | Typst resume template (`resume.typ`) |
| `public/` | Static downloadable resume PDF (`Gean-Mapesos-Resume.pdf`) |

## Deploying

The site prerenders statically on [Vercel](https://vercel.com/new) (using Next.js 16 Cache Components). Import the repository there, or run `vercel` from this folder.
