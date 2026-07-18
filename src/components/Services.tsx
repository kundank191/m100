/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, LayoutDashboard, Workflow, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites & Web Apps',
      desc: 'Clean, fast, and SEO-friendly websites and web applications with login systems, modern design, and essential features.',
    },
    {
      icon: LayoutDashboard,
      title: 'Internal Tools & Dashboards',
      desc: 'Custom admin panels, operational dashboards, and internal tools that help teams manage work more efficiently.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      desc: 'Web tools that handle payments, notifications, approvals, reporting, and other repetitive business tasks.',
    },
    {
      icon: Truck,
      title: 'Custom Operational Tools',
      desc: 'Specialized web tools for fleet management, logistics, PG/hostel operations, and similar business workflows.',
    },
  ];

  return (
    <section
      id="services-section"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] ambient-glow-blue opacity-35 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="services-header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
              What we specialize in
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-6" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-400 text-base leading-relaxed">
              We help businesses build practical websites and web applications that solve real problems —
              from public sites to internal tools your team uses every day.
            </p>
          </div>
        </div>

        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                id={`service-card-${index}`}
                className="group relative rounded-xl glass-panel glass-panel-hover p-6 sm:p-8"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 group-hover:w-full transition-all duration-300 rounded-t-xl" />

                <div className="w-10 h-10 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-center text-teal-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-teal-700 transition-all duration-300 mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-teal-400 transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
