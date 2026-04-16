import { DESIGNERS } from '@/data';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

export default function Designers() {
  const designerNames = [
    'Kim Minchae', 'Gu Seim', 'Gu Juyeon', 'Kim Minseo', 'Kim Yeonwoo', 
    'Kim Hyemin', 'Park Seongheon', 'Byeon Jihyeon', 'Seong Chaerin', 
    'Lee Doyoung', 'Lee Sejeong', 'Lee Sujin', 'Lee Eunbyeol', 
    'Jeong Yuna', 'Choi Yuhwa', 'Ha Seoyun', 'Ham Hyeonseo'
  ];

  return (
    <div className="pt-32 pb-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-normal serif italic mb-6 text-black">MORPH8 Designers</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Selected works by emerging fashion designers from the MORPH8 archive. 
            A marketplace where talent meets opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designerNames.map((name, i) => {
            // Use sample designer data if available, otherwise placeholder
            const designer = DESIGNERS.find(d => d.name === name) || {
              name,
              role: 'Emerging Designer',
              image: `https://picsum.photos/seed/${name}/400/500`,
              bio: 'Featured designer in the MORPH8 archive.'
            };

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="rounded-none border-none overflow-hidden group cursor-pointer bg-white shadow-none hover:shadow-xl transition-shadow duration-500">
                  <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={designer.image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold tracking-tight mb-1 uppercase">{name}</h3>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">{designer.role}</p>
                    <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">{designer.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
