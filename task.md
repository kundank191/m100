# Mach100.in Trust & Marketing Fix Plan

Brutal roast action items — work **one by one**, check off when done.

---

## Phase 1: Immediate Trust & Branding Fixes (main site)

### 1. Fix Branding Everywhere
- [x] Global search: `Mach100Tech` → `Mach100 Tech` — already clean
- [x] Consistent “Mach100 Tech Solutions”

### 2. Replace All Emails (Critical)
- [x] `kundank191@gmail.com` → `contact@mach100.in` (Contact, footer, JSON-LD, README)
- [x] **Ops:** `contact@mach100.in` receiving mail

### 3. Add Prominent Live Demo Links
- [x] MFleet → https://fleet.mach100.in/
- [x] PGPulse → https://pg.mach100.in/
- [x] GluCare → https://glucare.mach100.in/
- [x] Primary **Try Live Demo** + secondary Technical Specs

### 4. Kill Mailto Form — Use Formspree
- [x] Formspree via `VITE_FORMSPREE_ENDPOINT`
- [x] **Ops:** Formspree form + `VITE_FORMSPREE_ENDPOINT` on Vercel + m100 redeploy

### 5. Hero / Nav CTA spacing QA
- [x] Hero uses `gap-4`; nav spacing OK

---

## Phase 2: Messaging & Honesty Overhaul (main site)

### 6. Product positioning
- [x] “Interactive Demo” / “Flagship Product Demos”
- [x] Copy: “same stack and engineering standards we deliver to clients”
- [x] Softened metrics; GluCare ~94% with internal-testing disclaimer
- [x] Medical disclaimer on GluCare detail page
- [x] Open Live Demo (no fake localStorage sandbox)

### 7. Services / About copy
- [x] “Practical agentic systems with human oversight — tested in real workflows.”
- [x] Softened unproven 99.9% SLA claim

### 8. Contact polish
- [x] `contact@mach100.in` only; Formspree success UI

---

## Phase 3: Product Demo Polish (sibling apps)

### Demo environment banners
- [x] **PGPulse** (`I:\projects\pgpulse`) — amber DemoBanner + Mach100 link
- [x] **MFleet** (`I:\projects\mfleet`) — banner on app shell + login
- [x] **GluCare** (`I:\projects\GluCare`) — banner on AppShell + AuthScreen

### Reset / owner controls
- [x] **PGPulse:** prominent amber **Reset Demo Data (Owner)** button
- [x] **MFleet:** Owner settings panel — **Refresh Demo Data (Owner)** + production CTA  
  (Supabase-backed; no local wipe — server org snapshot reload)

### GluCare API / empty states
- [x] Demo tips on Food + Glucose screens (API key / simulated analysis)
- [x] Surface simulated OCR notice when `simulated: true`
- [x] Improved empty timeline copy + chips

### Footers (all three)
- [x] **Back to Mach100.in**
- [x] **Contact us for production deployment**

---

## Phase 4: Longer-Term Credibility (Next 2–4 weeks)

- [ ] 2–3 real or pilot testimonials
- [ ] Case studies / “Recent Work” section (even anonymized)
- [ ] Optional: harden one demo with real multi-user backend story
- [ ] Product card screenshots / mockups
- [ ] OG images + Lighthouse pass (perf + a11y)

---

## Progress Log

| # | Task | Status |
|---|------|--------|
| 1 | Branding | **done** |
| 2 | Emails | **done** (ops pending) |
| 3 | Live demo links | **done** |
| 4 | Formspree | **done** (env pending) |
| 5 | CTA spacing | **done** |
| 6 | Honest product messaging | **done** |
| 7 | About / agentic honesty | **done** |
| 8 | Contact polish | **done** |
| 9 | Demo banners (3 apps) | **done** |
| 10 | Reset/owner controls | **done** |
| 11 | GluCare API empty states | **done** |
| 12 | Demo footers | **done** |
| 13 | Testimonials / case studies | pending |
| 14 | Visuals / OG / Lighthouse | pending |

---

## Your remaining manual steps

1. ~~Email~~ **done**
2. ~~Formspree + m100 env/redeploy~~ **done**
3. **Redeploy** demo apps: pgpulse, mfleet, GluCare (if not already)
4. **Smoke-test** main site form + all 3 demos (banners/footers)

### Repos touched

| Repo | Path |
|------|------|
| Main site | `I:\projects\m100` |
| PGPulse | `I:\projects\pgpulse` |
| MFleet | `I:\projects\mfleet` |
| GluCare | `I:\projects\GluCare` |

---

*Phase 1–3 code complete. Phase 4 is credibility content/visuals.*
