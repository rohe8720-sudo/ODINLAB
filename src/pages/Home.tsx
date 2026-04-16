import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PRODUCTS, DESIGNERS, CUSTOM_CATEGORIES, ADMIN_ORDERS, SERVICES } from '@/data';
import { useStore } from '@/lib/store';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { addToCart } = useStore();

  return (
    <div className="home-grid">
      {/* Sidebar Left */}
      <aside className="hidden lg:flex flex-col justify-between p-10 border-r border-neutral-100">
        <div className="what-we-do">
          <span className="section-title">WHAT WE DO</span>
          <ul className="space-y-4">
            {SERVICES.map((service) => (
              <li key={service.id} className="border-b border-neutral-100 group">
                <Link 
                  to={`/services/${service.slug}`}
                  className="flex justify-between items-center py-3 text-[13px] font-medium transition-colors hover:text-neutral-500"
                >
                  <span>{service.title}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="credibility">
          <span className="section-title">ACADEMIC FOUNDATION</span>
          <p className="text-[12px] leading-relaxed text-neutral-500">
            Founded by academic expertise, bridging the gap between design theory and global production standards.
          </p>
        </div>
      </aside>

      {/* Main Content (Hero) */}
      <main className="relative flex flex-col justify-center p-10 lg:p-20 overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
            alt="Fashion Studio" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 max-w-lg">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-normal serif italic leading-[0.9] mb-8"
          >
            Design, Made Real.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-neutral-300 mb-10 leading-relaxed"
          >
            Fashion design, custom uniforms, goods production, and emerging designer collections — all in one creative platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-3"
          >
            <Button asChild className="btn-artistic bg-white text-black hover:bg-neutral-200">
              <Link to="/shop">SHOP COLLECTION</Link>
            </Button>
            <Button asChild variant="outline" className="btn-artistic text-white border-white hover:bg-white hover:text-black">
              <Link to="/designers">MEET DESIGNERS</Link>
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Sidebar Right */}
      <aside className="hidden lg:flex flex-col gap-10 p-8 bg-neutral-50 border-l border-neutral-100 overflow-hidden">
        <div>
          <span className="section-title">MORPH8 DESIGNERS</span>
          <div className="grid grid-cols-2 gap-4">
            {DESIGNERS.slice(0, 4).map((designer) => (
              <div key={designer.id} className="bg-white p-3 border border-neutral-100 text-center">
                <div className="aspect-square bg-neutral-100 mb-2 overflow-hidden">
                  <img src={designer.image} alt={designer.name} className="w-full h-full object-cover grayscale" />
                </div>
                <p className="text-[11px] font-bold uppercase truncate">{designer.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="section-title">LIVE ORDERS</span>
          <div className="space-y-3">
            {ADMIN_ORDERS.slice(0, 3).map((order) => (
              <div key={order.id} className="flex justify-between items-center pb-3 border-b border-dashed border-neutral-300 text-[11px]">
                <span className="font-bold">{order.id}</span>
                <span className={`px-2 py-1 rounded-[2px] font-bold uppercase text-[9px] ${
                  order.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
