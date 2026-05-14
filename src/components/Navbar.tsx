import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { label: 'INDUSTRIES', href: '/industries' },
    { label: 'HOW IT WORKS', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' }
  ];

  return (
    // Outer wrapper keeps it fixed to the top with a slight gap (top-4)
    <div className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-8 flex justify-center w-full pointer-events-none">
      
      {/* Inner Nav: 
        bg-white/70 + backdrop-blur-md creates the frosted glass effect.
        rounded-2xl gives it the soft edges.
        pointer-events-auto ensures buttons remain clickable inside the wrapper.
      */}
      <nav className="pointer-events-auto w-full max-w-[1440px] h-20 flex items-center justify-between px-6 lg:px-10 bg-white/70 backdrop-blur-md shadow-lg border border-white/20 rounded-2xl font-sans transition-all duration-300">
        
        {/* Left: Logo Area */}
        <div className="flex items-center justify-start w-[200px] lg:w-[240px] flex-shrink-0">
          <Link href="/">
            <img 
              src="/Black Logo.png" 
              alt="Avishkar AI Logo" 
              className="w-36 lg:w-44 h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-12 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-[10px] font-mono tracking-[0.2em] text-slate-800 hover:text-[#FF6B00] font-bold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center justify-end w-[200px] lg:w-[240px] flex-shrink-0">
          <Link href="/#book-call" className="block w-full max-w-[160px] ml-auto">
            <button className="flex items-center justify-center gap-2 w-full bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-5 py-2.5 text-sm font-medium shadow-sm rounded-lg">
              Book a Call
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer group ml-auto">
          <div className="w-5 h-[2px] bg-slate-900 group-hover:bg-[#FF6B00] transition-colors"></div>
          <div className="w-5 h-[2px] bg-slate-900 group-hover:bg-[#FF6B00] transition-colors"></div>
        </button>

      </nav>
    </div>
  );
}