
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => (
  <div className="glass-effect p-12 rounded-3xl hover:bg-indigo-950/50 transition-all group border border-white/5 hover:border-amber-500/30 relative overflow-hidden">
    {/* Subdued Glow effect */}
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
    
    <div className="w-16 h-16 bg-slate-900/80 border border-white/10 rounded-2xl flex items-center justify-center text-amber-400 mb-10 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-indigo-950 transition-all duration-500 shadow-xl">
      {icon}
    </div>
    <h3 className="futuristic text-2xl font-bold mb-6 tracking-tight text-white group-hover:text-amber-400 transition-colors">{title}</h3>
    <p className="text-slate-400 mb-10 leading-relaxed text-sm font-medium">
      {description}
    </p>
    <div className="flex flex-wrap gap-2.5">
      {tags.map(tag => (
        <span key={tag} className="text-[9px] uppercase tracking-[0.15em] font-black px-3.5 py-1.5 bg-indigo-950/80 text-amber-200/60 border border-amber-500/10 rounded-lg">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard 
        title="Institutional Risk"
        description="Scalable compliance workflows and KYC automation designed for rapid-growth trading platforms and neo-banks."
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        }
        tags={['Anti-Fraud', 'KYC Ops', 'Regulatory']}
      />
      <ServiceCard 
        title="Prop Desk Scaling"
        description="Specialized trader-centric support handling complex account rules, drawdown alerts, and rapid payout processing."
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        }
        tags={['Payout Ops', '24/7 Desk', 'Risk Control']}
      />
      <ServiceCard 
        title="Human AI Hub"
        description="Advanced Gemini-powered support clusters that handle high-volume inquiries without losing the human touch."
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        }
        tags={['LLM Flow', 'Sentiment', 'Auto-Scale']}
      />
    </div>
  );
};

export default Services;
