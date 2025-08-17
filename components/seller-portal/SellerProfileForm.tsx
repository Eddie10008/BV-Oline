'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface Seller {
  id: string;
  businessName: string;
  description: string | null;
  logo: string | null;
  address: string;
  phone: string | null;
  website: string | null;
  gstNumber: string | null;
  panNumber: string | null;
  bankDetails: string | null;
  isVerified: boolean;
  isActive: boolean;
  commission: number;
}

interface SellerProfileFormProps {
  seller: Seller | null;
}

interface SellerFormData {
  businessName: string;
  description: string;
  logo: string;
  address: string;
  phone: string;
  website: string;
  gstNumber: string;
  panNumber: string;
  bankDetails: string;
}

export default function SellerProfileForm({ seller }: SellerProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerFormData>({
    defaultValues: {
      businessName: seller?.businessName || '',
      description: seller?.description || '',
      logo: seller?.logo || '',
      address: seller?.address || '',
      phone: seller?.phone || '',
      website: seller?.website || '',
      gstNumber: seller?.gstNumber || '',
      panNumber: seller?.panNumber || '',
      bankDetails: seller?.bankDetails || '',
    },
  });

  const onSubmit = async (data: SellerFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/seller/profile', {
        method: seller ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(seller ? 'Profile updated successfully!' : 'Profile created successfully!');
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to save profile');
      }
    } catch (error) {
      toast.error('An error occurred while saving the profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">
          {seller ? 'Edit Business Profile' : 'Complete Business Profile'}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {seller 
            ? 'Update your business information and settings.'
            : 'Complete your business profile to start selling on our platform.'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              {...register('businessName', { required: 'Business name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter business name"
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              {...register('website')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://your-website.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo URL
            </label>
            <input
              type="url"
              {...register('logo')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://example.com/logo.png"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GST Number
            </label>
            <input
              type="text"
              {...register('gstNumber')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter GST number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PAN Number
            </label>
            <input
              type="text"
              {...register('panNumber')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter PAN number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Address *
          </label>
          <textarea
            {...register('address', { required: 'Business address is required' })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter complete business address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Description
          </label>
          <textarea
            {...register('description')}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe your business, products, and services..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank Details
          </label>
          <textarea
            {...register('bankDetails')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Bank name, account number, IFSC code, etc."
          />
        </div>

        {seller && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Account Status</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  seller.isVerified 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {seller.isVerified ? 'Verified' : 'Pending Verification'}
                </span>
              </div>
              <div className="flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  seller.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {seller.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Commission: {seller.commission}%
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : (seller ? 'Update Profile' : 'Create Profile')}
          </button>
        </div>
      </form>
    </div>
  );
}
