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
  PROFESSIONAL_SERVICE_JSON_LD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE_HOME,
  SITE_URL,
  SOFTWARE_APPLICATIONS_JSON_LD,
  WEBSITE_JSON_LD,
} from '@/lib/site';
import { fontSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  // Homepage default; inner pages use template "%s | Mach100 Tech Solutions"
  title: {
    default: SITE_TITLE_HOME,
    template: `%s | Mach100`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/logo-icon.png',
  },
  // Note: meta keywords omitted — Google ignores them
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
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    images: [{ url: '/logo.jpeg', alt: 'Mach100 Tech Solutions logo' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    images: ['/logo.jpeg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      en: '/',
    },
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
      data-theme="light"
      suppressHydrationWarning
      className={fontSans.variable}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mach100-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PROFESSIONAL_SERVICE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATIONS_JSON_LD) }}
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
