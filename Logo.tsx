
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-14'
  };

  return (
    <div className={`flex items-center gap-3 ${className} group cursor-pointer`}>
      <div className={`${sizes[size]} relative aspect-square bg-indigo-950 border border-amber-500/20 rounded-xl flex items-center justify-center overflow-hidden shadow-inner`}>
        {/* Abstract Chart Bar Logo - Approachable Colors */}
        <svg viewBox="0 0 40 40" className="w-full h-full p-2.5">
          <rect x="8" y="22" width="5" height="10" fill="#fbbf24" rx="1.5" />
          <rect x="17.5" y="12" width="5" height="20" fill="#fbbf24" rx="1.5" className="group-hover:translate-y-[-3px] transition-transform duration-700" />
          <rect x="27" y="18" width="5" height="14" fill="#34d399" rx="1.5" />
          {/* Connecting Trend Line */}
          <path d="M8 27 L17.5 17 L27 23" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
      </div>
      <div className="flex flex-col">
        <span className={`futuristic font-bold tracking-tight leading-none ${size === 'lg' ? 'text-4xl' : 'text-2xl'}`}>
          <span className="text-white">CX</span><span className="text-amber-400">B</span>
        </span>
        <span className="text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase mt-0.5">Global Infrastructure</span>
      </div>
    </div>
  );
};

export default Logo;
