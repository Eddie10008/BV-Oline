'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

interface Shipment {
  id: string;
  trackingNumber: string | null;
  carrier: string | null;
  status: string;
  shippedAt: Date | null;
  deliveredAt: Date | null;
  notes: string | null;
  order: {
    id: string;
    status: string;
    total: number;
    user: {
      name: string | null;
      email: string;
    };
    items: Array<{
      id: string;
      quantity: number;
      product: {
        name: string;
        images: string;
      };
    }>;
  };
}

interface UpdateShipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipment: Shipment;
}

interface ShipmentFormData {
  trackingNumber: string;
  carrier: string;
  status: string;
  notes: string;
}

export default function UpdateShipmentModal({ 
  isOpen, 
  onClose, 
  shipment 
}: UpdateShipmentModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShipmentFormData>({
    defaultValues: {
      trackingNumber: shipment.trackingNumber || '',
      carrier: shipment.carrier || '',
      status: shipment.status,
      notes: shipment.notes || '',
    },
  });

  const onSubmit = async (data: ShipmentFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/seller/shipments/${shipment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Shipment updated successfully!');
        onClose();
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to update shipment');
      }
    } catch (error) {
      toast.error('An error occurred while updating the shipment');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const images = JSON.parse(shipment.order.items[0]?.product.images || '[]');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Update Shipment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Order Details */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Order Details</h3>
            <div className="flex items-center space-x-4">
              <img
                src={images[0] || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}
                alt={shipment.order.items[0]?.product.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Order #{shipment.order.id.slice(-8)}
                </p>
                <p className="text-sm text-gray-500">
                  {shipment.order.items.length} item(s) • ₹{shipment.order.total.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Customer: {shipment.order.user.name || 'N/A'} ({shipment.order.user.email})
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  {...register('trackingNumber')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter tracking number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carrier
                </label>
                <select
                  {...register('carrier')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select carrier</option>
                  <option value="DTDC">DTDC</option>
                  <option value="Blue Dart">Blue Dart</option>
                  <option value="FedEx">FedEx</option>
                  <option value="DHL">DHL</option>
                  <option value="India Post">India Post</option>
                  <option value="Delhivery">Delhivery</option>
                  <option value="Ecom Express">Ecom Express</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  {...register('status', { required: 'Status is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="PENDING">Pending</option>
                  <option value="SHIPPED">Shipped</option>
                  <option value="DELIVERED">Delivered</option>
                  <option value="RETURNED">Returned</option>
                </select>
                {errors.status && (
                  <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                {...register('notes')}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add any additional notes..."
              />
            </div>

            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
              >
                {isLoading ? 'Updating...' : 'Update Shipment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
