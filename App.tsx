
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StrategyAuditor from './components/StrategyAuditor';
import Compliance from './components/Compliance';
import DomainExpertise from './components/DomainExpertise';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-indigo-950">
      <Header />
      
      <main>
        <Hero />
        
        <section id="services" className="py-44 px-4 max-w-7xl mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
          <div className="text-center mb-28">
            <h2 className="futuristic text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase text-white">Service <span className="text-amber-500">Clusters</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-bold uppercase tracking-[0.2em]">
              Specialized support ecosystems engineered for high-stakes capital platforms.
            </p>
          </div>
          <Services />
        </section>

        <section id="compliance" className="py-44 bg-slate-950/40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <Compliance />
          </div>
        </section>

        <section id="expertise" className="py-20 px-4 max-w-7xl mx-auto">
          <DomainExpertise />
        </section>

        <section id="strategy" className="py-44 bg-slate-900/20 border-y border-white/5 relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
             <StrategyAuditor />
          </div>
        </section>

        <section id="contact" className="py-44 px-4 text-center">
          <div className="max-w-5xl mx-auto glass-effect p-24 rounded-[48px] border border-white/5 relative group overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/10 blur-[140px] group-hover:bg-amber-500/20 transition-all duration-1000"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-500/10 blur-[140px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
            
            <h2 className="futuristic text-5xl md:text-8xl font-black mb-10 tracking-tight uppercase leading-none text-white">Modernizing<br /><span className="text-amber-500">Fintech Support</span></h2>
            <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto uppercase tracking-wide font-medium leading-relaxed">
              Scale your support infrastructure with confidence. Our elite teams are ready to deploy globally within 72 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <button className="futuristic bg-amber-500 text-indigo-950 px-14 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-2xl glow-amber rounded-2xl">
                Get Early Access
              </button>
              <button className="futuristic bg-slate-950/80 border border-white/10 text-white px-14 py-6 font-black uppercase tracking-[0.2em] text-sm hover:border-amber-500 transition-all rounded-2xl">
                System Overview
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
