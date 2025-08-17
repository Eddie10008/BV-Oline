'use client';

import React from 'react';
import { StarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

export default function CompetitorAnalysis() {
  // Mock competitor data
  const competitors = [
    {
      name: 'Traditional Weaves',
      rating: 4.6,
      products: 150,
      avgPrice: 8500,
      marketShare: 25,
      strengths: ['Premium Quality', 'Wide Variety', 'Fast Shipping'],
      weaknesses: ['Higher Prices', 'Limited Discounts'],
    },
    {
      name: 'Ethnic Elegance',
      rating: 4.3,
      products: 120,
      avgPrice: 6500,
      marketShare: 18,
      strengths: ['Affordable Pricing', 'Good Customer Service'],
      weaknesses: ['Limited Premium Range', 'Slow Delivery'],
    },
    {
      name: 'Heritage Collection',
      rating: 4.8,
      products: 200,
      avgPrice: 12000,
      marketShare: 30,
      strengths: ['Exclusive Designs', 'Premium Materials', 'Expert Craftsmanship'],
      weaknesses: ['Very High Prices', 'Limited Stock'],
    },
  ];

  const marketPosition = {
    yourRating: 4.4,
    yourProducts: 85,
    yourAvgPrice: 7500,
    yourMarketShare: 15,
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getMarketShareColor = (share: number) => {
    if (share >= 25) return 'text-green-600';
    if (share >= 15) return 'text-blue-600';
    if (share >= 10) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Competitor Analysis</h3>
      
      {/* Your Position */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Your Market Position</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Rating:</span>
            <div className="flex items-center space-x-1 mt-1">
              {getRatingStars(marketPosition.yourRating)}
              <span className="ml-1 font-medium">{marketPosition.yourRating}</span>
            </div>
          </div>
          <div>
            <span className="text-gray-500">Products:</span>
            <span className="ml-2 font-medium">{marketPosition.yourProducts}</span>
          </div>
          <div>
            <span className="text-gray-500">Avg Price:</span>
            <span className="ml-2 font-medium">₹{marketPosition.yourAvgPrice.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-500">Market Share:</span>
            <span className={`ml-2 font-medium ${getMarketShareColor(marketPosition.yourMarketShare)}`}>
              {marketPosition.yourMarketShare}%
            </span>
          </div>
        </div>
      </div>

      {/* Competitors */}
      <div className="space-y-4">
        {competitors.map((competitor, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-medium text-gray-900">{competitor.name}</h5>
              <div className="flex items-center space-x-2">
                {getRatingStars(competitor.rating)}
                <span className="text-sm font-medium">{competitor.rating}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm mb-3">
              <div>
                <span className="text-gray-500">Products:</span>
                <span className="ml-1 font-medium">{competitor.products}</span>
              </div>
              <div>
                <span className="text-gray-500">Avg Price:</span>
                <span className="ml-1 font-medium">₹{competitor.avgPrice.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-500">Market Share:</span>
                <span className={`ml-1 font-medium ${getMarketShareColor(competitor.marketShare)}`}>
                  {competitor.marketShare}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-green-600 font-medium">Strengths:</span>
                <ul className="mt-1 space-y-1">
                  {competitor.strengths.map((strength, i) => (
                    <li key={i} className="text-gray-600">• {strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-red-600 font-medium">Weaknesses:</span>
                <ul className="mt-1 space-y-1">
                  {competitor.weaknesses.map((weakness, i) => (
                    <li key={i} className="text-gray-600">• {weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Competitive Insights</h4>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start space-x-2">
                                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mt-0.5" />
            <div>
              <span className="font-medium text-gray-900">Opportunity:</span>
              <span className="ml-1">Premium segment has highest margins but limited competition</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
                                    <ArrowTrendingDownIcon className="w-4 h-4 text-red-600 mt-0.5" />
            <div>
              <span className="font-medium text-gray-900">Threat:</span>
              <span className="ml-1">Price competition in mid-range segment is intense</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <StarIcon className="w-4 h-4 text-yellow-600 mt-0.5" />
            <div>
              <span className="font-medium text-gray-900">Recommendation:</span>
              <span className="ml-1">Focus on unique designs and superior customer service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Share Chart */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Market Share Distribution</h4>
        <div className="space-y-2">
          {[
            { name: 'Heritage Collection', share: 30, color: 'bg-red-500' },
            { name: 'Traditional Weaves', share: 25, color: 'bg-blue-500' },
            { name: 'Ethnic Elegance', share: 18, color: 'bg-green-500' },
            { name: 'Your Store', share: 15, color: 'bg-purple-500' },
            { name: 'Others', share: 12, color: 'bg-gray-500' },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color.replace('bg-', '') }}></div>
              <span className="text-sm text-gray-600 flex-1">{item.name}</span>
              <span className="text-sm font-medium">{item.share}%</span>
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ 
                    width: `${item.share}%`,
                    backgroundColor: item.color.replace('bg-', '')
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
