
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#strategy" className="hover:text-amber-400 transition-colors">AI_Benchmark</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">Node_Health</a>
          <a href="#contact" className="bg-amber-500 text-indigo-950 px-8 py-3.5 rounded-xl hover:bg-white transition-all font-black glow-amber tracking-[0.1em]">
            Access_Portal
          </a>
        </nav>

        <button className="md:hidden p-3 text-slate-400 hover:text-white transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
