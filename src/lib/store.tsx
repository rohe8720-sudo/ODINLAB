import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface AuthUser {
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  user: AuthUser | null;
  login: (email: string, name: string, role: 'user' | 'admin') => void;
  logout: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<AuthUser | null>(null);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const login = (email: string, name: string, role: 'user' | 'admin') => {
    setUser({ email, name, role });
  };

  const logout = () => setUser(null);

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, user, login, logout }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
