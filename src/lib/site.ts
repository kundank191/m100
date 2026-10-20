/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SITE_URL = 'https://mach100.in';
export const SITE_NAME = 'Mach100 Tech Solutions';
/** ~155 chars - used in SERP snippet under the blue title */
export const SITE_DESCRIPTION =
  'Autonomous AI agents for operations, plus data-driven growth marketing that scales customers. Ex-DoorDash leadership. UK, US, and India.';

export const SITE_TITLE_HOME = 'Mach100 | Agentic AI for Operations and Growth';

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
    'Mach100 builds agentic AI systems, operational platforms, and data-driven growth engines. Founded by Ex-DoorDash AI and data engineering leadership. Based in Bengaluru, serving the UK, US, and India.',
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
    'Growth Marketing and Conversion Optimization',
    'Agentic AI Systems',
    'AI Agents and Workflow Automation',
    'Intelligent Web Applications',
    'Internal Tools and Dashboards',
    'Fleet Management Software',
    'PG Management Software',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mach100 growth and agentic AI services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Growth Marketing, SEO & Conversion Optimization',
          description:
            'Full-funnel paid acquisition, programmatic SEO, A/B testing, and AI speed-to-lead conversion for SMEs in the UK, US, and India.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentic Operational Systems',
          description:
            'AI agents that handle multi-step business processes end-to-end with minimal human intervention.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intelligent Web Apps, Dashboards & Custom AI Agents',
          description:
            'AI-native applications with embedded agents, recommendation engines, payments, and role-based access.',
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
        'Agentic fleet, private hire, and logistics operations. Intelligent route optimization, automated ledgers, payouts, and anomaly detection. Invite-only access.',
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
        'Agentic AI for co-living, HMO, and PG operators. AI agents handle rent invoices, payment tracking, vacancy optimization, tenant onboarding, and WhatsApp communication. Open interactive demo.',
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
