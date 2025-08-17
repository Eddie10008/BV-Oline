'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Share2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCart } from '@/components/providers/CartProvider'
import toast from 'react-hot-toast'

// Mock product data
const productData = {
  'saree-1': {
    id: 'saree-1',
    name: 'Silk Banarasi Saree',
    price: 899.99,
    salePrice: 749.99,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isWishlisted: false,
    colors: ['Red', 'Green', 'Blue'],
    sizes: ['Free Size'],
    fabric: 'Silk',
    occasion: 'Wedding',
    description: 'Exquisite Banarasi silk saree with intricate zari work and traditional motifs. Perfect for weddings and special occasions. This handcrafted piece showcases the rich heritage of Banaras weaving.',
    features: [
      'Handcrafted in Banaras',
      'Pure silk fabric',
      'Intricate zari work',
      'Traditional motifs',
      'Blouse piece included',
      'Care instructions provided'
    ],
    specifications: {
      'Fabric': 'Pure Silk',
      'Work': 'Zari Embroidery',
      'Length': '5.5 meters',
      'Blouse': 'Included',
      'Care': 'Dry clean only',
      'Origin': 'Banaras, India'
    },
    reviews_data: [
      {
        id: 1,
        user: 'Priya Sharma',
        rating: 5,
        date: '2024-01-15',
        comment: 'Absolutely stunning saree! The quality is exceptional and the zari work is beautiful. Perfect for my sister\'s wedding.',
        helpful: 12
      },
      {
        id: 2,
        user: 'Anjali Patel',
        rating: 4,
        date: '2024-01-10',
        comment: 'Beautiful saree with excellent craftsmanship. The color is exactly as shown. Highly recommended!',
        helpful: 8
      },
      {
        id: 3,
        user: 'Meera Reddy',
        rating: 5,
        date: '2024-01-08',
        comment: 'This is my second purchase from Bhartiya Vastra. The quality never disappoints. Love the traditional design.',
        helpful: 15
      }
    ]
  },
  'jewelry-1': {
    id: 'jewelry-1',
    name: 'Kundan Necklace Set',
    price: 249.99,
    salePrice: 199.99,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isWishlisted: true,
    colors: ['Gold', 'Silver'],
    sizes: ['Adjustable'],
    material: 'Kundan',
    occasion: 'Wedding',
    description: 'Elegant Kundan necklace set with matching earrings. Perfect for traditional Indian occasions and weddings. The intricate stone work adds a touch of royalty to any outfit.',
    features: [
      'Authentic Kundan work',
      'Matching earrings included',
      'Adjustable necklace length',
      'Traditional design',
      'Perfect for weddings',
      'Gift ready packaging'
    ],
    specifications: {
      'Material': 'Kundan Stones',
      'Base Metal': 'Brass',
      'Finish': 'Gold Plated',
      'Length': 'Adjustable',
      'Weight': '45 grams',
      'Care': 'Store in dry place'
    },
    reviews_data: [
      {
        id: 1,
        user: 'Kavya Singh',
        rating: 5,
        date: '2024-01-12',
        comment: 'Stunning necklace set! The Kundan work is beautiful and it looks expensive. Perfect for my wedding.',
        helpful: 18
      },
      {
        id: 2,
        user: 'Riya Gupta',
        rating: 4,
        date: '2024-01-08',
        comment: 'Good quality jewelry. The stones are well set and the design is traditional yet modern.',
        helpful: 6
      }
    ]
  }
}

const relatedProducts = [
  {
    id: 'saree-2',
    name: 'Cotton Handloom Saree',
    price: 249.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1603342217505-b0a15e326e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    reviews: 98
  },
  {
    id: 'jewelry-2',
    name: 'Pearl Earrings',
    price: 89.99,
    salePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviews: 203
  },
  {
    id: 'kurti-1',
    name: 'Embroidered Kurti',
    price: 129.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'saree-3',
    name: 'Designer Georgette Saree',
    price: 599.99,
    salePrice: 499.99,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviews: 156
  }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const product = productData[params.id as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.images[0],
      quantity,
      color: selectedColor,
      size: selectedSize
    })
    toast.success('Added to cart!')
  }

  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-indian-red">Home</a></li>
            <li>/</li>
            <li><a href="/category/sarees" className="hover:text-indian-red">Sarees</a></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 lg:h-[500px] bg-white rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Heart className={`w-5 h-5 ${product.isWishlisted ? 'fill-indian-red text-indian-red' : 'text-gray-400'}`} />
              </button>
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
              {product.isNew && (
                <span className="absolute top-4 left-16 badge badge-primary">New</span>
              )}
              {discountPercentage > 0 && (
                <span className="absolute top-4 right-16 badge badge-secondary">{discountPercentage}% OFF</span>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-indian-red' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-indian-gold text-indian-gold' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ${(product.salePrice || product.price).toFixed(2)}
              </span>
              {product.salePrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="badge badge-secondary text-lg">{discountPercentage}% OFF</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-indian-red bg-indian-red text-white'
                        : 'border-gray-300 hover:border-indian-red'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedSize === size
                        ? 'border-indian-red bg-indian-red text-white'
                        : 'border-gray-300 hover:border-indian-red'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-full btn-outline py-4 text-lg font-semibold">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-indian-red" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders above $99</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-indian-red" />
                <div>
                  <p className="font-medium text-gray-900">Secure Payment</p>
                  <p className="text-sm text-gray-600">100% secure checkout</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-indian-red" />
                <div>
                  <p className="font-medium text-gray-900">Easy Returns</p>
                  <p className="text-sm text-gray-600">30 day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Features' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'reviews', label: 'Reviews' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-indian-red text-indian-red'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indian-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                  <button className="btn-outline py-2 px-4 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {product.reviews_data.map(review => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'fill-indian-gold text-indian-gold' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <button className="text-sm text-gray-500 hover:text-indian-red">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.salePrice && (
                    <span className="absolute top-3 left-3 badge badge-secondary">
                      {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                    </span>
                  )}
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
        </div>
      </div>
    </div>
  )
}
