
import React from 'react';
import IndustryDecorations from './IndustryDecorations';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-4 overflow-hidden">
      <IndustryDecorations />
      
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full mt-12 md:mt-0">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-950/70 border border-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-12 shadow-2xl backdrop-blur-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Next-Gen Support Infrastructure
        </div>
        
        <h1 className="futuristic text-5xl md:text-[8.5rem] font-black tracking-tight mb-8 leading-[0.85] text-white">
          SCALING THE<br />
          <span className="gradient-text">FINANCIAL FUTURE</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium tracking-tight">
          Human-centric support engineering for elite prop firms and fintech leaders. We bridge the gap between complex technology and customer trust.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          <button className="futuristic px-12 py-6 bg-amber-500 text-indigo-950 font-black text-sm uppercase tracking-[0.15em] hover:bg-white transition-all glow-amber rounded-xl shadow-[0_0_40px_rgba(251,191,36,0.2)]">
            Partner With Us
          </button>
          
          <div className="flex items-center gap-6 group">
            <div className="h-14 w-px bg-slate-800 group-hover:bg-amber-500 transition-colors duration-500"></div>
            <div className="text-left">
              <p className="futuristic text-2xl font-bold text-white tracking-tight">12.5M+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Users Supported</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Interactive Status Bar */}
      <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-4 hidden lg:block">
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-default">
             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
             <span>Global Node Status: Optimal</span>
          </div>
          <span>ISO 27001 Certified Environment</span>
          <span>99.9% Uptime SLA Guaranteed</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
