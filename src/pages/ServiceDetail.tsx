import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '@/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Button asChild variant="ghost" className="mb-8 -ml-4 hover:bg-transparent">
          <Link to="/" className="flex items-center text-neutral-500 hover:text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-title">WHAT WE DO</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black uppercase leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="prose prose-neutral max-w-none mb-12">
              <p className="text-neutral-500 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="space-y-4 mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="btn-artistic bg-black text-white hover:bg-neutral-800">
              <Link to="/custom-order">Start a Project</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden bg-neutral-100 border border-neutral-100"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="mt-32">
          <span className="section-title">OTHER SERVICES</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {SERVICES.filter(s => s.id !== service.id).slice(0, 4).map((s) => (
              <Link 
                key={s.id} 
                to={`/services/${s.slug}`}
                className="group block p-6 border border-neutral-100 hover:border-black transition-colors"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:underline">{s.title}</h4>
                <p className="text-xs text-neutral-500 line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
