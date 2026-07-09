# Mach100 Tech Solutions

Marketing site for **Mach100 Tech Solutions** — custom software, fleet (MFleet), PG ops (PGPulse), and health tech (GluCare).

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 4  
**Deploy:** [Vercel](https://vercel.com) (native Next.js — no SPA rewrites needed)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | TypeScript check |

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import in Vercel — framework preset **Next.js** is auto-detected.
3. Set environment variables (below).
4. Deploy.

**Important:** On Vercel, rename any old `VITE_*` vars to `NEXT_PUBLIC_*` (see below).  
Framework settings: Build `npm run build`, Output is Next default (not `dist`).

### Custom domain

Add `mach100.in` in Vercel → Domains.  
`public/sitemap.xml` and `public/robots.txt` already use full production URLs.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form (`https://formspree.io/f/...`) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 (`G-...`) |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity (defaults to `xjvfg8abh3` if unset) |

See `.env.example`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/products/mfleet` | MFleet specs |
| `/products/pgpulse` | PGPulse specs |
| `/products/glucare` | GluCare specs |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/faq` | FAQ |
| `/keywords` | Keyword tools (footer only, noindex) |

## Project structure

```
src/
  app/           # Next.js App Router pages + layout
  components/    # UI
  contexts/      # Theme
  data/          # Blog, FAQ, keywords
  lib/           # site constants, scroll helpers
public/          # Static assets, robots.txt, sitemap.xml
```

## Contact

**Mach100 Tech Solutions**  
Email: [contact@mach100.in](mailto:contact@mach100.in)

### Products

| Product | Access |
|---------|--------|
| MFleet | Live — request demo/access |
| PGPulse | Public demo: https://pg.mach100.in/ |
| GluCare | Live — request demo/access |

## License

Apache License 2.0.
