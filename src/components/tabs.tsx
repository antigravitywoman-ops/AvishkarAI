"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS_DATA = [
  {
    id: 'atms',
    label: 'ATM Networks',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="7" y1="15" x2="7.01" y2="15"/><line x1="11" y1="15" x2="13" y2="15"/></svg>
    ),
    title: 'ATM Network Dispatch',
    description: '15,000 ATMs live in production across multiple paid ATM network providers in India. When an alert fires, AI triages it, identifies the right engineer, dispatches automatically, tracks resolution, and closes the ticket.',
    metrics: [
      { label: 'AI Authored', value: 90, color: 'bg-[#D9480F]' }, 
      { label: 'Human Loop', value: 10, color: 'bg-[#D9480F]' },  
      { label: 'Uptime SLA', value: 95, color: 'bg-[#D9480F]' },  
      { label: 'Accountable', value: 100, color: 'bg-[#D9480F]' }, 
    ]
  },
  {
    id: 'towers',
    label: 'Telecom Towers',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m8 6 8 8"/><path d="m16 6-8 8"/><path d="m8 14 8 8"/><path d="m16 14-8 8"/><path d="M4 22h16"/></svg>
    ),
    title: 'Telecom Tower Dispatch',
    description: '68,000 Telecom towers live with a top-tier Indian tower company. Downtime is invisible until it\'s catastrophic. Stop relying on human agents doing reactive, repetitive, low-value work.',
    metrics: [
      { label: 'AI Authored', value: 90, color: 'bg-[#D9480F]' },
      { label: 'Human Loop', value: 10, color: 'bg-[#D9480F]' },
      { label: 'Uptime SLA', value: 95, color: 'bg-[#D9480F]' },
      { label: 'Accountable', value: 100, color: 'bg-[#D9480F]' },
    ]
  },
  {
    id: 'hvac',
    label: 'HVAC Systems',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
    ),
    title: 'HVAC Monitoring',
    description: 'HVAC fails and no one knows until it\'s too late. FSM Dispatch is an AI-native dispatch platform for critical infrastructure built to automatically assign the right engineer.',
    metrics: [
      { label: 'AI Authored', value: 90, color: 'bg-[#D9480F]' },
      { label: 'Human Loop', value: 10, color: 'bg-[#D9480F]' },
      { label: 'Uptime SLA', value: 95, color: 'bg-[#D9480F]' },
      { label: 'Accountable', value: 100, color: 'bg-[#D9480F]' },
    ]
  },
  {
    id: 'medical',
    label: 'Medical Equipment',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
    ),
    title: 'Medical Equipment',
    description: 'Medical equipment stops and no one knows until it\'s too late. Guarantee performance with an outcome-based per-asset per-month subscription.',
    metrics: [
      { label: 'AI Authored', value: 90, color: 'bg-[#D9480F]' },
      { label: 'Human Loop', value: 10, color: 'bg-[#D9480F]' },
      { label: 'Uptime SLA', value: 95, color: 'bg-[#D9480F]' },
      { label: 'Accountable', value: 100, color: 'bg-[#D9480F]' },
    ]
  }
];

const SegmentedBar = ({ value, activeColor }: { value: number, activeColor: string }) => {
  const TOTAL_SEGMENTS = 45; 
  const activeSegments = Math.round((value / 100) * TOTAL_SEGMENTS);

  return (
    <div className="flex gap-[2px] h-[14px] w-full items-center">
      {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => (
        <div
          key={i}
          className={`h-full flex-1 rounded-[1px] transition-colors duration-500 ${
            i < activeSegments ? activeColor : 'bg-slate-100'
          }`}
        />
      ))}
    </div>
  );
};

export default function OptimizationSection() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0]);

  return (
    <section className="min-h-screen py-16 lg:py-20 w-full overflow-hidden font-sans selection:bg-[#D9480F] selection:text-white relative flex items-center bg-white">
      
      {/* --- Subtle Theme Dot Pattern --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: 'center center',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D9480F] mb-4 bg-orange-50 px-3 py-1 rounded-sm border border-orange-100">
            AVISHKAR AI
          </span>
          <h2 className="font-tobias font-light text-4xl lg:text-[4rem] text-slate-900 leading-[1.05] tracking-tight lg:whitespace-nowrap">
            The autonomous <span className="text-[#D9480F] italic">uptime</span> standard for industry.
          </h2>
        </div>

        {/* --- Category Tabs: Light Theme --- */}
        <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
          {TABS_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-sm text-[13px] font-medium transition-all whitespace-nowrap border ${
                activeTab.id === tab.id
                  ? 'bg-white border-slate-300 text-slate-900 shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-800'
              }`}
            >
              <span className={`${activeTab.id === tab.id ? 'text-[#D9480F]' : 'text-slate-400'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          
          {/* Image Card - Kept the dark overlay over the image to ensure the white text pops */}
          <div className="relative w-full rounded-sm overflow-hidden p-8 lg:p-10 flex flex-col justify-center min-h-[300px] shadow-lg border border-slate-200">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/image_8.png')" }}
            />
            {/* Dark overlay specifically for the image readability */}
            <div className="absolute inset-0 bg-slate-900/60 z-[1]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col"
              >
                <h3 className="text-white font-tobias text-3xl mb-4">{activeTab.title}</h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-[95%]">
                  {activeTab.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Metrics Column */}
          <div className="w-full flex flex-col gap-6 lg:pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {activeTab.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                    </div>
                    <SegmentedBar value={metric.value} activeColor={metric.color} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Process Steps Cards: Light Theme --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-lg hover:border-[#D9480F]/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-5 border border-orange-100">
              <span className="text-[#D9480F] font-bold text-sm">1</span>
            </div>
            <h4 className="text-[15px] font-medium text-slate-900 mb-2">Alert Fires</h4>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              AI ingests monitoring alert from any system instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-lg hover:border-[#D9480F]/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-5 border border-orange-100">
              <span className="text-[#D9480F] font-bold text-sm">2</span>
            </div>
            <h4 className="text-[15px] font-medium text-slate-900 mb-2">AI Dispatches</h4>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Triages severity and identifies optimal engineer with full context.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-lg hover:border-[#D9480F]/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-5 border border-orange-100">
              <span className="text-[#D9480F] font-bold text-sm">3</span>
            </div>
            <h4 className="text-[15px] font-medium text-slate-900 mb-2">Resolved & Closed</h4>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Tracks resolution and closes tickets with 100% accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-orange-200 rounded-sm p-6 hover:shadow-lg hover:border-[#D9480F]/50 transition-all group bg-orange-50/30"
          >
            <div className="w-10 h-10 rounded-full bg-[#D9480F] flex items-center justify-center mb-5 shadow-md">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <h4 className="text-[15px] font-medium text-slate-900 mb-2">Outcome Pricing</h4>
            <p className="text-[13px] text-slate-600 leading-relaxed">
              Per-asset per-month subscription. Paid only for uptime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}