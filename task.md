# Mach100.in Task List — Status

**Site:** https://mach100.in/  
**Stack:** Vite + React SPA (not Next.js)  
**Updated:** 2026-07-09

---

## Done in code (this pass + prior)

### Branding, trust, products
- [x] Branding: Mach100 Tech Solutions (no Mach100Tech)
- [x] Email: contact@mach100.in (ops: inbox + Formspree already done by you)
- [x] Formspree contact form + env
- [x] Products: MFleet/GluCare invite-only; PGPulse open demo
- [x] Removed GPS claim from MFleet
- [x] Demo banners / footers on sibling demo apps (when redeployed)
- [x] Theme: dark default + sun/moon light toggle
- [x] Section chips fixed for light mode
- [x] Footer Core Modules → real product URLs (+ Request access / Open demo labels)
- [x] Products intro copy tightened
- [x] PGPulse note: “No login required — data stays in your browser”

### SEO / technical (implemented, no A/B)
- [x] Title + meta description (India / custom software focused)
- [x] Canonical `https://mach100.in/`
- [x] OG + Twitter with absolute image URL (`logo.jpeg`)
- [x] robots.txt + Sitemap URL
- [x] sitemap.xml with mach100.in + product subdomains
- [x] JSON-LD: Organization, ProfessionalService, Services list, SoftwareApplication (3 products), WebSite
- [x] Bengaluru / India in geo + schema
- [x] Hero + Why Mach100 keyword-aware copy
- [x] Logo alt + width/height
- [x] Font display=swap (Google fonts URL) + preconnect
- [x] Security headers: HSTS + Permissions-Policy (vercel.json)
- [x] Skipped: A/B meta tests, Next.js migration, blog, Clarity, keyword tools

---

## Your tasks (ops / marketing — not code)

### This week (do these)
1. **Redeploy m100** on Vercel (so SEO + footer + copy go live).
2. **Google Search Console**
   - Add property `https://mach100.in/`
   - Submit sitemap: `https://mach100.in/sitemap.xml`
   - Request indexing for homepage
3. **Microsoft Clarity**
   - https://clarity.microsoft.com → new project for mach100.in  
   - Copy Project ID → Vercel: `VITE_CLARITY_PROJECT_ID=...` → redeploy  
4. **Google Analytics 4** (optional) — share Measurement ID to wire `gtag`  
5. **Rich Results test** on `/` and `/faq`  
6. **Optional OG image** 1200×630 → `public/og.png`  
7. **Lighthouse** after deploy  

### Next 1–2 weeks (you)
8. **Google Business Profile** (Bengaluru)  
9. **Phone number** on site if you have one  
10. More **blog posts** / testimonials when ready  
11. Redeploy demo apps if banners not live

### Added (Blog / FAQ / Clarity / Keywords)
- [x] Blog at `/blog` (+ 3 starter posts)
- [x] FAQ at `/faq` (+ FAQPage JSON-LD)
- [x] Keyword map + free tools + density checker at `/keywords`
- [x] Microsoft Clarity via `VITE_CLARITY_PROJECT_ID`
- [x] Nav + footer links; sitemap updated

### Later
- Next.js migration  
- A/B testing titles  
- Case studies / more blog posts  
- Paid SEO tools (Ahrefs etc.) — optional

---

## Quick verify after deploy

| Check | Expected |
|--------|----------|
| View source title | `Mach100 Tech Solutions \| Custom Software Development India` |
| `https://mach100.in/robots.txt` | Allow + Sitemap line |
| `https://mach100.in/sitemap.xml` | Full domain URLs |
| Footer MFleet / PGPulse / GluCare | Open real product URLs |
| PGPulse card | “No login required…” under Try Live Demo |
| Theme toggle | Sun/moon works; chips readable in light mode |
| `/blog` `/faq` `/keywords` | Pages load; FAQ accordion works |
| Clarity | Fires only after env ID is set |

---

**Blocked on you:** redeploy + Search Console + Clarity project ID (+ optional GA4).
