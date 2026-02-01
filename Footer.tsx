
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-16 px-4 bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 mb-28">
        <div className="col-span-1 md:col-span-2">
          <Logo size="lg" className="mb-10" />
          <p className="text-slate-500 max-w-sm mb-12 text-sm uppercase tracking-wider font-bold leading-relaxed">
            Reliable support infrastructure engineered for high-velocity fintech and proprietary trading desks. 
          </p>
          <div className="flex gap-5">
            <a href="#" className="w-12 h-12 bg-indigo-950/50 border border-white/10 rounded-2xl flex items-center justify-center hover:border-amber-500/50 hover:bg-amber-500 hover:text-indigo-950 transition-all group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-indigo-950/50 border border-white/10 rounded-2xl flex items-center justify-center hover:border-amber-500/50 hover:bg-amber-500 hover:text-indigo-950 transition-all group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="futuristic text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-white">Ecosystem</h4>
          <ul className="space-y-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Prop Firms</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Neo-Banks</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Venture Ops</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Growth Hub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="futuristic text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-white">Platform</h4>
          <ul className="space-y-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Compliance</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">API Status</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Help Desk</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-wrap justify-between gap-6 text-[9px] text-slate-600 font-black uppercase tracking-[0.4em]">
        <p>© 2024 CXB GLOBAL INFRASTRUCTURE GROUP. ALL SYSTEMS GO.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
