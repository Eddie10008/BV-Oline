const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createDemoAdmin() {
  try {
    console.log('🚀 Creating Demo Admin Account...');

    // Create demo admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const demoAdmin = await prisma.user.upsert({
      where: { email: 'admin@bhartiyavastra.com' },
      update: {},
      create: {
        email: 'admin@bhartiyavastra.com',
        name: 'Demo Admin',
        password: hashedPassword,
        role: 'ADMIN',
        dateOfBirth: new Date('1990-01-15'),
        lifePathNumber: 7,
        numerologyProfile: JSON.stringify({
          lifePathNumber: 7,
          destinyNumber: 5,
          soulNumber: 3,
          personalityNumber: 2,
          birthDayNumber: 6,
          maturityNumber: 4,
          personalYearNumber: 8,
          themeColors: ['purple', 'indigo', 'blue'],
          luckyNumbers: [7, 16, 25, 34],
          luckyColors: ['purple', 'indigo', 'blue'],
          strengths: ['Analytical', 'Spiritual', 'Intuitive'],
          challenges: ['Perfectionism', 'Overthinking'],
          careerSuggestions: ['Research', 'Analysis', 'Spirituality'],
          compatibility: [1, 3, 5, 9]
        }),
        themePreference: JSON.stringify(['purple', 'indigo', 'blue'])
      }
    });

    console.log('✅ Demo Admin User Created:', demoAdmin.email);

    // Create demo seller account
    const demoSeller = await prisma.user.upsert({
      where: { email: 'seller@bhartiyavastra.com' },
      update: {},
      create: {
        email: 'seller@bhartiyavastra.com',
        name: 'Demo Seller',
        password: hashedPassword,
        role: 'SELLER',
        dateOfBirth: new Date('1985-06-20'),
        lifePathNumber: 4,
        numerologyProfile: JSON.stringify({
          lifePathNumber: 4,
          destinyNumber: 8,
          soulNumber: 6,
          personalityNumber: 2,
          birthDayNumber: 2,
          maturityNumber: 3,
          personalYearNumber: 7,
          themeColors: ['green', 'brown', 'earth'],
          luckyNumbers: [4, 13, 22, 31],
          luckyColors: ['green', 'brown', 'earth'],
          strengths: ['Practical', 'Organized', 'Reliable'],
          challenges: ['Rigidity', 'Stubbornness'],
          careerSuggestions: ['Business', 'Management', 'Organization'],
          compatibility: [1, 2, 6, 8]
        }),
        themePreference: JSON.stringify(['green', 'brown', 'earth'])
      }
    });

    console.log('✅ Demo Seller User Created:', demoSeller.email);

    // Create seller profile
    const sellerProfile = await prisma.seller.upsert({
      where: { userId: demoSeller.id },
      update: {},
      create: {
        userId: demoSeller.id,
        businessName: 'Traditional Indian Attire Co.',
        description: 'Premium Indian ethnic wear and accessories',
        logo: '/images/seller-logo.png',
        address: JSON.stringify({
          street: '123 Traditional Street',
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          postalCode: '400001'
        }),
        phone: '+91-9876543210',
        website: 'https://traditionalattire.com',
        gstNumber: 'GST123456789',
        panNumber: 'ABCDE1234F',
        bankDetails: JSON.stringify({
          accountNumber: '1234567890',
          ifscCode: 'SBIN0001234',
          bankName: 'State Bank of India',
          accountHolder: 'Traditional Indian Attire Co.'
        }),
        isVerified: true,
        isActive: true,
        commission: 12.5
      }
    });

    console.log('✅ Demo Seller Profile Created');

    // Create categories
    const categories = await Promise.all([
      prisma.category.upsert({
        where: { slug: 'sarees' },
        update: {},
        create: {
          name: 'Sarees',
          description: 'Traditional Indian sarees for all occasions',
          image: '/images/categories/sarees.jpg',
          slug: 'sarees'
        }
      }),
      prisma.category.upsert({
        where: { slug: 'jewelry' },
        update: {},
        create: {
          name: 'Jewelry',
          description: 'Authentic Indian jewelry and accessories',
          image: '/images/categories/jewelry.jpg',
          slug: 'jewelry'
        }
      }),
      prisma.category.upsert({
        where: { slug: 'kurtis' },
        update: {},
        create: {
          name: 'Kurtis',
          description: 'Modern and traditional kurtis',
          image: '/images/categories/kurtis.jpg',
          slug: 'kurtis'
        }
      }),
      prisma.category.upsert({
        where: { slug: 'lehengas' },
        update: {},
        create: {
          name: 'Lehengas',
          description: 'Bridal and party lehengas',
          image: '/images/categories/lehengas.jpg',
          slug: 'lehengas'
        }
      }),
      prisma.category.upsert({
        where: { slug: 'accessories' },
        update: {},
        create: {
          name: 'Accessories',
          description: 'Indian fashion accessories',
          image: '/images/categories/accessories.jpg',
          slug: 'accessories'
        }
      })
    ]);

    console.log('✅ Categories Created');

    // Create demo products
    const products = await Promise.all([
      prisma.product.upsert({
        where: { sku: 'SARE001' },
        update: {},
        create: {
          name: 'Silk Banarasi Saree',
          description: 'Handcrafted Banarasi silk saree with intricate zari work',
          price: 25000,
          salePrice: 20000,
          images: JSON.stringify([
            '/images/products/saree1-1.jpg',
            '/images/products/saree1-2.jpg',
            '/images/products/saree1-3.jpg'
          ]),
          categoryId: categories[0].id, // Sarees
          stock: 10,
          sku: 'SARE001',
          weight: 0.8,
          dimensions: JSON.stringify({ length: 5.5, width: 1.1, height: 0.1 }),
          isActive: true,
          isFeatured: true,
          tags: JSON.stringify(['silk', 'banarasi', 'bridal', 'zari'])
        }
      }),
      prisma.product.upsert({
        where: { sku: 'JEW001' },
        update: {},
        create: {
          name: 'Kundan Necklace Set',
          description: 'Traditional kundan jewelry set with matching earrings',
          price: 15000,
          salePrice: 12000,
          images: JSON.stringify([
            '/images/products/jewelry1-1.jpg',
            '/images/products/jewelry1-2.jpg'
          ]),
          categoryId: categories[1].id, // Jewelry
          stock: 25,
          sku: 'JEW001',
          weight: 0.3,
          dimensions: JSON.stringify({ length: 0.3, width: 0.2, height: 0.1 }),
          isActive: true,
          isFeatured: true,
          tags: JSON.stringify(['kundan', 'necklace', 'earrings', 'bridal'])
        }
      }),
      prisma.product.upsert({
        where: { sku: 'KUR001' },
        update: {},
        create: {
          name: 'Embroidered Cotton Kurti',
          description: 'Comfortable cotton kurti with beautiful embroidery',
          price: 2500,
          salePrice: 2000,
          images: JSON.stringify([
            '/images/products/kurti1-1.jpg',
            '/images/products/kurti1-2.jpg'
          ]),
          categoryId: categories[2].id, // Kurtis
          stock: 50,
          sku: 'KUR001',
          weight: 0.4,
          dimensions: JSON.stringify({ length: 0.8, width: 0.6, height: 0.1 }),
          isActive: true,
          isFeatured: false,
          tags: JSON.stringify(['cotton', 'embroidered', 'casual', 'comfortable'])
        }
      })
    ]);

    console.log('✅ Demo Products Created');

    // Create seller products
    await Promise.all([
      prisma.sellerProduct.upsert({
        where: { productId: products[0].id },
        update: {},
        create: {
          sellerId: sellerProfile.id,
          productId: products[0].id,
          customSku: 'SELLER-SARE001',
          price: 22000,
          stock: 8
        }
      }),
      prisma.sellerProduct.upsert({
        where: { productId: products[1].id },
        update: {},
        create: {
          sellerId: sellerProfile.id,
          productId: products[1].id,
          customSku: 'SELLER-JEW001',
          price: 13000,
          stock: 20
        }
      })
    ]);

    console.log('✅ Seller Products Created');

    // Create product variants
    await Promise.all([
      prisma.productVariant.upsert({
        where: { sku: 'SARE001-RED-FS' },
        update: {},
        create: {
          productId: products[0].id,
          size: 'Free Size',
          color: 'Red',
          stock: 5,
          price: 20000,
          sku: 'SARE001-RED-FS'
        }
      }),
      prisma.productVariant.upsert({
        where: { sku: 'SARE001-GREEN-FS' },
        update: {},
        create: {
          productId: products[0].id,
          size: 'Free Size',
          color: 'Green',
          stock: 5,
          price: 20000,
          sku: 'SARE001-GREEN-FS'
        }
      }),
      prisma.productVariant.upsert({
        where: { sku: 'KUR001-BLUE-S' },
        update: {},
        create: {
          productId: products[2].id,
          size: 'S',
          color: 'Blue',
          stock: 15,
          price: 2000,
          sku: 'KUR001-BLUE-S'
        }
      }),
      prisma.productVariant.upsert({
        where: { sku: 'KUR001-BLUE-M' },
        update: {},
        create: {
          productId: products[2].id,
          size: 'M',
          color: 'Blue',
          stock: 20,
          price: 2000,
          sku: 'KUR001-BLUE-M'
        }
      }),
      prisma.productVariant.upsert({
        where: { sku: 'KUR001-BLUE-L' },
        update: {},
        create: {
          productId: products[2].id,
          size: 'L',
          color: 'Blue',
          stock: 15,
          price: 2000,
          sku: 'KUR001-BLUE-L'
        }
      })
    ]);

    console.log('✅ Product Variants Created');

    // Create demo orders
    const orders = await Promise.all([
      prisma.order.create({
        data: {
          userId: demoAdmin.id,
          status: 'CONFIRMED',
          total: 22000,
          subtotal: 20000,
          tax: 1000,
          shipping: 1000,
          discount: 0,
          shippingAddress: JSON.stringify({
            name: 'Demo Admin',
            street: '123 Admin Street',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia',
            postalCode: '2000',
            phone: '+61-987654321'
          }),
          billingAddress: JSON.stringify({
            name: 'Demo Admin',
            street: '123 Admin Street',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia',
            postalCode: '2000',
            phone: '+61-987654321'
          }),
          paymentStatus: 'PAID',
          trackingNumber: 'TRK123456789',
          notes: 'Demo order for testing'
        }
      }),
      prisma.order.create({
        data: {
          userId: demoAdmin.id,
          status: 'PENDING',
          total: 13000,
          subtotal: 12000,
          tax: 600,
          shipping: 400,
          discount: 0,
          shippingAddress: JSON.stringify({
            name: 'Demo Admin',
            street: '123 Admin Street',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia',
            postalCode: '2000',
            phone: '+61-987654321'
          }),
          billingAddress: JSON.stringify({
            name: 'Demo Admin',
            street: '123 Admin Street',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia',
            postalCode: '2000',
            phone: '+61-987654321'
          }),
          paymentStatus: 'PENDING',
          notes: 'Demo pending order'
        }
      })
    ]);

    console.log('✅ Demo Orders Created');

    // Create order items
    await Promise.all([
      prisma.orderItem.create({
        data: {
          orderId: orders[0].id,
          productId: products[0].id,
          quantity: 1,
          price: 20000,
          variantId: null
        }
      }),
      prisma.orderItem.create({
        data: {
          orderId: orders[1].id,
          productId: products[1].id,
          quantity: 1,
          price: 12000,
          variantId: null
        }
      })
    ]);

    console.log('✅ Order Items Created');

    // Create shipments
    await prisma.shipment.create({
      data: {
        orderId: orders[0].id,
        sellerId: sellerProfile.id,
        trackingNumber: 'TRK123456789',
        carrier: 'Australia Post',
        status: 'SHIPPED',
        shippedAt: new Date(),
        notes: 'Demo shipment for testing'
      }
    });

    console.log('✅ Demo Shipment Created');

    // Create reviews
    await prisma.review.create({
      data: {
        userId: demoAdmin.id,
        productId: products[0].id,
        rating: 5,
        title: 'Beautiful Banarasi Saree',
        comment: 'Excellent quality and craftsmanship. The zari work is stunning!',
        isVerified: true
      }
    });

    console.log('✅ Demo Review Created');

    // Create wishlist items
    await prisma.wishlistItem.create({
      data: {
        userId: demoAdmin.id,
        productId: products[1].id
      }
    });

    console.log('✅ Demo Wishlist Item Created');

    console.log('\n🎉 Demo Admin Account Setup Complete!');
    console.log('\n📋 Demo Account Details:');
    console.log('👤 Admin Email: admin@bhartiyavastra.com');
    console.log('🔑 Admin Password: admin123');
    console.log('👤 Seller Email: seller@bhartiyavastra.com');
    console.log('🔑 Seller Password: admin123');
    console.log('\n✨ Features Available for Testing:');
    console.log('• User Authentication (Admin & Seller roles)');
    console.log('• Numerology Profile (Life Path Number 7 for Admin, 4 for Seller)');
    console.log('• Product Management (3 demo products with variants)');
    console.log('• Order Management (2 demo orders)');
    console.log('• Seller Portal (Complete seller profile)');
    console.log('• Reviews & Ratings');
    console.log('• Wishlist Functionality');
    console.log('• Shipment Tracking');
    console.log('• Category Management');

  } catch (error) {
    console.error('❌ Error creating demo admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDemoAdmin();
