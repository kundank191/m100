/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogCoverImage {
  src: string;
  alt: string;
  /** Photographer name (Unsplash attribution) */
  credit?: string;
  /** Unsplash profile or photo page */
  creditUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  tags: string[];
  coverImage: BlogCoverImage;
  /**
   * Body blocks (order preserved).
   * - "## " / "### " headings
   * - "! [alt](url)" or "![alt](url)" images
   * - "> quote" blockquotes
   * - "- item" / "* item" bullets
   * - "1. item" numbered lines
   * - "TABLE:" then pipe rows ending with "ENDTABLE"
   * - "*italic caption*" (single-line italic)
   * - otherwise paragraph (supports **bold**)
   */
  body: string[];
}

/** Unsplash CDN helpers — stable photo IDs (source.unsplash.com is deprecated). */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'small-business-website-india-customers',
    title: 'How to Build a Website That Actually Brings Customers for Small Businesses in India',
    excerpt:
      'Most small business websites in India get almost no inquiries. Here is what actually works: mobile-first design, speed, WhatsApp contact, trust signals, and clear CTAs.',
    date: '2026-07-18',
    readMinutes: 9,
    tags: ['Websites', 'India', 'SMB'],
    coverImage: {
      src: u('photo-1460925895917-afdab827c52f'),
      alt: 'Laptop showing business analytics dashboard for a growing company',
      credit: 'Luke Chesser',
      creditUrl: 'https://unsplash.com/photos/black-and-white-laptop-computer-on-brown-wooden-desk-JKUTrJ4vK00',
    },
    body: [
      'Most small business websites in India fail to generate meaningful results. They exist, but they do not bring customers, inquiries, or revenue.',
      'If you are running a clinic, coaching center, boutique, service business, or any small enterprise, this article will show you what actually works — backed by data and practical insights.',
      '## Most Small Business Websites Get Almost No Results',
      'According to data from Ahrefs, **96.55% of all web pages get zero organic traffic** from Google. This includes a large number of small business websites that were built without proper strategy.',
      'In India, the situation is even more challenging. Many small business owners either do not have a website or have one that brings almost no inquiries. Research and observations from developers working with Indian MSMEs show that a significant percentage of small businesses still rely primarily on WhatsApp and Instagram rather than their websites.',
      'This happens because most websites are built without understanding what Indian customers actually need.',
      '## Why Most Websites Fail to Convert Visitors into Customers',
      'Here are the main reasons why small business websites in India underperform:',
      '### 1. Poor Mobile Experience',
      'Over **70% of web traffic in India** comes from mobile devices. Yet many websites are still not properly optimized for mobile, leading to high bounce rates.',
      '### 2. Slow Loading Speed',
      'Studies show that if a website takes more than **3 seconds** to load, a large percentage of visitors leave. In India, where internet speeds can vary, slow websites perform especially poorly.',
      '### 3. Lack of Clear Calls-to-Action',
      'Many websites do not clearly tell visitors what to do next. Without obvious buttons like “WhatsApp Us” or “Call Now”, potential customers often leave without taking action.',
      '### 4. Difficult to Contact',
      'Indian customers prefer quick communication. Websites that force users to fill long forms or do not offer WhatsApp as an option tend to get fewer inquiries.',
      '### 5. Lack of Trust Signals',
      'Without proper photos, reviews, address, and contact details, visitors are hesitant to reach out to an unknown business.',
      '## What Data Tells Us About High-Converting Websites',
      'Websites that perform well for small businesses usually share these characteristics:',
      '- **Mobile-first design** — prioritizes mobile users from the beginning',
      '- **Fast loading time** (under 3 seconds)',
      '- **Easy contact options**, especially **WhatsApp**',
      '- **Clear value proposition** visible within the first 5 seconds',
      '- **Strong trust signals** (reviews, photos, address)',
      '- **Obvious calls-to-action**',
      'Businesses that implement these elements see significantly better conversion rates compared to generic brochure-style websites.',
      '## How to Build a Website That Actually Brings Customers',
      '### Step 1: Define the Main Goal Clearly',
      'Before building your website, answer this question:',
      '> What is the one main action you want visitors to take?',
      'Common goals for Indian small businesses:',
      '- Get WhatsApp inquiries',
      '- Receive phone calls',
      '- Book appointments',
      '- Generate leads for services',
      'Everything on your website — design, content, and features — should support this goal.',
      '### Step 2: Design for Mobile Users First',
      'Since most of your potential customers will visit your website on their phones, design for mobile from the start.',
      '- Use large, readable fonts',
      '- Make buttons easy to tap',
      '- Keep navigation simple',
      '- Avoid heavy animations that slow down loading',
      '![Mobile-first website design on a smartphone](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80)',
      '*Clean mobile website mockup — design for the phone first.*',
      '### Step 3: Make Your Website Fast',
      'Speed is not optional. According to various web performance studies, even a 1-second delay in page load time can reduce conversions significantly.',
      '**Quick ways to improve speed:**',
      '- Compress all images',
      '- Use a reliable hosting provider',
      '- Minimize the use of heavy plugins',
      '- Consider modern website builders or frameworks (for example React or Next.js when you need a real product, not only a brochure)',
      '### Step 4: Make WhatsApp Your Primary Contact Channel',
      'This is one of the highest-impact changes you can make for an Indian audience.',
      'Research and real-world experience show that Indian customers strongly prefer WhatsApp over traditional contact forms for business inquiries.',
      '**Recommended actions:**',
      '- Add a floating WhatsApp button on every page',
      '- Pre-fill the first message',
      '- Clearly display your WhatsApp number with business hours',
      '![Person using a smartphone for business messaging](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80)',
      '*Make chat and quick contact the default path — not a buried form.*',
      '### Step 5: Add Strong Calls-to-Action',
      'Every important page should have clear next steps.',
      'Effective CTAs for small businesses in India:',
      '- “WhatsApp Us Now”',
      '- “Call Now”',
      '- “Book Your Slot”',
      '- “Get a Free Quote”',
      'Place these buttons prominently and repeat them where relevant.',
      '### Step 6: Build Trust on Your Website',
      'Indian customers are generally cautious when contacting new businesses online. Your website should help reduce this hesitation.',
      'Include:',
      '- Real photos of your business and team',
      '- Customer testimonials and Google reviews',
      '- Full business address with landmark',
      '- Years of experience',
      '- Any certifications or achievements',
      '### Step 7: Optimize for Local Search',
      'Most small businesses get customers from their city or nearby areas. Optimize your website for local searches by:',
      '- Naturally mentioning your city and area in content',
      '- Creating a well-optimized Google Business Profile',
      '- Adding your complete address and contact details on the website',
      '## Essential Features Checklist',
      'TABLE:',
      'Feature|Why It Matters|Priority',
      'Mobile Responsive|Majority of traffic comes from mobile|Must',
      'WhatsApp Integration|Preferred contact method in India|Must',
      'Fast Loading Speed|Reduces bounce rate and improves rankings|Must',
      'Clear Calls-to-Action|Guides visitors to take action|Must',
      'Trust Signals|Increases willingness to contact|High',
      'Services / Offerings Page|Explains what you do clearly|High',
      'Google Maps|Helps local customers find you|Medium',
      'Contact Form|Alternative contact method|Medium',
      'ENDTABLE',
      '## Final Thoughts',
      'Building a website that actually brings customers is not about having a fancy design. It is about creating a fast, mobile-friendly experience that makes it easy for people to understand what you offer and contact you — preferably through WhatsApp.',
      'Most small business websites in India fail because they ignore these fundamentals. The ones that focus on speed, mobile experience, easy contact, and trust tend to perform much better.',
      'If you are planning to build or redesign your website, start with these principles instead of just focusing on aesthetics.',
      'Want a site built this way for your business in India? Reach us at contact@mach100.in or use the form on mach100.in — we ship production-ready websites and apps in weeks, not months.',
      '## References',
      '1. Ahrefs. SEO Statistics: 96.55% of pages get no traffic from Google. Cited in multiple digital marketing analyses (2025).',
      '2. Observations from Indian web developers and MSME digital adoption studies. Many small business owners report that WhatsApp and social media outperform traditional websites for lead generation (industry reports and practitioner discussions, 2025–2026).',
    ],
  },
  {
    slug: 'seo-optimization-mach100-nextjs',
    title: 'How we cleaned up mach100.in so people (and Google) can find us',
    excerpt:
      'The story of fixing our company website: clearer product stories, better contact, and a rebuild so pages actually load for search engines.',
    date: '2026-07-10',
    readMinutes: 8,
    tags: ['Behind the scenes', 'Website'],
    coverImage: {
      src: u('photo-1432888498266-38ffec3eaf0a'),
      alt: 'Person working on a laptop with charts and search-style work on screen',
      credit: 'Stephen Phillips - Hostreviews.co.uk',
      creditUrl: 'https://unsplash.com/photos/person-using-macbook-pro-on-white-table-hostreviews-co-uk-qrPqHQOD2K4',
    },
    body: [
      '## The short version',
      'A few months ago our site looked fine if you already knew us. If you did not, it was hard to tell what was real, how to reach us, or why you should care. So we fixed the boring stuff that actually matters: honesty, contact, and making every page easy to open and share.',
      '## Where we started',
      'Mach100 builds software for businesses: websites, data work, automation, and a few products of our own. MFleet is for fleet operators. PGPulse is for PG and co-living owners. GluCare is a health companion we run as a pilot product.',
      'The old marketing site was a single-page app. It felt modern, but search engines and social previews struggled. Deep links like a blog post or FAQ did not behave like real pages. Contact looked like a side project. Product cards overpromised. None of that helps when someone lands from Google for the first time.',
      '## First we told the truth',
      'Before we touched SEO tools, we fixed the story.',
      'PGPulse is open. Anyone can try the demo in the browser. No login. Data stays on your machine for that trial. MFleet and GluCare are live products, but access is invite-only. If you want in, you write to us. We say that out loud on the site now, with clear buttons.',
      'We also cut fake-sounding numbers and careful-sounding claims that we could not stand behind. GluCare is not a medical device. We say that clearly. Trust is part of SEO whether Google lists it as a ranking factor or not. People bounce when they feel sold a demo as production.',
      '## Then we made it easy to talk to us',
      'Contact used to open your email app and point at a personal address. That is fine for freelancing in 2012. It is not fine for a company site in 2026.',
      'Now the form goes to a proper inbox at contact@mach100.in. You get a simple success message. We can track that someone actually submitted. Small change. Big difference when a serious lead shows up.',
      '## Making pages real',
      'We rebuilt the site on Next.js so each URL is a real page: home, products, blog posts, FAQ. Titles and descriptions match the page you are on. Sharing a blog link no longer looks empty.',
      'We added a sitemap with full web addresses (Google rejected a bare slash once, which was embarrassing and easy to fix). We told Search Console where to look. We added the structured data Google expects for a company, our services, our products, and the FAQ.',
      'None of this is glamorous. It is the equivalent of putting a clear sign on the door, a listed phone number, and a clean menu so visitors are not guessing.',
      '## How we know if it works',
      'Search Console shows what Google sees and whether pages are indexed. Analytics shows who visits and whether the contact form gets used. Clarity shows where people scroll and where they give up.',
      'We also ran Lighthouse, fixed low-contrast grey text, improved form labels, and cleaned up spacing so the first screen is the hero (not a half-peek of the next section). Light mode is the default; dark mode is one click away if you prefer it.',
      '## The Vercel chapter (briefly)',
      'Deploying Next on Vercel is straightforward once the project is set as Next.js, not the old Vite setup. Output folder should not be "dist". Environment variables need the NEXT_PUBLIC_ prefix. And never commit the .next build folder. We learned each of those the hard way so you do not have to.',
      '## What we did not pretend to finish',
      'SEO is not "done" when the deploy goes green. Rankings take time. Local presence still needs a proper Google Business Profile. We need more stories from real pilots and customers. The share image for social can be nicer than a logo.',
      'What we did finish is a site that is honest, contactable, and readable by both people and machines.',
      '## If you are in the same boat',
      'If your site is pretty but quiet, start with truth and contact. Then make every important page a real page. Then measure. Tools help; clarity helps more.',
      'Want a site or product that ships this way? Reach us at contact@mach100.in or use the form on mach100.in.',
    ],
  },
  {
    slug: 'privacy-first-ai-health-demo',
    title: 'Why we will not oversell a health app',
    excerpt:
      'A plain talk about GluCare: what it is, what it is not, and why invite-only is a feature, not a hurdle.',
    date: '2026-07-01',
    readMinutes: 5,
    tags: ['GluCare', 'Stories'],
    coverImage: {
      src: u('photo-1576091160399-112ba8d25d1d'),
      alt: 'Healthcare technology and digital health monitoring concept',
      credit: 'National Cancer Institute',
      creditUrl: 'https://unsplash.com/photos/person-holding-black-tablet-computer-L8tWZT4CcVQ',
    },
    body: [
      '## A line we refuse to cross',
      'Health software tempts big claims. "94% accurate." "Doctor-grade." "Replaces your clinic." We have seen those lines. We do not want them on our site.',
      'GluCare helps people log meals and glucose-style readings and explore trends. Parts of it use camera and AI to make logging faster. That is useful. It is not a diagnosis. It is not a medical device. If you need medical care, you need a clinician, not a dashboard.',
      '## Why access is invite-only',
      'Health data is personal. A wide-open public playground is the wrong shape for that.',
      'We run GluCare as a live product for pilots. You get access when we have agreed who is using it and why. That sounds slower than "sign up free." It is also how you avoid treating strangers\' health notes like a toy.',
      '## What a pilot is for',
      'A pilot answers simple questions. Is logging faster than before? Do people come back the next day? Does the AI step help or annoy? Where does the product confuse someone who is not a developer?',
      'We would rather learn that with a small group than shout accuracy numbers we cannot explain.',
      '## How we talk about numbers',
      'If we mention test results, we say they are internal checks on sample photos, not a hospital study. No fine print games. If we cannot explain a number at a kitchen table, it does not belong on the homepage.',
      '## If you are evaluating tools like this',
      'Ask any vendor three things: Is this a medical device? Who sees the data? What happens when the AI is wrong?',
      'If the answers are foggy, walk away. If you like our answers and want to try GluCare in a controlled pilot, request access through mach100.in and tell us your context. Small team, caregiver setup, or research interest: say it plainly.',
      'We are always happier with a careful yes than a loud maybe.',
    ],
  },
  {
    slug: 'pg-rent-collection-whatsapp',
    title: 'The PG owner whose rent lived only in WhatsApp',
    excerpt:
      'Why rent collection breaks, and how a simple board beats another heavy "property management suite."',
    date: '2026-06-22',
    readMinutes: 5,
    tags: ['PGPulse', 'Stories'],
    coverImage: {
      src: u('photo-1522708323590-d24dbb6b0267'),
      alt: 'Modern apartment living space representing PG and co-living homes',
      credit: 'Naassom Azevedo',
      creditUrl: 'https://unsplash.com/photos/brown-wooden-bed-frame-with-white-bed-linen-Q_Sei-TqSlc',
    },
    body: [
      '## A familiar mess',
      'Picture a PG with thirty beds. Tenants pay on different dates. Some pay half. Some send a UPI screenshot at midnight. The owner scrolls WhatsApp looking for green ticks and blurry receipts.',
      'By the end of the month nobody agrees on who is clear. That is not a "software feature gap." That is a daily stress machine.',
      '## Why fancy tools fail here',
      'Many products start with pretty dashboards and long setup. Owners need something else first: who paid, who did not, who is on notice, which bed is free, and a way to remind people without typing the same message thirty times.',
      'If the tool cannot show dues in one glance, it will lose to a notebook. Notebooks are undefeated against bad software.',
      '## What we put in PGPulse',
      'We built PGPulse around that glance. Rooms and beds. Tenants. A rent board with paid, pending, and overdue. Simple flows to add someone, check them out, and record a payment.',
      'The public demo is open on purpose. You can click around without creating an account. Your trial data stays in your browser. It is a way to feel the product before you talk to us about a full setup for your property.',
      'Try it at pg.mach100.in when you have ten quiet minutes.',
      '## What "good" looks like',
      'Good is not a hundred reports. Good is the owner opening one page and knowing the truth before the manager calls.',
      'Reminders, UPI patterns, and onboarding templates help after that truth is clear. Order matters. Truth first. Automation second.',
      '## If you run a PG in India',
      'You do not need a lecture on digital transformation. You need less chaos at month end.',
      'Open the demo. If it feels close, tell us how many rooms you run and what hurts most. We will talk about a production version with real multi-user access.',
      'Contact: contact@mach100.in or the form on mach100.in.',
    ],
  },
  {
    slug: 'fleet-mvp-in-5-weeks',
    title: 'Five weeks with a fleet owner who was drowning in notebooks',
    excerpt:
      'A simple story about how we scope fleet software: start with the daily pain, not a giant ERP wishlist.',
    date: '2026-06-15',
    readMinutes: 6,
    tags: ['MFleet', 'Stories'],
    coverImage: {
      src: u('photo-1449965408869-eaa3f722e40d'),
      alt: 'Cars on a highway representing fleet and logistics operations',
      credit: 'Joey Kyber',
      creditUrl: 'https://unsplash.com/photos/white-and-black-ford-mustang-tUYEWFN7d2U',
    },
    body: [
      '## The call that started it',
      'A cab operator messaged us late one evening. Not with a feature list. With a problem: "I do not know who paid rent today. My manager has three notebooks. Drivers keep WhatsApping screenshots."',
      'That is the usual beginning. Not "we need AI routes and a mobile app and biometrics." Just: money and vehicles are messy, and someone is tired of it.',
      '## What we did not do',
      'We did not sell a twelve-month platform. Fleet software fails when it tries to be accounting, HR, GPS, and a bank in one go.',
      'We asked what burns time every single day. Vehicle status. Driver dues. Who is out on a trip. Whether an invoice went out. Whether cash came back. Roles: who can change rates, who can only book, who can only view.',
      'Everything else went on a later list. Later is allowed.',
      '## The five-week shape',
      'Week one is listening and drawing the map: vehicles, drivers, trips, bills, payments, people and their permissions. We argue about names until the owner nods without thinking.',
      'Weeks two and three are the screens they open every morning. Lists that load. Buttons that do one clear thing. No mystery menus.',
      'Week four is money flow: how rent is collected, how a bill looks, how a payment is marked. Ugly truths surface here. That is good. Better now than after launch.',
      'Week five is real users. Owner account. Manager account. A few careful employees. We watch them click. We fix the sharp edges. We do not call it "done" until they stop using the notebooks for the same job.',
      '## Why MFleet is not a public playground',
      'Fleet data is real money and real people. We run MFleet as a live product with accounts you get by invitation. You can read about it on the site and ask for a walkthrough. You cannot (and should not) open someone else\'s fleet by accident.',
      'If you want access, tell us roughly how many vehicles you run and what you use today. Paper counts. Excel counts. "My cousin\'s app" counts too.',
      '## The quiet win',
      'The win is not a demo video. It is a Tuesday morning when the owner checks one screen and already knows who is pending and who is clear.',
      'That is the bar we aim for when we say we ship in weeks, not quarters.',
      'Curious if this fits your yard? Write to contact@mach100.in or request MFleet access on mach100.in.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Newest first (already ordered in BLOG_POSTS; helper for safety). */
export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
