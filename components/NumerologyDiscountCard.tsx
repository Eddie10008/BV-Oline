'use client';

import React, { useState } from 'react';
import { 
  GiftIcon, 
  SparklesIcon, 
  StarIcon, 
  CalendarIcon,
  ClipboardDocumentIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { NumerologyDiscount, DiscountCalculation } from '../lib/numerology-discounts';

interface NumerologyDiscountCardProps {
  discount: NumerologyDiscount;
  calculation?: DiscountCalculation;
  onApply?: (discount: NumerologyDiscount) => void;
  isApplied?: boolean;
}

export default function NumerologyDiscountCard({ 
  discount, 
  calculation,
  onApply,
  isApplied = false 
}: NumerologyDiscountCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(discount.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getDiscountIcon = () => {
    if (discount.reason.includes('Birthday')) {
      return <GiftIcon className="w-6 h-6 text-pink-500" />;
    }
    if (discount.reason.includes('Lucky')) {
      return <StarIcon className="w-6 h-6 text-yellow-500" />;
    }
    if (discount.reason.includes('Master')) {
      return <SparklesIcon className="w-6 h-6 text-purple-500" />;
    }
    return <GiftIcon className="w-6 h-6 text-green-500" />;
  };

  const getTimeRemaining = () => {
    const now = new Date();
    const validUntil = new Date(discount.validUntil);
    const diff = validUntil.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} remaining`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
    return 'Less than 1 hour remaining';
  };

  const isExpired = new Date() > new Date(discount.validUntil);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-xl border-2 border-purple-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getDiscountIcon()}
            <div>
              <h3 className="text-lg font-bold">Numerology Discount</h3>
              <p className="text-purple-100 text-sm">{discount.reason}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{discount.percentage}%</div>
            <div className="text-purple-100 text-sm">OFF</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {discount.description}
        </p>

        {/* Discount Code */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Your Discount Code</p>
              <p className="text-xl font-mono font-bold text-purple-600">{discount.code}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Validity */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CalendarIcon className="w-4 h-4" />
          <span>Valid until: {formatDate(discount.validUntil)}</span>
        </div>

        {/* Time Remaining */}
        <div className={`text-sm font-medium ${
          isExpired ? 'text-red-600' : 'text-green-600'
        }`}>
          {getTimeRemaining()}
        </div>

        {/* Calculation Breakdown */}
        {calculation && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-gray-800">Discount Breakdown</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Base Discount:</span>
                <span className="font-medium">{Math.round(calculation.baseDiscount * 100)}%</span>
              </div>
              {calculation.luckyNumberBonus > 0 && (
                <div className="flex justify-between">
                  <span>Lucky Number Bonus:</span>
                  <span className="font-medium">{Math.round(calculation.luckyNumberBonus * 100)}%</span>
                </div>
              )}
              {calculation.seasonalBonus > 0 && (
                <div className="flex justify-between">
                  <span>Seasonal Bonus:</span>
                  <span className="font-medium">{Math.round(calculation.seasonalBonus * 100)}%</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-1 flex justify-between font-bold">
                <span>Total Discount:</span>
                <span className="text-purple-600">{discount.percentage}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Apply Button */}
        {!isExpired && onApply && (
          <button
            onClick={() => onApply(discount)}
            disabled={isApplied}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              isApplied
                ? 'bg-green-100 text-green-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isApplied ? (
              <div className="flex items-center justify-center space-x-2">
                <CheckIcon className="w-5 h-5" />
                <span>Discount Applied</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <GiftIcon className="w-5 h-5" />
                <span>Apply Discount</span>
              </div>
            )}
          </button>
        )}

        {/* Expired Message */}
        {isExpired && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-700 font-medium">This discount has expired</p>
            <p className="text-red-600 text-sm mt-1">Check your profile for new numerology discounts!</p>
          </div>
        )}
      </div>
    </div>
  );
}
