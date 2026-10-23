/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailComponent from '@/components/ProductDetail';
import { PRODUCTS } from '@/productsData';
import { breadcrumbJsonLd } from '@/lib/site';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: 'Product not found' };
  const title = `${product.name} - ${product.tagline}`;
  return {
    title: {
      absolute: `${title} | Mach100`,
    },
    description: product.description,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title,
      description: product.description,
      url: `/products/${product.id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product.name, path: `/products/${product.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <ProductDetailComponent product={product} />
    </>
  );
}
