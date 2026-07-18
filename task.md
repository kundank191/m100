# Mach100.in — Your SEO & ops checklist

**Site:** https://mach100.in/  
**Updated:** 2026-07-18  

Code-side SEO is largely done (titles, meta, sitemap, robots, JSON-LD, blog, FAQ, light default, performance).  
**What grows rankings now is mostly what you do outside the repo.**

---

## 1. Deploy first (do this before Search Console)

- [ ] Push latest code and **redeploy on Vercel**
- [ ] Confirm production: https://mach100.in/ loads new homepage + light mode + blogs
- [ ] Confirm sitemap: https://mach100.in/sitemap.xml
- [ ] Confirm robots: https://mach100.in/robots.txt (must list Sitemap)

---

## 2. Google Search Console (highest priority)

### Setup
- [ ] Open [Google Search Console](https://search.google.com/search-console)
- [ ] Add property: **URL prefix** `https://mach100.in/`
- [ ] Verify ownership (DNS TXT or HTML meta / Vercel domain verification)
- [ ] Submit sitemap: `https://mach100.in/sitemap.xml`
- [ ] Wait for “Sitemap successful” (can take hours)

### Request indexing (paste each URL → URL Inspection → **Request indexing**)

**Core pages**
| Page | URL |
|------|-----|
| Home | https://mach100.in/ |
| Blog index | https://mach100.in/blog |
| FAQ | https://mach100.in/faq |

**All blog posts (11) — add these in Search Console**

| # | Title (short) | URL |
|---|---------------|-----|
| 1 | Why businesses regret websites without proper development | https://mach100.in/blog/regret-website-without-proper-development |
| 2 | Wasting time managing everything on Excel | https://mach100.in/blog/wasting-time-managing-excel-sheets |
| 3 | Why small business websites fail to bring customers | https://mach100.in/blog/why-small-business-websites-fail-customers |
| 4 | Automate repetitive workflows with custom web tools | https://mach100.in/blog/automate-business-workflows-custom-web-tools |
| 5 | Internal tools and dashboards for your team | https://mach100.in/blog/internal-tools-dashboards-for-teams |
| 6 | Professional website with login for your business | https://mach100.in/blog/professional-website-with-login-business |
| 7 | Website that brings customers for SMBs in India | https://mach100.in/blog/small-business-website-india-customers |
| 8 | How we cleaned up mach100.in for SEO | https://mach100.in/blog/seo-optimization-mach100-nextjs |
| 9 | Why we will not oversell a health app (GluCare) | https://mach100.in/blog/privacy-first-ai-health-demo |
| 10 | PG rent collection & WhatsApp story | https://mach100.in/blog/pg-rent-collection-whatsapp |
| 11 | Fleet MVP in 5 weeks (MFleet story) | https://mach100.in/blog/fleet-mvp-in-5-weeks |

**Copy-paste list (one URL per line)**

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

**Also useful (products / demos — index if public)**
```
https://mach100.in/products/mfleet
https://mach100.in/products/pgpulse
https://mach100.in/products/glucare
https://pg.mach100.in/
https://fleet.mach100.in/
https://glucare.mach100.in/
```

> Tip: Request indexing for **home + blog index + all 11 posts** first. Product subdomains can wait if they are separate Search Console properties.

- [ ] Optional: add separate GSC properties for `https://pg.mach100.in/`, `https://fleet.mach100.in/`, `https://glucare.mach100.in/` if you want them tracked alone

---

## 3. Bing Webmaster Tools (quick win)

- [ ] https://www.bing.com/webmasters → add `https://mach100.in/`
- [ ] Import from Google Search Console **or** submit sitemap `https://mach100.in/sitemap.xml`
- [ ] Request indexing for home + blog index

---

## 4. Analytics & behaviour (measure SEO success)

- [ ] Confirm **Microsoft Clarity** env on Vercel: `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- [ ] Confirm Clarity dashboard receives sessions after deploy
- [ ] Optional **GA4**: set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` on Vercel → redeploy
- [ ] Link GA4 property to Search Console (Admin → product links)

---

## 5. Local SEO (Bengaluru) — strong for “software company near me”

- [ ] Create / claim **Google Business Profile** (Bengaluru)
  - Category: Software company / Website designer / IT services
  - Website: https://mach100.in/
  - Email: contact@mach100.in
  - Service areas: Bengaluru + India (remote)
- [ ] Add real photos (office/team/product screens if allowed)
- [ ] Keep NAP consistent (Name, Address, Phone if you add a phone later)
- [ ] Ask happy clients for **Google reviews**

---

## 6. On-page / content habits (weekly)

- [ ] Publish **1–2 new blogs/month** on India SMB pain (websites, login apps, internal tools, Excel replacement, WhatsApp lead capture)
- [ ] After each new post: add URL to sitemap (if not auto), deploy, **Request indexing** in GSC
- [ ] Internal linking: from home/FAQ to best blogs; blogs already have “Read next”
- [ ] When you have pilots: add short **case studies / testimonials** (real names if possible)
- [ ] Optional: 1200×630 **OG image** → `public/og.png` (better social CTR)

---

## 7. Off-page SEO (links & mentions)

- [ ] Share each blog on LinkedIn / X / WhatsApp status / founder network
- [ ] List company on directories (if accurate): Clutch, GoodFirms, IndiaMART, Justdial, Sulekha (only real profiles)
- [ ] Guest posts or partner mentions (local startup communities, college alumni, client sites)
- [ ] Get backlinks from client sites (“Built by Mach100”) when allowed
- [ ] Answer relevant Quora / Reddit / Indie Hackers questions with value + soft link to a blog (no spam)

---

## 8. Technical checks after every deploy

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) on `https://mach100.in/` and `https://mach100.in/faq`
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) on home (use **mobile** production URL, not localhost dev)
- [ ] GSC → **Pages** / **Indexing**: fix any “Crawled – currently not indexed” with better titles/internal links
- [ ] GSC → **Experience** / Core Web Vitals once data appears (28 days)

---

## 9. Keywords to target (content + GBP)

Use naturally in new posts and GBP services (not stuffing):

| Intent | Examples |
|--------|----------|
| Service | custom software development India, website development Bengaluru, web app with login, internal tools dashboard |
| Problem | small business website not getting customers, replace Excel with web app, automate invoices WhatsApp India |
| Product | PG management software, fleet management software India |
| Local | software company Bengaluru, website developer near me Bengaluru |

---

## 10. Do **not** waste time on (for now)

- Buying links / PBNs  
- Keyword stuffing  
- Obsessing over daily ranking fluctuations  
- Testing only with `next dev` Lighthouse (use production URL)

---

## Priority order (this week)

1. **Redeploy Vercel** so live site = latest code  
2. **Search Console** verify + sitemap  
3. **Request indexing** for home, `/blog`, `/faq`, and **all 11 blog URLs** above  
4. **Clarity / GA4** env vars confirmed  
5. **Google Business Profile** start  
6. Share 2–3 strongest blogs on LinkedIn  

---

## Code already done (no action unless broken)

- Title / meta / OG / Twitter  
- Canonical URLs  
- `robots.txt` + `sitemap.xml`  
- JSON-LD (Organization, WebSite, ProfessionalService, SoftwareApplication, FAQ, BlogPosting)  
- Blog with covers, references, Read next  
- Light mode default + light scrolled navbar  
- Performance tuned for production (~99 mobile in lab when built with `next start`)

---

**Blocked on you:** deploy → GSC → indexing requests → GBP → content cadence.
