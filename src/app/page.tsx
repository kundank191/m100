/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import About from '@/components/About';
import { PRODUCTS } from '@/productsData';
import HomeScroll from '@/components/HomeScroll';

/** Contact is below the fold — load after first paint */
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <section className="py-16 sm:py-20 border-t border-slate-900" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 h-48" />
    </section>
  ),
});

export default function HomePage() {
  return (
    <div id="homepage-flow">
      <HomeScroll />
      <Hero />
      <Products products={PRODUCTS} />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
