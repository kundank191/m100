/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import { Suspense } from 'react';
import Providers from '@/components/Providers';
import SiteShell from '@/components/SiteShell';
import {
  ORGANIZATION_JSON_LD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WEBSITE_JSON_LD,
} from '@/lib/site';
import { fontSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Mach100 Tech',
  title: {
    default: 'Mach100 Tech Solutions | Mach 100 Tech | Custom Software India',
    template: `%s | Mach100 Tech`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/logo-icon.png',
  },
  keywords: [
    'Mach100',
    'Mach 100',
    'Mach100 Tech',
    'Mach 100 Tech',
    'Mach100 Tech Solutions',
    'Mach 100 Tech Solutions',
    'mach100.in',
    'custom software development India',
    'fleet management software India',
    'PG management software',
    'agentic AI automation',
    'data engineering services India',
    'business website development Bengaluru',
  ],
  authors: [{ name: 'Mach100 Tech Solutions Private Limited', url: SITE_URL }],
  creator: 'Mach100 Tech Solutions',
  publisher: 'Mach100 Tech Solutions Private Limited',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Mach100 Tech Solutions | Mach 100 Tech',
    description:
      'Official site of Mach100 Tech Solutions (Mach 100 Tech). Custom software, MFleet, PGPulse, and GluCare. Engineered in India.',
    images: [{ url: '/logo.jpeg', alt: 'Mach100 Tech Solutions logo' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mach100 Tech Solutions | Mach 100 Tech',
    description:
      'Official Mach100 / Mach 100 Tech website. Custom software and products for fleet, PG, and health tech in India.',
    images: ['/logo.jpeg'],
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'Bengaluru, India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={fontSans.variable}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mach100-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Suspense fallback={null}>
            <SiteShell>{children}</SiteShell>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
