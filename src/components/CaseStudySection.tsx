"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudySection() {
  return (
    <section id="case-studies" className="bg-white py-12 lg:py-24 flex justify-center items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Ambient Orange Glow Effect */}
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />

          {/* Video Container */}
          <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] border border-slate-100 bg-black aspect-video">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/casestudy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Overlay Gradient for Depth */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Decoration Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF6B00] rounded-full blur-2xl opacity-50"
          />
        </motion.div>

      </div>
    </section>
  );
}