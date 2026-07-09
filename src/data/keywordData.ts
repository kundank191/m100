/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface KeywordMapRow {
  keyword: string;
  intent: string;
  target: string;
  priority: 'P0' | 'P1' | 'P2';
}

export const KEYWORD_MAP: KeywordMapRow[] = [
  {
    keyword: 'custom software development India',
    intent: 'Service / hire',
    target: 'Home hero, Services, Contact',
    priority: 'P0',
  },
  {
    keyword: 'fleet management software India',
    intent: 'Product',
    target: 'MFleet product + Blog: fleet MVP',
    priority: 'P0',
  },
  {
    keyword: 'PG management software',
    intent: 'Product',
    target: 'PGPulse demo + Blog: rent collection',
    priority: 'P0',
  },
  {
    keyword: 'paying guest management software Bengaluru',
    intent: 'Local product',
    target: 'PGPulse, Why Mach100, Contact',
    priority: 'P1',
  },
  {
    keyword: 'agentic AI automation',
    intent: 'Service / thought leadership',
    target: 'Services, Why Mach100, Blog',
    priority: 'P1',
  },
  {
    keyword: 'data engineering services India',
    intent: 'Service',
    target: 'Services, Why Mach100',
    priority: 'P1',
  },
  {
    keyword: 'AI glucose monitoring app India',
    intent: 'Product research',
    target: 'GluCare + Blog: privacy AI',
    priority: 'P1',
  },
  {
    keyword: 'build MVP in 4 weeks India',
    intent: 'Delivery / trust',
    target: 'Why Mach100, FAQ, Blog',
    priority: 'P2',
  },
  {
    keyword: 'cab fleet management system with GST invoicing',
    intent: 'Long-tail product',
    target: 'MFleet specs + Blog',
    priority: 'P2',
  },
  {
    keyword: 'production ready software development Bengaluru',
    intent: 'Local service',
    target: 'Home, About, Contact',
    priority: 'P2',
  },
];

export interface FreeSeoTool {
  name: string;
  url: string;
  useFor: string;
}

export const FREE_SEO_TOOLS: FreeSeoTool[] = [
  {
    name: 'Google Keyword Planner',
    url: 'https://ads.google.com/home/lib/us/keyword-planner/',
    useFor: 'Search volume & competition (needs Google Ads account)',
  },
  {
    name: 'Google Trends',
    url: 'https://trends.google.com/trends/',
    useFor: 'Interest over time and India geo comparison',
  },
  {
    name: 'Google Search Console',
    url: 'https://search.google.com/search-console',
    useFor: 'Queries already showing for mach100.in',
  },
  {
    name: 'AlsoAsked',
    url: 'https://alsoasked.com/',
    useFor: 'Question clusters for FAQ / blog ideas',
  },
  {
    name: 'AnswerThePublic',
    url: 'https://answerthepublic.com/',
    useFor: 'Question and preposition queries',
  },
  {
    name: 'Ubersuggest (free tier)',
    url: 'https://neilpatel.com/ubersuggest/',
    useFor: 'Quick keyword ideas and difficulty estimates',
  },
  {
    name: 'Rich Results Test',
    url: 'https://search.google.com/test/rich-results',
    useFor: 'Validate FAQ and Organization schema',
  },
  {
    name: 'PageSpeed Insights',
    url: 'https://pagespeed.web.dev/',
    useFor: 'Core Web Vitals for mach100.in',
  },
];
