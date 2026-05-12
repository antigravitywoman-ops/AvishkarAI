import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function LiveAgentsSection() {
  return (
    // Added id="fsm-dispatch" for Navbar navigation
    <section id="fsm-dispatch" className="bg-white py-20 lg:py-32 font-sans selection:bg-orange-600 selection:text-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        
        {/* --- Header Area --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 leading-[1.05] tracking-tight max-w-2xl">
            Avishkar AI Live in Production
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md lg:text-right">
            Real infrastructure-native agents executing dispatch workflows that previously required entire floors of manual triage teams.
          </p>
        </div>

        {/* --- Stacking Cards Container --- */}
        <div className="flex flex-col gap-12 lg:gap-24 pb-12 relative">

          {/* --- CARD 1: ATM Dispatch --- */}
          <div className="sticky top-28 z-10 w-full bg-[#f8fafc] border border-slate-200 p-8 md:p-12 lg:p-16 flex flex-col lg:grid lg:grid-cols-12 gap-12 rounded-sm shadow-xl">
            
            <div className="lg:col-span-4 flex flex-col">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
              </div>
              <p className="text-[#FF6B00] font-mono tracking-wider text-sm mb-2">Agent 01 — 15k ATMs Live</p>
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                ATM Network Dispatch
              </h3>
              <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                AI-native dispatch for multiple paid ATM network providers. Ingests alerts directly from monitoring systems to prevent invisible downtime.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-8 flex flex-col">
              <p className="text-slate-400 font-mono text-[11px] uppercase tracking-[0.15em] mb-6">Capabilities</p>
              <ul className="flex flex-col gap-5">
                {[
                  "Severity triage & alert matching",
                  "Proximity-based engineer assignment",
                  "Real-time SLA resolution tracking",
                  "Automated ticket closure & logging",
                  "Integration with proprietary NOC tools"
                ].map((text, i) => (
                  <li key={i} className="text-slate-700 text-[0.95rem] font-medium">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center gap-4">
              {/* Linked directly to the PDF in a new tab */}
              <a href="/case%20study.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm shadow-md">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#book-call" className="w-full">
                <button className="w-full bg-[#0D2149] hover:bg-slate-800 transition-colors text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm">
                  Book a Demo <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

          {/* --- CARD 2: Telecom Tower Agent --- */}
          <div className="sticky top-32 z-20 w-full bg-[#0D2149] text-white p-8 md:p-12 lg:p-16 flex flex-col lg:grid lg:grid-cols-12 gap-12 rounded-sm shadow-2xl border border-white/5">
            
            <div className="lg:col-span-4 flex flex-col">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
                <div className="w-3 h-3 bg-[#FF6B00]"></div>
              </div>
              <p className="text-orange-200 font-mono tracking-wider text-sm mb-2">Agent 02 — 68k Towers Live</p>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Telecom Infrastructure
              </h3>
              <p className="text-slate-300 leading-relaxed text-[0.95rem]">
                Deployed for top-tier tower companies to manage critical signal uptime across vast geographic networks.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-8 flex flex-col">
              <p className="text-orange-300/60 font-mono text-[11px] uppercase tracking-[0.15em] mb-6">Capabilities</p>
              <ul className="flex flex-col gap-5">
                {[
                  "SCADA / NMS signal monitoring",
                  "Job dispatch with full tech context",
                  "Regional engineer orchestration",
                  "Critical power failure triage",
                  "90% autonomous dispatch logic"
                ].map((text, i) => (
                  <li key={i} className="text-white text-[0.95rem] font-medium">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center gap-4">
              {/* Linked directly to the PDF in a new tab */}
              <a href="/case%20study.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#book-call" className="w-full">
                <button className="w-full bg-white hover:bg-slate-100 transition-colors text-[#0D2149] py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm">
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

          {/* --- CARD 3: Critical Facilities --- */}
          <div className="sticky top-36 z-30 w-full bg-[#FF6B00] text-white p-8 md:p-12 lg:p-16 flex flex-col lg:grid lg:grid-cols-12 gap-12 rounded-sm shadow-2xl border border-white/10">
            
            <div className="lg:col-span-4 flex flex-col">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <p className="text-white/80 font-mono tracking-wider text-sm mb-2">Agent 03 — Multi-Vertical</p>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Critical Asset Uptime
              </h3>
              <p className="text-white/90 leading-relaxed text-[0.95rem]">
                Outcome-based platform for HVAC, medical equipment, and industrial assets. Aligning success with 95%+ uptime SLAs.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-8 flex flex-col">
              <p className="text-white/60 font-mono text-[11px] uppercase tracking-[0.15em] mb-6">Capabilities</p>
              <ul className="flex flex-col gap-5">
                {[
                  "BMS temperature & power triage",
                  "Filtering 100s of daily noise alerts",
                  "Cross-system asset coordination",
                  "95%+ uptime SLA maintenance",
                  "Outcome-based per-asset pricing"
                ].map((text, i) => (
                  <li key={i} className="text-white text-[0.95rem] font-medium">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center gap-4">
              {/* Linked directly to the PDF in a new tab */}
              <a href="/case%20study.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#0D2149] hover:bg-slate-900 transition-colors text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#book-call" className="w-full">
                <button className="w-full bg-white hover:bg-slate-100 transition-colors text-[#FF6B00] py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-sm">
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}