
import React from 'react';

const DomainExpertise: React.FC = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-20">
        <h2 className="futuristic text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-white">
          Trained for <span className="text-mint-400" style={{ color: 'var(--brand-mint)' }}>High-Performance</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-bold uppercase tracking-[0.2em]">
          Support architecture engineered for the volatility of the financial markets.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-effect p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl"></div>
          <div className="text-3xl mb-6">🧠</div>
          <h3 className="futuristic text-xl font-bold text-white mb-4 uppercase tracking-tight">Fintech Native</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Our teams aren't generalists. We have years of deep-domain experience across trading desks, neo-banks, and digital asset exchanges. We speak the language of liquidity.
          </p>
        </div>

        <div className="glass-effect p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl"></div>
          <div className="text-3xl mb-6">⚡</div>
          <h3 className="futuristic text-xl font-bold text-white mb-4 uppercase tracking-tight">Real-Time Pressure</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Trading doesn't sleep, and neither do our protocols. We are engineered to handle the surge in pressure during market opens, volatility spikes, and critical outages.
          </p>
        </div>

        <div className="glass-effect p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl"></div>
          <div className="text-3xl mb-6">🎯</div>
          <h3 className="futuristic text-xl font-bold text-white mb-4 uppercase tracking-tight">Precision Tone</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Speed means nothing without precision. We prioritize the balance of empathy and authority, ensuring escalations are handled before they become liabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainExpertise;
