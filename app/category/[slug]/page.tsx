'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid, List, Star, Heart, ShoppingCart, ChevronDown } from 'lucide-react'
import { useCart } from '../../../components/providers/CartProvider'
import toast from 'react-hot-toast'

// Mock data for different categories
const categoryData = {
  sarees: {
    title: 'Sarees Collection',
    description: 'Discover our exquisite collection of traditional and contemporary sarees, from silk Banarasi to cotton handloom.',
    products: [
      {
        id: 'saree-1',
        name: 'Silk Banarasi Saree',
        price: 899.99,
        salePrice: 749.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.8,
        reviews: 124,
        isNew: true,
        isWishlisted: false,
        colors: ['Red', 'Green', 'Blue'],
        sizes: ['Free Size'],
        fabric: 'Silk',
        occasion: 'Wedding'
      },
      {
        id: 'saree-2',
        name: 'Cotton Handloom Saree',
        price: 249.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1603342217505-b0a15e326e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.4,
        reviews: 98,
        isNew: false,
        isWishlisted: false,
        colors: ['White', 'Beige', 'Pink'],
        sizes: ['Free Size'],
        fabric: 'Cotton',
        occasion: 'Daily Wear'
      },
      {
        id: 'saree-3',
        name: 'Designer Georgette Saree',
        price: 599.99,
        salePrice: 499.99,
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.6,
        reviews: 156,
        isNew: true,
        isWishlisted: true,
        colors: ['Purple', 'Pink', 'Orange'],
        sizes: ['Free Size'],
        fabric: 'Georgette',
        occasion: 'Party'
      },
      {
        id: 'saree-4',
        name: 'Bridal Silk Saree',
        price: 1299.99,
        salePrice: 1099.99,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.9,
        reviews: 67,
        isNew: false,
        isWishlisted: false,
        colors: ['Red', 'Maroon', 'Gold'],
        sizes: ['Free Size'],
        fabric: 'Silk',
        occasion: 'Wedding'
      },
      {
        id: 'saree-5',
        name: 'Casual Cotton Saree',
        price: 199.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.3,
        reviews: 89,
        isNew: false,
        isWishlisted: false,
        colors: ['Blue', 'Green', 'Yellow'],
        sizes: ['Free Size'],
        fabric: 'Cotton',
        occasion: 'Daily Wear'
      },
      {
        id: 'saree-6',
        name: 'Embroidered Silk Saree',
        price: 799.99,
        salePrice: 649.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.7,
        reviews: 134,
        isNew: true,
        isWishlisted: false,
        colors: ['Pink', 'Purple', 'Teal'],
        sizes: ['Free Size'],
        fabric: 'Silk',
        occasion: 'Party'
      }
    ]
  },
  jewelry: {
    title: 'Jewelry Collection',
    description: 'Stunning traditional and modern jewelry pieces to complement your Indian attire.',
    products: [
      {
        id: 'jewelry-1',
        name: 'Kundan Necklace Set',
        price: 249.99,
        salePrice: 199.99,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.6,
        reviews: 89,
        isNew: false,
        isWishlisted: true,
        colors: ['Gold', 'Silver'],
        sizes: ['Adjustable'],
        fabric: 'Kundan',
        occasion: 'Wedding'
      },
      {
        id: 'jewelry-2',
        name: 'Pearl Earrings',
        price: 89.99,
        salePrice: 69.99,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.5,
        reviews: 203,
        isNew: false,
        isWishlisted: true,
        colors: ['White', 'Pink'],
        sizes: ['One Size'],
        fabric: 'Pearl',
        occasion: 'Daily Wear'
      },
      {
        id: 'jewelry-3',
        name: 'Silver Anklet Set',
        price: 59.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.3,
        reviews: 76,
        isNew: false,
        isWishlisted: false,
        colors: ['Silver'],
        sizes: ['Adjustable'],
        fabric: 'Silver',
        occasion: 'Daily Wear'
      },
      {
        id: 'jewelry-4',
        name: 'Diamond Stud Earrings',
        price: 399.99,
        salePrice: 349.99,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.8,
        reviews: 45,
        isNew: true,
        isWishlisted: false,
        colors: ['White Gold'],
        sizes: ['One Size'],
        fabric: 'Diamond',
        occasion: 'Special Occasions'
      },
      {
        id: 'jewelry-5',
        name: 'Gold Bangle Set',
        price: 299.99,
        salePrice: 249.99,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.6,
        reviews: 112,
        isNew: false,
        isWishlisted: false,
        colors: ['Gold'],
        sizes: ['Adjustable'],
        fabric: 'Gold Plated',
        occasion: 'Wedding'
      },
      {
        id: 'jewelry-6',
        name: 'Choker Necklace',
        price: 179.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.4,
        reviews: 67,
        isNew: true,
        isWishlisted: false,
        colors: ['Rose Gold', 'Silver'],
        sizes: ['Adjustable'],
        fabric: 'Alloy',
        occasion: 'Party'
      }
    ]
  },
  kurtis: {
    title: 'Kurtis Collection',
    description: 'Comfortable and stylish kurtis for every occasion, from casual daily wear to elegant party wear.',
    products: [
      {
        id: 'kurti-1',
        name: 'Embroidered Kurti',
        price: 129.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.7,
        reviews: 156,
        isNew: true,
        isWishlisted: false,
        colors: ['Blue', 'Pink', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Cotton',
        occasion: 'Daily Wear'
      },
      {
        id: 'kurti-2',
        name: 'Designer Anarkali',
        price: 399.99,
        salePrice: 329.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.6,
        reviews: 134,
        isNew: true,
        isWishlisted: false,
        colors: ['Red', 'Purple', 'Teal'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Georgette',
        occasion: 'Party'
      },
      {
        id: 'kurti-3',
        name: 'Casual Cotton Kurti',
        price: 89.99,
        salePrice: 69.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.3,
        reviews: 98,
        isNew: false,
        isWishlisted: false,
        colors: ['White', 'Beige', 'Light Blue'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Cotton',
        occasion: 'Daily Wear'
      },
      {
        id: 'kurti-4',
        name: 'Party Wear Kurti',
        price: 299.99,
        salePrice: 249.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.5,
        reviews: 87,
        isNew: false,
        isWishlisted: true,
        colors: ['Black', 'Navy', 'Burgundy'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Silk',
        occasion: 'Party'
      },
      {
        id: 'kurti-5',
        name: 'Printed Kurti',
        price: 79.99,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.2,
        reviews: 145,
        isNew: false,
        isWishlisted: false,
        colors: ['Yellow', 'Orange', 'Pink'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Cotton',
        occasion: 'Daily Wear'
      },
      {
        id: 'kurti-6',
        name: 'Bridal Kurti Set',
        price: 599.99,
        salePrice: 499.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        rating: 4.8,
        reviews: 56,
        isNew: true,
        isWishlisted: false,
        colors: ['Red', 'Maroon', 'Gold'],
        sizes: ['S', 'M', 'L', 'XL'],
        fabric: 'Silk',
        occasion: 'Wedding'
      }
    ]
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { addItem } = useCart()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const category = categoryData[params.slug as keyof typeof categoryData]
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  const filteredProducts = useMemo(() => {
    let filtered = category.products

    // Filter by price range
    filtered = filtered.filter(product => 
      (product.salePrice || product.price) >= priceRange[0] && 
      (product.salePrice || product.price) <= priceRange[1]
    )

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
        // Featured - keep original order
        break
    }

    return filtered
  }, [category.products, priceRange, selectedColors, selectedSizes, sortBy])

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

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const allColors = Array.from(new Set(category.products.flatMap(p => p.colors)))
  const allSizes = Array.from(new Set(category.products.flatMap(p => p.sizes)))

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
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

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Colors</h4>
                  <div className="space-y-2">
                    {allColors.map(color => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
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
                          onChange={() => toggleSize(size)}
                          className="rounded border-gray-300 text-indian-red focus:ring-indian-red"
                        />
                        <span className="ml-2 text-sm text-gray-700">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedColors.length > 0 || selectedSizes.length > 0 || priceRange[1] !== 2000) && (
                  <button
                    onClick={() => {
                      setSelectedColors([])
                      setSelectedSizes([])
                      setPriceRange([0, 2000])
                    }}
                    className="w-full btn-outline py-2 text-sm"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  {filteredProducts.length} products found
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
                      <option value="featured">Featured</option>
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

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
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
                {filteredProducts.map((product, index) => (
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
                          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex items-center gap-2">
                            {product.isNew && <span className="badge badge-primary">New</span>}
                            {product.salePrice && (
                              <span className="badge badge-secondary">
                                {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                              </span>
                            )}
                          </div>
                        </div>
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
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSelectedColors([])
                    setSelectedSizes([])
                    setPriceRange([0, 2000])
                  }}
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
