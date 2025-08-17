# Custom SKU Feature for Sellers

## Overview
The custom SKU feature allows sellers to assign their own unique product identifiers when listing products on the platform. This helps sellers maintain their internal inventory management systems while selling on the platform.

## Features

### 1. Custom SKU Input
- Sellers can optionally enter a custom SKU when adding products
- SKU format: `XXX-XXX-XXXXXX` (3 letters/numbers, 3 letters/numbers, 6 digits)
- Example: `ABC-DEF-123456`
- Maximum length: 20 characters

### 2. SKU Validation
- Real-time validation of SKU format
- Ensures uniqueness across the platform
- Prevents duplicate SKUs

### 3. Auto-Generated SKUs
- If no custom SKU is provided, the system generates one automatically
- Format: `{CATEGORY}-{TIMESTAMP}-{RANDOM}`
- Example: `SAREES-1703123456-ABC12`

### 4. Display in Product List
- Custom SKUs are displayed in the seller's product list
- Shows as a blue badge for custom SKUs
- Shows "Auto-generated" for system-generated SKUs

## Database Schema

```prisma
model SellerProduct {
  id        String   @id @default(cuid())
  sellerId  String
  seller    Seller   @relation(fields: [sellerId], references: [id], onDelete: Cascade)
  productId String   @unique
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  customSku String?  @unique // Custom SKU for seller's internal reference
  price     Float
  stock     Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Endpoints

### POST /api/seller/products
- Accepts `customSku` field in the request body
- Validates SKU format before saving
- Returns error if SKU format is invalid or already exists

### GET /api/seller/products
- Returns products with their custom SKUs
- Includes `customSku` field in the response

## Usage

### Adding a Product with Custom SKU
1. Go to Seller Portal > Products
2. Click "Add Product"
3. Fill in product details
4. Optionally enter a custom SKU in the format `XXX-XXX-XXXXXX`
5. Submit the form

### Viewing Custom SKUs
1. Go to Seller Portal > Products
2. View the "Custom SKU" column in the product list
3. Custom SKUs appear as blue badges
4. Auto-generated SKUs show "Auto-generated" text

## Validation Rules

- SKU must be in format: `XXX-XXX-XXXXXX`
- First 6 characters can be letters or numbers
- Last 6 characters must be digits
- Maximum length: 20 characters
- Must be unique across the platform
- Optional field (can be left empty)

## Error Handling

- Invalid format: "SKU format should be XXX-XXX-XXXXXX"
- Duplicate SKU: "SKU already exists"
- Too long: "SKU must be 20 characters or less"

## Future Enhancements

- SKU bulk import/export
- SKU templates for different product categories
- SKU history tracking
- SKU-based search and filtering
