'use client';

import React from 'react';
import { 
  LightBulbIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon,
  StarIcon,
  CurrencyRupeeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

export default function ResearchInsights() {
  const insights = [
    {
      type: 'opportunity',
      title: 'Premium Silk Sarees',
      description: 'High demand for premium silk sarees with 25% higher margins',
      metrics: {
        demand: 'Very High',
        priceRange: '₹8,000 - ₹25,000',
        growth: '+18%',
        competition: 'Low'
      },
      recommendations: [
        'Focus on exclusive silk saree designs',
        'Partner with traditional weavers',
        'Highlight craftsmanship and heritage',
        'Target wedding and festive seasons'
      ]
    },
    {
      type: 'trending',
      title: 'Contemporary Lehengas',
      description: 'Modern lehengas with fusion designs gaining popularity',
      metrics: {
        demand: 'High',
        priceRange: '₹5,000 - ₹15,000',
        growth: '+22%',
        competition: 'Medium'
      },
      recommendations: [
        'Introduce contemporary lehenga designs',
        'Focus on comfortable fabrics',
        'Target younger demographic',
        'Offer customization options'
      ]
    },
    {
      type: 'declining',
      title: 'Traditional Salwar Kameez',
      description: 'Traditional salwar kameez demand decreasing',
      metrics: {
        demand: 'Medium',
        priceRange: '₹2,000 - ₹8,000',
        growth: '-8%',
        competition: 'High'
      },
      recommendations: [
        'Modernize traditional designs',
        'Focus on comfort and versatility',
        'Target office wear segment',
        'Offer mix-and-match options'
      ]
    }
  ];

  const marketAnalysis = {
    seasonalTrends: [
      { season: 'Wedding Season (Oct-Dec)', demand: 'Very High', categories: ['Lehengas', 'Silk Sarees'] },
      { season: 'Festive Season (Aug-Nov)', demand: 'High', categories: ['Sarees', 'Anarkali'] },
      { season: 'Summer (Mar-Jun)', demand: 'Medium', categories: ['Cotton Sarees', 'Kurtis'] },
      { season: 'Monsoon (Jul-Sep)', demand: 'Low', categories: ['Light Fabrics'] }
    ],
    priceSegments: [
      { segment: 'Budget (₹1,000-₹3,000)', marketShare: '35%', growth: '+5%' },
      { segment: 'Mid-Range (₹3,000-₹8,000)', marketShare: '45%', growth: '+12%' },
      { segment: 'Premium (₹8,000-₹20,000)', marketShare: '15%', growth: '+25%' },
      { segment: 'Luxury (₹20,000+)', marketShare: '5%', growth: '+30%' }
    ]
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <ArrowTrendingUpIcon className="w-6 h-6 text-green-600" />;
      case 'trending':
        return <LightBulbIcon className="w-6 h-6 text-blue-600" />;
      case 'declining':
        return <ArrowTrendingDownIcon className="w-6 h-6 text-red-600" />;
      default:
        return <StarIcon className="w-6 h-6 text-gray-600" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'opportunity':
        return 'border-green-200 bg-green-50';
      case 'trending':
        return 'border-blue-200 bg-blue-50';
      case 'declining':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className={`border rounded-lg p-6 ${getInsightColor(insight.type)}`}>
            <div className="flex items-center space-x-3 mb-4">
              {getInsightIcon(insight.type)}
              <h3 className="text-lg font-medium text-gray-900">{insight.title}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{insight.description}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div>
                <span className="text-gray-500">Demand:</span>
                <span className="ml-2 font-medium">{insight.metrics.demand}</span>
              </div>
              <div>
                <span className="text-gray-500">Growth:</span>
                <span className={`ml-2 font-medium ${
                  insight.metrics.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {insight.metrics.growth}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Price Range:</span>
                <span className="ml-2 font-medium">{insight.metrics.priceRange}</span>
              </div>
              <div>
                <span className="text-gray-500">Competition:</span>
                <span className="ml-2 font-medium">{insight.metrics.competition}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {insight.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Seasonal Demand Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Seasonal Trends</h4>
            <div className="space-y-3">
              {marketAnalysis.seasonalTrends.map((trend, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{trend.season}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      trend.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                      trend.demand === 'High' ? 'bg-green-100 text-green-800' :
                      trend.demand === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {trend.demand}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Top categories: {trend.categories.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Price Segment Analysis</h4>
            <div className="space-y-3">
              {marketAnalysis.priceSegments.map((segment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{segment.segment}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      segment.growth.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {segment.growth}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Market Share: {segment.marketShare}</span>
                    <span>Growth: {segment.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Strategic Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Short-term Actions (1-3 months)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Optimize product listings with better images and descriptions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Focus on wedding season inventory preparation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Implement customer feedback collection system</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Launch promotional campaigns for festive season</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Long-term Strategy (6-12 months)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Develop exclusive designer collaborations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Expand premium product portfolio</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Implement advanced inventory management</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Build customer loyalty program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
