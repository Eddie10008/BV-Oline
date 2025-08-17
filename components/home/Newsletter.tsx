'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Gift } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing! You\'ll receive 10% off your first order.')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-indian-red to-indian-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Stay Updated with Latest Collections
            </h2>
            
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive offers, and fashion tips. Get 10% off your first order!
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-indian-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Gift className="w-5 h-5" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="text-sm text-white text-opacity-70 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Exclusive Offers</h3>
                <p className="text-white text-opacity-80 text-sm">
                  Get early access to sales and special discounts
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-white font-semibold mb-2">New Arrivals</h3>
                <p className="text-white text-opacity-80 text-sm">
                  Be the first to see our latest collections
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Style Tips</h3>
                <p className="text-white text-opacity-80 text-sm">
                  Expert advice on styling Indian attire
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
