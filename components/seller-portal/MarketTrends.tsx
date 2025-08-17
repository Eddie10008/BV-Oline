'use client';

import React from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface MarketData {
  categoryId: string;
  _count: {
    id: number;
  };
  _avg: {
    price: number | null;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface MarketTrendsProps {
  marketData: MarketData[];
  categories: Category[];
}

export default function MarketTrends({ marketData, categories }: MarketTrendsProps) {
  // Mock trend data for demonstration
  const trendData = [
    {
      category: 'Sarees',
      trend: 'up',
      percentage: 15,
      description: 'Silk sarees trending up due to wedding season',
      priceRange: '₹2,000 - ₹15,000',
      demand: 'High',
    },
    {
      category: 'Lehengas',
      trend: 'up',
      percentage: 22,
      description: 'Designer lehengas in high demand',
      priceRange: '₹5,000 - ₹25,000',
      demand: 'Very High',
    },
    {
      category: 'Salwar Kameez',
      trend: 'down',
      percentage: 8,
      description: 'Traditional salwar kameez demand decreasing',
      priceRange: '₹1,500 - ₹8,000',
      demand: 'Medium',
    },
    {
      category: 'Anarkali',
      trend: 'up',
      percentage: 12,
      description: 'Anarkali suits gaining popularity',
      priceRange: '₹3,000 - ₹12,000',
      demand: 'High',
    },
  ];

  const seasonalTrends = [
    { month: 'Jan', sarees: 85, lehengas: 65, salwar: 45, anarkali: 55 },
    { month: 'Feb', sarees: 90, lehengas: 75, salwar: 40, anarkali: 60 },
    { month: 'Mar', sarees: 95, lehengas: 85, salwar: 35, anarkali: 70 },
    { month: 'Apr', sarees: 88, lehengas: 80, salwar: 38, anarkali: 65 },
    { month: 'May', sarees: 82, lehengas: 70, salwar: 42, anarkali: 58 },
    { month: 'Jun', sarees: 78, lehengas: 65, salwar: 45, anarkali: 52 },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <ArrowTrendingUpIcon className="w-5 h-5 text-green-600" />
    ) : (
      <ArrowTrendingDownIcon className="w-5 h-5 text-red-600" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Market Trends Analysis</h3>
      
      {/* Category Trends */}
      <div className="space-y-4 mb-6">
        {trendData.map((trend, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{trend.category}</h4>
              <div className="flex items-center space-x-2">
                {getTrendIcon(trend.trend)}
                <span className={`text-sm font-medium ${getTrendColor(trend.trend)}`}>
                  {trend.percentage}%
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">{trend.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Price Range:</span>
                <span className="ml-2 font-medium">{trend.priceRange}</span>
              </div>
              <div>
                <span className="text-gray-500">Demand:</span>
                <span className={`ml-2 font-medium ${getDemandColor(trend.demand)}`}>
                  {trend.demand}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Trends Chart */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Seasonal Demand Trends</h4>
        <div className="space-y-2">
          {seasonalTrends.map((month, index) => (
            <div key={index} className="flex items-center space-x-4 text-sm">
              <span className="w-8 text-gray-500">{month.month}</span>
              <div className="flex-1 flex space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${month.sarees}%` }}
                  />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${month.lehengas}%` }}
                  />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${month.salwar}%` }}
                  />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${month.anarkali}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-3 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Sarees</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Lehengas</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Salwar</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span>Anarkali</span>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Key Market Insights</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Wedding season (Oct-Dec) shows highest demand for lehengas and silk sarees</p>
          <p>• Festive season drives 40% increase in traditional wear sales</p>
          <p>• Summer months see preference for lighter fabrics and contemporary designs</p>
          <p>• Premium segment (₹10,000+) growing at 25% annually</p>
        </div>
      </div>
    </div>
  );
}
