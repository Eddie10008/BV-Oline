'use client';

import React, { useState } from 'react';
import NumerologyCalculator from '../../components/NumerologyCalculator';
import GemstoneRecommendations from '../../components/GemstoneRecommendations';
import { NumerologyProfile } from '../../lib/numerology';
import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon,
  EyeIcon,
  AcademicCapIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function GemstoneDemoPage() {
  const [numerologyProfile, setNumerologyProfile] = useState<NumerologyProfile | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleNumerologyCalculate = (profile: NumerologyProfile) => {
    setNumerologyProfile(profile);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Numerology Gemstone Demo
          </h1>
          <p className="text-lg text-gray-600">
            Discover how your Life Path Number connects to specific gemstones and jewelry recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculate Your Gemstone Profile
            </h2>
            <NumerologyCalculator 
              onCalculate={handleNumerologyCalculate}
              showProfile={false}
            />
          </div>

          {/* Results Section */}
          {showResults && numerologyProfile && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Personalized Gemstone Guide
              </h2>
              <GemstoneRecommendations profile={numerologyProfile} showJewelry={true} />
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Numerology Gemstone Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Path Alignment</h3>
              <p className="text-gray-600">
                Each Life Path Number (1-9, 11, 22, 33) has specific gemstones that enhance your natural energy and support your life purpose.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BeakerIcon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healing Properties</h3>
              <p className="text-gray-600">
                Gemstones carry unique healing energies that support physical, emotional, and spiritual well-being.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jewelry Recommendations</h3>
              <p className="text-gray-600">
                Personalized jewelry suggestions with specific gemstones, metals, and designs that align with your energy.
              </p>
            </div>
          </div>

          {/* Sample Gemstone Mappings */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample Life Path Gemstones</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Life Path 1 (Pioneer):</span>
                  <span className="font-medium text-red-600">Ruby</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 2 (Mediator):</span>
                  <span className="font-medium text-gray-600">Pearl</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 3 (Communicator):</span>
                  <span className="font-medium text-yellow-600">Citrine</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 4 (Builder):</span>
                  <span className="font-medium text-green-600">Emerald</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 5 (Adventurer):</span>
                  <span className="font-medium text-blue-600">Aquamarine</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 6 (Nurturer):</span>
                  <span className="font-medium text-pink-600">Rose Quartz</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 7 (Seeker):</span>
                  <span className="font-medium text-purple-600">Amethyst</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 8 (Achiever):</span>
                  <span className="font-medium text-white bg-gray-800 px-2 rounded">Diamond</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Path 9 (Humanitarian):</span>
                  <span className="font-medium text-blue-800">Lapis Lazuli</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Master Number Gemstones</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-600 font-semibold">🌟 Life Path 11 (Master Intuitive):</span>
                  <span className="font-medium text-purple-600">Labradorite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-600 font-semibold">🌟 Life Path 22 (Master Builder):</span>
                  <span className="font-medium text-indigo-600">Clear Quartz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pink-600 font-semibold">🌟 Life Path 33 (Master Teacher):</span>
                  <span className="font-medium text-pink-600">Moldavite</span>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <p className="text-xs text-gray-700">
                    Master Numbers receive the most powerful and rare gemstones, specially selected for their elevated spiritual vibration and unique mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Benefits of Numerology-Aligned Gemstones
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                  <StarIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enhanced Energy Alignment</h3>
                  <p className="text-sm text-gray-600">Gemstones that match your Life Path Number amplify your natural energy and support your life purpose.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                  <HeartIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Emotional Healing</h3>
                  <p className="text-sm text-gray-600">Specific gemstones can help heal emotional wounds and promote inner peace and balance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1">
                  <EyeIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Spiritual Growth</h3>
                  <p className="text-sm text-gray-600">Aligned gemstones support your spiritual development and enhance your intuitive abilities.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <BeakerIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Physical Well-being</h3>
                  <p className="text-sm text-gray-600">Many gemstones have specific healing properties that support physical health and vitality.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <AcademicCapIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Guidance</h3>
                  <p className="text-sm text-gray-600">Receive specific recommendations for jewelry types, metals, and wearing times.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                  <SparklesIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Manifestation Support</h3>
                  <p className="text-sm text-gray-600">Aligned gemstones can help you manifest your goals and attract abundance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Discover Your Perfect Gemstone?
            </h2>
            <p className="text-purple-100 mb-6">
              Sign up with your birth date to unlock personalized gemstone and jewelry recommendations!
            </p>
            <a
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
