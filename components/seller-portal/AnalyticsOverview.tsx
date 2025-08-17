import React from 'react';
import { 
  CubeIcon, 
  ShoppingBagIcon, 
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

interface AnalyticsOverviewProps {
  totalProducts: number;
  activeProducts: number;
  totalOrders: number;
  totalRevenue: number;
}

export default function AnalyticsOverview({
  totalProducts,
  activeProducts,
  totalOrders,
  totalRevenue,
}: AnalyticsOverviewProps) {
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
      name: 'Total Revenue',
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: CurrencyRupeeIcon,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
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

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Product Activation Rate</span>
              <span className="text-sm font-medium text-gray-900">
                {totalProducts > 0 ? Math.round((activeProducts / totalProducts) * 100) : 0}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{
                  width: `${totalProducts > 0 ? (activeProducts / totalProducts) * 100 : 0}%`,
                }}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Average Order Value</span>
              <span className="text-sm font-medium text-gray-900">
                {totalOrders > 0 ? `₹${(totalRevenue / totalOrders).toFixed(2)}` : '₹0.00'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <CubeIcon className="w-4 h-4 mr-2" />
              View Detailed Reports
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <CubeIcon className="w-4 h-4 mr-2" />
              Add New Product
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ShoppingBagIcon className="w-4 h-4 mr-2" />
              View Orders
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-600">
              {activeProducts} products are currently active
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-600">
              {totalOrders} orders have been placed
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm text-gray-600">
              Total revenue generated: ₹{totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
