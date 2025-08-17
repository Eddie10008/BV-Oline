import React from 'react';
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';

interface Product {
  productId: string;
  _sum: {
    quantity: number | null;
  };
  product: {
    id: string;
    name: string;
    images: string;
    price: number;
  } | null;
}

interface TopProductsProps {
  products: Product[];
}

export default function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Top Selling Products</h3>
          <Link
            href="/seller-portal/products"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            View all
          </Link>
        </div>
      </div>

      <div className="overflow-hidden">
        {products.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No products sold yet</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {products.map((item, index) => {
              if (!item.product) return null;
              
              const images = JSON.parse(item.product.images || '[]');
              return (
                <li key={item.productId} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">
                            #{index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img
                          src={images[0] || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            ₹{item.product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {item._sum.quantity || 0} sold
                        </p>
                      </div>
                      <Link
                        href={`/product/${item.product.id}`}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
