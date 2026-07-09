/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SITE_URL = 'https://mach100.in';
export const SITE_NAME = 'Mach100 Tech Solutions';
export const SITE_DESCRIPTION =
  'Build fast, reliable custom software in India. Production-ready fleet (MFleet), PG operations (PGPulse), and AI health tools (GluCare). 4–6 week MVPs. Request a demo today.';

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
    'Mach100 Tech Solutions builds custom software, fleet management, PG operations tools, data engineering pipelines, and agentic AI automation — engineered in India.',
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
    'Custom Software Development',
    'Fleet Management Software',
    'PG Management Software',
    'Data Engineering',
    'Agentic AI Automation',
    'Business Website Development',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@mach100.in',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
};
