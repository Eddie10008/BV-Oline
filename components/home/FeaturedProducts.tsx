'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingBag, Gem, Crown, Sparkles, Moon, Flower2, Zap } from 'lucide-react'

// Mock featured products data
const featuredProducts = [
  {
    id: 1,
    name: 'Sacred Silk Banarasi Saree',
    price: 899.99,
    originalPrice: 1299.99,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Sacred Sarees',
    isNew: true,
    discount: 31,
    isPremium: true
  },
  {
    id: 2,
    name: 'Divine Gold Temple Jewelry Set',
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Spiritual Jewelry',
    isNew: false,
    discount: 25,
    isPremium: true
  },
  {
    id: 3,
    name: 'Mystical Embroidered Designer Kurti',
    price: 349.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Mystical Kurtis',
    isNew: true,
    discount: 22,
    isPremium: false
  },
  {
    id: 4,
    name: 'Divine Bridal Lehenga Set',
    price: 2499.99,
    originalPrice: 3499.99,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Divine Lehengas',
    isNew: false,
    discount: 29,
    isPremium: true
  },
  {
    id: 5,
    name: 'Sacred Pearl Necklace Set',
    price: 399.99,
    originalPrice: 549.99,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Spiritual Jewelry',
    isNew: false,
    discount: 27,
    isPremium: true
  },
  {
    id: 6,
    name: 'Sacred Cotton Handloom Saree',
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1603342217505-b0a15e326e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Sacred Sarees',
    isNew: true,
    discount: 25,
    isPremium: false
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gradient-aura">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-spiritual-green/20 to-spiritual-teal/20 text-spiritual-green font-bold rounded-full text-sm border border-spiritual-green/30 shadow-aura mb-8"
          >
            <Moon className="w-5 h-5 mr-2 animate-sparkle" />
            ✨ Sacred Energy Collection
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-mystical font-bold text-white mb-8">
            <span className="text-gradient-aura">
              Sacred Threads
            </span>
            <span className="block text-gradient-spiritual">
              of Divine Energy
            </span>
          </h2>
          
          <p className="text-2xl text-spiritual-silver-200 max-w-4xl mx-auto leading-relaxed font-spiritual">
            Discover our most sacred and mystical products, carefully selected for their divine energy, 
            spiritual significance, and soul-stirring beauty. Each piece embodies the essence of sacred consciousness.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group bg-spiritual-black/10 backdrop-blur-sm rounded-3xl shadow-mystical hover:shadow-spiritual-lg transition-all duration-500 border border-spiritual-green/20 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    {product.isNew && (
                      <span className="px-4 py-2 bg-gradient-to-r from-spiritual-magenta to-spiritual-purple text-white text-sm font-bold rounded-full shadow-spiritual">
                        SACRED
                      </span>
                    )}
                    {product.isPremium && (
                      <span className="px-4 py-2 bg-gradient-to-r from-spiritual-gold to-spiritual-yellow text-spiritual-black text-sm font-bold rounded-full shadow-spiritual">
                        <Crown className="w-4 h-4 inline mr-1" />
                        DIVINE
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="px-4 py-2 bg-gradient-to-r from-spiritual-green to-spiritual-teal text-white text-sm font-bold rounded-full shadow-aura">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 bg-spiritual-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-mystical hover:shadow-spiritual transition-all duration-300">
                      <Heart className="w-6 h-6 text-spiritual-magenta hover:text-spiritual-red" />
                    </button>
                    <button className="w-12 h-12 bg-spiritual-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-mystical hover:shadow-spiritual transition-all duration-300">
                      <ShoppingBag className="w-6 h-6 text-spiritual-green hover:text-spiritual-teal" />
                    </button>
                  </div>

                  {/* Floating spiritual elements */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-spiritual-magenta/30 rounded-full animate-mystical-float"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-spiritual-purple/30 rounded-full animate-aura-pulse"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-spiritual-silver-400 bg-spiritual-black/30 px-3 py-1 rounded-full font-spiritual">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-spiritual-gold fill-current" />
                      <span className="text-sm text-spiritual-silver-200 ml-1">{product.rating}</span>
                      <span className="text-xs text-spiritual-silver-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-mystical font-bold text-white mb-3 group-hover:text-spiritual-gold transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-spiritual-gold">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-spiritual-silver-400 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-spiritual-green rounded-full animate-pulse"></div>
                      <span className="text-xs text-spiritual-silver-400 font-spiritual">Sacred Energy</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spiritual Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/category/sarees" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-spiritual-green to-spiritual-teal hover:from-spiritual-teal hover:to-spiritual-indigo text-white font-mystical font-bold rounded-2xl text-lg shadow-aura hover:shadow-spiritual transition-all duration-300"
          >
            <Flower2 className="w-6 h-6 mr-3 animate-sparkle" />
            Explore All Sacred Collections
            <Zap className="w-6 h-6 ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
