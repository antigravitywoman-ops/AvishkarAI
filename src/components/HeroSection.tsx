import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-black flex flex-col font-sans selection:bg-orange-600 selection:text-white overflow-hidden min-h-[80vh] lg:min-h-screen">
      
      {/* --- Pure Video Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- Main Hero Content --- */}
      <main className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 lg:pt-40 pb-16 lg:pb-24 flex-1">
        
        {/* Top Text Area: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          
          {/* Main Headline - Size reduced */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              AI-Native Uptime Layer <br className="hidden lg:block" />
              For Critical <><br /></>Infrastructure
            </h1>
          </div>
          
          {/* Supporting Paragraph - Color changed to Brand Orange */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[#FF6B00] text-base lg:text-[1.1rem] leading-relaxed max-w-md font-medium drop-shadow-md">
              FSM Dispatch automates the entire uptime cycle. When an alert fires, AI triages the severity, identifies the right engineer, and tracks resolution—eliminating reactive manual coordination.
            </p>
          </div>
          
        </div>

        {/* Bottom Interactive Cards - Reduced Size */}
        <div className="mt-auto pt-20 lg:pt-32 flex flex-col sm:flex-row justify-end gap-3 lg:gap-4 w-full">
          
          {/* Card 1: Book a Call (Orange) */}
          <a 
            href="#book-call" 
            className="group block cursor-pointer bg-[#FF6B00] hover:bg-orange-700 transition-all text-white w-full sm:w-[230px] h-[110px] p-5 flex flex-col justify-between relative overflow-hidden rounded-sm shadow-2xl border border-white/10"
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-medium text-sm tracking-tight">Book a Call</span>
              <ArrowUpRight className="w-4 h-4 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
            </div>
            <p className="text-white/80 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Schedule a 1:1 strategy session with our automation experts.
            </p>
          </a>

          {/* Card 2: Case Study (Dark Navy) */}
          <a 
            href="/case%20study.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block cursor-pointer bg-[#0F2040] hover:bg-[#162e5c] transition-all text-white w-full sm:w-[230px] h-[110px] p-5 flex flex-col justify-between relative overflow-hidden rounded-sm shadow-2xl border border-white/10"
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-medium text-sm tracking-tight">View Case Study</span>
              <ArrowUpRight className="w-4 h-4 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
            </div>
            <p className="text-white/70 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              See how we achieved 90% autonomous dispatching.
            </p>
          </a>

        </div>

      </main>
    </div>
  );
}