"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    question: "What is FSM Dispatch by Avishkar AI?",
    answer: "FSM Dispatch is an AI-native uptime layer specifically built for critical infrastructure like ATMs, telecom towers, and HVAC systems. It automates the entire triage and dispatch lifecycle to prevent catastrophic downtime."
  },
  {
    question: "How much of the dispatching is truly autonomous?",
    answer: "Our platform operates on a 90% AI and 10% human oversight model. 90% of all dispatch decisions—including triage, severity matching, and engineer assignment—are handled autonomously by the system."
  },
  {
    question: "Is this solution battle-tested in the field?",
    answer: "Yes. We are currently live in production managing 15,000+ ATMs and 68,000+ telecom towers across India and South Asia for top-tier providers. This is a revenue-generating production deployment, not a pilot."
  },
  {
    question: "Can FSM Dispatch integrate with our existing NOC or SCADA?",
    answer: "Absolutely. FSM Dispatch is infrastructure-native and integrates anywhere, working seamlessly with SCADA, BMS, NMS, and proprietary enterprise NOC tools without requiring software migrations."
  },
  {
    question: "How does the pricing model work?",
    answer: "We use an outcome-based, per-asset per-month subscription model. This aligns our success directly with yours, as our revenue grows based on the number of assets we keep online."
  },
  {
    question: "What specific asset categories do you support?",
    answer: "While we specialize in ATMs and Telecom Towers, the platform is built for any high-value critical asset, including industrial HVAC, medical equipment, and cinema infrastructure."
  },
  {
    question: "What happens when a critical alert fires?",
    answer: "The AI instantly ingests the alert, triages the severity, matches it to the right engineer based on proximity and skill, dispatches the job with full context, and tracks the resolution through to closure."
  },
  {
    question: "How do you guarantee accountability?",
    answer: "Accountability is baked into our model. We align our performance with your business goals by requiring assets to maintain a 95%+ uptime SLA to ensure operational success."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Added id="faq" to match the Navbar navigation link
    <section id="faq" className="bg-white py-20 lg:py-32 font-sans selection:bg-orange-600 selection:text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-500 text-lg">
            Answering critical infrastructure teams exploring AI-native dispatch automation.
          </p>
        </div>

        {/* --- FAQ Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-slate-100">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-slate-100 p-6 md:p-8 transition-colors duration-300 ${
                openIndex === index ? 'bg-orange-50/30' : 'hover:bg-slate-50/30'
              } ${index % 2 === 0 ? 'lg:border-r' : ''}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors ${
                  openIndex === index ? 'text-[#FF6B00]' : 'text-slate-900 group-hover:text-[#FF6B00]'
                }`}>
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#FF6B00]" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom CTA linked to the Discovery/Booking Section --- */}
        <div className="mt-16 flex justify-center">
          <a href="#book-call">
            <button className="bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-8 py-3.5 font-medium flex items-center justify-center gap-2 text-sm rounded-sm shadow-sm">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}