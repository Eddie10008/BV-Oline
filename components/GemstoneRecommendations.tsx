'use client';

import React, { useState } from 'react';
import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon, 
  EyeIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  BeakerIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { 
  getGemstoneRecommendation, 
  generateJewelryRecommendations,
  GemstoneRecommendation,
  JewelryRecommendation 
} from '../lib/numerology-gemstones';
import { NumerologyProfile } from '../lib/numerology';

interface GemstoneRecommendationsProps {
  profile: NumerologyProfile;
  showJewelry?: boolean;
}

export default function GemstoneRecommendations({ profile, showJewelry = true }: GemstoneRecommendationsProps) {
  const [activeTab, setActiveTab] = useState<'gemstone' | 'jewelry' | 'healing'>('gemstone');
  const gemstoneRec = getGemstoneRecommendation(profile.lifePathNumber);
  const jewelryRecs = generateJewelryRecommendations(profile);

  const getGemstoneColor = (lifePathNumber: number) => {
    if (lifePathNumber === 11) return 'text-purple-600';
    if (lifePathNumber === 22) return 'text-indigo-600';
    if (lifePathNumber === 33) return 'text-pink-600';
    return 'text-blue-600';
  };

  const getGemstoneBgColor = (lifePathNumber: number) => {
    if (lifePathNumber === 11) return 'bg-purple-50 border-purple-200';
    if (lifePathNumber === 22) return 'bg-indigo-50 border-indigo-200';
    if (lifePathNumber === 33) return 'bg-pink-50 border-pink-200';
    return 'bg-blue-50 border-blue-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <SparklesIcon className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Your Numerology Gemstone Guide</h2>
        </div>
        <p className="text-purple-100">
          Personalized gemstone recommendations for Life Path {profile.lifePathNumber}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('gemstone')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'gemstone'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <StarIcon className="w-4 h-4 inline mr-2" />
          Primary Gemstone
        </button>
        <button
          onClick={() => setActiveTab('jewelry')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'jewelry'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <HeartIcon className="w-4 h-4 inline mr-2" />
          Jewelry Recommendations
        </button>
        <button
          onClick={() => setActiveTab('healing')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'healing'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <BeakerIcon className="w-4 h-4 inline mr-2" />
          Healing Properties
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'gemstone' && (
          <div className="space-y-6">
            {/* Primary Gemstone */}
            <div className={`${getGemstoneBgColor(profile.lifePathNumber)} rounded-lg border-2 p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${getGemstoneColor(profile.lifePathNumber)}`}>
                  {gemstoneRec.primaryGemstone}
                </h3>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Price Range</p>
                  <p className="font-semibold text-gray-900">{gemstoneRec.priceRange}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {gemstoneRec.description}
              </p>

              {/* Secondary Gemstones */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Alternative Gemstones</h4>
                <div className="flex flex-wrap gap-2">
                  {gemstoneRec.secondaryGemstones.map((gemstone, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                    >
                      {gemstone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metal Recommendations */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Metals</h4>
                <div className="flex flex-wrap gap-2">
                  {gemstoneRec.metalRecommendations.map((metal, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-yellow-50 border border-yellow-300 rounded-full text-sm text-yellow-800"
                    >
                      {metal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Best Wearing Times */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-green-600" />
                Best Times to Wear
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {gemstoneRec.bestWearingTimes.map((time, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jewelry' && showJewelry && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {jewelryRecs.map((jewelry, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{jewelry.type}</h3>
                    <span className="text-sm font-medium text-purple-600">{jewelry.gemstone}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm">{jewelry.design}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-4 h-4 text-pink-500" />
                      <span className="text-sm text-gray-600">{jewelry.spiritualPurpose}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CurrencyRupeeIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-900">{jewelry.priceEstimate}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Best Occasions</h4>
                    <div className="flex flex-wrap gap-1">
                      {jewelry.bestOccasions.map((occasion, occIndex) => (
                        <span
                          key={occIndex}
                          className="px-2 py-1 bg-white border border-gray-300 rounded text-xs text-gray-600"
                        >
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'healing' && (
          <div className="space-y-6">
            {/* Spiritual Benefits */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <StarIcon className="w-5 h-5 mr-2 text-purple-600" />
                Spiritual Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {gemstoneRec.spiritualBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Healing Properties */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BeakerIcon className="w-5 h-5 mr-2 text-green-600" />
                Healing Properties
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {gemstoneRec.healingProperties.map((property, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">{property}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chakra Alignment */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <EyeIcon className="w-5 h-5 mr-2 text-orange-600" />
                Chakra Alignment
              </h3>
              <div className="flex flex-wrap gap-2">
                {gemstoneRec.chakraAlignment.map((chakra, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-orange-300 rounded-full text-sm text-orange-800"
                  >
                    {chakra}
                  </span>
                ))}
              </div>
            </div>

            {/* Jewelry Types */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HeartIcon className="w-5 h-5 mr-2 text-blue-600" />
                Recommended Jewelry Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {gemstoneRec.jewelryTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-blue-300 rounded-full text-sm text-blue-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            ✨ These recommendations are based on your Life Path Number {profile.lifePathNumber}
          </p>
          <div className="text-right">
            <p className="text-xs text-gray-500">Consult with a gemologist for authenticity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
