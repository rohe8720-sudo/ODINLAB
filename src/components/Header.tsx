import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useStore } from '@/lib/store';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { cart, user, logout, removeFromCart } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Designers', path: '/designers' },
    { name: 'Custom Order', path: '/custom-order' },
  ];

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-100 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <Link to="/" className="gothic-logo text-black">
          ODINLAB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-widest uppercase transition-colors hover:underline ${
                location.pathname === link.path ? 'text-black' : 'text-neutral-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Cart Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
              <div className="mx-auto w-full max-w-md">
                <DrawerHeader>
                  <DrawerTitle>Shopping Cart</DrawerTitle>
                  <DrawerDescription>Review your selected items before checkout.</DrawerDescription>
                </DrawerHeader>
                <ScrollArea className="h-[50vh] px-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-neutral-500">Your cart is empty.</div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-2">
                          <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                            <div>
                              <h4 className="text-sm font-medium">{item.title}</h4>
                              <p className="text-xs text-neutral-500">{item.designer}</p>
                              <p className="text-sm font-semibold">₩{item.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
                <Separator className="my-4" />
                <div className="px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">₩{cartTotal.toLocaleString()}</span>
                </div>
                <DrawerFooter>
                  <Button className="w-full bg-black text-white hover:bg-neutral-800">Checkout</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Continue Shopping</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/mypage" className="text-sm font-medium hover:text-neutral-500">
                <User className="h-5 w-5" />
              </Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">
                  Admin
                </Link>
              )}
              <Button variant="ghost" size="icon" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium tracking-wide uppercase"
                >
                  {link.name}
                </Link>
              ))}
              {user && user.role === 'admin' && (
                <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase text-red-600">
                  Admin Dashboard
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
