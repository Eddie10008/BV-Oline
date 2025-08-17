'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '@/components/providers/CartProvider'
import { CreditCard, Lock, Truck, Shield, MapPin, Phone, Mail, User, Calendar } from 'lucide-react'
import toast from 'react-hot-toast'

const australianStates = [
  'Australian Capital Territory',
  'New South Wales',
  'Northern Territory',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia'
]

export default function CheckoutPage() {
  const { state: cart, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: '',
    postcode: '',
    country: 'Australia'
  })
  
  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: '',
    postcode: '',
    country: 'Australia'
  })
  
  const [paymentInfo, setPaymentInfo] = useState({
    method: 'card',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  })

  const subtotal = cart.total
  const shipping = subtotal > 99 ? 0 : 9.99
  const tax = subtotal * 0.10 // 10% GST
  const total = subtotal + shipping + tax

  const handleShippingChange = (field: string, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }))
    if (billingInfo.sameAsShipping) {
      setBillingInfo(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleBillingChange = (field: string, value: string) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }))
  }

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentInfo(prev => ({ ...prev, [field]: value }))
  }

  const validateStep1 = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'suburb', 'state', 'postcode']
    return required.every(field => {
      const value = shippingInfo[field as keyof typeof shippingInfo]
      return typeof value === 'string' && value.trim() !== ''
    })
  }

  const validateStep2 = () => {
    if (!billingInfo.sameAsShipping) {
      const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'suburb', 'state', 'postcode']
      return required.every(field => {
        const value = billingInfo[field as keyof typeof billingInfo]
        return typeof value === 'string' && value.trim() !== ''
      })
    }
    return true
  }

  const validateStep3 = () => {
    const required = ['cardNumber', 'cardName', 'expiry', 'cvv']
    return required.every(field => {
      const value = paymentInfo[field as keyof typeof paymentInfo]
      return typeof value === 'string' && value.trim() !== ''
    })
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) {
      toast.error('Please fill in all required shipping information')
      return
    }
    if (step === 2 && !validateStep2()) {
      toast.error('Please fill in all required billing information')
      return
    }
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handlePlaceOrder = async () => {
    if (!validateStep3()) {
      toast.error('Please fill in all payment information')
      return
    }

    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      toast.success('Order placed successfully!')
      clearCart()
      // Redirect to order confirmation
    }, 2000)
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart before proceeding to checkout.</p>
            <a href="/" className="btn-primary">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { number: 1, title: 'Shipping', icon: Truck },
              { number: 2, title: 'Billing', icon: MapPin },
              { number: 3, title: 'Payment', icon: CreditCard }
            ].map((stepInfo, index) => (
              <div key={stepInfo.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= stepInfo.number ? 'bg-indian-red border-indian-red text-white' : 'border-gray-300 text-gray-500'
                }`}>
                  {step > stepInfo.number ? (
                    <div className="w-5 h-5">✓</div>
                  ) : (
                    <stepInfo.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`ml-2 font-medium ${
                  step >= stepInfo.number ? 'text-indian-red' : 'text-gray-500'
                }`}>
                  {stepInfo.title}
                </span>
                {index < 2 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step > stepInfo.number ? 'bg-indian-red' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Step 1: Shipping Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Truck className="w-6 h-6 text-indian-red" />
                      <h2 className="text-2xl font-display font-bold text-gray-900">Shipping Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          value={shippingInfo.firstName}
                          onChange={(e) => handleShippingChange('firstName', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          value={shippingInfo.lastName}
                          onChange={(e) => handleShippingChange('lastName', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => handleShippingChange('email', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={(e) => handleShippingChange('phone', e.target.value)}
                          className="form-input"
                          placeholder="+61 4XX XXX XXX"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="form-label">Street Address *</label>
                        <input
                          type="text"
                          value={shippingInfo.address}
                          onChange={(e) => handleShippingChange('address', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Suburb *</label>
                        <input
                          type="text"
                          value={shippingInfo.suburb}
                          onChange={(e) => handleShippingChange('suburb', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">State *</label>
                        <select
                          value={shippingInfo.state}
                          onChange={(e) => handleShippingChange('state', e.target.value)}
                          className="form-input"
                          required
                        >
                          <option value="">Select State</option>
                          {australianStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Postcode *</label>
                        <input
                          type="text"
                          value={shippingInfo.postcode}
                          onChange={(e) => handleShippingChange('postcode', e.target.value)}
                          className="form-input"
                          placeholder="2000"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          value={shippingInfo.country}
                          className="form-input"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={handleNext}
                        className="btn-primary px-8 py-3"
                      >
                        Continue to Billing
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Billing Information */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-indian-red" />
                      <h2 className="text-2xl font-display font-bold text-gray-900">Billing Information</h2>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={billingInfo.sameAsShipping}
                          onChange={(e) => setBillingInfo(prev => ({ ...prev, sameAsShipping: e.target.checked }))}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-gray-700">Same as shipping address</span>
                      </label>
                    </div>

                    {!billingInfo.sameAsShipping && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            value={billingInfo.firstName}
                            onChange={(e) => handleBillingChange('firstName', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            value={billingInfo.lastName}
                            onChange={(e) => handleBillingChange('lastName', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            value={billingInfo.email}
                            onChange={(e) => handleBillingChange('email', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Phone Number *</label>
                          <input
                            type="tel"
                            value={billingInfo.phone}
                            onChange={(e) => handleBillingChange('phone', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="form-label">Street Address *</label>
                          <input
                            type="text"
                            value={billingInfo.address}
                            onChange={(e) => handleBillingChange('address', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Suburb *</label>
                          <input
                            type="text"
                            value={billingInfo.suburb}
                            onChange={(e) => handleBillingChange('suburb', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">State *</label>
                          <select
                            value={billingInfo.state}
                            onChange={(e) => handleBillingChange('state', e.target.value)}
                            className="form-input"
                            required
                          >
                            <option value="">Select State</option>
                            {australianStates.map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Postcode *</label>
                          <input
                            type="text"
                            value={billingInfo.postcode}
                            onChange={(e) => handleBillingChange('postcode', e.target.value)}
                            className="form-input"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Country</label>
                          <input
                            type="text"
                            value={billingInfo.country}
                            className="form-input"
                            disabled
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={handlePrevious}
                        className="btn-outline px-8 py-3"
                      >
                        Back to Shipping
                      </button>
                      <button
                        onClick={handleNext}
                        className="btn-primary px-8 py-3"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment Information */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="w-6 h-6 text-indian-red" />
                      <h2 className="text-2xl font-display font-bold text-gray-900">Payment Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="form-label">Card Number *</label>
                        <input
                          type="text"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                          className="form-input"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="form-label">Cardholder Name *</label>
                        <input
                          type="text"
                          value={paymentInfo.cardName}
                          onChange={(e) => handlePaymentChange('cardName', e.target.value)}
                          className="form-input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Expiry Date *</label>
                        <input
                          type="text"
                          value={paymentInfo.expiry}
                          onChange={(e) => handlePaymentChange('expiry', e.target.value)}
                          className="form-input"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">CVV *</label>
                        <input
                          type="text"
                          value={paymentInfo.cvv}
                          onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                          className="form-input"
                          placeholder="123"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Lock className="w-4 h-4" />
                        <span>Your payment information is secure and encrypted</span>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={handlePrevious}
                        className="btn-outline px-8 py-3"
                      >
                        Back to Billing
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        disabled={isProcessing}
                        className="btn-primary px-8 py-3 flex items-center gap-2 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <>
                            <div className="spinner w-4 h-4"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            Place Order
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-4">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
                </div>
                
                <div className="p-6">
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cart.items.map((item) => (
                      <div key={`${item.id}-${item.variantId || 'default'}`} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                          {item.color && (
                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                          )}
                          {item.size && (
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                          )}
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t border-gray-200 pt-4">
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
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  {subtotal < 99 && (
                    <div className="mt-4 p-3 bg-indian-red/10 border border-indian-red/20 rounded-lg">
                      <p className="text-sm text-indian-red">
                        Add ${(99 - subtotal).toFixed(2)} more to get free shipping!
                      </p>
                    </div>
                  )}

                  {/* Security Badge */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Secure Checkout</p>
                        <p className="text-sm text-gray-600">Your data is protected with SSL encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
