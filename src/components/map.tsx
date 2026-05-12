"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Strategic expansion markets calibrated to landmass centers
const deploymentNodes = [
  { id: 'us', name: 'US Region 1/2', top: '45%', left: '24%', delay: 0 },
  { id: 'africa', name: 'Africa MEA', top: '65%', left: '53%', delay: 0.2 },
  { id: 'middle-east', name: 'Middle East', top: '48%', left: '57%', delay: 0.4 },
  { id: 'india', name: 'India Subcontinent', top: '50%', left: '64%', delay: 0.6 }
];

const CrosshairNode = ({ top, left, delay }: { top: string, left: string, delay: number }) => (
  <motion.div 
    className="absolute flex items-center justify-center w-6 h-6 -translate-x-1/2 -translate-y-1/2"
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {/* Updated marker colors to Orange to pop against the white background */}
    <div className="absolute w-1.5 h-1.5 bg-[#D9480F] rounded-full" />
    <div className="absolute w-1.5 h-1.5 bg-[#D9480F] rounded-full animate-ping opacity-75" />
    <div className="absolute w-full h-[1px] bg-[#D9480F]/40" />
    <div className="absolute h-full w-[1px] bg-[#D9480F]/40" />
  </motion.div>
);

export default function GlobalDeploymentSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % deploymentNodes.length);
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  const activeNode = deploymentNodes[activeIndex];

  return (
    <section className="min-h-screen py-10 lg:py-12 w-full overflow-hidden font-sans selection:bg-[#D9480F] selection:text-white relative flex items-center bg-white">
      
      {/* --- Subtle Theme Dot Pattern (Matched to other pages) --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: 'center center',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] flex flex-col items-center relative z-10">

        {/* --- Text Content: Updated for Light Theme --- */}
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D9480F] mb-4 block bg-orange-50 px-3 py-1 rounded-sm border border-orange-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GEO EXPANSION
          </motion.span>

          <motion.h2
            className="font-tobias font-light text-4xl md:text-5xl lg:text-[4rem] text-slate-900 leading-[1.05] tracking-tight mb-6 lg:whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Global dispatch at national <span className="text-[#D9480F] italic">scale</span>.
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Eliminating downtime in high-impact markets by scaling AI-native dispatch infrastructure across India, the Middle East, and beyond.
          </motion.p>
        </motion.div>

        {/* --- Visual Map Area --- */}
        <div
          className="relative w-full max-w-[1000px] aspect-[16/9] md:aspect-[21/9] flex items-center justify-center rounded-2xl overflow-hidden mt-8"
        >

          {/* Map Layer: Inverted to show up on white background */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain opacity-20"
            style={{
              backgroundImage: "url('/map.svg')",
              // Invert flips white lines to black, keeping it subtle and clean
              filter: "invert(1)", 
              WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 95%)",
              maskImage: "radial-gradient(ellipse at center, black 50%, transparent 95%)"
            }}
          />

          {/* Permanent Deployment Markers */}
          <div className="absolute inset-0 z-20">
            {deploymentNodes.map((node) => (
              <CrosshairNode 
                key={node.id} 
                top={node.top} 
                left={node.left} 
                delay={node.delay} 
              />
            ))}

            {/* --- Tracker with Stable Spring Motion --- */}
            <motion.div
              className="absolute z-30 pointer-events-none"
              animate={{ 
                top: activeNode.top, 
                left: activeNode.left 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 20 
              }}
              style={{ x: "-50%", y: "-50%" }}
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-200 -translate-y-12">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={activeNode.id}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-[11px] font-mono font-bold text-slate-800 whitespace-nowrap"
                  >
                    {activeNode.name}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              {/* Tracker Crosshair overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                 <div className="w-full h-[1px] bg-green-500/50 absolute" />
                 <div className="h-full w-[1px] bg-green-500/50 absolute" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}