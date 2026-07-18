# Mach100.in SEO Improvement Tasks

**Site:** https://mach100.in/  
**Goal:** Crawlable, indexable, strong SERP titles/snippets, better chance of rich results.  
**Updated:** 2026-07-18

---

## Status summary

| Priority | Task | Impact | Who | Status |
|----------|------|--------|-----|--------|
| High | Homepage meta description | High | **Code** | **Done** |
| High | Structured data (Organization + WebSite + more) | Very High | **Code** | **Done** |
| Medium | Improve meta titles (home + blog template) | Medium | **Code** | **Done** |
| Medium | Homepage → blog internal links | Medium | **Code** | **Done** |
| Medium | Submit sitemap + request indexing in GSC | High | **You** | Pending |
| Low | Backlinks / directories | Medium | **You** | Ongoing |
| Check | Lighthouse (production build) | — | **Code** | Run after build |

---

## High priority (code) — completed

### 1. Meta description (homepage)

**Live in code:**
```
Mach100 builds fast, clean websites and custom web tools for Indian SMEs and businesses. Production-ready web apps, internal tools, and operational systems from Bengaluru.
```

- Set via `SITE_DESCRIPTION` in `src/lib/site.ts`
- Forced on homepage with `metadata` in `src/app/page.tsx` (`title.absolute` + `description`)
- Also used for OG/Twitter

### 2. Structured data (JSON-LD)

In `src/app/layout.tsx` + `src/lib/site.ts`:

| Schema | Purpose |
|--------|---------|
| **Organization** | Name, logo, Bengaluru address, email, sameAs |
| **WebSite** | Site name + description (no fake SearchAction — we have no `/search`) |
| **ProfessionalService** | Services + catalog |
| **SoftwareApplication** | MFleet, PGPulse, GluCare |
| **FAQPage** | On `/faq` |
| **BlogPosting** | On each `/blog/[slug]` |

### 3. Meta titles

| Page | Title pattern |
|------|----------------|
| **Homepage** | `Mach100 - Fast, Clean Websites & Custom Web Tools \| Bengaluru` |
| **Blog index** | `Blog \| Mach100` |
| **FAQ** | `FAQ \| Mach100` |
| **Blog posts** | `[Post title] \| Mach100` |

### 4. Internal linking

Homepage section **“Guides for Indian businesses”** links the 3 latest blog posts + “View all posts”.

---

## You must do (cannot be done from this repo alone)

### A. Deploy

- [ ] Push code and **redeploy Vercel** so production matches this repo
- [ ] Verify View Source on https://mach100.in/ shows:
  - `<title>Mach100 - Fast, Clean Websites & Custom Web Tools | Bengaluru</title>`
  - `<meta name="description" content="Mach100 builds fast, clean...`
  - `application/ld+json` scripts present

### B. Google Search Console

1. [ ] https://search.google.com/search-console → property `https://mach100.in/`
2. [ ] Verify ownership if needed
3. [ ] **Sitemaps** → submit `sitemap.xml` (full: `https://mach100.in/sitemap.xml`)
4. [ ] **URL Inspection** → Request indexing for:

```
https://mach100.in/
https://mach100.in/blog
https://mach100.in/faq
https://mach100.in/blog/regret-website-without-proper-development
https://mach100.in/blog/wasting-time-managing-excel-sheets
https://mach100.in/blog/why-small-business-websites-fail-customers
https://mach100.in/blog/automate-business-workflows-custom-web-tools
https://mach100.in/blog/internal-tools-dashboards-for-teams
https://mach100.in/blog/professional-website-with-login-business
https://mach100.in/blog/small-business-website-india-customers
https://mach100.in/blog/seo-optimization-mach100-nextjs
https://mach100.in/blog/privacy-first-ai-health-demo
https://mach100.in/blog/pg-rent-collection-whatsapp
https://mach100.in/blog/fleet-mvp-in-5-weeks
```

### C. Optional but recommended

- [ ] Bing Webmaster Tools → import GSC or submit same sitemap  
- [ ] Google Business Profile (Bengaluru)  
- [ ] Clarity / GA4 env vars on Vercel  
- [ ] Share 2–3 blogs on LinkedIn  

### D. Backlinks (long-term)

- Client mentions, directories, guest posts — no spam

---

## Lighthouse

Run against **production build**, not `next dev`:

```bash
npm run build
npm run start
# then Lighthouse on http://localhost:3000  (mobile)
# or PageSpeed Insights on https://mach100.in/ after deploy
```

**Lighthouse lab (2026-07-18, `next start` mobile, port 3010):**

| Category | Score |
|----------|-------|
| Performance | **99** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** (meta description present) |

| Metric | Value |
|--------|-------|
| FCP | 1.1 s |
| LCP | 2.2 s |
| TBT | 20 ms |
| CLS | 0.024 |
| SI | 1.1 s |

After Vercel deploy, re-check with [PageSpeed Insights](https://pagespeed.web.dev/?url=https://mach100.in/).

---

## Do not

- Add SearchAction schema pointing to a non-existent `/search`  
- Buy links  
- Expect Google SERP title to update the same day (days–weeks after deploy + request indexing)

---

**Blocked on you:** Vercel deploy → GSC sitemap + indexing requests.
