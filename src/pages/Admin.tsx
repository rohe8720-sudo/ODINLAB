import { useStore } from '@/lib/store';
import { Navigate } from 'react-router-dom';
import { ADMIN_ORDERS, PRODUCTS, DESIGNERS } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  CheckCircle2, 
  Clock, 
  Truck, 
  CreditCard 
} from 'lucide-react';

export default function Admin() {
  const { user } = useStore();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Paid': return <CreditCard className="h-4 w-4 text-blue-600" />;
      case 'Preparing': return <Settings className="h-4 w-4 text-neutral-600 animate-spin" />;
      case 'Shipped': return <Truck className="h-4 w-4 text-purple-600" />;
      case 'Completed': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      default: return null;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">Admin Dashboard</h1>
            <p className="text-neutral-500">Manage orders, products, and designers.</p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-black text-white rounded-none uppercase tracking-widest text-xs font-bold">Add New Product</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Sales', value: '₩4,250,000', icon: CreditCard },
            { label: 'Active Orders', value: '12', icon: ShoppingBag },
            { label: 'Designers', value: '18', icon: Users },
            { label: 'Pending Approval', value: '3', icon: Clock }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 border shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{stat.label}</p>
                <stat.icon className="h-4 w-4 text-neutral-400" />
              </div>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="bg-white border rounded-none p-1 mb-8 h-auto">
            <TabsTrigger value="orders" className="rounded-none uppercase tracking-widest text-xs font-bold px-8 py-3 data-[state=active]:bg-black data-[state=active]:text-white">Orders</TabsTrigger>
            <TabsTrigger value="products" className="rounded-none uppercase tracking-widest text-xs font-bold px-8 py-3 data-[state=active]:bg-black data-[state=active]:text-white">Products</TabsTrigger>
            <TabsTrigger value="designers" className="rounded-none uppercase tracking-widest text-xs font-bold px-8 py-3 data-[state=active]:bg-black data-[state=active]:text-white">Designers</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <div className="bg-white border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Order ID</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Customer</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Date</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Total</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Status</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ADMIN_ORDERS.map((order) => (
                      <tr key={order.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-sm">{order.id}</td>
                        <td className="px-6 py-4 text-sm">{order.customerName}</td>
                        <td className="px-6 py-4 text-sm text-neutral-500">{order.date}</td>
                        <td className="px-6 py-4 text-sm font-bold">₩{order.total.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(order.status)}
                            <span className="text-xs font-bold uppercase tracking-tight">{order.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm" className="text-xs font-bold uppercase">Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-white border p-4 shadow-sm group">
                  <div className="aspect-square overflow-hidden mb-4 bg-neutral-100">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight mb-1">{product.title}</h3>
                  <p className="text-xs text-neutral-500 mb-4">{product.designer}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold">₩{product.price.toLocaleString()}</p>
                    <Button variant="outline" size="sm" className="rounded-none h-8 text-[10px] uppercase font-bold">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="designers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DESIGNERS.map((designer) => (
                <div key={designer.id} className="bg-white border p-6 shadow-sm flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 grayscale">
                    <img src={designer.image} alt={designer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold uppercase tracking-tight">{designer.name}</h3>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{designer.role}</p>
                    <div className="flex space-x-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-none text-[10px] uppercase font-bold">Approved</Badge>
                      <Button variant="ghost" size="sm" className="h-6 text-[10px] uppercase font-bold">View Portfolio</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
