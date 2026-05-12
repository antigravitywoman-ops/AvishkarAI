import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

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
  return (
    <main className="flex min-h-screen flex-col w-full bg-white font-sans selection:bg-orange-600 selection:text-white">
      
      {/* --- Hero Section with Video Background --- */}
      <section className="relative w-full min-h-[50vh] flex flex-col pt-28 lg:pt-40 pb-24 lg:pb-32 overflow-hidden bg-black">
        
        {/* Pure Video Background */}
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
          
          {/* Gradient overlay to blend the video smoothly into the white section below */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        {/* --- Content Area matched to Home Page Grid --- */}
        <div className="relative z-20 flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
            
            {/* Left Side: Main Headline */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                AI agents built for<><br /></> growth and <br className="hidden lg:block" />
                industry-specific <><br /></>automation.
              </h1>
            </div>
            
            {/* Right Side: Supporting Paragraph */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <p className="text-[#FF6B00] text-base lg:text-[1.1rem] leading-relaxed font-medium drop-shadow-md">
                From recruitment and healthcare to legal services and manufacturing — <br className="hidden lg:block" />
                AvishkarAI delivers custom agents tailored to your specific industry vertical.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Industry Grid Section --- */}
      <section className="py-20 lg:py-32 bg-white relative z-10">
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