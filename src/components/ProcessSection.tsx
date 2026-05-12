import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-24 font-sans selection:bg-orange-600 selection:text-white">
      {/* Inline styles for custom floating animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(16px); }
          50% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0% { stroke-dashoffset: 2700; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-glow {
          stroke-dasharray: 200 2500;
          animation: glow-pulse 3s linear infinite;
        }
      `}} />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.1] tracking-tight mb-6">
            90% AI. 10% Human Oversight.<br className="hidden md:block" />
            100% Accountability.
          </h2>
          
          <div className="text-slate-500 text-base leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              Entire floors of people exist just to triage monitoring alerts manually. FSM Dispatch replaces reactive, repetitive work with an AI-native uptime layer for critical infrastructure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">

          {/* --- STEP 1: Full Width Card --- */}
          <div className="relative w-full bg-[#0f172a] text-white p-10 md:p-16 lg:p-20 flex flex-col items-center text-center overflow-hidden rounded-sm group">
            <img 
              src="/bg1.png" 
              alt="Background texture" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent pointer-events-none z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <span className="border border-white/30 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-sm rounded-sm">
                Step 1
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 tracking-tight">
                Alert Ingestion & Triage
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                AI ingests monitoring alerts from any critical system (SCADA, NOC, BMS) and instantly triages severity to prevent invisible downtime.
              </p>
            </div>
          </div>

          {/* --- STEPS 2 & 3: 50/50 Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Step 2: Autonomous AI Dispatching */}
            <div className="bg-[#112038] text-white pt-10 px-10 md:pt-14 md:px-14 relative overflow-hidden flex flex-col min-h-[500px] rounded-sm group">
              <img src="/bg2.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[#112038]/40 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="border border-white/30 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase w-max mb-6 bg-black/30 rounded-sm">
                  Step 2
                </span>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                  Autonomous <br /> AI Dispatching
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-xs">
                  FSM matches the alert to the right field engineer based on proximity and skill, sending the job with full context.
                </p>
                
                <div className="mt-auto w-full relative group-hover:translate-y-2 transition-transform duration-500">
                  <img 
                    src="/dashboard.png" 
                    alt="AI Dispatch status" 
                    className="w-full h-auto object-cover rounded-t-lg shadow-2xl border border-slate-700/50 animate-float"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Resolution & Automated Closing */}
            <div className="bg-[#182a4d] text-white pt-10 px-10 md:pt-14 md:px-14 relative overflow-hidden flex flex-col min-h-[500px] rounded-sm group">
               <img src="/bg3.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-[#182a4d]/40 z-0"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                <span className="border border-white/30 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase w-max mb-6 block bg-black/30 rounded-sm">
                  Step 3
                </span>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                  Resolution & Automated Closing
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xs mb-10">
                  The system tracks SLAs in real-time and logs resolution data automatically, ensuring 100% accountability from alert to closure.
                </p>

                {/* Floating Image added for Step 3 */}
                <div className="mt-auto w-full relative group-hover:translate-y-2 transition-transform duration-500">
                  <img 
                    src="/dashboard1.png" 
                    alt="Resolution status and SLA tracking" 
                    className="w-full h-auto object-cover rounded-t-lg shadow-2xl border border-slate-700/50 animate-float"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* --- FINAL SECTION: Split Layout --- */}
          <div className="bg-slate-900 text-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative rounded-sm group">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C30,50 70,50 100,0" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
                    <path 
                      d="M0,100 C30,50 70,50 100,0" 
                      stroke="#FFFFFF" 
                      strokeWidth="0.8" 
                      fill="none" 
                      className="animate-glow"
                    />
                </svg>
            </div>

            <div className="p-10 md:p-14 lg:p-16 lg:col-span-5 flex flex-col justify-center relative z-10">
              <span className="border border-[#FF6B00]/40 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase w-max mb-6 bg-black/10 rounded-sm">
                Infrastructure Native
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 tracking-tight">
                Outcome-Based <br /> Uptime Optimization
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-sm">
                We align our success with your uptime. Land with 500 ATMs, expand to 5,000—our platform scales seamlessly with your asset count.
              </p>
              <a href="#book-call">
                <button className="bg-[#FF6B00] text-white px-6 py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-orange-700 transition-all hover:scale-105 w-max rounded-sm shadow-lg">
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>

            <div className="lg:col-span-7 bg-[#f8fafc]/5 p-6 md:p-10 flex items-center justify-end relative z-10">
              <img 
                src="/analytic.png" 
                alt="Infrastructure SLA tracking" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl border border-white/10 lg:translate-x-8 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}