"use client";

import React from 'react';

// Your specific logo files
const LOGOS = [
  "1.webp",
  "2.jpeg",
  "3.webp",
  "4.png",
  "5.webp",
  "6.png",
  "7.jpeg",
  "8.webp",
  "9.jpeg",
  "10.png",
];

export default function LogoTicker() {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden font-sans border-b border-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <p className="text-center text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 mb-12">
          Built by engineers from the world's leading tech organizations
        </p>

        {/* Marquee Container with faded edges */}
        <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
          
          {/* --- TRACK 1 --- */}
          {/* gap-16 and pr-16 ensure perfect spacing between images and between the loops */}
          <div className="flex w-max flex-shrink-0 items-center animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 group-hover:[animation-play-state:paused]">
            {LOGOS.map((logo, index) => (
              <img 
                key={`track1-${index}`}
                src={`/${logo}`} 
                alt={`Partner Logo ${index}`} 
                /* mix-blend-multiply removes white backgrounds from JPEGs */
                className="h-8 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply cursor-pointer"
              />
            ))}
          </div>

          {/* --- TRACK 2 (Duplicate for seamless loop) --- */}
          <div aria-hidden="true" className="flex w-max flex-shrink-0 items-center animate-marquee gap-16 md:gap-24 pr-16 md:pr-24 group-hover:[animation-play-state:paused]">
            {LOGOS.map((logo, index) => (
              <img 
                key={`track2-${index}`}
                src={`/${logo}`} 
                alt={`Partner Logo ${index}`} 
                className="h-8 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply cursor-pointer"
              />
            ))}
          </div>

        </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}