'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Package, 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  Settings, 
  Users, 
  FileText,
  Home,
  Store,
  CreditCard,
  MessageSquare,
  Gift
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/seller-portal', icon: Home },
  { name: 'Products', href: '/seller-portal/products', icon: Package },
  { name: 'Orders', href: '/seller-portal/orders', icon: ShoppingCart },
  { name: 'Shipments', href: '/seller-portal/shipments', icon: Truck },
  { name: 'Research', href: '/seller-portal/research', icon: FileText },
  { name: 'Analytics', href: '/seller-portal/analytics', icon: BarChart3 },
  { name: 'Incentives', href: '/seller-portal/incentives', icon: Gift },
  { name: 'Settings', href: '/seller-portal/settings', icon: Settings },
]

export default function SellerSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indian-red rounded-lg flex items-center justify-center">
            <Store className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-gray-900">Seller Portal</h1>
            <p className="text-sm text-gray-500">Bhartiya Vastra Australia</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indian-red text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active Products</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pending Orders</span>
              <span className="font-medium text-orange-600">8</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">This Month Sales</span>
              <span className="font-medium text-green-600">$2,450</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
