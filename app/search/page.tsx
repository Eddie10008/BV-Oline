'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Filter, Grid, List, Star, Heart, ShoppingCart, Search, X } from 'lucide-react'
import { useCart } from '@/components/providers/CartProvider'
import toast from 'react-hot-toast'

// Mock search results data
const searchResults = [
  {
    id: 'saree-1',
    name: 'Silk Banarasi Saree',
    price: 899.99,
    salePrice: 749.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviews: 124,
    category: 'Sarees',
    isNew: true,
    isWishlisted: false,
    colors: ['Red', 'Green', 'Blue'],
    sizes: ['Free Size'],
    fabric: 'Silk',
    occasion: 'Wedding',
    description: 'Exquisite Banarasi silk saree with intricate zari work and traditional motifs.'
  },
  {
    id: 'jewelry-1',
    name: 'Kundan Necklace Set',
    price: 249.99,
    salePrice: 199.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviews: 89,
    category: 'Jewelry',
    isNew: false,
    isWishlisted: true,
    colors: ['Gold', 'Silver'],
    sizes: ['Adjustable'],
    material: 'Kundan',
    occasion: 'Wedding',
    description: 'Elegant Kundan necklace set with matching earrings.'
  },
  {
    id: 'kurti-1',
    name: 'Embroidered Kurti',
    price: 129.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviews: 156,
    category: 'Kurtis',
    isNew: true,
    isWishlisted: false,
    colors: ['Blue', 'Pink', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Cotton',
    occasion: 'Daily Wear',
    description: 'Comfortable and stylish embroidered kurti for daily wear.'
  },
  {
    id: 'saree-2',
    name: 'Cotton Handloom Saree',
    price: 249.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1603342217505-b0a15e326e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    reviews: 98,
    category: 'Sarees',
    isNew: false,
    isWishlisted: false,
    colors: ['White', 'Beige', 'Pink'],
    sizes: ['Free Size'],
    fabric: 'Cotton',
    occasion: 'Daily Wear',
    description: 'Traditional cotton handloom saree perfect for daily wear.'
  },
  {
    id: 'jewelry-2',
    name: 'Pearl Earrings',
    price: 89.99,
    salePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviews: 203,
    category: 'Jewelry',
    isNew: false,
    isWishlisted: true,
    colors: ['White', 'Pink'],
    sizes: ['One Size'],
    material: 'Pearl',
    occasion: 'Daily Wear',
    description: 'Elegant pearl earrings for everyday elegance.'
  },
  {
    id: 'kurti-2',
    name: 'Designer Anarkali',
    price: 399.99,
    salePrice: 349.99,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviews: 134,
    category: 'Kurtis',
    isNew: true,
    isWishlisted: false,
    colors: ['Red', 'Purple', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Silk',
    occasion: 'Party',
    description: 'Stunning designer Anarkali suit for special occasions.'
  }
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const { addItem } = useCart()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const query = searchParams.get('q') || ''
    setSearchQuery(query)
  }, [searchParams])

  const filteredResults = useMemo(() => {
    let filtered = searchResults

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      (product.salePrice || product.price) >= priceRange[0] && 
      (product.salePrice || product.price) <= priceRange[1]
    )

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      )
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      )
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      )
    }

    // Filter by occasions
    if (selectedOccasions.length > 0) {
      filtered = filtered.filter(product => 
        selectedOccasions.includes(product.occasion)
      )
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        // Relevance - keep original order
        break
    }

    return filtered
  }, [searchQuery, priceRange, selectedCategories, selectedColors, selectedSizes, selectedOccasions, sortBy])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      quantity: 1
    })
    toast.success('Added to cart!')
  }

  const toggleFilter = (filterType: string, value: string) => {
    switch (filterType) {
      case 'category':
        setSelectedCategories(prev => 
          prev.includes(value) 
            ? prev.filter(c => c !== value)
            : [...prev, value]
        )
        break
      case 'color':
        setSelectedColors(prev => 
          prev.includes(value) 
            ? prev.filter(c => c !== value)
            : [...prev, value]
        )
        break
      case 'size':
        setSelectedSizes(prev => 
          prev.includes(value) 
            ? prev.filter(s => s !== value)
            : [...prev, value]
        )
        break
      case 'occasion':
        setSelectedOccasions(prev => 
          prev.includes(value) 
            ? prev.filter(o => o !== value)
            : [...prev, value]
        )
        break
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedOccasions([])
    setPriceRange([0, 2000])
  }

  const allCategories = Array.from(new Set(searchResults.map(p => p.category)))
  const allColors = Array.from(new Set(searchResults.flatMap(p => p.colors)))
  const allSizes = Array.from(new Set(searchResults.flatMap(p => p.sizes)))
  const allOccasions = Array.from(new Set(searchResults.map(p => p.occasion)))

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedColors.length > 0 || 
    selectedSizes.length > 0 || 
    selectedOccasions.length > 0 || 
    priceRange[1] !== 2000

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-indian-red" />
            <h1 className="text-3xl font-display font-bold text-gray-900">
              Search Results
            </h1>
          </div>
          {searchQuery && (
            <p className="text-lg text-gray-600">
              Showing results for "{searchQuery}"
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-900">Active Filters</span>
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-indian-red hover:text-red-600"
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map(category => (
                        <span key={category} className="badge badge-primary text-xs">
                          {category} <X className="w-3 h-3 ml-1" />
                        </span>
                      ))}
                      {selectedColors.map(color => (
                        <span key={color} className="badge badge-primary text-xs">
                          {color} <X className="w-3 h-3 ml-1" />
                        </span>
                      ))}
                      {selectedSizes.map(size => (
                        <span key={size} className="badge badge-primary text-xs">
                          {size} <X className="w-3 h-3 ml-1" />
                        </span>
                      ))}
                      {selectedOccasions.map(occasion => (
                        <span key={occasion} className="badge badge-primary text-xs">
                          {occasion} <X className="w-3 h-3 ml-1" />
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {allCategories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Colors</h4>
                  <div className="space-y-2">
                    {allColors.map(color => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleFilter('color', color)}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Sizes</h4>
                  <div className="space-y-2">
                    {allSizes.map(size => (
                      <label key={size} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleFilter('size', size)}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-sm text-gray-700">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Occasions</h4>
                  <div className="space-y-2">
                    {allOccasions.map(occasion => (
                      <label key={occasion} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedOccasions.includes(occasion)}
                          onChange={() => toggleFilter('occasion', occasion)}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-sm text-gray-700">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  {filteredResults.length} results found
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indian-red"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest First</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indian-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-indian-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="product-card bg-white rounded-xl shadow-md overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && <span className="badge badge-primary">New</span>}
                        {product.salePrice && (
                          <span className="badge badge-secondary">
                            {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                          </span>
                        )}
                      </div>
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                        <Heart className={`w-5 h-5 ${product.isWishlisted ? 'fill-indian-red text-indian-red' : 'text-gray-400'}`} />
                      </button>
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-indian-red text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {product.category}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {product.occasion}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-indian-gold text-indian-gold' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${(product.salePrice || product.price).toFixed(2)}
                        </span>
                        {product.salePrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {product.category}
                              </span>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {product.occasion}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {product.isNew && <span className="badge badge-primary">New</span>}
                            {product.salePrice && (
                              <span className="badge badge-secondary">
                                {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-indian-gold text-indian-gold' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-lg font-bold text-gray-900">
                            ${(product.salePrice || product.price).toFixed(2)}
                          </span>
                          {product.salePrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ${product.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="btn-primary py-2 px-4 flex items-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                          <button className="p-2 text-gray-400 hover:text-indian-red transition-colors">
                            <Heart className={`w-5 h-5 ${product.isWishlisted ? 'fill-indian-red text-indian-red' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredResults.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery 
                    ? `We couldn't find any products matching "${searchQuery}"`
                    : 'Try adjusting your search or filters to find what you\'re looking for.'
                  }
                </p>
                <button
                  onClick={clearAllFilters}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
