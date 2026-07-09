# Mach100 Tech Solutions

Marketing website for **Mach100 Tech Solutions** — a software company that builds fast, reliable products for businesses, including custom websites, data engineering pipelines, and agentic AI automation.

Built with React, TypeScript, and Tailwind CSS. Deploy-ready for [Vercel](https://vercel.com).

## Features

- Responsive single-page site with product showcase and service pages
- Product detail views for MFleet, PGPulse, and GluCare
- Contact form via Formspree (falls back to `contact@mach100.in` if unset)
- Live demo links for MFleet, PGPulse, and GluCare
- SEO meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- `robots.txt` and `sitemap.xml` for search engines

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Hosting | Vercel (SPA) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

### Type check

```bash
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use these settings (Vite defaults):

   | Setting | Value |
   |---------|-------|
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

4. Deploy. SPA routing is handled by `vercel.json`.

### Custom domain

After you purchase a domain (e.g. `mach100.in`):

1. Add the domain in Vercel → Project → Settings → Domains.
2. Update `public/sitemap.xml` with your full domain URL.
3. Add a `Sitemap:` line back to `public/robots.txt`.
4. Update canonical and `og:url` in `index.html` if needed.

## Project Structure

```
m100/
├── public/              # Static assets (favicon, logos, robots.txt, sitemap)
├── src/
│   ├── components/      # UI sections (Hero, Services, Contact, etc.)
│   ├── App.tsx          # Main app and view routing
│   ├── productsData.ts  # Product content (MFleet, PGPulse, GluCare)
│   ├── types.ts         # Shared TypeScript types
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and Tailwind
├── index.html           # HTML shell, SEO meta tags
├── vercel.json          # Vercel SPA rewrites and security headers
└── vite.config.ts       # Vite configuration
```

## Configuration

### Contact email & form

Business email: **contact@mach100.in** (displayed in Contact, footer, and JSON-LD).

The contact form posts to [Formspree](https://formspree.io). Create a free form, point notifications to `contact@mach100.in`, then set:

```bash
# .env (or Vercel env)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

See `.env.example`. Without this variable, the form shows a clear error and asks users to email directly.

Contact component: `src/components/Contact.tsx`

### Microsoft Clarity

```bash
VITE_CLARITY_PROJECT_ID=your_project_id
```

Create a project at [clarity.microsoft.com](https://clarity.microsoft.com), copy the project ID, set the env var on Vercel, and redeploy.

### Google Analytics 4

1. [analytics.google.com](https://analytics.google.com) → Admin → **Create property** → Web stream for `https://mach100.in`
2. Copy **Measurement ID** (`G-XXXXXXXXXX`)
3. Vercel env (Production):
   ```bash
   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy. SPA navigations send `page_view`; contact form success sends `generate_lead`.

Without this env var, GA does not load.

### Content routes (SPA)

| Path | Page |
|------|------|
| `/` | Home |
| `/blog` | Blog index |
| `/blog/:slug` | Blog post |
| `/faq` | FAQ (+ FAQPage schema) |
| `/keywords` | Keyword map + free SEO tools + density checker |

### Branding & logo

The navbar and footer logo live in:

```
src/components/Logo.tsx
```

Static brand assets are in `public/` (`favicon.svg`, `logo.jpeg`, etc.).

### SEO

Primary SEO content is in `index.html`:

- Page title and meta description
- Open Graph and Twitter Card tags
- JSON-LD schemas (Organization, ProfessionalService, WebSite)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type check |
| `npm run clean` | Remove `dist/` and `server.js` |

## Public Repository

This project is safe to publish as a public repo:

- `.env` files are gitignored — never commit real API keys
- No secrets, tokens, or credentials are stored in source
- Contact email is intentionally public (business inquiry address)

Before pushing, double-check you have not added a `.env` or `.env.local` file with real values.

## License

Licensed under the [Apache License 2.0](LICENSE). Source files include SPDX headers (`Apache-2.0`).

## Contact

**Mach100 Tech Solutions**  
Email: [contact@mach100.in](mailto:contact@mach100.in)

### Products

| Product | Access |
|---------|--------|
| MFleet | Live product — request demo/access via contact form |
| PGPulse | Public interactive demo: https://pg.mach100.in/ |
| GluCare | Live product — request demo/access via contact form |