'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingBag, Search, User, Menu, X, Heart, Sparkles } from 'lucide-react'
import { useCart } from '@/components/providers/CartProvider'
import SearchBar from '@/components/ui/SearchBar'
import LotusLogo from '@/components/ui/LotusLogo'

export default function Header() {
  const { data: session } = useSession()
  const { state: cart } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    { name: 'Sarees', href: '/category/sarees' },
    { name: 'Jewelry', href: '/category/jewelry' },
    { name: 'Kurtis', href: '/category/kurtis' },
    { name: 'Lehengas', href: '/category/lehengas' },
    { name: 'Accessories', href: '/category/accessories' },
  ]

  return (
    <header className="bg-gradient-to-r from-spiritual-gold-50 via-white to-spiritual-gold-50 backdrop-blur-md shadow-luxury sticky top-0 z-50 border-b border-spiritual-gold-200">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-spiritual-red-600 via-spiritual-orange-500 to-spiritual-gold-500 text-white text-sm py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 animate-sparkle" />
            🌸 Traditional Indian Collection | Free shipping on orders above ₹1999 | Express delivery across India
            <Sparkles className="w-4 h-4 animate-sparkle" />
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="group">
            <LotusLogo size="lg" className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-diamond-slate hover:text-spiritual-red-600 font-semibold transition-all duration-300 relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-spiritual-red-500 to-spiritual-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-4 text-diamond-slate hover:text-spiritual-red-600 transition-all duration-300 hover:bg-spiritual-red-50 rounded-2xl group">
              <Heart className="w-6 h-6 group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-spiritual-red-100/50 to-spiritual-orange-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-4 text-diamond-slate hover:text-spiritual-red-600 transition-all duration-300 hover:bg-spiritual-red-50 rounded-2xl group">
              <ShoppingBag className="w-6 h-6 group-hover:animate-pulse" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-spiritual-red-500 to-spiritual-orange-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-lg">
                  {cart.itemCount}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-spiritual-red-100/50 to-spiritual-orange-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* User menu */}
            {session ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 p-4 text-diamond-slate hover:text-spiritual-red-600 transition-all duration-300 hover:bg-spiritual-red-50 rounded-2xl">
                  <User className="w-6 h-6" />
                  <span className="hidden sm:block font-semibold">{session.user?.name}</span>
                </button>
                <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-3xl shadow-luxury-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-spiritual-gold-200">
                  <Link href="/profile" className="block px-6 py-4 text-diamond-slate hover:bg-spiritual-red-50 hover:text-spiritual-red-600 transition-all duration-300">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-6 py-4 text-diamond-slate hover:bg-spiritual-red-50 hover:text-spiritual-red-600 transition-all duration-300">
                    Orders
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-6 py-4 text-diamond-slate hover:bg-spiritual-red-50 hover:text-spiritual-red-600 transition-all duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/auth/signin" className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-spiritual-red-500 to-spiritual-orange-500 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <User className="w-5 h-5" />
                <span className="hidden sm:block">Sign In</span>
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-4 text-diamond-slate hover:text-spiritual-red-600 transition-all duration-300 hover:bg-spiritual-red-50 rounded-2xl"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-6">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-spiritual-gold-200">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-4 px-6 text-diamond-slate hover:text-spiritual-red-600 hover:bg-spiritual-red-50 font-semibold transition-all duration-300 rounded-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
