import React, { useState } from 'react';
import { CUSTOM_CATEGORIES } from '@/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';

export default function CustomOrder() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-black uppercase">Custom Order</h1>
            <p className="text-neutral-600 text-lg mb-12 leading-relaxed">
              기업 유니폼부터 단 하나뿐인 이벤트 의상까지, ODINLAB은 기획부터 생산까지 풀서비스를 제공합니다. 
              당신의 비전을 들려주세요. 전문가 팀이 현실로 만들어 드립니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {CUSTOM_CATEGORIES.map((cat) => (
                <div key={cat.id} className="border p-6 hover:bg-neutral-50 transition-colors cursor-pointer group">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-neutral-600">{cat.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-950 text-white p-10">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Our Expertise</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3" /> Professional Tailoring</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3" /> Material Sourcing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3" /> Brand Identity Integration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3" /> Bulk Production Management</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 md:p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 uppercase">Inquiry Received</h2>
                <p className="text-neutral-600 mb-8">Thank you for your interest. Our design team will contact you within 2-3 business days.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-none">Send Another Inquiry</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Inquiry Form</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" required className="rounded-none border-neutral-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required className="rounded-none border-neutral-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select id="category" className="w-full h-10 border border-neutral-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                    {CUSTOM_CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.title}>{cat.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" placeholder="e.g. 50 units" className="rounded-none border-neutral-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description</Label>
                  <Textarea id="message" placeholder="Tell us about your project requirements, deadlines, and vision..." className="min-h-[150px] rounded-none border-neutral-300" required />
                </div>

                <Button type="submit" className="w-full btn-artistic bg-black text-white hover:bg-neutral-800">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
