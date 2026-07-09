/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetailComponent from './components/ProductDetail';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import FaqPage from './components/FaqPage';
import KeywordsPage from './components/KeywordsPage';
import MicrosoftClarity from './components/MicrosoftClarity';
import { PRODUCTS } from './productsData';
import { ViewState, ProductDetail } from './types';
import { navigatePath, parsePath, pathForRoute } from './lib/routing';

export default function App() {
  const initial = parsePath(window.location.pathname);
  const [currentView, setCurrentView] = useState<ViewState>(initial.view);
  const [blogSlug, setBlogSlug] = useState<string | undefined>(initial.blogSlug);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(() => {
    if (initial.view === 'mfleet' || initial.view === 'pgpulse' || initial.view === 'glucare') {
      return PRODUCTS.find((p) => p.id === initial.view) ?? null;
    }
    return null;
  });

  const applyRoute = useCallback((view: ViewState, slug?: string, push = true) => {
    setCurrentView(view);
    setBlogSlug(slug);

    if (view === 'mfleet' || view === 'pgpulse' || view === 'glucare') {
      const found = PRODUCTS.find((p) => p.id === view);
      setSelectedProduct(found ?? null);
    } else {
      setSelectedProduct(null);
    }

    const path = pathForRoute({ view, blogSlug: slug });
    if (push) {
      navigatePath(path);
    } else {
      navigatePath(path, true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPop = () => {
      const route = parsePath(window.location.pathname);
      setCurrentView(route.view);
      setBlogSlug(route.blogSlug);
      if (route.view === 'mfleet' || route.view === 'pgpulse' || route.view === 'glucare') {
        setSelectedProduct(PRODUCTS.find((p) => p.id === route.view) ?? null);
      } else {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('popstate', onPop);
    // Normalize URL on first load
    navigatePath(pathForRoute({ view: initial.view, blogSlug: initial.blogSlug }), true);
    return () => window.removeEventListener('popstate', onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productId: 'mfleet' | 'pgpulse' | 'glucare') => {
    applyRoute(productId);
  };

  const goHomeAndScroll = (sectionId?: string) => {
    applyRoute('home');
    if (sectionId) {
      setTimeout(() => handleScrollTo(sectionId), 120);
    }
  };

  const handleRequestAccess = () => {
    goHomeAndScroll('contact-section');
  };

  const handleViewChange = (view: ViewState) => {
    applyRoute(view);
  };

  const isHome = currentView === 'home';
  const isProduct =
    selectedProduct &&
    (currentView === 'mfleet' || currentView === 'pgpulse' || currentView === 'glucare');

  return (
    <div id="app-wrapper" className="min-h-screen font-sans selection:bg-teal-500/25 selection:text-teal-700 relative overflow-hidden">
      <MicrosoftClarity />

      <div className="fixed top-[-10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/12 to-indigo-500/8 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/8 to-teal-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed top-[40%] right-[-5%] w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <Navbar
        currentView={currentView}
        onViewChange={handleViewChange}
        onScrollTo={handleScrollTo}
        onGoHomeSection={goHomeAndScroll}
      />

      <main id="main-content-flow">
        {isHome && (
          <div id="homepage-flow">
            <Hero onScrollTo={handleScrollTo} />
            <Products
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onScrollTo={handleScrollTo}
            />
            <Services />
            <About />
            <Contact />
          </div>
        )}

        {isProduct && selectedProduct && (
          <ProductDetailComponent
            product={selectedProduct}
            onBack={() => applyRoute('home')}
            onRequestAccess={handleRequestAccess}
          />
        )}

        {currentView === 'blog' && (
          <BlogPage
            slug={blogSlug}
            onOpenPost={(slug) => applyRoute('blog', slug)}
            onBackToList={() => applyRoute('blog')}
            onContact={() => goHomeAndScroll('contact-section')}
          />
        )}

        {currentView === 'faq' && (
          <FaqPage onContact={() => goHomeAndScroll('contact-section')} />
        )}

        {currentView === 'keywords' && (
          <KeywordsPage
            onOpenBlog={() => applyRoute('blog')}
            onContact={() => goHomeAndScroll('contact-section')}
          />
        )}
      </main>

      <Footer
        onViewChange={handleViewChange}
        onScrollTo={handleScrollTo}
        onGoHomeSection={goHomeAndScroll}
      />
    </div>
  );
}
