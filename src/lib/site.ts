/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SITE_URL = 'https://mach100.in';
export const SITE_NAME = 'Mach100 Tech Solutions';
/** ~155 chars - used in SERP snippet under the blue title */
export const SITE_DESCRIPTION =
  'We build systems that bring in more customers and handle the daily work for you.';

export const SITE_TITLE_HOME = 'Mach100 | More Customers. Zero Manual Operations';

/** BreadcrumbList JSON-LD helper for inner pages */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: 'Mach100 Tech Solutions Private Limited',
  url: `${SITE_URL}/`,
  email: 'contact@mach100.in',
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  description:
    'Mach100 builds systems that bring in more customers and handle the daily work. Founded by Ex-DoorDash AI and data engineering leadership. Based in Bengaluru, serving the UK, US, and India.',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'London' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hosa Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560100',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Agentic AI',
    'AI Agents',
    'Growth Marketing',
    'Conversion Rate Optimization',
    'Performance Marketing',
    'Operational AI Systems',
    'Workflow Automation',
    'Fleet Management Software',
    'PG Management Software',
    'Internal Tools and Dashboards',
    'Custom Web Applications',
  ],

  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@mach100.in',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  alternateName: ['Mach100', 'Mach 100', 'mach100.in'],
  sameAs: [`${SITE_URL}/`],
};

export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: ['Mach100', 'mach100.in'],
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.jpeg`,
    },
  },
  inLanguage: 'en-IN',
};

/** Local business / service provider for India search intent */
export const PROFESSIONAL_SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: 'contact@mach100.in',
  image: `${SITE_URL}/logo.jpeg`,
  logo: `${SITE_URL}/logo.jpeg`,
  description: SITE_DESCRIPTION,
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'London' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hosa Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560100',
    addressCountry: 'IN',
  },
  serviceType: [
    'Google and Meta ads and conversion',
    'Website and WhatsApp lead agents',
    'Operational systems for rent, fleet, and daily work',
    'PG Management Software',
    'Fleet Management Software',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mach100 growth and operations',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ads and conversion',
          description:
            'Google and Meta ads, landing pages, calculators, and tests that turn more visitors into customers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website and WhatsApp lead agents',
          description:
            'Agents that answer instantly, check if a lead is a fit, and book the meeting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operational systems',
          description:
            'Systems for rent, driver ledgers, payouts, and daily tasks, including PGPulse, MFleet, or a custom agent.',
        },
      },
    ],
  },
};


export const SOFTWARE_APPLICATIONS_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'MFleet',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://fleet.mach100.in/',
      description:
        'Driver ledgers, payouts, and daily exceptions for fleet, private hire, and logistics teams. Invite-only.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/LimitedAvailability',
        price: '0',
        priceCurrency: 'INR',
        description: 'Request demo or pilot access',
      },
      provider: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'PGPulse',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://pg.mach100.in/',
      description:
        'Rent invoices, payment tracking, vacancies, tenant onboarding, and WhatsApp reminders for PG and co-living operators. Open demo.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: '0',
        priceCurrency: 'INR',
        description: 'Open interactive demo',
      },
      provider: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'GluCare',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: 'https://glucare.mach100.in/',
      description:
        'AI-powered glucose monitoring companion for meal logging and trends. Invite-only. Not a medical device; not for clinical diagnosis.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/LimitedAvailability',
        price: '0',
        priceCurrency: 'INR',
        description: 'Request pilot access',
      },
      provider: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    },
  ],
};
