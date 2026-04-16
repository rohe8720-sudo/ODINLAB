import { useState } from 'react';
import { PRODUCTS } from '@/data';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'motion/react';

export default function Shop() {
  const { addToCart } = useStore();
  const categories = ['All', 'Apparel', 'Goods'];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black uppercase">Shop Collection</h1>
          <p className="text-neutral-500 max-w-2xl">Explore our curated selection of premium apparel and designer goods crafted by ODINLAB and emerging designers.</p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-12 bg-transparent border-b rounded-none w-full justify-start h-auto p-0 space-x-8">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-0 py-4 text-sm font-bold uppercase tracking-widest"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {PRODUCTS.filter(p => cat === 'All' || p.category === cat).map((product) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-neutral-100">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <Button 
                          onClick={() => addToCart(product)}
                          className="w-full btn-artistic bg-white text-black hover:bg-neutral-100"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-bold tracking-tight mb-1 uppercase">{product.title}</h3>
                        <p className="text-xs text-neutral-500 mb-2">{product.designer}</p>
                      </div>
                      <p className="text-sm font-bold">₩{product.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
