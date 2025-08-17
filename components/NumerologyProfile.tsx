'use client';

import React, { useState } from 'react';
import { NumerologyProfile } from '../lib/numerology';
import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon, 
  SwatchIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface NumerologyProfileProps {
  profile: NumerologyProfile;
  isEditable?: boolean;
  onUpdate?: (profile: NumerologyProfile) => void;
}

export default function NumerologyProfileComponent({ 
  profile, 
  isEditable = false,
  onUpdate 
}: NumerologyProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getLifePathIcon = (number: number) => {
    if (number === 11 || number === 22 || number === 33) {
      return <SparklesIcon className="w-6 h-6 text-purple-500" />;
    }
    return <StarIcon className="w-6 h-6 text-yellow-500" />;
  };

  const getElementIcon = (element: string) => {
    switch (element.toLowerCase()) {
      case 'fire':
        return <SparklesIcon className="w-5 h-5 text-red-500" />;
      case 'water':
        return <GlobeAltIcon className="w-5 h-5 text-blue-500" />;
      case 'earth':
        return <AcademicCapIcon className="w-5 h-5 text-green-500" />;
      case 'air':
        return <LightBulbIcon className="w-5 h-5 text-gray-500" />;
      default:
        return <StarIcon className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div 
        className="p-6 cursor-pointer"
        style={{ 
          background: `linear-gradient(135deg, ${profile.themeColors.primary}20, ${profile.themeColors.secondary}20)`,
          borderBottom: `2px solid ${profile.themeColors.primary}30`
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getLifePathIcon(profile.lifePathNumber)}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Life Path Number {profile.lifePathNumber}
              </h2>
              <p className="text-gray-600 font-medium">
                {profile.lifePathMeaning}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: profile.themeColors.primary }}
            />
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: profile.themeColors.secondary }}
            />
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: profile.themeColors.accent }}
            />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Personality Traits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <HeartIcon className="w-5 h-5 mr-2 text-pink-500" />
              Personality Traits
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.personalityTraits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${profile.themeColors.primary}20`,
                    color: profile.themeColors.primary,
                    border: `1px solid ${profile.themeColors.primary}40`
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Lucky Colors & Numbers */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SwatchIcon className="w-5 h-5 mr-2 text-purple-500" />
                Lucky Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.luckyColors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <StarIcon className="w-5 h-5 mr-2 text-yellow-500" />
                Lucky Numbers
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.luckyNumbers.map((number, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${profile.themeColors.secondary}20`,
                      color: profile.themeColors.secondary,
                      border: `1px solid ${profile.themeColors.secondary}40`
                    }}
                  >
                    {number}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Element & Ruling Planet */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                {getElementIcon(profile.element)}
                <span className="ml-2">Element</span>
              </h3>
              <p className="text-gray-700 font-medium">{profile.element}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2 text-blue-500" />
                Ruling Planet
              </h3>
              <p className="text-gray-700 font-medium">{profile.rulingPlanet}</p>
            </div>
          </div>

          {/* Career Suggestions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <AcademicCapIcon className="w-5 h-5 mr-2 text-green-500" />
              Career Suggestions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {profile.careerSuggestions.map((career, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Life Purpose */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
              Life Purpose
            </h3>
            <p className="text-gray-700 leading-relaxed italic">
              "{profile.lifePurpose}"
            </p>
          </div>

          {/* Compatibility */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <UserGroupIcon className="w-5 h-5 mr-2 text-indigo-500" />
              Compatible Life Path Numbers
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.compatibility.map((number, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${profile.themeColors.accent}`,
                    color: profile.themeColors.primary,
                    border: `1px solid ${profile.themeColors.primary}40`
                  }}
                >
                  {number}
                </span>
              ))}
            </div>
          </div>

          {/* Theme Preview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Your Personal Theme
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(profile.themeColors).map(([key, color]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-2 border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Collapse/Expand Button */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show More Details'}
        </button>
      </div>
    </div>
  );
}
