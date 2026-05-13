"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { MeshGradient } from "@paper-design/shaders-react";

type Industry = {
  name: string;
  description: string;
};

const industries: Industry[] = [
  {
    name: "Recruitment & Staffing",
    description: "From resume screening to candidate engagement — AI agents that handle the repetitive work so your recruiters can focus on building relationships and making better hiring decisions faster.",
  },
  {
    name: "Financial Services",
    description: "Streamline customer onboarding, automate compliance checks, and accelerate loan processing. AI agents that work within regulatory frameworks while reducing operational costs by up to 60%.",
  },
  {
    name: "Healthcare & Life Sciences",
    description: "HIPAA-compliant AI agents that handle patient intake, appointment scheduling, and insurance verification. Free up your clinical staff to focus on what matters most — patient care.",
  },
  {
    name: "Real Estate",
    description: "AI-powered lead qualification, property matching, and appointment scheduling that operates 24/7. Convert more leads while reducing your cost per acquisition significantly.",
  },
  {
    name: "Retail & E-commerce",
    description: "From abandoned cart recovery to personalized product recommendations — AI agents that understand customer behavior and deliver shopping experiences that convert browsers into buyers.",
  },
  {
    name: "Education & EdTech",
    description: "Intelligent student onboarding, automated enrollment processing, and 24/7 academic support. AI agents that help educational institutions scale without compromising student experience.",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Real-time shipment tracking, automated inventory alerts, and predictive delivery optimization. AI agents that give you complete visibility and control across your entire supply chain.",
  },
  {
    name: "Legal Services",
    description: "Contract analysis, case research, and client intake automation. AI agents built for legal workflows that help law firms handle more cases with greater accuracy and less overhead.",
  },
  {
    name: "Manufacturing",
    description: "Quality control automation, predictive maintenance scheduling, and production optimization. AI agents that reduce downtime and help manufacturers operate more efficiently.",
  }
];

export default function IndustryPage() {
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

  const meshColors = ["#0D2149", "#112038", "#FF6B00", "#182a4d", "#ff9d5c", "#020617"];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white font-sans selection:bg-orange-600 selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-black">
        
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
              {/* Dark veil to keep text readable against the shader */}
              <div className="absolute inset-0 bg-black/50" />
            </>
          )}
        </div>

        {/* --- Content Area --- */}
        <div className="relative z-20 flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
            
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                AI agents built for<><br /></> growth and <br className="hidden lg:block" />
                industry-specific <><br /></>automation.
              </h1>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[#FF6B00] text-base lg:text-[1.1rem] leading-relaxed font-medium drop-shadow-md">
                From recruitment and healthcare to legal services and manufacturing — <br className="hidden lg:block" />
                AvishkarAI delivers custom agents tailored to your specific industry vertical.
              </p>
            </div>

          </div>

          {/* --- Bottom Interactive Cards --- */}
          <div className="mt-auto pt-20 lg:pt-32 flex flex-col sm:flex-row justify-end gap-3 lg:gap-4 w-full">
            
            {/* Card 1: Book a Call (Orange) */}
            <a 
              href="/#book-call" 
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
      </section>

      {/* --- Industry Grid Section --- */}
      <section className="py-20 lg:py-32 bg-white relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <IndustryBlock key={industry.name} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function IndustryBlock({ industry }: { industry: Industry }) {
  const slugMap: Record<string, string> = {
    "Recruitment & Staffing": "recruitment-staffing",
    "Financial Services": "financial-services",
    "Healthcare & Life Sciences": "healthcare-life-sciences",
    "Real Estate": "real-estate",
    "Retail & E-commerce": "retail-ecommerce",
    "Education & EdTech": "education-edtech",
    "Logistics & Supply Chain": "logistics-supply-chain",
    "Legal Services": "legal-services",
    "Manufacturing": "manufacturing"
  };

  return (
    <Link href={`/industries/${slugMap[industry.name]}`} className="group block h-full">
      <article className="h-full bg-[#f8fafc] border border-slate-200 p-8 md:p-10 flex flex-col rounded-sm hover:border-[#FF6B00] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#FF6B00] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

        <div className="flex gap-1.5 mb-8">
          <div className="w-2 h-2 bg-[#FF6B00]"></div>
          <div className="w-2 h-2 bg-slate-300 group-hover:bg-[#FF6B00] transition-colors duration-300"></div>
          <div className="w-2 h-2 bg-slate-300 group-hover:bg-[#FF6B00] transition-colors duration-300 delay-75"></div>
        </div>

        <h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-4 group-hover:text-[#0D2149] transition-colors">
          {industry.name}
        </h3>
        
        <p className="text-slate-500 text-[0.95rem] leading-relaxed flex-1">
          {industry.description}
        </p>
        
        <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-orange-100 transition-colors">
          <span className="inline-flex items-center gap-2 text-[#FF6B00] text-sm font-medium group-hover:gap-3 transition-all">
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}