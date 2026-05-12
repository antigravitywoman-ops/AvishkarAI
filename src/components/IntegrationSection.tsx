"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MockLogo = ({ label, color, size = "w-14 h-14" }: { label: string, color: string, size?: string }) => (
  <div className={`${size} bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 flex-shrink-0 mx-auto`}>
    <span className={`font-bold text-[10px] tracking-tighter ${color}`}>{label}</span>
  </div>
);

export default function IntegrationSection() {
  const col1 = [
    <MockLogo key="1" label="SCADA" color="text-orange-600" />,
    <MockLogo key="2" label="BMS" color="text-slate-800" size="w-16 h-16" />,
    <MockLogo key="3" label="IOT" color="text-orange-500" />,
    <MockLogo key="4" label="NMS" color="text-slate-700" size="w-12 h-12" />,
  ];

  const col2 = [
    <MockLogo key="1" label="NOC" color="text-orange-600" size="w-12 h-12" />,
    <MockLogo key="2" label="ERP" color="text-slate-900" size="w-16 h-16" />,
    <MockLogo key="3" label="SLA" color="text-orange-500" />,
    <MockLogo key="4" label="API" color="text-slate-700" size="w-14 h-14" />,
  ];

  const col3 = [
    <MockLogo key="1" label="SCADA" color="text-slate-800" />,
    <MockLogo key="2" label="NMS" color="text-orange-600" size="w-16 h-16" />,
    <MockLogo key="3" label="BMS" color="text-slate-700" />,
    <MockLogo key="4" label="IOT" color="text-orange-500" size="w-12 h-12" />,
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 font-sans selection:bg-orange-600 selection:text-white overflow-hidden flex items-center min-h-[700px]">
      
      {/* --- 3D Perspective Grid Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center perspective-[1000px]">
        <div 
          className="absolute w-[200%] h-[200%] top-[-50%] origin-top"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,107,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,107,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(75deg) translateY(-200px)',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* --- Left Column (Text) --- */}
          <div className="flex flex-col max-w-xl bg-white/50 backdrop-blur-md p-6 lg:p-0 rounded-xl lg:bg-transparent lg:backdrop-blur-none">
            <div className="mb-8">
              <span className="border border-orange-200 text-orange-600 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] px-3 py-1.5 bg-orange-50/50">
                Infrastructure Native
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 leading-[1.05] tracking-tight mb-6">
              Built to Work With <br />
              Your Enterprise Stack
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              FSM Dispatch operates across your existing monitoring tools—SCADA, BMS, NMS, and NOC systems—connecting data and workflows into a single autonomous uptime layer without requiring migrations.
            </p>
            
            <a href="#book-call">
              <button className="bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-6 py-3 font-medium flex items-center justify-center gap-2 w-max text-sm rounded-sm shadow-lg">
                Book a Call <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </a>
          </div>

          {/* --- Right Column (Animated Card) --- */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] max-w-[600px] ml-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFAC66] via-[#FF6B00] to-[#994000] shadow-2xl border border-white/20 group">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
              }}
            >
              <div className="flex justify-between items-center h-full w-full px-8 md:px-16 gap-4">
                
                {/* --- Column 1: Moves Down --- */}
                <div className="flex flex-col w-1/3">
                  <div className="flex flex-col gap-10 pb-10 items-center animate-scroll-down group-hover:[animation-play-state:paused]">
                    {col1.map((icon, i) => <div key={`c1a-${i}`}>{icon}</div>)}
                  </div>
                  {/* Duplicate Track */}
                  <div aria-hidden="true" className="flex flex-col gap-10 pb-10 items-center animate-scroll-down group-hover:[animation-play-state:paused]">
                    {col1.map((icon, i) => <div key={`c1b-${i}`}>{icon}</div>)}
                  </div>
                </div>

                {/* --- Column 2: Moves Up --- */}
                <div className="flex flex-col w-1/3 mt-12">
                  <div className="flex flex-col gap-12 pb-12 items-center animate-scroll-up group-hover:[animation-play-state:paused]">
                    {col2.map((icon, i) => <div key={`c2a-${i}`}>{icon}</div>)}
                  </div>
                  {/* Duplicate Track */}
                  <div aria-hidden="true" className="flex flex-col gap-12 pb-12 items-center animate-scroll-up group-hover:[animation-play-state:paused]">
                    {col2.map((icon, i) => <div key={`c2b-${i}`}>{icon}</div>)}
                  </div>
                </div>

                {/* --- Column 3: Moves Down --- */}
                <div className="flex flex-col w-1/3 mt-8">
                  <div className="flex flex-col gap-10 pb-10 items-center animate-scroll-down group-hover:[animation-play-state:paused]">
                    {col3.map((icon, i) => <div key={`c3a-${i}`}>{icon}</div>)}
                  </div>
                  {/* Duplicate Track */}
                  <div aria-hidden="true" className="flex flex-col gap-10 pb-10 items-center animate-scroll-down group-hover:[animation-play-state:paused]">
                    {col3.map((icon, i) => <div key={`c3b-${i}`}>{icon}</div>)}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Keyframe Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Scroll UP: Starts at 0, translates up by its own height (-100%) */
        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        /* Scroll DOWN: Starts shifted up by its height (-100%), translates down to 0 */
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0%); }
        }
        
        .animate-scroll-up {
          animation: scrollUp 25s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 25s linear infinite;
        }
      `}} />
    </section>
  );
}