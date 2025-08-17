'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Crown, Gem, Heart, Star, Moon, Sun, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-spiritual overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-spiritual-magenta/20 rounded-full animate-spiritual-glow blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-spiritual-purple/20 rounded-full animate-mystical-float blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-spiritual-indigo/15 rounded-full animate-aura-pulse blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-spiritual-teal/20 rounded-full animate-chakra-spin blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Spiritual Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-spiritual-magenta/20 to-spiritual-purple/20 text-spiritual-magenta font-bold rounded-full text-sm border border-spiritual-magenta/30 shadow-spiritual mb-8"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-sparkle" />
              ✨ Awaken Your Spiritual Essence
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-mystical font-bold text-white mb-6 leading-tight"
            >
              <span className="text-gradient-chakra block mb-2">
                Sacred Threads
              </span>
              <span className="text-gradient-spiritual block">
                of the Soul
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-spiritual-silver-200 mb-8 leading-relaxed font-spiritual"
            >
              Discover the mystical essence of traditional Indian attire, where every thread carries the energy of ancient wisdom and spiritual awakening. 
              <span className="text-spiritual-gold font-semibold"> Embrace your divine feminine power.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/category/sarees" className="btn-chakra text-lg px-8 py-4 rounded-2xl font-semibold animate-chakra-energy">
                <Gem className="w-6 h-6 mr-2" />
                Explore Sacred Collection
              </Link>
              <Link href="/search" className="btn-spiritual text-lg px-8 py-4 rounded-2xl font-semibold">
                <Sparkles className="w-6 h-6 mr-2" />
                Find Your Aura
              </Link>
            </motion.div>

            {/* Spiritual Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-spiritual-red/20 to-spiritual-orange/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-spiritual transition-all duration-500">
                  <Heart className="text-3xl text-spiritual-red" />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-spiritual-silver-300 font-semibold">Sacred Sarees</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-spiritual-blue/20 to-spiritual-indigo/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-spiritual transition-all duration-500">
                  <Moon className="text-3xl text-spiritual-blue" />
                </div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-spiritual-silver-300 font-semibold">Spiritual Support</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-spiritual-green/20 to-spiritual-teal/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-spiritual transition-all duration-500">
                  <Zap className="text-3xl text-spiritual-green" />
                </div>
                <div className="text-3xl font-bold text-white">Free</div>
                <div className="text-sm text-spiritual-silver-300 font-semibold">Sacred Shipping</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-spiritual-lg">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Elegant Indian woman in traditional attire"
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-black/40 via-transparent to-spiritual-magenta/20"></div>
                
                {/* Floating Spiritual Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-spiritual-magenta/30 rounded-full animate-spiritual-glow flex items-center justify-center">
                  <Star className="text-2xl text-white" />
                </div>
                <div className="absolute top-16 right-12 w-12 h-12 bg-spiritual-purple/30 rounded-full animate-mystical-float flex items-center justify-center">
                  <Crown className="text-xl text-white" />
                </div>
                <div className="absolute bottom-16 left-12 w-14 h-14 bg-spiritual-teal/30 rounded-full animate-aura-pulse flex items-center justify-center">
                  <Gem className="text-xl text-white" />
                </div>
              </div>
            </div>

            {/* Chakra Energy Rings */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-spiritual-magenta/30 rounded-full animate-chakra-spin"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-spiritual-purple/30 rounded-full animate-chakra-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            <div className="absolute top-1/2 -right-6 w-24 h-24 border-2 border-spiritual-teal/30 rounded-full animate-chakra-spin" style={{ animationDuration: '20s' }}></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-spiritual-silver-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-spiritual-magenta rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
