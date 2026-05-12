import React from 'react';

// Custom blocky SVGs to match the reference design perfectly
const Icons = {
  ATM: () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="24" height="4" fill="currentColor" />
      <rect x="4" y="12" width="6" height="16" fill="currentColor" />
      <rect x="22" y="12" width="6" height="16" fill="currentColor" />
      <rect x="13" y="12" width="6" height="6" fill="currentColor" />
    </svg>
  ),
  Telecom: () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="4" width="4" height="24" fill="currentColor" />
      <rect x="10" y="10" width="12" height="2" fill="currentColor" />
      <rect x="6" y="18" width="20" height="2" fill="currentColor" />
    </svg>
  ),
  HVAC: () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="11" height="11" fill="currentColor" />
      <rect x="17" y="17" width="11" height="11" fill="currentColor" />
      <rect x="4" y="17" width="11" height="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="17" y="4" width="11" height="11" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  Industrial: () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="22" width="6" height="6" fill="currentColor" />
      <rect x="11" y="15" width="6" height="13" fill="currentColor" />
      <rect x="18" y="8" width="6" height="20" fill="currentColor" />
    </svg>
  ),
};

export default function DeploymentSection() {
  const deploymentAreas = [
    {
      title: "ATM Networks",
      description: "Automated alert triage and engineer dispatch for 15,000+ live ATMs. Prevent invisible downtime from becoming catastrophic with real-time severity matching.",
      Icon: Icons.ATM
    },
    {
      title: "Telecom Towers",
      description: "Powering 68,000+ towers for top-tier providers. AI ingests monitoring alerts (SCADA/NOC) to identify the right engineer and track resolution with zero human chasing.",
      Icon: Icons.Telecom
    },
    {
      title: "HVAC & BMS",
      description: "Smart monitoring for high-value climate systems. Filter out noise from hundreds of daily alerts to focus on critical temperature and power failures immediately.",
      Icon: Icons.HVAC
    },
    {
      title: "Medical & Industrial",
      description: "The AI-native uptime layer for life-critical equipment. 90% autonomous dispatching decisions ensures 100% accountability across high-stakes industrial assets.",
      Icon: Icons.Industrial
    }
  ];

  return (
    <section className="bg-[#FF6B00] py-16 lg:py-24 font-sans text-white selection:bg-white selection:text-[#FF6B00]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        
        {/* --- Header Area --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight mb-5 leading-tight">
            Infrastructure-Native Deployment
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            FSM Dispatch is live in production today, securing critical infrastructure uptime across multiple high-growth geographies and asset categories.
          </p>
        </div>

        {/* --- 4-Column Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {deploymentAreas.map((area, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Icon container with scaling animation on hover */}
              <div className="text-white mb-6 transform transition-transform duration-500 ease-out group-hover:scale-[1.4] origin-left">
                <area.Icon />
              </div>
              
              <h3 className="text-xl md:text-2xl font-medium mb-3 tracking-tight">
                {area.title}
              </h3>
              <p className="text-white/80 text-[0.95rem] leading-[1.65]">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Bottom Border Button --- */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <button className="border border-white/40 text-white text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-white hover:text-[#FF6B00] transition-colors rounded-sm">
            ...AND CATEGORY EXPANSION INTO CINEMA & POWER
          </button>
        </div>

      </div>
    </section>
  );
}