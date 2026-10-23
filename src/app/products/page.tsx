/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import Products from '@/components/Products';
import { PRODUCTS } from '@/productsData';
import { breadcrumbJsonLd } from '@/lib/site';

const TITLE = 'Live Products';
const DESCRIPTION =
  'Software shipping today: PGPulse for property and co-living, MFleet for fleet ledgers and payouts, and GluCare, an invite-only glucose companion.';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mach100` },
  description: DESCRIPTION,
  alternates: { canonical: '/products' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/products',
  },
};

export default function ProductsIndexPage() {
  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Products products={PRODUCTS} />
    </>
  );
}
