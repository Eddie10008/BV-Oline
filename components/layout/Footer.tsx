'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, Gem, Crown, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-luxury text-diamond-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-diamond-gold/10 to-diamond-goldLight/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-diamond-crystalBlue/10 to-diamond-sapphire/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-diamond-emerald/10 to-diamond-emeraldLight/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-diamond-gold to-diamond-goldDark rounded-3xl flex items-center justify-center shadow-diamond">
                <span className="text-diamond-black font-bold text-2xl">BV</span>
              </div>
              <div>
                <h3 className="text-3xl font-luxury font-bold text-gradient-gold">
                  Bhartiya Vastra
                </h3>
                <p className="text-sm text-diamond-crystal font-semibold">Ultra-Premium Diamond Attire</p>
              </div>
            </div>
            
            <p className="text-diamond-crystal mb-10 leading-relaxed text-lg">
              Ultra-premium collection of diamond sarees, jewelry, and Indian attire crafted with diamond precision for the discerning woman in Australia. 
              Embrace luxury with timeless elegance, delivered with diamond care across Australia.
            </p>
            
            <div className="flex space-x-4">
              <Link href="#" className="w-14 h-14 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-3xl flex items-center justify-center border border-diamond-gold/30 hover:border-diamond-gold/50 hover:bg-diamond-gold/30 transition-all duration-300 group">
                <Facebook size={22} className="text-diamond-crystal group-hover:text-diamond-gold transition-colors" />
              </Link>
              <Link href="#" className="w-14 h-14 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-3xl flex items-center justify-center border border-diamond-gold/30 hover:border-diamond-gold/50 hover:bg-diamond-gold/30 transition-all duration-300 group">
                <Twitter size={22} className="text-diamond-crystal group-hover:text-diamond-gold transition-colors" />
              </Link>
              <Link href="#" className="w-14 h-14 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-3xl flex items-center justify-center border border-diamond-gold/30 hover:border-diamond-gold/50 hover:bg-diamond-gold/30 transition-all duration-300 group">
                <Instagram size={22} className="text-diamond-crystal group-hover:text-diamond-gold transition-colors" />
              </Link>
              <Link href="#" className="w-14 h-14 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-3xl flex items-center justify-center border border-diamond-gold/30 hover:border-diamond-gold/50 hover:bg-diamond-gold/30 transition-all duration-300 group">
                <Youtube size={22} className="text-diamond-crystal group-hover:text-diamond-gold transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-luxury font-bold mb-8 text-gradient-gold">
              Diamond Collections
            </h4>
            <ul className="space-y-5">
              <li>
                <Link href="/category/sarees" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Gem className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Diamond Sarees Collection
                </Link>
              </li>
              <li>
                <Link href="/category/jewelry" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Sparkles className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Diamond Jewelry & Accessories
                </Link>
              </li>
              <li>
                <Link href="/category/kurtis" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Crown className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Luxury Kurtis & Suits
                </Link>
              </li>
              <li>
                <Link href="/category/lehengas" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Gem className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Royal Bridal Lehengas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Crown className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  About Our Diamond Heritage
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-luxury font-bold mb-8 text-gradient-gold">
              Diamond Service
            </h4>
            <ul className="space-y-5">
              <li>
                <Link href="/contact" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Gem className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Contact Our Diamond Team
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Sparkles className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Diamond Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Crown className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Diamond Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Gem className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Diamond FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-diamond-crystal hover:text-diamond-gold transition-all duration-300 flex items-center group">
                  <Crown className="w-4 h-4 mr-3 text-diamond-gold group-hover:animate-sparkle" />
                  Privacy & Diamond Care
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-luxury font-bold mb-8 text-gradient-gold">
              Diamond Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-2xl flex items-center justify-center border border-diamond-gold/30 flex-shrink-0">
                  <MapPin size={20} className="text-diamond-gold" />
                </div>
                <div>
                  <p className="text-diamond-crystal leading-relaxed text-lg">
                    123 Diamond Street<br />
                    Sydney, NSW 2000<br />
                    Australia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-2xl flex items-center justify-center border border-diamond-gold/30 flex-shrink-0">
                  <Phone size={20} className="text-diamond-gold" />
                </div>
                <span className="text-diamond-crystal text-lg">+61 2 9876 5432</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-diamond-gold/20 to-diamond-gold/10 rounded-2xl flex items-center justify-center border border-diamond-gold/30 flex-shrink-0">
                  <Mail size={20} className="text-diamond-gold" />
                </div>
                <span className="text-diamond-crystal text-lg">diamond@bhartiyavastra.com.au</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-diamond-gold/30 mt-20 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-diamond-crystal text-lg flex items-center">
              © 2024 Bhartiya Vastra Australia. Crafted with 
              <Heart size={20} className="text-diamond-gold mx-2 animate-pulse" />
              and diamond precision in Australia.
            </p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <Link href="/terms" className="text-diamond-crystal hover:text-diamond-gold text-lg transition-all duration-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-diamond-crystal hover:text-diamond-gold text-lg transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-diamond-crystal hover:text-diamond-gold text-lg transition-all duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
