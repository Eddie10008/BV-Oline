'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Sydney, NSW',
    rating: 5,
    comment: 'The Banarasi saree I ordered exceeded my expectations! The quality is exceptional and the delivery was super fast across Australia. Will definitely shop again!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Silk Banarasi Saree'
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Melbourne, VIC',
    rating: 5,
    comment: 'Amazing collection of jewelry! The kundan necklace set is absolutely stunning and perfect for my sister\'s wedding. Fast delivery to Melbourne!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Kundan Necklace Set'
  },
  {
    id: 3,
    name: 'Meera Reddy',
    location: 'Brisbane, QLD',
    rating: 4,
    comment: 'Great quality kurtis at reasonable prices. The embroidery work is beautiful and the fabric feels premium. Very satisfied with my purchase.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Embroidered Kurti'
  },
  {
    id: 4,
    name: 'Kavya Singh',
    location: 'Perth, WA',
    rating: 5,
    comment: 'The bridal lehenga set is a dream come true! Perfect fit, exquisite workmanship, and the customer service was outstanding throughout.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Bridal Lehenga Set'
  },
  {
    id: 5,
    name: 'Riya Gupta',
    location: 'Adelaide, SA',
    rating: 5,
    comment: 'Love the pearl earrings! They\'re elegant, lightweight, and perfect for daily wear. The packaging was also very thoughtful.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Pearl Earrings'
  },
  {
    id: 6,
    name: 'Sneha Verma',
    location: 'Canberra, ACT',
    rating: 4,
    comment: 'Excellent collection of cotton sarees. Perfect for summer wear and the handloom quality is authentic. Will be back for more!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    product: 'Cotton Handloom Saree'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-indian-red/5 to-indian-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-indian-red rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-indian-gold text-indian-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Product */}
              <div className="text-sm text-indian-red font-medium mb-4">
                Purchased: {testimonial.product}
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-indian-red mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-indian-red mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-indian-red mb-2">50,000+</div>
            <div className="text-gray-600">Products Sold</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-indian-red mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
