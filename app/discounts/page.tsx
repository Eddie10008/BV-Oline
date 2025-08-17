'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import NumerologyDiscountCard from '../../components/NumerologyDiscountCard';
import { NumerologyDiscount, DiscountCalculation } from '../../lib/numerology-discounts';
import { 
  GiftIcon, 
  SparklesIcon, 
  StarIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function DiscountsPage() {
  const { data: session, status } = useSession();
  const [discounts, setDiscounts] = useState<NumerologyDiscount[]>([]);
  const [calculation, setCalculation] = useState<DiscountCalculation | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      redirect('/auth/signin');
      return;
    }

    fetchDiscounts();
  }, [session, status]);

  const fetchDiscounts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/discounts');
      
      if (!response.ok) {
        throw new Error('Failed to fetch discounts');
      }

      const data = await response.json();
      setDiscounts(data.discounts);
      setCalculation(data.calculation);
    } catch (error) {
      setError('Failed to load your personalized discounts');
      console.error('Error fetching discounts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyDiscount = (discount: NumerologyDiscount) => {
    setAppliedDiscount(discount.code);
    // Here you would typically apply the discount to the cart
    console.log('Applying discount:', discount);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your personalized discounts...</p>
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
              <button
                onClick={fetchDiscounts}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <GiftIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Numerology Discounts
          </h1>
          <p className="text-lg text-gray-600">
            Personalized discounts based on your Life Path Number and birth date
          </p>
        </div>

        {/* User Info */}
        {calculation && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Welcome, {session?.user?.name}!
                </h2>
                <p className="text-gray-600">
                  Life Path Number {calculation.discountDetails.percentage}% discount available
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <StarIcon className="w-4 h-4 text-yellow-500" />
                <span>Base Discount: {Math.round(calculation.baseDiscount * 100)}%</span>
              </div>
              {calculation.luckyNumberBonus > 0 && (
                <div className="flex items-center space-x-2">
                  <SparklesIcon className="w-4 h-4 text-purple-500" />
                  <span>Lucky Bonus: {Math.round(calculation.luckyNumberBonus * 100)}%</span>
                </div>
              )}
              {calculation.seasonalBonus > 0 && (
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4 text-green-500" />
                  <span>Seasonal Bonus: {Math.round(calculation.seasonalBonus * 100)}%</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Discounts Grid */}
        {discounts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {discounts.map((discount, index) => (
              <NumerologyDiscountCard
                key={index}
                discount={discount}
                calculation={calculation}
                onApply={handleApplyDiscount}
                isApplied={appliedDiscount === discount.code}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiftIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Discounts Available
            </h3>
            <p className="text-gray-600 mb-6">
              Complete your numerology profile to unlock personalized discounts.
            </p>
            <a
              href="/auth/signup"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Complete Profile
            </a>
          </div>
        )}

        {/* How It Works */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How Numerology Discounts Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Path Number</h3>
              <p className="text-gray-600">
                Your Life Path Number determines your base discount percentage and personality-based bonuses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Birth Date Magic</h3>
              <p className="text-gray-600">
                Your birth date provides seasonal bonuses, lucky number days, and special occasion discounts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiftIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Codes</h3>
              <p className="text-gray-600">
                Each discount comes with a unique code that reflects your numerology profile and birth date.
              </p>
            </div>
          </div>

          {/* Discount Types */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Regular Discounts</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Base discount based on Life Path Number</li>
                <li>• Lucky number alignment bonuses</li>
                <li>• Seasonal birth month bonuses</li>
                <li>• Age-based loyalty bonuses</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Occasions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Birthday special (25% off)</li>
                <li>• Birth month celebration (15% off)</li>
                <li>• Lucky number days (12% off)</li>
                <li>• Numerology compatibility (18% off)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-indigo-600" />
            Pro Tips for Maximum Savings
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium mb-2">🕐 Timing is Everything</p>
              <p>Use your discounts on your lucky number days for extra savings!</p>
            </div>
            <div>
              <p className="font-medium mb-2">🎁 Stack Your Benefits</p>
              <p>Combine regular discounts with special occasion bonuses for maximum value.</p>
            </div>
            <div>
              <p className="font-medium mb-2">🌟 Master Numbers</p>
              <p>Life Path Numbers 11, 22, and 33 receive premium discount rates.</p>
            </div>
            <div>
              <p className="font-medium mb-2">💫 Seasonal Alignment</p>
              <p>Shop during your birth month for additional seasonal bonuses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
