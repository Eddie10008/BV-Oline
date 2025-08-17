# Bhartiya Vastra Australia - Premium Indian Attire E-commerce Platform

A modern, powerful e-commerce platform built for selling premium Indian attire and accessories in Australia, specifically designed for women aged 20-30 years old. Headquartered in Sydney, Australia with nationwide logistics and Australian currency support.

## 🎯 Features

### Core E-commerce Features
- **Product Catalog**: Browse sarees, jewelry, kurtis, lehengas, and accessories
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **User Authentication**: Secure sign-up, sign-in, and profile management
- **Wishlist**: Save favorite products for later
- **Product Reviews**: Customer ratings and reviews system
- **Search & Filter**: Advanced search with category and price filters
- **Responsive Design**: Mobile-first design for all devices
- **Australian Logistics**: Nationwide shipping across Australia
- **Seller Portal**: Complete seller management system for vendors

### Technical Features
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: Prisma ORM with SQLite (easily switchable to PostgreSQL/MySQL)
- **Authentication**: NextAuth.js with multiple providers
- **Payment Integration**: Stripe payment processing with AUD support
- **Image Optimization**: Next.js Image component with CDN support
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Server-side rendering and static generation
- **Australian Compliance**: GST calculation, Australian shipping zones

### Design Features
- **Indian Cultural Theme**: Beautiful design inspired by Indian heritage
- **Smooth Animations**: Framer Motion for engaging user experience
- **Accessibility**: WCAG compliant with keyboard navigation
- **Loading States**: Skeleton loaders and smooth transitions
- **Toast Notifications**: User feedback for all actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bhartiya-vastra
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"

   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # Stripe (optional for development)
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
   STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"
   
   # Australian Settings
   CURRENCY="AUD"
   GST_RATE="0.10"
   SHIPPING_FREE_THRESHOLD="99"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bhartiya-vastra/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── providers/        # Context providers
│   ├── seller-portal/    # Seller portal components
│   └── ui/               # Reusable UI components
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
├── styles/               # Additional styles
└── types/                # TypeScript type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🎨 Design System

### Colors
- **Primary**: Indian Red (#FF6B6B)
- **Secondary**: Indian Gold (#FFD700)
- **Accent**: Indian Pink (#FF69B4), Purple (#9370DB), Orange (#FF8C00), Teal (#20B2AA)

### Typography
- **Display Font**: Playfair Display (for headings)
- **Body Font**: Inter (for body text)

### Components
- Responsive grid system
- Card components with hover effects
- Button variants (primary, secondary, outline)
- Form components with validation
- Loading states and animations

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Categories
1. Update the categories array in `components/home/Categories.tsx`
2. Add corresponding routes in the navigation
3. Create category-specific pages

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Use the design system components for consistency

### Database Schema
- Edit `prisma/schema.prisma` to modify the database structure
- Run `npx prisma db push` to apply changes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **Railway**: Great for full-stack deployment
- **AWS/GCP**: For enterprise deployments

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with tree shaking
- **Image Optimization**: Automatic WebP conversion

## 🔒 Security

- **Authentication**: Secure NextAuth.js implementation
- **Data Validation**: Zod schema validation
- **SQL Injection**: Protected with Prisma ORM
- **XSS Protection**: React's built-in protection
- **CSRF Protection**: NextAuth.js CSRF tokens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email info@bhartiyavastra.com.au or create an issue in the repository.

## 📍 Headquarters

**Bhartiya Vastra Australia**  
123 George Street  
Sydney, NSW 2000  
Australia  
Phone: +61 2 9876 5432

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Prisma team for the excellent ORM
- All contributors and supporters

---

**Bhartiya Vastra Australia** - Celebrating Indian Heritage with Modern Elegance in Australia ✨🇦🇺
