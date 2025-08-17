import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';

interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: Date;
  user: {
    name: string | null;
    email: string;
  };
  items: Array<{
    id: string;
    quantity: number;
    product: {
      name: string;
      images: string;
    };
  }>;
}

interface RecentOrdersProps {
  orders: Order[];
}

export default function RecentOrders({ orders }: RecentOrdersProps) {
  const getStatusBadge = (status: string) => {
    const statusColors = {
      PENDING: 'bg-yellow-100 text-yellow-800',
      CONFIRMED: 'bg-blue-100 text-blue-800',
      PROCESSING: 'bg-purple-100 text-purple-800',
      SHIPPED: 'bg-indigo-100 text-indigo-800',
      DELIVERED: 'bg-green-100 text-green-800',
      CANCELLED: 'bg-red-100 text-red-800',
      REFUNDED: 'bg-gray-100 text-gray-800',
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'
      }`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          <Link
            href="/seller-portal/orders"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            View all
          </Link>
        </div>
      </div>

      <div className="overflow-hidden">
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No recent orders</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => {
              const images = JSON.parse(order.items[0]?.product.images || '[]');
              return (
                <li key={order.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={images[0] || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}
                          alt={order.items[0]?.product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Order #{order.id.slice(-8)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.items.length} item(s) • {order.user.name || 'N/A'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ₹{order.total.toFixed(2)}
                        </p>
                        {getStatusBadge(order.status)}
                      </div>
                      <Link
                        href={`/seller-portal/orders/${order.id}`}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
