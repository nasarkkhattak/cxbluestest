
import React from 'react';

const Compliance: React.FC = () => {
  const protocols = [
    {
      title: "Structured Access Control",
      desc: "Granular tool-level permissions ensuring data is only visible to verified agents."
    },
    {
      title: "Clear Escalation Paths",
      desc: "Pre-defined protocols for sensitive financial queries and high-net-worth interactions."
    },
    {
      title: "Regulated Environment Training",
      desc: "Agents specifically trained for the nuance of high-risk financial jurisdictions."
    },
    {
      title: "Volatility Incident Support",
      desc: "Proactive communication strategies for market outages or extreme volatility events."
    },
    {
      title: "Reputation Management",
      desc: "Handling public reviews and feedback with professional, brand-safe precision."
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 blur-[80px] rounded-full"></div>
        <span className="text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Infrastructure Security</span>
        <h2 className="futuristic text-4xl md:text-6xl font-black mb-8 leading-tight text-white uppercase tracking-tight">
          Built for <br />
          <span className="text-amber-500">High-Trust</span> <br />
          Environments
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
          In the world of Fintech and Prop Trading, trust is the primary currency. We don't just provide support; we engineer a protective layer for your brand.
        </p>
        <div className="flex items-center gap-6 p-6 glass-effect rounded-2xl border-amber-500/20 max-w-md">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-indigo-950 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Security-First Culture</p>
            <p className="text-slate-500 text-xs mt-1">ISO-aligned protocols across every node.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {protocols.map((p, i) => (
          <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-indigo-950/20 hover:border-amber-500/30 hover:bg-indigo-950/40 transition-all">
            <div className="mt-1 w-6 h-6 rounded-full border-2 border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
              <svg className="w-3 h-3 text-transparent group-hover:text-indigo-950" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1 group-hover:text-amber-400 transition-colors">{p.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliance;
