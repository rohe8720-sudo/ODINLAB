import { Product, Designer, Order, CustomOrderCategory, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Fashion Design',
    slug: 'fashion-design',
    description: 'Bespoke fashion design services for brands and individuals.',
    fullDescription: 'Our fashion design service combines artistic vision with technical precision. We work closely with clients to develop unique collections that reflect their brand identity or personal style. From initial concept sketches to final pattern making, we ensure every detail is meticulously crafted.',
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1200&auto=format&fit=crop',
    features: ['Concept Development', 'Technical Drawing', 'Pattern Making', 'Fabric Selection', 'Sample Production']
  },
  {
    id: '2',
    title: 'Custom Uniforms',
    slug: 'custom-uniforms',
    description: 'Professional and stylish uniforms tailored to your company identity.',
    fullDescription: 'Elevate your brand with custom uniforms that combine professionalism with contemporary style. We design uniforms that are not only functional and durable but also reinforce your corporate identity. Our process includes employee feedback and rigorous testing for comfort and longevity.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    features: ['Corporate Identity Analysis', 'Functional Design', 'Durable Fabric Sourcing', 'Size Grading', 'Quality Control']
  },
  {
    id: '3',
    title: 'Goods Production',
    slug: 'goods-production',
    description: 'Design and production of branded goods and lifestyle products.',
    fullDescription: 'Expand your brand reach with high-quality goods and lifestyle products. We specialize in designing and producing a wide range of items, from bags and accessories to home goods. Our focus is on creating products that are both beautiful and functional, using sustainable materials whenever possible.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    features: ['Product Ideation', 'Material Innovation', 'Sustainable Sourcing', 'Packaging Design', 'Logistics Management']
  },
  {
    id: '4',
    title: 'Event Outfits',
    slug: 'event-outfits',
    description: 'Unique, high-impact outfits for special events and performances.',
    fullDescription: 'Make a statement with custom-designed outfits for special events, performances, or red carpet appearances. We specialize in creating high-impact, one-of-a-kind pieces that capture attention and express individuality. Our designers work with experimental materials and avant-garde techniques.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    features: ['Artistic Direction', 'Experimental Materials', 'Custom Fitting', 'Stage Presence Analysis', 'Performance Durability']
  },
  {
    id: '5',
    title: 'Brand Apparel',
    slug: 'brand-apparel',
    description: 'Full-service apparel development for emerging and established brands.',
    fullDescription: 'We provide comprehensive apparel development services for brands at all stages. Whether you are an emerging designer or an established label, we offer the expertise and infrastructure to bring your collections to market. Our services cover everything from design and sourcing to production and quality assurance.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    features: ['Collection Planning', 'Global Sourcing', 'Production Scaling', 'Quality Assurance', 'Brand Positioning']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'MORPH8 Signature Hoodie',
    designer: '김민채',
    price: 89000,
    image: 'https://api.antigravity.ai/v1/assets/6f636b65-742d-4261-636b-656e-642d61737365/6f636b65-742d-4261-636b-656e-642d61737365.jpg',
    category: 'Apparel',
    description: 'A premium hoodie featuring the MORPH8 infinity symbol, designed for comfort and style.'
  },
  {
    id: '2',
    title: 'Tailored Studio Trousers',
    designer: '구세임',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    category: 'Apparel',
    description: 'Expertly tailored trousers with a contemporary silhouette.'
  },
  {
    id: '3',
    title: 'Archive Print Tote',
    designer: '구주연',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    category: 'Goods',
    description: 'Durable canvas tote featuring exclusive MORPH8 archive prints.'
  },
  {
    id: '4',
    title: 'Minimalist Work Jacket',
    designer: '김민서',
    price: 158000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    category: 'Apparel',
    description: 'A versatile work jacket inspired by studio tailoring.'
  },
  {
    id: '5',
    title: 'Experimental Knit Vest',
    designer: '김연우',
    price: 92000,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    category: 'Apparel',
    description: 'Hand-knit vest with unique texture and pattern.'
  },
  {
    id: '6',
    title: 'Studio Ceramic Mug',
    designer: '김혜민',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop',
    category: 'Goods',
    description: 'Handcrafted ceramic mug with a minimal design aesthetic.'
  },
  {
    id: '7',
    title: 'Deconstructed Shirt',
    designer: '박성헌',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    category: 'Apparel',
    description: 'A modern take on the classic white shirt with deconstructed details.'
  },
  {
    id: '8',
    title: 'Designer Sketchbook Set',
    designer: '변지현',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800&auto=format&fit=crop',
    category: 'Goods',
    description: 'Premium quality sketchbooks for fashion and product designers.'
  }
];

export const DESIGNERS: Designer[] = [
  { id: '1', name: '김민채', role: 'Fashion Designer', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop', bio: 'Specializing in contemporary streetwear and functional design.' },
  { id: '2', name: '구세임', role: 'Tailoring Specialist', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop', bio: 'Focused on the intersection of traditional tailoring and modern silhouettes.' },
  { id: '3', name: '구주연', role: 'Graphic & Textile', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop', bio: 'Creating unique prints and patterns for the MORPH8 archive.' },
  { id: '4', name: '김민서', role: 'Apparel Designer', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop', bio: 'Exploring minimalist aesthetics through high-quality materials.' },
  { id: '5', name: '김연우', role: 'Knitwear Designer', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&auto=format&fit=crop', bio: 'Pushing the boundaries of knitwear construction and texture.' },
  { id: '6', name: '김혜민', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&auto=format&fit=crop', bio: 'Designing lifestyle goods that complement the ODINLAB aesthetic.' },
  { id: '7', name: '박성헌', role: 'Avant-Garde Fashion', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400&auto=format&fit=crop', bio: 'Experimental designer focusing on deconstruction and form.' },
  { id: '8', name: '변지현', role: 'Accessory Designer', image: 'https://images.unsplash.com/photo-1577720643572-2846317460ec?q=80&w=400&auto=format&fit=crop', bio: 'Crafting premium accessories for the modern creative professional.' }
];

export const CUSTOM_CATEGORIES: CustomOrderCategory[] = [
  { id: '1', title: 'Fashion Design', description: 'Bespoke fashion design services for brands and individuals.', image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Custom Uniforms', description: 'Professional and stylish uniforms tailored to your company identity.', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Teamwear', description: 'High-performance team outfits for sports, events, and organizations.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Goods Production', description: 'Design and production of branded goods and lifestyle products.', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Event Outfits', description: 'Unique, high-impact outfits for special events and performances.', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Brand Apparel', description: 'Full-service apparel development for emerging and established brands.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' }
];

export const ADMIN_ORDERS: Order[] = [
  { id: 'ORD-001', customerName: 'Lee Sujin', date: '2024-04-10', total: 89000, status: 'Paid', items: [{ title: 'MORPH8 Signature Hoodie', quantity: 1 }] },
  { id: 'ORD-002', customerName: 'Jeong Yuna', date: '2024-04-11', total: 125000, status: 'Preparing', items: [{ title: 'Tailored Studio Trousers', quantity: 1 }] },
  { id: 'ORD-003', customerName: 'Choi Yuhwa', date: '2024-04-12', total: 35000, status: 'Shipped', items: [{ title: 'Archive Print Tote', quantity: 1 }] },
  { id: 'ORD-004', customerName: 'Ha Seoyun', date: '2024-04-13', total: 158000, status: 'Pending', items: [{ title: 'Minimalist Work Jacket', quantity: 1 }] },
  { id: 'ORD-005', customerName: 'Ham Hyeonseo', date: '2024-04-14', total: 24000, status: 'Completed', items: [{ title: 'Studio Ceramic Mug', quantity: 1 }] }
];
