import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login
    if (email.includes('admin')) {
      login(email, 'Admin User', 'admin');
    } else {
      login(email, 'Regular User', 'user');
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-10 shadow-xl border"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2">Login</h1>
          <p className="text-neutral-500 text-sm">Access your ODINLAB account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="email@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="rounded-none"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-neutral-500 hover:text-black">Forgot password?</a>
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="rounded-none"
            />
          </div>

          <Button type="submit" className="w-full btn-artistic bg-black text-white hover:bg-neutral-800">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-neutral-500">
          Don't have an account? <a href="#" className="text-black font-bold hover:underline">Sign Up</a>
        </div>

        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
            Tip: Use "admin" in email to login as administrator
          </p>
        </div>
      </motion.div>
    </div>
  );
}
