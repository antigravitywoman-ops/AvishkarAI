import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  // Synchronized with the Footer and Page ID links for consistency
  const navLinks = [
    { label: 'FSM DISPATCH', id: 'fsm-dispatch' },
    { label: 'HOW IT WORKS', id: 'how-it-works' },
    { label: 'MARKET SIZE', id: 'market' },
    { label: 'CASE STUDIES', id: 'case-studies' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="w-full h-20 flex items-center justify-between py-0 px-6 lg:px-12 bg-white sticky top-0 z-50 font-sans border-b border-slate-100">
      
      {/* Left: Logo Area - Direct link back to home */}
      <div className="relative flex items-center min-w-[200px] h-full">
        <a href="/">
          <img 
            src="/Black Logo.png" 
            alt="Avishkar AI Logo" 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-auto object-contain cursor-pointer"
          />
        </a>
      </div>

      {/* Center: Navigation Links for FSM Dispatch  */}
      <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
        {navLinks.map((link) => (
          <a 
            key={link.id} 
            href={`#${link.id}`} 
            className="text-[10px] font-mono tracking-[0.2em] text-slate-500 hover:text-[#FF6B00] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: CTA Button - Navigates to DiscoverySection (#book-call) */}
      <div className="hidden md:flex justify-end min-w-[200px]">
        <a href="#book-call" className="block">
          <button className="flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-6 py-3 text-sm font-medium shadow-sm rounded-sm">
            Book a Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer group">
        <div className="w-5 h-[2px] bg-slate-900 group-hover:bg-[#FF6B00] transition-colors"></div>
        <div className="w-5 h-[2px] bg-slate-900 group-hover:bg-[#FF6B00] transition-colors"></div>
      </button>

    </nav>
  );
}