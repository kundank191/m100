/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Database, Bot, Smartphone, Cpu, Workflow } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites & Web Apps',
      desc: 'Professional, SEO-friendly websites and web applications built with React and Next.js. Fast-loading, mobile-responsive, and designed to convert visitors into customers for your business.'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      desc: 'End-to-end data pipelines, ETL workflows, and analytics infrastructure. We design reliable data systems that collect, transform, and deliver insights your team can act on — at any scale.'
    },
    {
      icon: Bot,
      title: 'Agentic AI & Automation',
      desc: 'Intelligent AI agents and agentic frameworks that automate repetitive tasks, handle customer workflows, and make decisions on your behalf. Built on modern LLM architectures with human oversight built in.'
    },
    {
      icon: Cpu,
      title: 'Custom AI Solutions',
      desc: 'Computer vision, predictive models, and NLP systems tailored to your domain. We integrate AI directly into your products — not as a gimmick, but as a tool that saves time and reduces errors.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      desc: 'Cross-platform mobile apps with React Native that work reliably across devices. Offline-capable, fast, and built for the connectivity realities of Indian markets.'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      desc: 'Payment routing, WhatsApp and SMS integrations, automated reporting, and custom business process automation. Eliminate manual work and let your systems run themselves.'
    }
  ];

  return (
    <section
      id="services-section"
      className="py-24 relative overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] ambient-glow-blue opacity-35 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pitch Column */}
        <div id="services-header" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
              Software Services for Growing Businesses
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-6"></div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-400 text-base leading-relaxed">
              At <strong className="text-slate-300">Mach100 Tech Solutions</strong>, we build custom software that solves real business problems — fast. From business websites and data engineering pipelines to agentic AI automation frameworks, we deliver reliable products on predictable timelines. Whether you are a startup, logistics operator, healthcare platform, or SME, we build systems that work from day one.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div 
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={index}
                id={`service-card-${index}`}
                className="group relative rounded-xl glass-panel glass-panel-hover p-6 sm:p-8"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 group-hover:w-full transition-all duration-300 rounded-t-xl"></div>

                <div className="w-10 h-10 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-center text-teal-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-teal-700 transition-all duration-300 mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-teal-400 transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Audience Bar */}
        <div 
          id="services-audience"
          className="mt-20 border-t border-slate-900 pt-12 text-center"
        >
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block mb-6">
            Industries We Serve
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400 text-sm font-semibold font-display">
            <span className="hover:text-teal-400 transition-colors">Startups &amp; SaaS</span>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <span className="hover:text-teal-400 transition-colors">Logistics &amp; Fleet</span>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <span className="hover:text-teal-400 transition-colors">Healthcare &amp; Wellness</span>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <span className="hover:text-teal-400 transition-colors">Real Estate &amp; Property</span>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <span className="hover:text-teal-400 transition-colors">Small &amp; Medium Businesses</span>
          </div>
        </div>

      </div>
    </section>
  );
}