/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetailComponent from './components/ProductDetail';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PRODUCTS } from './productsData';
import { ViewState, ProductDetail } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Offset for sticky navbar
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectProduct = (productId: 'mfleet' | 'pgpulse' | 'glucare') => {
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) {
      setSelectedProduct(found);
      setCurrentView(productId);
    }
  };

  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    if (view === 'mfleet' || view === 'pgpulse' || view === 'glucare') {
      const found = PRODUCTS.find(p => p.id === view);
      if (found) setSelectedProduct(found);
    } else {
      setSelectedProduct(null);
    }
    // Smooth scroll back to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-wrapper" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      {/* Sleek Interface background glow blobs */}
      <div className="fixed top-[-10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed top-[40%] right-[-5%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* Dynamic Sticky Navbar */}
      <Navbar 
        currentView={currentView}
        onViewChange={handleViewChange}
        onScrollTo={handleScrollTo}
      />

      {/* Main View Router */}
      <main id="main-content-flow">
        {currentView === 'home' && (
          <div id="homepage-flow">
            {/* Immersive Hero Section with particle network */}
            <Hero onScrollTo={handleScrollTo} />
            
            {/* Showcase Products Cards Section */}
            <Products 
              products={PRODUCTS} 
              onSelectProduct={handleSelectProduct}
              onScrollTo={handleScrollTo}
            />
            
            {/* Professional Services Pitch Section */}
            <Services />
            
            {/* Story & bento pillars of Mach100 */}
            <About />
            
            {/* Contact & consultation booking form */}
            <Contact />
          </div>
        )}

        {/* Product Deep-dive Specification Section */}
        {selectedProduct && (currentView === 'mfleet' || currentView === 'pgpulse' || currentView === 'glucare') && (
          <ProductDetailComponent 
            product={selectedProduct} 
            onBack={() => handleViewChange('home')}
          />
        )}


      </main>

      {/* Global Footer */}
      <Footer 
        onViewChange={handleViewChange}
        onScrollTo={handleScrollTo}
      />
    </div>
  );
}
