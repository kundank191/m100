/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { PRODUCTS } from '@/productsData';
import HomeScroll from '@/components/HomeScroll';

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
