/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }[] = [];

    const particleCount = Math.min(60, Math.floor((width * height) / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 650;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient backdrop
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Draw particle lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'; // Cyan
        ctx.fill();

        // Connect to other particles nearby
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse coordinates
        const mouseDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        if (mouseDist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - mouseDist / mouse.radius)})`; // Blue
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header
      id="hero-header"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        id="hero-interactive-canvas"
        className="absolute inset-0 w-full h-full -z-10 cursor-pointer"
      />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 -z-10 pointer-events-none"></div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] ambient-glow-cyan -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] ambient-glow-blue -z-10"></div>

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Animated Badge */}
        <div 
          id="hero-badge"
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/20 shadow-lg shadow-cyan-950/15 mb-8 animate-fade-in"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono font-semibold text-slate-300 tracking-wider uppercase">
            Software That Ships Fast &amp; Stays Reliable
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        </div>

        {/* Headline */}
        <h1 
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1] mb-6"
        >
          We Build{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
            Fast, Reliable
          </span>{' '}
          Software for Business
        </h1>

        {/* Subheadline */}
        <p 
          id="hero-subheadline"
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Mach100 Tech Solutions delivers production-ready products — business websites, data engineering pipelines, and agentic AI automation — on time, every time. No fluff. Just software that works when your business needs it.
        </p>

        {/* Call to Actions */}
        <div 
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-14"
        >
          <button
            id="hero-cta-explore"
            onClick={() => onScrollTo('products-section')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-cyan-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>See Our Products</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
          
          <button
            id="hero-cta-build"
            onClick={() => onScrollTo('contact-section')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/5 text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-semibold text-sm cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Start Your Project</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Value Highlights Grid */}
        <div 
          id="hero-highlights"
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 border-t border-white/5 pt-10 text-left max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-2.5">
            <div className="p-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-100 font-display">Fast Delivery</h4>
              <p className="text-xs text-slate-400">Production-ready websites and apps shipped in weeks, not months.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2.5">
            <div className="p-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-blue-400 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-100 font-display">Built to Last</h4>
              <p className="text-xs text-slate-400">Reliable architecture with 99.9% uptime and systems that scale with you.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2.5 col-span-2 md:col-span-1">
            <div className="p-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-100 font-display">Agentic AI &amp; Data</h4>
              <p className="text-xs text-slate-400">Data engineering pipelines and AI agents that automate real business workflows.</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
