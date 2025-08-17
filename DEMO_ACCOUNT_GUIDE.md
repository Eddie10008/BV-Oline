# Demo Admin Account Guide

## 🚀 Quick Setup

To create a comprehensive demo admin account for testing all platform features, run:

```bash
npm run demo:setup
```

This will create a complete demo environment with admin and seller accounts, products, orders, and all necessary data.

## 📋 Demo Account Details

### 👤 Admin Account
- **Email**: `admin@bhartiyavastra.com`
- **Password**: `admin123`
- **Role**: ADMIN
- **Life Path Number**: 7 (Spiritual & Analytical)

### 👤 Seller Account
- **Email**: `seller@bhartiyavastra.com`
- **Password**: `admin123`
- **Role**: SELLER
- **Life Path Number**: 4 (Practical & Organized)

## 🎯 Features Available for Testing

### 🔐 Authentication & User Management
- [x] Admin login/logout
- [x] Seller login/logout
- [x] User profile management
- [x] Role-based access control
- [x] Numerology profile integration

### 🛍️ Product Management
- [x] **3 Demo Products**:
  - Silk Banarasi Saree (Featured, $20,000)
  - Kundan Necklace Set (Featured, $12,000)
  - Embroidered Cotton Kurti (Casual, $2,000)
- [x] Product variants (sizes, colors)
- [x] Product categories (Sarees, Jewelry, Kurtis, Lehengas, Accessories)
- [x] Product images and descriptions
- [x] Stock management
- [x] Pricing (regular and sale prices)

### 📦 Order Management
- [x] **2 Demo Orders**:
  - Confirmed order (Banarasi Saree - $22,000 total)
  - Pending order (Kundan Necklace - $13,000 total)
- [x] Order status tracking
- [x] Payment status management
- [x] Shipping and billing addresses
- [x] Order items and quantities

### 🚚 Seller Portal
- [x] Complete seller profile
- [x] Business information
- [x] Bank details and GST information
- [x] Commission structure (12.5%)
- [x] Product listings
- [x] Order management
- [x] Shipment tracking

### 📊 Analytics & Reporting
- [x] Sales analytics
- [x] Product performance
- [x] Order tracking
- [x] Customer insights

### ⭐ Reviews & Ratings
- [x] Product reviews
- [x] Rating system (1-5 stars)
- [x] Verified reviews
- [x] Review moderation

### ❤️ Wishlist & Favorites
- [x] Wishlist functionality
- [x] Add/remove items
- [x] Wishlist management

### 🚛 Shipment Tracking
- [x] Shipment creation
- [x] Tracking numbers
- [x] Carrier information
- [x] Status updates

## 🧪 Testing Scenarios

### Admin Testing
1. **Login as Admin**:
   - Go to `/auth/signin`
   - Use: `admin@bhartiyavastra.com` / `admin123`

2. **Test Admin Features**:
   - View all products and categories
   - Manage user accounts
   - Monitor orders and shipments
   - Access analytics dashboard
   - Review seller applications

### Seller Testing
1. **Login as Seller**:
   - Go to `/auth/signin`
   - Use: `seller@bhartiyavastra.com` / `admin123`

2. **Test Seller Features**:
   - Access seller portal (`/seller-portal`)
   - Manage product listings
   - Process orders
   - Update shipment status
   - View earnings and commissions

### Customer Testing
1. **Browse Products**:
   - Visit homepage to see featured products
   - Browse categories (Sarees, Jewelry, etc.)
   - View product details and variants

2. **Test Shopping Features**:
   - Add items to wishlist
   - View product reviews
   - Check product availability
   - Compare prices and variants

## 📱 Numerology Integration

### Admin Numerology Profile (Life Path 7)
- **Theme Colors**: Purple, Indigo, Blue
- **Strengths**: Analytical, Spiritual, Intuitive
- **Career**: Research, Analysis, Spirituality
- **Lucky Numbers**: 7, 16, 25, 34

### Seller Numerology Profile (Life Path 4)
- **Theme Colors**: Green, Brown, Earth
- **Strengths**: Practical, Organized, Reliable
- **Career**: Business, Management, Organization
- **Lucky Numbers**: 4, 13, 22, 31

## 🔧 Database Structure

The demo setup creates:

- **Users**: 2 (Admin + Seller)
- **Categories**: 5 (Sarees, Jewelry, Kurtis, Lehengas, Accessories)
- **Products**: 3 (with variants)
- **Orders**: 2 (Confirmed + Pending)
- **Shipments**: 1 (Shipped)
- **Reviews**: 1 (5-star review)
- **Wishlist Items**: 1

## 🚨 Important Notes

1. **Demo Data**: All data is for testing purposes only
2. **Passwords**: Use `admin123` for both accounts
3. **Real Data**: Replace with real data before production
4. **Security**: Change passwords in production environment
5. **Backup**: The script uses `upsert` to avoid duplicates

## 🛠️ Troubleshooting

### If script fails:
1. Ensure database is running: `npm run db:push`
2. Check Prisma client: `npm run db:generate`
3. Verify dependencies: `npm install`

### If login fails:
1. Check if demo accounts were created
2. Verify database connection
3. Check server logs for errors

## 📞 Support

For issues with the demo setup:
1. Check the terminal output for error messages
2. Verify all dependencies are installed
3. Ensure the database is properly configured
4. Check the Prisma schema matches the script

The demo account provides a complete testing environment for all platform features!
