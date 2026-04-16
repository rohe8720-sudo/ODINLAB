import { useStore } from '@/lib/store';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ADMIN_ORDERS } from '@/data';
import { Badge } from '@/components/ui/badge';

export default function MyPage() {
  const { user, logout } = useStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pt-32 pb-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 border shadow-sm sticky top-32">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-center mb-1 uppercase tracking-tight">{user.name}</h2>
              <p className="text-neutral-500 text-sm text-center mb-8">{user.email}</p>
              
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start rounded-none font-bold uppercase tracking-widest text-xs">Orders</Button>
                <Button variant="ghost" className="w-full justify-start rounded-none font-bold uppercase tracking-widest text-xs text-neutral-400">Settings</Button>
                <Button variant="ghost" className="w-full justify-start rounded-none font-bold uppercase tracking-widest text-xs text-neutral-400">Wishlist</Button>
                <div className="pt-4 mt-4 border-t">
                  <Button variant="ghost" onClick={logout} className="w-full justify-start rounded-none font-bold uppercase tracking-widest text-xs text-red-600">Logout</Button>
                </div>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 border shadow-sm">
              <h1 className="text-3xl font-bold tracking-tighter uppercase mb-10">Order History</h1>
              
              <div className="space-y-8">
                {ADMIN_ORDERS.slice(0, 2).map((order) => (
                  <div key={order.id} className="border-b pb-8 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Order ID</p>
                        <p className="font-bold">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Date</p>
                        <p className="font-bold">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Status</p>
                        <Badge variant="outline" className="rounded-none border-black font-bold uppercase text-[10px]">
                          {order.status}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Total</p>
                        <p className="font-bold">₩{order.total.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="bg-neutral-50 p-4 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-neutral-200 rounded overflow-hidden">
                        <img src="https://picsum.photos/seed/product/100/100" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase">{order.items[0].title}</p>
                        <p className="text-xs text-neutral-500">Quantity: {order.items[0].quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
