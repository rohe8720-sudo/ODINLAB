export interface Product {
  id: string;
  title: string;
  designer: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: 'Pending' | 'Paid' | 'Preparing' | 'Shipped' | 'Completed';
  items: { title: string; quantity: number }[];
}

export interface CustomOrderCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
}
