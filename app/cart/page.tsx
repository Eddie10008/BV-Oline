'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react'
import { useCart } from '@/components/providers/CartProvider'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { state: cart, removeItem, updateQuantity } = useCart()
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const handleQuantityChange = (id: string, newQuantity: number, variantId?: string) => {
    if (newQuantity < 1) return
    
    setIsUpdating(id)
    updateQuantity(id, newQuantity, variantId)
    setTimeout(() => setIsUpdating(null), 300)
  }

  const handleRemoveItem = (id: string, variantId?: string) => {
    removeItem(id, variantId)
    toast.success('Item removed from cart')
  }

  const subtotal = cart.total
  const shipping = subtotal > 99 ? 0 : 9.99
  const tax = subtotal * 0.10 // 10% GST
  const total = subtotal + shipping + tax

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cart.itemCount} items in your cart</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                </div>
                
                <div className="divide-y">
                  {cart.items.map((item) => (
                    <div key={`${item.id}-${item.variantId || 'default'}`} className="p-6">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                          {item.size && (
                            <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>
                          )}
                          {item.color && (
                            <p className="text-sm text-gray-600 mb-1">Color: {item.color}</p>
                          )}
                          <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.variantId)}
                            disabled={isUpdating === item.id}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.variantId)}
                            disabled={isUpdating === item.id}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id, item.variantId)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-4">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (GST 10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  {subtotal < 99 && (
                    <div className="bg-indian-red/10 border border-indian-red/20 rounded-lg p-4">
                      <p className="text-sm text-indian-red">
                        Add ${(99 - subtotal).toFixed(2)} more to get free shipping!
                      </p>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <button className="w-full btn-primary py-3 text-lg font-semibold">
                    Proceed to Checkout
                  </button>

                  {/* Continue Shopping */}
                  <Link
                    href="/"
                    className="w-full btn-outline py-3 text-center block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
