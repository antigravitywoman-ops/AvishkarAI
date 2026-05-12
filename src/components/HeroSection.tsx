import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-white flex flex-col font-sans selection:bg-orange-600 selection:text-white overflow-hidden">
      
      {/* --- Simulated Particle Background --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: 'center bottom',
          maskImage: 'linear-gradient(to bottom, transparent 30%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 100%)'
        }}
      />

      {/* --- Main Hero Content --- */}
      <main className="relative z-10 flex-1 flex flex-col justify-between w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 lg:pt-16 pb-8">
        
        {/* Top Text Area: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
          
          {/* Main Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-[#111827] leading-[1.1] tracking-tight">
              AI-Native Uptime Layer <br className="hidden lg:block" />
              For Critical Infrastructure
            </h1>
          </div>
          
          {/* Supporting Paragraph */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#64748B] text-sm lg:text-base leading-relaxed max-w-md font-normal">
              FSM Dispatch automates the entire uptime cycle. When an alert fires, AI triages the severity, identifies the right engineer, and tracks resolution—eliminating reactive manual coordination.
            </p>
          </div>
          
        </div>

        {/* Bottom Interactive Cards */}
        <div className="mt-auto pt-12 flex flex-col sm:flex-row justify-end gap-2 lg:gap-3 w-full">
          
          {/* Card 1: Book a Call (Orange) */}
          <a 
            href="#book-call" 
            className="group block cursor-pointer bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white w-full sm:w-[260px] h-[160px] p-5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-normal text-sm tracking-tight">Book a Call</span>
              <ArrowUpRight className="w-4 h-4 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
            </div>
          </a>

          {/* Card 2: Case Study (Dark) */}
          <a 
            href="#case-studies" 
            className="group block cursor-pointer bg-[#0F2040] hover:bg-[#162e5c] transition-colors text-white w-full sm:w-[260px] h-[160px] p-5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-normal text-sm tracking-tight">Case Study</span>
              <ArrowUpRight className="w-4 h-4 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
            </div>
          </a>

        </div>

      </main>
    </div>
  );
}