'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import GemstoneRecommendations from '../../components/GemstoneRecommendations';
import { NumerologyProfile } from '../../lib/numerology';
import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon,
  EyeIcon,
  AcademicCapIcon,
  BeakerIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

export default function GemstonesPage() {
  const { data: session, status } = useSession();
  const [numerologyProfile, setNumerologyProfile] = useState<NumerologyProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      redirect('/auth/signin');
      return;
    }

    fetchNumerologyProfile();
  }, [session, status]);

  const fetchNumerologyProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/theme');
      
      if (!response.ok) {
        throw new Error('Failed to fetch numerology profile');
      }

      const data = await response.json();
      if (data.numerologyProfile) {
        setNumerologyProfile(JSON.parse(data.numerologyProfile));
      } else {
        setError('Numerology profile not found. Please complete your profile first.');
      }
    } catch (error) {
      setError('Failed to load your gemstone recommendations');
      console.error('Error fetching numerology profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your gemstone recommendations...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-700 font-medium">{error}</p>
              <a
                href="/auth/signup"
                className="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Complete Your Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!numerologyProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Gemstone Recommendations Available
            </h3>
            <p className="text-gray-600 mb-6">
              Complete your numerology profile to unlock personalized gemstone recommendations.
            </p>
            <a
              href="/auth/signup"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Complete Profile
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <SparklesIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Numerology Gemstone Guide
          </h1>
          <p className="text-lg text-gray-600">
            Discover gemstones and jewelry that align with your Life Path Number {numerologyProfile.lifePathNumber}
          </p>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <StarIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Welcome, {session?.user?.name}!
              </h2>
              <p className="text-gray-600">
                Life Path Number {numerologyProfile.lifePathNumber} - {numerologyProfile.lifePathMeaning}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <HeartIcon className="w-4 h-4 text-pink-500" />
              <span>Element: {numerologyProfile.element}</span>
            </div>
            <div className="flex items-center space-x-2">
              <EyeIcon className="w-4 h-4 text-blue-500" />
              <span>Ruling Planet: {numerologyProfile.rulingPlanet}</span>
            </div>
            <div className="flex items-center space-x-2">
              <AcademicCapIcon className="w-4 h-4 text-green-500" />
              <span>Life Purpose: {numerologyProfile.lifePurpose}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <GemstoneRecommendations profile={numerologyProfile} />
        </div>

        {/* Educational Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Understanding Numerology Gemstones
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Path Alignment</h3>
              <p className="text-gray-600">
                Each Life Path Number resonates with specific gemstones that enhance your natural energy and support your life purpose.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BeakerIcon className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healing Properties</h3>
              <p className="text-gray-600">
                Gemstones carry unique healing energies that can support physical, emotional, and spiritual well-being.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spiritual Enhancement</h3>
              <p className="text-gray-600">
                Wearing aligned gemstones can amplify your spiritual gifts and help you fulfill your soul's mission.
              </p>
            </div>
          </div>
        </div>

        {/* Master Number Special Section */}
        {(numerologyProfile.lifePathNumber === 11 || numerologyProfile.lifePathNumber === 22 || numerologyProfile.lifePathNumber === 33) && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                🌟 Master Number {numerologyProfile.lifePathNumber} Special
              </h2>
              <p className="text-purple-100 mb-6">
                As a Master Number, you have access to the most powerful gemstones and spiritual jewelry. 
                Your energy is amplified, and your gemstone recommendations are specially curated for your elevated vibration.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Enhanced Energy</h3>
                  <p className="text-sm text-purple-100">
                    Your gemstones work with amplified power to support your master number mission.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Spiritual Leadership</h3>
                  <p className="text-sm text-purple-100">
                    Your jewelry choices can inspire and guide others on their spiritual journey.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Premium Selection</h3>
                  <p className="text-sm text-purple-100">
                    Access to the finest gemstones and most powerful spiritual jewelry designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-indigo-600" />
            Pro Tips for Gemstone Jewelry
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium mb-2">🔮 Cleansing & Charging</p>
              <p>Regularly cleanse your gemstone jewelry with moonlight or salt water to maintain their energy.</p>
            </div>
            <div>
              <p className="font-medium mb-2">⏰ Timing Matters</p>
              <p>Wear your gemstones during their recommended times for maximum spiritual benefit.</p>
            </div>
            <div>
              <p className="font-medium mb-2">💎 Authenticity Check</p>
              <p>Always verify the authenticity of your gemstones with certified gemologists.</p>
            </div>
            <div>
              <p className="font-medium mb-2">🌟 Intention Setting</p>
              <p>Set clear intentions when wearing your gemstone jewelry to amplify their effects.</p>
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
              Explore our collection of numerology-aligned jewelry and find pieces that resonate with your unique energy!
            </p>
            <a
              href="/search?category=jewelry"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse Jewelry Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
