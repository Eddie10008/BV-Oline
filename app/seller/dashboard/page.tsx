'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Truck,
  Eye,
  Star,
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import SellerSidebar from '@/components/seller-portal/SellerSidebar'

const stats = [
  {
    name: 'Total Sales',
    value: '$12,450',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
    trend: [65, 78, 90, 81, 56, 55, 40, 45, 60, 75, 85, 95]
  },
  {
    name: 'Orders',
    value: '156',
    change: '+8.2%',
    changeType: 'positive',
    icon: ShoppingCart,
    trend: [45, 52, 38, 24, 33, 26, 21, 35, 40, 50, 60, 70]
  },
  {
    name: 'Products',
    value: '24',
    change: '+2',
    changeType: 'positive',
    icon: Package,
    trend: [20, 22, 18, 25, 27, 30, 28, 32, 35, 38, 40, 42]
  },
  {
    name: 'Shipments',
    value: '89',
    change: '+15.3%',
    changeType: 'positive',
    icon: Truck,
    trend: [35, 41, 62, 42, 13, 13, 1, 35, 32, 45, 55, 65]
  }
]

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Priya Sharma',
    product: 'Silk Banarasi Saree',
    amount: 749.99,
    status: 'Delivered',
    date: '2024-01-15',
    location: 'Sydney, NSW'
  },
  {
    id: 'ORD-002',
    customer: 'Anjali Patel',
    product: 'Kundan Necklace Set',
    amount: 199.99,
    status: 'Shipped',
    date: '2024-01-14',
    location: 'Melbourne, VIC'
  },
  {
    id: 'ORD-003',
    customer: 'Meera Reddy',
    product: 'Embroidered Kurti',
    amount: 129.99,
    status: 'Processing',
    date: '2024-01-13',
    location: 'Brisbane, QLD'
  },
  {
    id: 'ORD-004',
    customer: 'Kavya Singh',
    product: 'Pearl Earrings',
    amount: 69.99,
    status: 'Delivered',
    date: '2024-01-12',
    location: 'Perth, WA'
  },
  {
    id: 'ORD-005',
    customer: 'Riya Gupta',
    product: 'Designer Anarkali',
    amount: 329.99,
    status: 'Shipped',
    date: '2024-01-11',
    location: 'Adelaide, SA'
  }
]

const topProducts = [
  {
    name: 'Silk Banarasi Saree',
    sales: 45,
    revenue: 33749.55,
    growth: '+23%',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Kundan Necklace Set',
    sales: 38,
    revenue: 7599.62,
    growth: '+18%',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Embroidered Kurti',
    sales: 32,
    revenue: 4159.68,
    growth: '+12%',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Pearl Earrings',
    sales: 28,
    revenue: 1959.72,
    growth: '+8%',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
]

const salesData = [
  { month: 'Jan', sales: 8500, orders: 45 },
  { month: 'Feb', sales: 9200, orders: 52 },
  { month: 'Mar', sales: 7800, orders: 38 },
  { month: 'Apr', sales: 10500, orders: 62 },
  { month: 'May', sales: 6800, orders: 42 },
  { month: 'Jun', sales: 12450, orders: 156 }
]

const categoryData = [
  { name: 'Sarees', value: 45, color: '#FF6B6B' },
  { name: 'Jewelry', value: 30, color: '#FFD700' },
  { name: 'Kurtis', value: 15, color: '#FF69B4' },
  { name: 'Accessories', value: 10, color: '#9370DB' }
]

export default function SellerDashboard() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-100'
      case 'shipped':
        return 'text-blue-600 bg-blue-100'
      case 'processing':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SellerSidebar />
        
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <stat.icon className={`w-6 h-6 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                  </div>
                  <div className="flex items-center gap-1">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                </div>
                
                {/* Mini Chart */}
                <div className="mt-4 flex items-end gap-1 h-12">
                  {stat.trend.map((value, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gray-200 rounded-sm"
                      style={{ height: `${(value / 100) * 100}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Sales Overview</h2>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indian-red" />
                    <span className="text-sm text-gray-600">Last 6 months</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {salesData.map((data, index) => (
                    <div key={data.month} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium text-gray-600">{data.month}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-indian-red h-2 rounded-full"
                              style={{ width: `${(data.sales / 13000) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">${data.sales.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-gray-500">{data.orders} orders</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Category Distribution */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
                  <PieChart className="w-5 h-5 text-indian-red" />
                </div>
                
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm font-medium text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                <a href="/seller/orders" className="text-indian-red hover:text-red-600 text-sm font-medium">
                  View All
                </a>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indian-red/10 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-indian-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{order.customer}</h3>
                        <p className="text-sm text-gray-600">{order.product}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{order.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${order.amount.toFixed(2)}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Top Products</h2>
                <a href="/seller/products" className="text-indian-red hover:text-red-600 text-sm font-medium">
                  View All
                </a>
              </div>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">{product.sales} sales</span>
                        <span className="text-sm font-medium text-gray-900">${product.revenue.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">{product.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indian-red hover:bg-indian-red/5 transition-colors text-left">
                <Package className="w-8 h-8 text-indian-red mb-3" />
                <h3 className="font-medium text-gray-900 mb-1">Add Product</h3>
                <p className="text-sm text-gray-600">Create new product listing</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indian-red hover:bg-indian-red/5 transition-colors text-left">
                <ShoppingCart className="w-8 h-8 text-indian-red mb-3" />
                <h3 className="font-medium text-gray-900 mb-1">View Orders</h3>
                <p className="text-sm text-gray-600">Manage customer orders</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indian-red hover:bg-indian-red/5 transition-colors text-left">
                <Truck className="w-8 h-8 text-indian-red mb-3" />
                <h3 className="font-medium text-gray-900 mb-1">Track Shipments</h3>
                <p className="text-sm text-gray-600">Monitor delivery status</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indian-red hover:bg-indian-red/5 transition-colors text-left">
                <BarChart3 className="w-8 h-8 text-indian-red mb-3" />
                <h3 className="font-medium text-gray-900 mb-1">Analytics</h3>
                <p className="text-sm text-gray-600">View detailed reports</p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
