/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailComponent from '@/components/ProductDetail';
import { PRODUCTS } from '@/productsData';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: 'Product not found' };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.id}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetailComponent product={product} />;
}
