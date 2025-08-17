'use client';

import React from 'react';
import { 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon, 
  EyeIcon,
  StarIcon,
  ShoppingBagIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

interface SellerProduct {
  id: string;
  price: number;
  stock: number;
  isActive: boolean;
  product: {
    id: string;
    name: string;
    description: string;
    images: string;
    category: {
      name: string;
    };
    reviews: Array<{
      id: string;
      rating: number;
      comment: string;
      user: {
        name: string | null;
      };
    }>;
  };
}

interface ProductResearchOverviewProps {
  sellerProducts: SellerProduct[];
}

export default function ProductResearchOverview({ sellerProducts }: ProductResearchOverviewProps) {
  // Calculate research metrics
  const totalProducts = sellerProducts.length;
  const activeProducts = sellerProducts.filter(p => p.isActive).length;
  const totalReviews = sellerProducts.reduce((sum, p) => sum + p.product.reviews.length, 0);
  const averageRating = sellerProducts.length > 0 
    ? sellerProducts.reduce((sum, p) => {
        const productRating = p.product.reviews.length > 0 
          ? p.product.reviews.reduce((rSum, r) => rSum + r.rating, 0) / p.product.reviews.length
          : 0;
        return sum + productRating;
      }, 0) / sellerProducts.length
    : 0;

  const averagePrice = sellerProducts.length > 0
    ? sellerProducts.reduce((sum, p) => sum + p.price, 0) / sellerProducts.length
    : 0;

  const categoryDistribution = sellerProducts.reduce((acc, product) => {
    const category = product.product.category.name;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryDistribution)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  const getInsights = () => {
    const insights = [];
    
    if (averageRating >= 4.5) {
      insights.push({
        type: 'positive',
        title: 'Excellent Customer Satisfaction',
        description: 'Your products have high ratings, indicating strong customer satisfaction.',
        icon: StarIcon,
      });
    } else if (averageRating < 3.5) {
      insights.push({
        type: 'warning',
        title: 'Improve Product Quality',
        description: 'Consider enhancing product quality based on customer feedback.',
        icon: ArrowTrendingDownIcon,
      });
    }

    if (activeProducts / totalProducts < 0.8) {
      insights.push({
        type: 'warning',
        title: 'Low Product Activation',
        description: 'Consider activating more products to increase sales opportunities.',
        icon: ShoppingBagIcon,
      });
    }

    if (averagePrice > 5000) {
      insights.push({
        type: 'info',
        title: 'Premium Pricing Strategy',
        description: 'Your products are positioned in the premium segment.',
        icon: CurrencyRupeeIcon,
      });
    }

    return insights;
  };

  const insights = getInsights();

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
                              <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-green-600">{activeProducts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500">
              <StarIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <EyeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Reviews</p>
              <p className="text-2xl font-bold text-purple-600">{totalReviews}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights and Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  insight.type === 'positive' ? 'bg-green-100' :
                  insight.type === 'warning' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  <insight.icon className={`w-5 h-5 ${
                    insight.type === 'positive' ? 'text-green-600' :
                    insight.type === 'warning' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Category Distribution</h3>
          <div className="space-y-3">
            {topCategories.map(([category, count]) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{category}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${(count / totalProducts) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Average Price</span>
              <span className="font-medium text-gray-900">₹{averagePrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
