import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-bold tracking-[3px] text-neutral-400 uppercase mb-4">PROJECTS COMPLETED</h4>
            <p className="text-4xl font-normal serif italic">1,240+</p>
            <p className="text-[11px] text-neutral-500 mt-2 uppercase tracking-widest">Successful Design Deliveries</p>
          </div>
          <div className="text-center">
            <h4 className="text-[10px] font-bold tracking-[3px] text-neutral-400 uppercase mb-4">DESIGNER TALENT</h4>
            <p className="text-4xl font-normal serif italic">85</p>
            <p className="text-[11px] text-neutral-500 mt-2 uppercase tracking-widest">Emerging Creators Incubated</p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-[10px] font-bold tracking-[3px] text-neutral-400 uppercase mb-4">GLOBAL REACH</h4>
            <p className="text-4xl font-normal serif italic">12</p>
            <p className="text-[11px] text-neutral-500 mt-2 uppercase tracking-widest">Countries with Active Partners</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">© 2026 ODINLAB. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-black transition-colors uppercase">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-black transition-colors uppercase">Terms of Service</a>
            <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-black transition-colors uppercase">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
