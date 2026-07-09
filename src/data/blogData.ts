/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  tags: string[];
  /** Paragraphs; use "## " / "### " prefixes for headings */
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'seo-optimization-mach100-nextjs',
    title: 'How we cleaned up mach100.in so people (and Google) can find us',
    excerpt:
      'The story of fixing our company website: clearer product stories, better contact, and a rebuild so pages actually load for search engines.',
    date: '2026-07-10',
    readMinutes: 8,
    tags: ['Behind the scenes', 'Website'],
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
      'We also ran Lighthouse, fixed low-contrast grey text, improved form labels, and cleaned up spacing so the first screen is the hero (not a half-peek of the next section). Dark mode stays default. Light mode is there if you want it.',
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
    slug: 'fleet-mvp-in-5-weeks',
    title: 'Five weeks with a fleet owner who was drowning in notebooks',
    excerpt:
      'A simple story about how we scope fleet software: start with the daily pain, not a giant ERP wishlist.',
    date: '2026-06-15',
    readMinutes: 6,
    tags: ['MFleet', 'Stories'],
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
  {
    slug: 'pg-rent-collection-whatsapp',
    title: 'The PG owner whose rent lived only in WhatsApp',
    excerpt:
      'Why rent collection breaks, and how a simple board beats another heavy "property management suite."',
    date: '2026-06-22',
    readMinutes: 5,
    tags: ['PGPulse', 'Stories'],
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
    slug: 'privacy-first-ai-health-demo',
    title: 'Why we will not oversell a health app',
    excerpt:
      'A plain talk about GluCare: what it is, what it is not, and why invite-only is a feature, not a hurdle.',
    date: '2026-07-01',
    readMinutes: 5,
    tags: ['GluCare', 'Stories'],
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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
