"use client";

import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function DiscoverySection() {
  useEffect(() => {
    (async function () {
      // 1. Get the API with only the namespace to satisfy TypeScript
      const cal = await getCalApi({ namespace: "default" });
      
      // 2. Initialize the custom origin separately
      // This matches your cal.id snippet: Cal("init", "default", {origin: "https://cal.id"})
      cal("init", "default", { origin: "https://cal.id" });
      
      // 3. Apply the brand orange theme
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF6B00" },
          dark: { "cal-brand": "#fafafa" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section id="book-call" className="bg-white py-16 lg:py-24 font-sans selection:bg-orange-600 selection:text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1000px]">
        
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium text-slate-900 leading-[1.1] tracking-tight mb-5">
            Audit your critical infrastructure <br className="hidden md:block" />
            uptime with Avishkar AI
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discuss how FSM Dispatch can automate triage and assignment for your network, achieving 100% accountability with 90% autonomous decision-making.
          </p>
        </div>

        <div className="w-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex justify-center">
          <Cal 
            namespace="default"
            calLink="arpitsharmawritingsessions/seoauditavishkar"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>

      </div>
    </section>
  );
}