'use client';

import React, { useState } from 'react';
import NumerologyCalculator from '../../components/NumerologyCalculator';
import NumerologyDiscountCard from '../../components/NumerologyDiscountCard';
import { 
  calculateNumerologyDiscount, 
  getSpecialOccasionDiscount,
  NumerologyDiscount,
  DiscountCalculation 
} from '../../lib/numerology-discounts';
import { NumerologyProfile } from '../../lib/numerology';

export default function DiscountDemoPage() {
  const [numerologyProfile, setNumerologyProfile] = useState<NumerologyProfile | null>(null);
  const [discounts, setDiscounts] = useState<NumerologyDiscount[]>([]);
  const [calculation, setCalculation] = useState<DiscountCalculation | undefined>(undefined);
  const [showResults, setShowResults] = useState(false);

  const handleNumerologyCalculate = (profile: NumerologyProfile) => {
    setNumerologyProfile(profile);
    
    // Create a sample date of birth for demo
    const sampleDateOfBirth = new Date('1990-05-15');
    
    // Calculate discounts
    const discountCalc = calculateNumerologyDiscount(sampleDateOfBirth, profile);
    const specialDiscount = getSpecialOccasionDiscount(sampleDateOfBirth, profile);
    
    const allDiscounts = [discountCalc.discountDetails];
    if (specialDiscount) {
      allDiscounts.push(specialDiscount);
    }
    
    setCalculation(discountCalc);
    setDiscounts(allDiscounts);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Numerology Discount Demo
          </h1>
          <p className="text-lg text-gray-600">
            Discover how your Life Path Number and birth date create personalized discounts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculate Your Discounts
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
                Your Personalized Discounts
              </h2>
              
              <div className="space-y-6">
                {discounts.map((discount, index) => (
                  <NumerologyDiscountCard
                    key={index}
                    discount={discount}
                    calculation={calculation}
                  />
                ))}
              </div>

              {/* Discount Explanation */}
              <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How Your Discount Was Calculated
                </h3>
                
                {calculation && (
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Life Path Number {numerologyProfile.lifePathNumber}:</span>
                      <span className="font-medium">{Math.round(calculation.baseDiscount * 100)}%</span>
                    </div>
                    
                    {calculation.luckyNumberBonus > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Lucky Number Bonus:</span>
                        <span className="font-medium">{Math.round(calculation.luckyNumberBonus * 100)}%</span>
                      </div>
                    )}
                    
                    {calculation.seasonalBonus > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Seasonal Bonus:</span>
                        <span className="font-medium">{Math.round(calculation.seasonalBonus * 100)}%</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-bold text-lg">
                      <span>Total Discount:</span>
                      <span className="text-purple-600">{calculation.discountDetails.percentage}%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Numerology Discount Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1-33</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Path Numbers</h3>
              <p className="text-gray-600">
                Each Life Path Number (1-9, 11, 22, 33) has unique discount rates based on personality traits.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">🎁</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Occasions</h3>
              <p className="text-gray-600">
                Birthday specials, birth month celebrations, and lucky number days provide extra savings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">🌟</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Master Numbers</h3>
              <p className="text-gray-600">
                Life Path Numbers 11, 22, and 33 receive premium discount rates for their special energy.
              </p>
            </div>
          </div>

          {/* Discount Examples */}
                     <div className="mt-12 grid md:grid-cols-2 gap-8">
             <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample Discounts by Life Path</h3>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span>Life Path 1 (Pioneer):</span>
                   <span className="font-medium">6-15% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Life Path 5 (Adventurer):</span>
                   <span className="font-medium">9-18% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Life Path 8 (Achiever):</span>
                   <span className="font-medium">13-22% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-purple-600 font-semibold">🌟 Life Path 11 (Master Intuitive):</span>
                   <span className="font-medium text-purple-600">25-45% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-indigo-600 font-semibold">🌟 Life Path 22 (Master Builder):</span>
                   <span className="font-medium text-indigo-600">30-55% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-pink-600 font-semibold">🌟 Life Path 33 (Master Teacher):</span>
                   <span className="font-medium text-pink-600">35-65% off</span>
                 </div>
               </div>
             </div>
            
                         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Occasion Bonuses</h3>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span>Birthday Special:</span>
                   <span className="font-medium">25% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-purple-600 font-semibold">🌟 Master 11 Birthday:</span>
                   <span className="font-medium text-purple-600">40% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-indigo-600 font-semibold">🌟 Master 22 Birthday:</span>
                   <span className="font-medium text-indigo-600">50% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-pink-600 font-semibold">🌟 Master 33 Birthday:</span>
                   <span className="font-medium text-pink-600">60% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Birth Month:</span>
                   <span className="font-medium">15% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Lucky Number Day:</span>
                   <span className="font-medium">12% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Numerology Compatibility:</span>
                   <span className="font-medium">18% off</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-pink-600 font-semibold">🌟 Twin Flame Compatibility:</span>
                   <span className="font-medium text-pink-600">45% off</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Get Your Personalized Discounts?
            </h2>
            <p className="text-purple-100 mb-6">
              Sign up with your birth date to unlock your unique numerology-based savings!
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
