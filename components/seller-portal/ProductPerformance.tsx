'use client';

import React, { useState } from 'react';
import { StarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface SellerProduct {
  id: string;
  price: number;
  stock: number;
  isActive: boolean;
  product: {
    id: string;
    name: string;
    category: {
      name: string;
    };
    reviews: Array<{
      rating: number;
    }>;
  };
}

interface ProductPerformanceProps {
  sellerProducts: SellerProduct[];
}

export default function ProductPerformance({ sellerProducts }: ProductPerformanceProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculate performance metrics
  const productsWithMetrics = sellerProducts.map(product => {
    const reviews = product.product.reviews;
    const avgRating = reviews.length > 0 
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
      : 0;
    
    // Mock performance data
    const views = Math.floor(Math.random() * 1000) + 100;
    const sales = Math.floor(Math.random() * 50) + 5;
    const conversionRate = (sales / views) * 100;
    const revenue = sales * product.price;
    
    return {
      ...product,
      metrics: { avgRating, reviews: reviews.length, views, sales, conversionRate, revenue }
    };
  });

  const filteredProducts = productsWithMetrics
    .filter(product => selectedCategory === 'all' || product.product.category.name === selectedCategory)
    .sort((a, b) => b.metrics.avgRating - a.metrics.avgRating);

  const categories = ['all', ...Array.from(new Set(sellerProducts.map(p => p.product.category.name)))];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Product Performance Analysis</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{product.product.name}</div>
                    <div className="text-sm text-gray-500">{product.product.category.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.metrics.avgRating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{product.metrics.avgRating.toFixed(1)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{product.metrics.sales}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹{product.metrics.revenue.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    product.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
