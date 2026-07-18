/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import HowWeWork from '@/components/HowWeWork';
import About from '@/components/About';
import { PRODUCTS } from '@/productsData';
import HomeScroll from '@/components/HomeScroll';

/**
 * Contact is the only heavy client section — load after first paint.
 * Everything above is Server Components (no hydration).
 */
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <section className="py-16 sm:py-20 border-t border-slate-900" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 h-40" />
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
      <WhoWeWorkWith />
      <HowWeWork />
      <About />
      <Contact />
    </div>
  );
}
