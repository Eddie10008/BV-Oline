import { 
  CubeIcon, 
  ShoppingBagIcon, 
  TruckIcon, 
  CurrencyRupeeIcon 
} from '@heroicons/react/24/outline';

interface DashboardStatsProps {
  totalProducts: number;
  activeProducts: number;
  totalOrders: number;
  pendingShipments: number;
}

export default function DashboardStats({
  totalProducts,
  activeProducts,
  totalOrders,
  pendingShipments,
}: DashboardStatsProps) {
  const stats = [
    {
      name: 'Total Products',
      value: totalProducts,
      icon: CubeIcon,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
    },
    {
      name: 'Active Products',
      value: activeProducts,
      icon: CubeIcon,
      color: 'bg-green-500',
      textColor: 'text-green-600',
    },
    {
      name: 'Total Orders',
      value: totalOrders,
      icon: ShoppingBagIcon,
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
    },
    {
      name: 'Pending Shipments',
      value: pendingShipments,
      icon: TruckIcon,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className={`text-2xl font-bold ${stat.textColor}`}>
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
