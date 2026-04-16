import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-black uppercase">About ODINLAB</h1>
            
            <div className="aspect-video overflow-hidden mb-16 grayscale">
              <img 
                src="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=2000&auto=format&fit=crop" 
                alt="ODINLAB Studio" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">Our Identity</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  ODINLAB is a design-focused company at the intersection of academic excellence and creative commerce. 
                  Founded by a university professor with decades of experience in the fashion industry, we bridge the gap between design education and professional production.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Our studio serves as both a professional design house and an incubator for emerging talent, 
                  providing the infrastructure for creative visions to become real-world products.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">The MORPH8 Archive</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  MORPH8 is our curated archive and marketplace for student designers. 
                  The name represents the fusion of 'morph' (to transform) and the number '8' (symbolizing infinity).
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We believe in the power of emerging designers. Through MORPH8, we provide a platform for students 
                  to showcase and sell their work, gaining valuable market experience before launching their own independent brands.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-12 md:p-20 text-center border">
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter italic">"Design is not just what it looks like and feels like. Design is how it works."</h2>
              <p className="text-neutral-500 uppercase tracking-widest text-sm font-bold">— Professor & Founder, ODINLAB</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
