/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SITE_URL = 'https://mach100.in';
export const SITE_NAME = 'Mach100 Tech Solutions';
/** ~155 chars — used in SERP snippet under the blue title */
export const SITE_DESCRIPTION =
  'Mach100 builds fast, clean websites and custom web tools for Indian SMEs and businesses. Production-ready web apps, internal tools, and operational systems from Bengaluru.';

export const SITE_TITLE_HOME =
  'Mach100 - Fast, Clean Websites & Custom Web Tools | Bengaluru';

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
    'We build fast, clean websites and custom web tools for businesses. Based in Bengaluru, India.',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City', name: 'Bengaluru' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Business Website Development',
    'Web Application Development',
    'Custom Web Tools',
    'Internal Tools and Dashboards',
    'Workflow Automation',
    'Fleet Management Software',
    'PG Management Software',
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
    { '@type': 'City', name: 'Bengaluru' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  serviceType: [
    'Custom Software Development',
    'Business Website Development',
    'Web Application Development',
    'Internal Tools and Dashboards',
    'Workflow Automation',
    'Fleet Management Software',
    'PG Management Software',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mach100 software services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Websites & Web Apps',
          description:
            'Clean, fast, SEO-friendly websites and web applications with login and modern features.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Internal Tools & Dashboards',
          description: 'Custom admin panels, operational dashboards, and team productivity tools.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operational Web Tools',
          description: 'Custom tools for fleet, logistics, PG management, and similar operations.',
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
        'Fleet management and driver operations platform for cab operators and logistics teams in India. Invite-only access.',
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
        'PG and co-living property management demo: rent collection, vacancy tracking, and tenant onboarding. No login required for the demo.',
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
