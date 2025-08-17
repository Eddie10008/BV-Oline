'use client';

import { useState } from 'react';
import { XMarkIcon, GiftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

interface RewardsClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableRewards: number;
  totalPoints: number;
}

export default function RewardsClaimModal({ 
  isOpen, 
  onClose, 
  availableRewards, 
  totalPoints 
}: RewardsClaimModalProps) {
  const [claimAmount, setClaimAmount] = useState(availableRewards);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = async () => {
    if (claimAmount > availableRewards) {
      toast.error('Cannot claim more than available rewards');
      return;
    }

    setIsClaiming(true);
    try {
      const response = await fetch('/api/seller/incentives', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'claim-reward',
          amount: claimAmount,
        }),
      });

      if (response.ok) {
        setClaimed(true);
        toast.success(`Successfully claimed ₹${claimAmount}`);
        setTimeout(() => {
          onClose();
          setClaimed(false);
        }, 2000);
      } else {
        toast.error('Failed to claim reward');
      }
    } catch (error) {
      toast.error('An error occurred while claiming reward');
    } finally {
      setIsClaiming(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        {!claimed ? (
          <>
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Claim Rewards</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GiftIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Available Rewards
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-2">
                  ₹{availableRewards.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  Total Points: {totalPoints.toLocaleString()}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Claim Amount
                  </label>
                  <input
                    type="number"
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(Number(e.target.value))}
                    max={availableRewards}
                    min={0}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Maximum: ₹{availableRewards.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Reward Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Claim Amount</span>
                      <span className="font-medium">₹{claimAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span className="font-medium">₹0</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between font-medium text-gray-900">
                        <span>Net Amount</span>
                        <span>₹{claimAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClaim}
                    disabled={isClaiming || claimAmount <= 0}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                  >
                    {isClaiming ? 'Claiming...' : 'Claim Rewards'}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Rewards Claimed Successfully!
            </h3>
            <p className="text-green-600 font-medium mb-4">
              ₹{claimAmount.toLocaleString()} will be credited to your account within 3-5 business days.
            </p>
            <p className="text-sm text-gray-600">
              You will receive an email confirmation shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
