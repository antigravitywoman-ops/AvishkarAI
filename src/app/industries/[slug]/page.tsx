"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import AgentCard from '@/components/AgentCard';
import { MeshGradient } from "@paper-design/shaders-react";

const industryData: Record<string, any> = {
  'recruitment-staffing': {
    name: "Recruitment & Staffing",
    title: <>Recruitment & <br /> Staffing</>,
    description: "Automate candidate screening and engagement at scale with the human touch that top talent expects from your brand.",
    agents: [
      {
        name: "Talent Recruitment Assistant",
        complexity: 'Medium',
        responsibilities: ["Screen resumes against job requirements", "Schedule candidate interviews", "Send automated follow-up emails", "Generate candidate ranking reports"],
        prerequisites: ["Parsed Resumes inside CRM/ATS", "Clear Job Descriptions", "Standardized selection criteria"],
        inScope: ["Resume scoring", "Interview coordination", "Candidate templates", "Skills matching"],
        outOfScope: ["Background verification", "Salary negotiations", "Final hiring decisions", "Onboarding"]
      },
      {
        name: "Candidate Engagement Agent",
        complexity: 'Low',
        responsibilities: ["Send personalized outreach", "Answer FAQ about culture/benefits", "Collect candidate info", "Maintain relationship database"],
        prerequisites: ["Candidate contact database", "Benefits documentation", "Standardized job specs"],
        inScope: ["Email/SMS outreach", "FAQ automation", "Data collection", "Engagement tracking"],
        outOfScope: ["Direct phone calls", "Contract negotiations", "Technical interviews", "Performance reviews"]
      }
    ]
  },
  'financial-services': {
    name: "Financial Services",
    title: <>Financial <br /> Services</>,
    description: "Accelerate customer acquisition and onboarding, and enhance compliance workflows maintaining trust and security.",
    agents: [
      {
        name: "Customer Onboarding Agent",
        complexity: 'Medium',
        responsibilities: ["Guide customers through KYC verification process", "Collect and validate required documents", "Perform initial risk assessment", "Activate new accounts upon verification"],
        prerequisites: ["KYC templates", "Risk matrix", "Activation workflow"],
        inScope: ["Document validation", "KYC management", "Risk scoring", "Setup triggers"],
        outOfScope: ["Manual review", "Regulatory approval", "Credit decisions", "Compliance sign-off"]
      },
      {
        name: "Compliance Monitoring Agent",
        complexity: 'High',
        responsibilities: ["Monitor transactions for suspicious patterns", "Generate regulatory compliance reports", "Track policy acknowledgment", "Alert on deadline violations"],
        prerequisites: ["Transaction data feed integration", "Compliance policy documentation", "Regulatory reporting templates"],
        inScope: ["Real-time transaction monitoring", "Report generation", "Deadline tracking", "Alert distribution"],
        outOfScope: ["Legal interpretation", "Regulatory filing", "Investigation management", "Penalty assessments"]
      }
    ]
  },
  'healthcare-life-sciences': {
    name: "Healthcare & Life Sciences",
    title: <>Healthcare & <br /> Life Sciences</>,
    description: "Accelerate patient enrollment, streamline administrative processes, and enhance care coordination under HIPAA compliance.",
    agents: [
      {
        name: "Patient Enrollment Agent",
        complexity: 'Medium',
        responsibilities: ["Collect patient intake information", "Verify insurance eligibility", "Schedule initial appointments", "Distribute intake forms"],
        prerequisites: ["Patient intake forms", "Insurance verification API", "Appointment scheduling system"],
        inScope: ["Form collection and validation", "Insurance checks", "Appointment booking", "Welcome communications"],
        outOfScope: ["Medical diagnosis", "Treatment planning", "Insurance disputes", "Clinical decisions"]
      }
    ]
  },
  'real-estate': {
    name: "Real Estate",
    title: <>Real <br /> Estate</>,
    description: "Reduce customer acquisition costs and accelerate the sales cycle across residential and commercial properties.",
    agents: [
      {
        name: "Lead Qualification Agent",
        complexity: 'Low',
        responsibilities: ["Score leads based on engagement", "Route qualified leads to agents", "Schedule property viewings", "Send property recommendations"],
        prerequisites: ["Lead scoring criteria", "Property database", "Agent assignment rules"],
        inScope: ["Lead scoring automation", "Basic routing logic", "Viewing scheduling", "Property matching"],
        outOfScope: ["Price negotiations", "Contract drafting", "Site visits", "Final sales decisions"]
      }
    ]
  },
  'retail-ecommerce': {
    name: "Retail & E-commerce",
    title: <>Retail & <br /> E-commerce</>,
    description: "Transform customer experiences with intelligent personalization and automated support across all digital touchpoints.",
    agents: [
      {
        name: "Customer Support Agent",
        complexity: 'Low',
        responsibilities: ["Answer product-related questions", "Process return and refund requests", "Track order status", "Escalate complex issues"],
        prerequisites: ["Product database", "Order management system", "Return policy documentation"],
        inScope: ["FAQ automation", "Order tracking", "Return processing", "Basic troubleshooting"],
        outOfScope: ["Complex complaint resolution", "Legal disputes", "Damage assessments", "Compensation decisions"]
      }
    ]
  },
  'education-edtech': {
    name: "Education & EdTech",
    title: <>Education & <br /> EdTech</>,
    description: "Personalize learning journeys, automate administrative tasks, and improve student outcomes with AI-powered education tools.",
    agents: [
      {
        name: "Enrollment Automation Agent",
        complexity: 'Medium',
        responsibilities: ["Process applications", "Verify credentials", "Schedule orientation", "Track funnel"],
        prerequisites: ["Application forms", "Verification system", "SIS integration"],
        inScope: ["Processing", "Verification", "Scheduling", "Tracking"],
        outOfScope: ["Academic decisions", "Credit evaluation", "Financial aid", "Admissions"]
      }
    ]
  },
  'logistics-supply-chain': {
    name: "Logistics & Supply Chain",
    title: <>Logistics & <br /> Supply Chain</>,
    description: "Optimize delivery routes, automate inventory management, and gain real-time visibility across your entire supply chain.",
    agents: [
      {
        name: "Shipment Tracking Agent",
        complexity: 'Low',
        responsibilities: ["Monitor carriers", "Proactive updates", "Exception queries", "Performance reports"],
        prerequisites: ["Carrier APIs", "Tracking DB", "Contact info"],
        inScope: ["Status monitoring", "Updates", "Query handling", "Reports"],
        outOfScope: ["Negotiations", "Exception resolution", "Damage claims", "Contracts"]
      }
    ]
  },
  'legal-services': {
    name: "Legal Services",
    title: <>Legal <br /> Services</>,
    description: "Streamline contract review, automate legal research, and enhance client communication while maintaining compliance.",
    agents: [
      {
        name: "Contract Review Agent",
        complexity: 'Medium',
        responsibilities: ["Extract key clauses", "Identify non-standard terms", "Flag risk", "Review summaries"],
        prerequisites: ["Contract template library", "Risk definitions", "Extraction rules"],
        inScope: ["Clause extraction", "Term ID", "Risk flagging", "Summaries"],
        outOfScope: ["Legal advice", "Contract negotiation", "Final approval", "Compliance determination"]
      }
    ]
  },
  'manufacturing': {
    name: "Manufacturing",
    title: <>Manufacturing</>, // Single word, no break needed
    description: "Automate quality control, optimize production scheduling, and predict maintenance needs to reduce downtime.",
    agents: [
      {
        name: "Quality Documentation Agent",
        complexity: 'Medium',
        responsibilities: ["Report generation", "Track quality metrics", "Flag deviations", "Maintain compliance docs"],
        prerequisites: ["Inspection feeds", "Spec DB", "Compliance library"],
        inScope: ["Report generation", "Metrics tracking", "Deviation flagging", "Documentation maintenance"],
        outOfScope: ["Quality decisions", "Rejection approval", "Process changes", "Compliance sign-off"]
      }
    ]
  }
};

export default function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const industry = industryData[slug];

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

  if (!industry) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-medium mb-4 tracking-tighter">Module Not Found</h1>
        <a href="/industries" className="text-[#FF6B00] hover:underline font-mono text-xs tracking-widest uppercase">Return to Industries</a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-600 selection:text-white relative flex flex-col">
      
      {/* --- Hero Section with Shader Background --- */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-black text-left">
        
        {/* Smooth Mesh Shader Background */}
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
              {/* Dark veil overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </>
          )}
        </div>

        {/* --- Content Area --- */}
        <div className="relative z-20 flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
            
            {/* Left Side: Main Headline */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-white drop-shadow-2xl">
                {industry.title || industry.name}
              </h1>
            </div>
            
            {/* Right Side: Paragraph */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <p className="text-[#FF6B00] font-medium text-base lg:text-lg leading-relaxed drop-shadow-md">
                {industry.description}
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

      {/* --- Lower Content Area (White) --- */}
      <div className="relative flex-1 bg-white border-t border-slate-100">
        
        {/* Subtle Particle Background restricted to the agent cards area */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            backgroundPosition: 'center top',
          }}
        />

        <section className="relative z-10 py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-[1440px] flex flex-col gap-6">
            {industry.agents?.filter(Boolean).map((agent: any, index: number) => (
              <AgentCard key={agent.name || index} agent={agent} />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}