
import React, { useState } from 'react';
import { generateCXStrategy } from '../geminiService';
import { StrategyResult } from '../types';

const StrategyAuditor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [industry, setIndustry] = useState<'fintech' | 'prop-firm'>('fintech');
  const [context, setContext] = useState('');
  const [result, setResult] = useState<StrategyResult | null>(null);

  const handleGenerate = async () => {
    if (!context) return;
    setLoading(true);
    try {
      const data = await generateCXStrategy(context, industry);
      setResult(data);
    } catch (error) {
      alert("Analysis engine recalibrating. Please retry in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      <div>
        <div className="w-16 h-1 bg-amber-500 mb-8 rounded-full"></div>
        <h2 className="futuristic text-5xl font-black mb-8 tracking-tight uppercase leading-tight text-white">CX STRATEGY<br /><span className="text-amber-400">BENCHMARK</span></h2>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">
          Quantify your operational efficiency. Input your parameters for a custom infrastructure roadmap optimized for your vertical.
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setIndustry('fintech')}
              className={`py-4 px-6 rounded-2xl futuristic font-bold uppercase text-xs tracking-widest transition-all border ${industry === 'fintech' ? 'bg-amber-500 text-indigo-950 border-amber-400 shadow-lg shadow-amber-500/10' : 'bg-slate-900/50 border-white/5 text-slate-500 hover:text-white hover:border-white/10'}`}
            >
              Fintech Ecosystem
            </button>
            <button 
              onClick={() => setIndustry('prop-firm')}
              className={`py-4 px-6 rounded-2xl futuristic font-bold uppercase text-xs tracking-widest transition-all border ${industry === 'prop-firm' ? 'bg-amber-500 text-indigo-950 border-amber-400 shadow-lg shadow-amber-500/10' : 'bg-slate-900/50 border-white/5 text-slate-500 hover:text-white hover:border-white/10'}`}
            >
              Proprietary Desk
            </button>
          </div>

          <textarea 
            className="w-full h-44 bg-indigo-950/30 border border-white/10 rounded-2xl p-6 text-white text-base focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 placeholder:text-slate-600 transition-all font-medium"
            placeholder="Operational Context: Team size, current support channels, and primary friction points..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />

          <button 
            disabled={loading || !context}
            onClick={handleGenerate}
            className="w-full py-6 bg-amber-500 text-indigo-950 futuristic font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all disabled:opacity-20 rounded-2xl flex items-center justify-center gap-4 glow-amber"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-950 rounded-full animate-bounce"></span>
                <span>Generating Blueprint...</span>
              </span>
            ) : (
              'Start Analysis'
            )}
          </button>
        </div>
      </div>

      <div className="relative">
        {result ? (
          <div className="glass-effect p-10 rounded-[32px] border-amber-500/20 animate-in fade-in zoom-in-95 duration-700 shadow-2xl">
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-indigo-950">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="futuristic text-2xl font-bold uppercase tracking-tight text-white">Insight Report</h3>
              </div>
              <span className="text-[11px] font-black text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/20">Operational Tier 1</span>
            </div>
            
            <p className="text-slate-300 text-sm mb-10 leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border border-white/5 italic">
              "{result.analysis}"
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {result.metrics.map((m, i) => (
                <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 group hover:border-amber-500/30 transition-all">
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2">{m.label}</p>
                  <p className="futuristic text-2xl font-black text-white group-hover:text-amber-400 transition-colors">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4">Strategic Priorities</h4>
              {result.recommendations.map((rec, i) => (
                <div key={i} className="flex gap-5 items-center bg-indigo-950/40 p-5 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all group">
                  <span className="text-amber-500 font-black text-lg group-hover:scale-110 transition-transform">0{i + 1}</span>
                  <span className="text-slate-200 text-sm font-semibold tracking-tight">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="aspect-[5/6] flex flex-col items-center justify-center bg-indigo-950/20 border border-white/5 rounded-[40px] text-slate-600 p-20 text-center relative group">
            <div className="w-24 h-24 bg-indigo-950/60 rounded-3xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-amber-500/30 transition-all duration-700 shadow-inner">
               <svg className="w-12 h-12 text-slate-700 group-hover:text-amber-500/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <p className="futuristic font-bold tracking-widest text-sm uppercase text-slate-500">System Ready</p>
            <p className="text-xs text-slate-600 mt-3 max-w-xs leading-relaxed">Please input your firm's operational data to initiate the strategic audit.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyAuditor;
