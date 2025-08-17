'use client';

import { useState } from 'react';
import { 
  calculateLifePathNumber, 
  generateNumerologyProfile, 
  NumerologyProfile 
} from '@/lib/numerology';
import { 
  CalculatorIcon, 
  CalendarIcon, 
  SparklesIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import NumerologyProfileComponent from './NumerologyProfile';

interface NumerologyCalculatorProps {
  onCalculate?: (profile: NumerologyProfile) => void;
  showProfile?: boolean;
}

export default function NumerologyCalculator({ 
  onCalculate, 
  showProfile = true 
}: NumerologyCalculatorProps) {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [calculatedProfile, setCalculatedProfile] = useState<NumerologyProfile | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (!dateOfBirth) {
      alert('Please enter your date of birth');
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      try {
        const birthDate = new Date(dateOfBirth);
        const lifePathNumber = calculateLifePathNumber(birthDate);
        const profile = generateNumerologyProfile(lifePathNumber);
        
        setCalculatedProfile(profile);
        setShowResult(true);
        
        if (onCalculate) {
          onCalculate(profile);
        }
      } catch (error) {
        alert('Error calculating numerology. Please check your date of birth.');
      } finally {
        setIsCalculating(false);
      }
    }, 1000);
  };

  const resetCalculator = () => {
    setDateOfBirth('');
    setCalculatedProfile(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Calculator Form */}
      {!showResult && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <CalculatorIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Discover Your Life Path Number
            </h2>
            <p className="text-gray-600">
              Enter your date of birth to reveal your unique numerology profile and personal theme
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!dateOfBirth || isCalculating}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Calculating...</span>
                </>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5" />
                  <span>Calculate My Life Path Number</span>
                </>
              )}
            </button>
          </div>

          {/* Information */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">
              What is a Life Path Number?
            </h3>
            <p className="text-sm text-blue-800">
              Your Life Path Number is one of the most important numbers in numerology. 
              It reveals your life's purpose, personality traits, and the lessons you're meant to learn. 
              Based on your date of birth, it provides insights into your natural talents and the path you're destined to follow.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {showResult && calculatedProfile && (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <SparklesIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Your Numerology Profile is Ready!
            </h3>
            <p className="text-green-700">
              Born on {new Date(dateOfBirth).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <button
              onClick={resetCalculator}
              className="mt-4 text-sm text-green-600 hover:text-green-800 font-medium"
            >
              Calculate for different date
            </button>
          </div>

          {/* Profile Display */}
          {showProfile && (
            <NumerologyProfileComponent profile={calculatedProfile} />
          )}

          {/* Theme Preview */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Personal Theme Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(calculatedProfile.themeColors).map(([key, color]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-16 h-16 rounded-xl mx-auto mb-2 border-2 border-gray-200 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-gray-600 font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    {color}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              These colors will be used to personalize your shopping experience on our platform
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
