'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function AgentCard({ agent }: { agent: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'Prerequisites' | 'In Scope' | 'Out of Scope'>('In Scope');

  if (!agent) return null;

  // Complexity colors updated for light background contrast
  const complexityColors = {
    High: 'bg-red-50 text-red-700 border-red-200',
    Medium: 'bg-orange-50 text-orange-700 border-orange-200',
    Low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  const dataMap = {
    'Prerequisites': agent.prerequisites || [],
    'In Scope': agent.inScope || [],
    'Out of Scope': agent.outOfScope || []
  };

  const currentList = dataMap[activeTab];

  return (
    // Main container updated for semi-white transparent (glassmorphism) look
    <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-lg">
      {/* Header */}
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Text color changed to dark slate */}
          <h3 className="text-2xl font-medium text-slate-950">{agent.name}</h3>
          <span className={`px-3 py-1 rounded-full text-[10px] font-mono border ${complexityColors[agent.complexity as keyof typeof complexityColors] || complexityColors.Low}`}>
            {agent.complexity} Complexity
          </span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          // Text color changed for light background
          className="text-slate-600 hover:text-slate-950 flex items-center gap-2 text-sm transition-colors font-mono tracking-tighter"
        >
          {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Preview Responsibilities */}
      <div className="px-8 pb-8">
        {/* Label color changed */}
        <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Responsibilities</h4>
        <ul className="space-y-3">
          {(agent.responsibilities || []).slice(0, isExpanded ? undefined : 2).map((item: string, i: number) => (
            // Text color changed to dark slate
            <li key={i} className="text-slate-800 text-[0.95rem] leading-snug flex items-start gap-3">
              {/* Bullet style updated for light background */}
              <span className="text-cyan-600 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-100 flex-shrink-0 border border-cyan-400" /> 
              {item}
            </li>
          ))}
          {!isExpanded && agent.responsibilities?.length > 2 && (
            <li className="text-slate-500 text-xs font-mono mt-2 ml-4">
              + {agent.responsibilities.length - 2} MORE RESPONSIBILITIES
            </li>
          )}
        </ul>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        // Inner background changed to light semi-transparent
        <div className="px-8 pb-10 pt-4 border-t border-slate-100 bg-slate-50/50">
          {/* Tab border color changed */}
          <div className="flex gap-8 mb-8 border-b border-slate-100">
            {['Prerequisites', 'In Scope', 'Out of Scope'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                // Active/Inactive text colors updated
                className={`pb-4 text-xs font-mono tracking-widest transition-all relative ${
                  activeTab === tab ? 'text-slate-950' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.toUpperCase()}
                {/* Underline color updated */}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />}
              </button>
            ))}
          </div>

          <ul className="space-y-4 mb-10 min-h-[120px]">
            {currentList.map((item: string, i: number) => (
              // List text color changed
              <li key={i} className="text-slate-800 text-[0.95rem] flex items-start gap-3">
                {/* Bullet color darkened */}
                <span className="text-cyan-600 mt-1">•</span> {item}
              </li>
            ))}
          </ul>

          
        </div>
      )}
    </div>
  );
}