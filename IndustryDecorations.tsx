
import React from 'react';

const IndustryDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Bull Icon - Approachable Mint/Amber transition */}
      <div className="absolute top-[15%] left-[5%] animate-market" style={{ animationDelay: '0s' }}>
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="url(#bull-gradient)" strokeWidth="0.3" className="opacity-20">
          <defs>
            <linearGradient id="bull-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path d="M16 3l1 2s3.5-1.5 4 0-1 4-1 4l2 1s1.5 3 0 4-4 0-4 0l-1 2s-1.5 1.5-3 0-2-3-2-3l-2 1s-1.5 1-2 0 .5-3.5 .5-3.5L4 7S2.5 5 4 4s4 1 4 1l2-2s1.5-1.5 3 0 3 0 3 0z" />
        </svg>
      </div>
      
      {/* Bear Icon - Subdued Warmth */}
      <div className="absolute bottom-[20%] right-[5%] animate-market" style={{ animationDelay: '6s' }}>
        <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="0.2" className="opacity-15">
          <path d="M12 3s2.5-1 4 1-1 4-1 4l2 2s1 3-1 5-4 1-4 1l-1 3s-2 2-4 0-2-4-2-4l-3-1s-2-2 0-4 4-1 4-1l1-3s1-2 3-1 3 1 3 1z" />
        </svg>
      </div>

      {/* Warm Glow Background blobs */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full"></div>

      {/* Floating Candlestick - Refined and warmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] animate-pulse pointer-events-none">
        <div className="flex gap-12">
          <div className="w-0.5 h-40 bg-emerald-500/50 rounded-full"></div>
          <div className="w-0.5 h-64 bg-amber-500/50 rounded-full mt-20"></div>
          <div className="w-0.5 h-32 bg-indigo-400/50 rounded-full -mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDecorations;
