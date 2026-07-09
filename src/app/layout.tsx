/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import { Suspense } from 'react';
import Providers from '@/components/Providers';
import SiteShell from '@/components/SiteShell';
import { ORGANIZATION_JSON_LD, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Custom Software Development India`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mach100 Tech Solutions',
    'custom software development India',
    'fleet management software India',
    'PG management software',
    'agentic AI automation',
    'data engineering services India',
    'business website development',
    'MVP development Bengaluru',
  ],
  authors: [{ name: 'Mach100 Tech Solutions Private Limited' }],
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
    title: `${SITE_NAME} | Custom Software Development India`,
    description:
      'Custom software, fleet management, PG operations, and agentic AI — engineered in India. Open PGPulse demo; request access to MFleet & GluCare.',
    images: [{ url: '/logo.jpeg', alt: `${SITE_NAME} logo` }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Custom Software Development India`,
    description:
      'Fast, reliable software for businesses. Custom websites, data pipelines, fleet & PG products — engineered in India.',
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mach100-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body>
        <Providers>
          <Suspense fallback={null}>
            <SiteShell>{children}</SiteShell>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
