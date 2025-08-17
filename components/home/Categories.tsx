'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Gem, Crown, Sparkles, Heart, Moon, Star, Zap, Flower2 } from 'lucide-react'

const categories = [
  {
    name: 'Sacred Sarees',
    description: 'Mystical traditional sarees',
    href: '/category/sarees',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Heart className="text-2xl" />,
    color: 'from-spiritual-red to-spiritual-orange'
  },
  {
    name: 'Spiritual Jewelry',
    description: 'Sacred traditional jewelry',
    href: '/category/jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Sparkles className="text-2xl" />,
    color: 'from-spiritual-blue to-spiritual-indigo'
  },
  {
    name: 'Mystical Kurtis',
    description: 'Sacred Indian kurtis',
    href: '/category/kurtis',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Flower2 className="text-2xl" />,
    color: 'from-spiritual-green to-spiritual-teal'
  },
  {
    name: 'Divine Lehengas',
    description: 'Sacred bridal lehengas',
    href: '/category/lehengas',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Crown className="text-2xl" />,
    color: 'from-spiritual-gold to-spiritual-yellow'
  },
  {
    name: 'Aura Accessories',
    description: 'Complete your sacred look',
    href: '/category/accessories',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Star className="text-2xl" />,
    color: 'from-spiritual-purple to-spiritual-magenta'
  },
  {
    name: 'Sacred Bridal Collection',
    description: 'Divine bridal wear',
    href: '/category/bridal',
    image: 'https://images.unsplash.com/photo-1603342217505-b0a15e326e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: <Moon className="text-2xl" />,
    color: 'from-spiritual-indigo to-spiritual-purple'
  }
]

export default function Categories() {
  return (
    <section className="py-24 bg-gradient-mystical">
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-spiritual-magenta/20 to-spiritual-purple/20 text-spiritual-magenta font-bold rounded-full text-sm border border-spiritual-magenta/30 shadow-spiritual mb-8"
          >
            <Zap className="w-5 h-5 mr-2 animate-sparkle" />
            ✨ Discover Your Sacred Path
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-mystical font-bold text-white mb-8">
            <span className="text-gradient-chakra">
              Sacred Collections
            </span>
            <span className="block text-gradient-spiritual">
              for the Soul
            </span>
          </h2>
          
          <p className="text-2xl text-spiritual-silver-200 max-w-4xl mx-auto leading-relaxed font-spiritual">
            From mystical sarees to sacred jewelry, explore our curated collection of spiritual Indian attire 
            designed for the awakened woman who embraces tradition with divine consciousness.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden bg-spiritual-black/20 backdrop-blur-sm rounded-3xl shadow-mystical hover:shadow-spiritual-lg transition-all duration-500 border border-spiritual-magenta/20 group-hover:border-spiritual-magenta/40">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spiritual-black/60 via-transparent to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center shadow-spiritual animate-spiritual-glow`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                    </div>

                    {/* Floating spiritual elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-spiritual-magenta/30 rounded-full animate-mystical-float"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-spiritual-purple/30 rounded-full animate-aura-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-mystical font-bold text-white mb-2 group-hover:text-spiritual-gold transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-spiritual-silver-300 text-sm font-spiritual">
                      {category.description}
                    </p>
                    
                    {/* Spiritual indicator */}
                    <div className="mt-4 flex items-center">
                      <div className="w-2 h-2 bg-spiritual-magenta rounded-full animate-pulse mr-2"></div>
                      <span className="text-xs text-spiritual-silver-400 font-spiritual">Sacred Energy</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spiritual-magenta/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
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
            href="/search" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-spiritual-magenta to-spiritual-purple hover:from-spiritual-purple hover:to-spiritual-indigo text-white font-mystical font-bold rounded-2xl text-lg shadow-spiritual-lg hover:shadow-spiritual transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 mr-3 animate-sparkle" />
            Discover Your Sacred Essence
            <Gem className="w-6 h-6 ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
