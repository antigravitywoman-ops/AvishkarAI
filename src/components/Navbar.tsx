import React from 'react';
import Link from 'next/link'; // Standard for Next.js internal routing
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { label: 'INDUSTRIES', href: '/industries' },
    { label: 'HOW IT WORKS', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' }
  ];

  return (
    <nav className="w-full h-24 flex items-center justify-between py-0 px-6 lg:px-12 bg-white sticky top-0 z-50 font-sans border-b border-slate-100">
      
      {/* Left: Logo Area */}
      <div className="flex items-center justify-start w-[240px] lg:w-[280px] flex-shrink-0">
        <Link href="/">
          <img 
            src="/Black Logo.png" 
            alt="Avishkar AI Logo" 
            className="w-40 lg:w-48 h-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
        {navLinks.map((link) => (
          <Link 
            key={link.label} 
            href={link.href} 
            className="text-[10px] font-mono tracking-[0.2em] text-slate-500 hover:text-[#FF6B00] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: CTA Button */}
      <div className="hidden md:flex items-center justify-end w-[240px] lg:w-[280px] flex-shrink-0">
        <Link href="/#book-call" className="block w-full max-w-[160px] ml-auto">
          <button className="flex items-center justify-center gap-2 w-full bg-[#FF6B00] hover:bg-orange-700 transition-colors text-white px-6 py-3 text-sm font-medium shadow-sm rounded-sm">
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
  );
}