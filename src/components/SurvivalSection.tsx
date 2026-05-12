import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SurvivalSection() {
  // Y-coordinates spaced out perfectly across the 1000px viewBox
  const lineEndPoints = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    // Added id="market" to match the Navbar navigation link
    <section id="market" className="bg-white py-12 lg:py-20 font-sans selection:bg-orange-600 selection:text-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 relative items-start">

          {/* --- Custom SVG Graphic (The Sweeping Lines) --- */}
          <div 
            className="hidden lg:block absolute left-[-10%] right-[40%] top-[10%] bottom-[-15%] pointer-events-none z-0"
          >
            <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-fade-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="#FF6B00" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#FF6B00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.1" />
                </linearGradient>
                
                <linearGradient id="trace-glow-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" /> 
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                </linearGradient>

                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              <g>
                {lineEndPoints.map((y, index) => (
                  <path 
                    key={`base-${index}`}
                    d={`M 0 500 C 450 500, 600 ${y}, 1000 ${y}`} 
                    fill="none" 
                    stroke="url(#line-fade-orange)" 
                    strokeWidth="4" 
                  />
                ))}

                {lineEndPoints.map((y, index) => (
                  <path 
                    key={`pulse-${index}`}
                    d={`M 0 500 C 450 500, 600 ${y}, 1000 ${y}`} 
                    fill="none" 
                    stroke="url(#trace-glow-orange)" 
                    strokeWidth="4.5" 
                    filter="url(#glow-filter)"
                    strokeDasharray="200 2500" 
                    strokeDashoffset="2700"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="2700" 
                      to="0" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                ))}
              </g>
            </svg>
          </div>

          {/* --- Left Column (Text) --- */}
          <div className="lg:col-span-5 flex flex-col justify-start relative z-20 py-2 bg-white/70 backdrop-blur-[2px] lg:bg-transparent lg:mt-8">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-slate-900 leading-[1.15] tracking-tight mb-5">
              AI-Native Uptime For<br />
              Critical Infrastructure
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-[380px]">
              FSM Dispatch handles the entire uptime cycle—from alert ingestion to resolution—with 90% autonomous decision-making.
            </p>
          </div>

          {/* --- Right Column (Numbers) --- */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 relative z-20 lg:pl-10 py-2 bg-white">
            
            {/* Item 1 */}
            <div className="flex flex-col">
              <span className="text-[#FF6B00] text-2xl lg:text-3xl font-medium tracking-tight mb-2">
                .01
              </span>
              <h3 className="text-xl lg:text-2xl font-medium text-slate-900 mb-2 tracking-tight">
                Autonomous AI Dispatching
              </h3>
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-md">
                AI triages alert severity, matches the right engineer, and sends jobs with full operational context to ensure rapid response.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col">
              <span className="text-[#FF6B00] text-2xl lg:text-3xl font-medium tracking-tight mb-2">
                .02
              </span>
              <h3 className="text-xl lg:text-2xl font-medium text-slate-900 mb-2 tracking-tight">
                Real-time SLA Tracking
              </h3>
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-md">
                The platform tracks resolution progress and logs data automatically, eliminating manual follow-ups and human chasing.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col">
              <span className="text-[#FF6B00] text-2xl lg:text-3xl font-medium tracking-tight mb-2">
                .03
              </span>
              <h3 className="text-xl lg:text-2xl font-medium text-slate-900 mb-2 tracking-tight">
                Asset-Driven Scaling
              </h3>
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-md">
                Increase your operational output as your network grows without adding headcount or new coordination layers.
              </p>
            </div>

            {/* CTA Button linked to the Case Study Section */}
            <a href="#case-studies">
              <button className="mt-2 bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-5 py-2.5 font-medium flex items-center justify-center gap-2 w-max text-sm shadow-sm rounded-sm">
                View Case Study <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}