import React from 'react';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const primaryLinks = [
    { num: "1.1", label: "HOME", href: "#" },
    { num: "1.2", label: "FSM DISPATCH", href: "#fsm-dispatch" },
    { num: "1.3", label: "HOW IT WORKS", href: "#how-it-works" },
    { num: "1.4", label: "MARKET SIZE", href: "#market" },
    { num: "1.5", label: "FAQ", href: "#faq" },
  ];

  const platformLinks = [
    { num: "2.1", label: "SEO PLATFORM", href: "https://seo.avishkarai.com/" },
    { num: "2.2", label: "AI AGENTS", href: "https://agents.avishkarai.com/" },
    { num: "2.3", label: "MAIN SITE", href: "https://www.avishkarai.com/" },
  ];

  return (
    <footer className="w-full bg-white font-sans selection:bg-orange-600 selection:text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px] pb-12">
        
        {/* --- Top CTA Banners --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          
          {/* Left Banner: Book Call Navigation */}
          <a href="#book-call" className="block relative h-[300px] lg:h-[380px] bg-[#FF6B00] flex flex-col justify-center p-10 lg:p-16 overflow-hidden group cursor-pointer rounded-sm">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-medium text-white mb-8 tracking-tight">
                Secure Your <br />
                Critical Infrastructure
              </h3>
              <div className="bg-white text-[#FF6B00] px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all group-hover:gap-3 shadow-lg w-max rounded-sm">
                Book a Call <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Right Banner: Case Study Navigation */}
          <a href="#case-studies" className="block relative h-[300px] lg:h-[380px] bg-[#0D2149] flex flex-col justify-center p-10 lg:p-16 overflow-hidden group cursor-pointer rounded-sm">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Infrastructure background" 
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-[#0D2149]/60"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-medium text-white mb-8 tracking-tight">
                See FSM Dispatch <br />
                In Production
              </h3>
              <div className="bg-[#FF6B00] hover:bg-orange-700 text-white px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all group-hover:gap-3 w-max rounded-sm shadow-xl">
                View Case Studies <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>

        {/* --- Main Dark Footer Section --- */}
        <div className="bg-[#0D2149] text-white p-10 lg:p-20 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Left: Branding & Contact Info */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-10">
                {/* Logo made significantly bigger per request */}
                <img 
                  src="/Black Logo.png" 
                  alt="Avishkar AI" 
                  className="w-48 lg:w-64 h-auto object-contain brightness-0 invert mb-8" 
                />
                <p className="text-slate-300 text-base leading-relaxed max-w-sm mb-8">
                  An AI-native dispatch platform for critical infrastructure — ATMs, towers, and medical devices.
                </p>
              </div>

              {/* Contact and HQ Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono tracking-[0.2em] text-orange-400 uppercase mb-2">Operations</h4>
                  <a href="tel:9165824292" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
                    <Phone className="w-4 h-4" /> 9165824292
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-[0.2em] text-orange-400 uppercase mb-2">HQ</h4>
                  <div className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Anjaneya AI Technologies Private Limited<br />
                      9th Main Rd, 7th Sector, HSR Layout,<br />
                      Bengaluru, Karnataka 560102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Navigation and Platforms */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: Internal Links */}
              <div>
                <h4 className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase mb-8">Company</h4>
                <ul className="flex flex-col gap-6">
                  {primaryLinks.map((link) => (
                    <li key={link.num}>
                      <a href={link.href} className="group flex items-center gap-6 hover:text-orange-400 transition-colors">
                        <span className="font-mono text-[10px] text-slate-600 tracking-widest">{link.num}</span>
                        <span className="text-[12px] font-mono tracking-[0.15em]">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Platform Links */}
              <div>
                <h4 className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase mb-8">Our Platforms</h4>
                <ul className="flex flex-col gap-6">
                  {platformLinks.map((link) => (
                    <li key={link.num}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 hover:text-orange-400 transition-colors">
                        <span className="font-mono text-[10px] text-slate-600 tracking-widest">{link.num}</span>
                        <span className="text-[12px] font-mono tracking-[0.15em]">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-slate-500 text-[11px] tracking-tight">
              © 2026 Avishkar AI. 90% AI. 10% Human Oversight. 100% Accountability.
            </p>
            <p className="text-slate-500 text-[11px] tracking-tight">
              Operating in India, MEA, and Southeast Asia.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}