# Bhartiya Vastra - Seller Portal

A comprehensive seller portal for managing products, orders, shipments, and business operations on the Bhartiya Vastra saree marketplace.

## Features

### 🏠 Dashboard
- **Overview Statistics**: Total products, active products, total orders, pending shipments
- **Recent Orders**: Latest orders with customer details and status
- **Top Products**: Best-selling products with sales metrics
- **Sales Chart**: Visual representation of sales performance

### 📦 Product Management
- **Add New Products**: Comprehensive product creation form with:
  - Product name, description, and category
  - Pricing and stock management
  - Multiple image uploads via URLs
  - Product tags and specifications
  - Weight and dimensions
- **Product Listing**: View all products with search and filter capabilities
- **Product Status**: Activate/deactivate products
- **Product Editing**: Update product information and images

### 📋 Order Management
- **Order Overview**: View all orders with customer details
- **Order Status Tracking**: Monitor order status (Pending, Confirmed, Processing, Shipped, Delivered, Cancelled)
- **Order Details**: Complete order information including items and customer data
- **Order Filtering**: Filter orders by status

### 🚚 Shipment Management
- **Shipment Tracking**: Update tracking numbers and carrier information
- **Status Updates**: Mark shipments as shipped, delivered, or returned
- **Carrier Integration**: Support for major Indian carriers (DTDC, Blue Dart, FedEx, DHL, etc.)
- **Shipment Notes**: Add notes and comments for each shipment

### 📊 Analytics
- **Performance Metrics**: Product activation rate, average order value
- **Revenue Tracking**: Total revenue and sales analytics
- **Quick Actions**: Easy access to common tasks
- **Recent Activity**: Overview of recent business activities

### ⚙️ Settings & Profile
- **Business Profile**: Complete business information management
- **Contact Details**: Phone, website, and address information
- **Legal Information**: GST number, PAN number
- **Bank Details**: Payment and commission information
- **Account Status**: Verification and activation status

## Database Schema

### New Models Added

#### Seller
```prisma
model Seller {
  id          String    @id @default(cuid())
  userId      String    @unique
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  businessName String
  description String?
  logo        String?
  address     String    // JSON object
  phone       String?
  website     String?
  gstNumber   String?
  panNumber   String?
  bankDetails String?   // JSON object
  isVerified  Boolean   @default(false)
  isActive    Boolean   @default(true)
  commission  Float     @default(10.0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  products   SellerProduct[]
  shipments  Shipment[]
}
```

#### SellerProduct
```prisma
model SellerProduct {
  id        String   @id @default(cuid())
  sellerId  String
  seller    Seller   @relation(fields: [sellerId], references: [id], onDelete: Cascade)
  productId String   @unique
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  price     Float
  stock     Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### Shipment
```prisma
model Shipment {
  id            String   @id @default(cuid())
  orderId       String
  order         Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  sellerId      String
  seller        Seller   @relation(fields: [sellerId], references: [id])
  trackingNumber String?
  carrier       String?
  status        String   @default("PENDING")
  shippedAt     DateTime?
  deliveredAt   DateTime?
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

## API Endpoints

### Seller Products
- `POST /api/seller/products` - Create new product
- `GET /api/seller/products` - Get seller's products

### Seller Profile
- `POST /api/seller/profile` - Create seller profile
- `PUT /api/seller/profile` - Update seller profile
- `GET /api/seller/profile` - Get seller profile

### Shipments
- `PUT /api/seller/shipments/[id]` - Update shipment details

## File Structure

```
app/seller-portal/
├── layout.tsx              # Seller portal layout with sidebar
├── page.tsx                # Dashboard page
├── products/
│   └── page.tsx            # Products management page
├── orders/
│   └── page.tsx            # Orders management page
├── shipments/
│   └── page.tsx            # Shipments management page
├── analytics/
│   └── page.tsx            # Analytics page
└── settings/
    └── page.tsx            # Settings page

components/seller-portal/
├── SellerSidebar.tsx       # Navigation sidebar
├── SellerHeader.tsx        # Header with user menu
├── DashboardStats.tsx      # Dashboard statistics cards
├── ProductList.tsx         # Products table with filters
├── AddProductButton.tsx    # Add product button
├── AddProductModal.tsx     # Product creation modal
├── OrderList.tsx           # Orders table
├── ShipmentList.tsx        # Shipments table
├── UpdateShipmentModal.tsx # Shipment update modal
├── RecentOrders.tsx        # Recent orders widget
├── TopProducts.tsx         # Top products widget
├── SalesChart.tsx          # Sales chart component
├── SellerProfileForm.tsx   # Profile management form
└── AnalyticsOverview.tsx   # Analytics overview

api/seller/
├── products/
│   └── route.ts            # Product management API
├── profile/
│   └── route.ts            # Profile management API
└── shipments/
    └── [id]/
        └── route.ts        # Shipment management API
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- Next.js 14
- Prisma
- SQLite (or your preferred database)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access Seller Portal**
   Navigate to `/seller-portal` in your browser

### User Roles

The system supports multiple user roles:
- **USER**: Regular customers
- **SELLER**: Marketplace sellers (can access seller portal)
- **ADMIN**: Platform administrators

### Seller Onboarding

1. **Register/Login**: Users can register or login to the platform
2. **Complete Profile**: Navigate to `/seller-portal/settings` to complete business profile
3. **Add Products**: Use the products page to add your first products
4. **Start Selling**: Once products are added, they become available for customers

## Key Features

### Product Management
- **Bulk Operations**: Add multiple products efficiently
- **Image Management**: Support for multiple product images
- **Inventory Tracking**: Real-time stock management
- **Category Management**: Organize products by categories

### Order Processing
- **Real-time Updates**: Instant order notifications
- **Status Management**: Complete order lifecycle tracking
- **Customer Communication**: Access to customer details for support

### Shipping Integration
- **Multiple Carriers**: Support for major Indian shipping companies
- **Tracking Integration**: Easy tracking number management
- **Status Updates**: Automated status updates based on tracking

### Analytics & Reporting
- **Sales Analytics**: Comprehensive sales performance metrics
- **Product Performance**: Track which products sell best
- **Revenue Tracking**: Monitor earnings and commission

## Security Features

- **Role-based Access**: Only sellers can access seller portal
- **Data Validation**: Comprehensive input validation
- **Secure API**: Protected API endpoints with authentication
- **Session Management**: Secure user sessions

## Future Enhancements

- **Advanced Analytics**: More detailed reporting and insights
- **Bulk Operations**: Import/export product catalogs
- **Mobile App**: Native mobile application for sellers
- **Payment Integration**: Direct payment processing
- **Inventory Alerts**: Low stock notifications
- **Marketing Tools**: Promotional features and discounts

## Support

For technical support or questions about the seller portal, please refer to the main project documentation or contact the development team.

---

**Note**: This seller portal is specifically designed for the Bhartiya Vastra saree marketplace, focusing on traditional Indian clothing and maintaining the cultural essence of the platform.
