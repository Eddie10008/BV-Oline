import React from 'react';
import NumerologyCalculator from '@/components/NumerologyCalculator';

export default function NumerologyDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Numerology Calculator Demo
          </h1>
          <p className="text-lg text-gray-600">
            Discover your life path number and personalized theme based on your date of birth
          </p>
        </div>

        <NumerologyCalculator showProfile={true} />
      </div>
    </div>
  );
}
