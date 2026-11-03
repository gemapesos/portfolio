# Gean Mapesos: portfolio

Personal site built with Next.js 16, Tailwind CSS 4 and Inter. The layout takes its cues from [alexcarpenter.me](https://alexcarpenter.me): a single typeface at a single size, a label / content / aside grid, and hairline dividers between sections. The typeface follows [jakub.kr](https://jakub.kr) and [samuelkraft.com](https://samuelkraft.com). The page follows the visitor's light or dark system setting.

## Editing content

All of the copy lives in [`app/data.ts`](app/data.ts): roles, bio, experience, projects, education, certifications and contact links. Add or change an entry there and the page updates; you don't need to touch any layout code.

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

| Path | What it is |
| --- | --- |
| `app/page.tsx` | The page |
| `app/data.ts` | All content |
| `app/opengraph-image.tsx` | Social preview card (1200×630), generated at build time |
| `app/icon.svg`, `app/apple-icon.tsx` | Favicon and home-screen icon |
| `components/` | Section grid, list entry, links, icons, copy button |
| `assets/` | Inter TTFs for the social card ([SIL Open Font License](assets/OFL.txt)) |
| `assets/logos/` | Company and school logos shown beside Experience and Education |
| `assets/certificates/` | Certificate images, shown in a sideways row under Certifications |

## Deploying

The site is fully static. Import the repository on [Vercel](https://vercel.com/new), or run `vercel` from this folder.
