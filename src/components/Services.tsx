/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// Server Component
import { Globe, Database, Bot, Smartphone, Cpu, Workflow } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites & Web Apps',
      desc: 'Fast, SEO-friendly React and Next.js sites and apps built to convert.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      desc: 'Pipelines, ETL, warehouses, and analytics your team can act on.',
    },
    {
      icon: Bot,
      title: 'Agentic AI & Automation',
      desc: 'Practical AI agents with human guardrails for real business workflows.',
    },
    {
      icon: Cpu,
      title: 'Custom AI Solutions',
      desc: 'Vision, prediction, and NLP integrated into your product, not bolted on.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      desc: 'Cross-platform React Native apps that work offline and on slow networks.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      desc: 'Payments, WhatsApp, SMS, and reporting so manual busywork disappears.',
    },
  ];

  return (
    <section
      id="services-section"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] ambient-glow-blue opacity-35 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pitch Column */}
        <div id="services-header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
              What we build
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-6"></div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-400 text-base leading-relaxed">
              Custom software for startups and SMEs: websites that convert, data pipelines you can trust, and practical AI automation on clear timelines.
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
          className="mt-12 sm:mt-14 border-t border-slate-900 pt-8 sm:pt-10 text-center"
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
            <span className="hover:text-teal-400 transition-colors">Real Estate &amp; PG</span>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <span className="hover:text-teal-400 transition-colors">SMEs</span>
          </div>
        </div>

      </div>
    </section>
  );
}