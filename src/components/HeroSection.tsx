"use client";

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MeshGradient } from "@paper-design/shaders-react";

export default function HeroSection() {
  // State to track screen dimensions for the shader
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Custom Avishkar AI color palette for the mesh shader
  const meshColors = ["#0D2149", "#112038", "#FF6B00", "#182a4d", "#ff9d5c", "#020617"];

  return (
    <div className="relative bg-black flex flex-col font-sans selection:bg-orange-600 selection:text-white overflow-hidden min-h-[80vh] lg:min-h-screen">
      
      {/* --- Smooth Mesh Shader Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={meshColors}
              distortion={1.2} 
              swirl={0.5}
              grainMixer={0}
              grainOverlay={0}
              speed={0.4}
              offsetX={0}
            />
            {/* Dark veil overlay to ensure the white/orange text pops perfectly */}
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
      </div>

      {/* --- Main Hero Content --- */}
      <main className="relative z-10 flex flex-col justify-center w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32 flex-1">
        
        {/* Top Text Area: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 w-full items-start">
          
          {/* Main Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              AI-Native Uptime Layer <br className="hidden lg:block" />
              For Critical <br />Infrastructure
            </h1>
          </div>
          
          {/* Supporting Paragraph - Brand Orange */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-1">
            <p className="text-[#FF6B00] text-base lg:text-[1.1rem] leading-relaxed max-w-md font-medium drop-shadow-md">
              FSM Dispatch automates the entire uptime cycle. When an alert fires, AI triages the severity, identifies the right engineer, and tracks resolution—eliminating reactive manual coordination.
            </p>
          </div>
          
        </div>

        {/* Bottom Row: Text on Left, Interactive Cards on Right */}
        <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 w-full">
          
          {/* The Moved Paragraph */}
          <div className="max-w-md lg:pb-3">
            <p className="text-white/80 text-sm md:text-base leading-relaxed drop-shadow-md">
              Powering 15,000+ ATMs and 68,000+ telecom towers globally. We bring precision and autonomous decision-making to your critical field operations.
            </p>
          </div>
          
          {/* The Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto shrink-0">
            
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
        </div>

      </main>
    </div>
  );
}