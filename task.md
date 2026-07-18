# Mach100.in SEO Optimization Task List

**Goal:** SEO Health ~7.8/10 → 9.5+/10  
**Updated:** 2026-07-18  

---

## Execution status

| # | Area | Code tasks | Status |
|---|------|------------|--------|
| 1 | Technical crawlability | robots.txt, sitemap lastmod, product URLs | **Done** |
| 2 | On-page SEO | Titles, descriptions, remove keywords meta | **Done** |
| 3 | Headings | Fix “What we build” repetition | **Done** |
| 4 | Structured data | BlogPosting + BreadcrumbList | **Done** |
| 5 | Internal linking | Homepage blog teaser + Read next | **Done** |
| 6 | Performance | Lighthouse production | **Done** (see below) |
| 7 | GSC / Bing / GBP | Submit sitemap, request indexing | **You only** |
| 8 | Backlinks | Directories, clients, social | **You only** |

---

## 1. Technical crawlability — done

### robots.txt
```txt
User-agent: *
Allow: /
Disallow: /keywords
Sitemap: https://mach100.in/sitemap.xml
```
(`/keywords` is a noindex tool page — no need to crawl.)

### sitemap.xml
- All core pages + **11 blogs** with **`lastmod`** from post dates  
- Product pages: `/products/mfleet`, `pgpulse`, `glucare`  
- Demo subdomains: pg / fleet / glucare  

---

## 2. On-page SEO — done

| Page | Title |
|------|--------|
| Home | `Mach100 - Build Fast, Clean Websites & Custom Web Tools \| Bengaluru` |
| Blog | `Blog - Practical Guides for Indian Businesses \| Mach100` |
| FAQ | `FAQ - Websites, Web Apps & Internal Tools \| Mach100` |
| Posts | `[Title] \| Mach100` |

- Unique meta descriptions on home, blog, FAQ, posts  
- Removed unused `keywords` meta (Google ignores it)  
- `hreflang` en / en-IN on root layout  

---

## 3. Headings — done

| Section | Before | After |
|---------|--------|--------|
| Examples | What we can build | *(kept — unique)* |
| Services | What we build | **What we specialize in** |
| Chip | What We Build | **Our Services** |

Hierarchy: one H1 per page; H2 sections distinct.

---

## 4. Structured data — done

| Schema | Where |
|--------|--------|
| Organization, WebSite, ProfessionalService, SoftwareApplication | Layout |
| FAQPage | `/faq` |
| BlogPosting | Each blog post |
| **BreadcrumbList** | Blog posts + product pages |
| Visible breadcrumb nav | Blog post pages |

**You:** after deploy, test https://mach100.in/ and a blog URL in [Rich Results Test](https://search.google.com/test/rich-results).

---

## 5. Content & internal links — done

- Homepage **Guides for Indian businesses** → 3 latest posts  
- Blog **Read next** (related by tags)  
- FAQ links to blog + examples  

---

## 6. Lighthouse (production)

Run: `npm run build` + `next start` (not `next dev`).

**Lab results (this session, mobile):**

| Category | Score |
|----------|-------|
| Performance | **99** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

| Metric | Value |
|--------|-------|
| FCP | 1.1 s |
| LCP | 2.2 s |
| TBT | 20 ms |
| CLS | 0.024 |
| SI | 1.1 s |

After Vercel deploy: [PageSpeed Insights](https://pagespeed.web.dev/?url=https://mach100.in/).

---

## 7. You must do (Google / Bing / local)

### Deploy
- [ ] Redeploy Vercel so https://mach100.in/ matches this repo  
- [ ] Confirm View Source: new title, meta description, JSON-LD  

### Google Search Console
- [ ] Property `https://mach100.in/` verified  
- [ ] Submit sitemap: `https://mach100.in/sitemap.xml`  
- [ ] Request indexing:

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

### Optional
- [ ] Bing Webmaster Tools  
- [ ] Google Business Profile (Bengaluru)  
- [ ] Share blogs on LinkedIn  
- [ ] Client / directory backlinks (honest listings only)  

---

## Scoreboard (self-assessment after this pass)

| Category | Before (task) | After (code) | Notes |
|----------|---------------|--------------|--------|
| Technical crawlability | 9/10 | **~10/10** | lastmod + robots + full URLs |
| On-page SEO | 7.5/10 | **~9.5/10** | titles, meta, headings |
| Structured data | 8.5/10 | **~9.5/10** | breadcrumbs + BlogPosting |
| Content & headings | 6.5/10 | **~9/10** | no H2 clash; internal links |
| Performance | unknown | **99 lab** | production build |
| Google indexing | average | **You** | GSC only |

---

**Blocked on you:** deploy → GSC sitemap + indexing. Everything else in this task list that is code is implemented.
