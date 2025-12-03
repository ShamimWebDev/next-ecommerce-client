# 🛒 Next-Ecommerce – Modern E-Commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Live Site:** [https://next-ecommerce190.vercel.app/](https://next-ecommerce190.vercel.app/)  
**Server API:** [https://next-ecommerce-server-eta.vercel.app/](https://next-ecommerce-server-eta.vercel.app/)

A modern, responsive e-commerce web application built with Next.js 16 (App Router), featuring a complete shopping experience with product management, authentication, and a beautifully designed UI following industry standards.

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse products with high-quality images, detailed descriptions, and pricing
- **Advanced Search & Filtering**: Search by name with real-time highlighting, filter by category and price range
- **Product Details**: Comprehensive product pages with trust badges, image galleries, and CTA buttons
- **Wishlist System**: Save favorite items for later purchase
- **Shopping Cart**: Add items, manage quantities, and proceed to checkout

### 🔐 Authentication & Security
- **NextAuth.js Integration**: Secure authentication with credentials and OAuth
- **Google Sign-In**: One-click authentication with Google
- **Protected Routes**: Admin and user-specific page access control
- **Password Validation**: Strong password requirements with regex validation

### 🛠️ Admin Features
- **Product Management**: Full CRUD operations for products
- **Dashboard**: Manage product inventory with an intuitive interface
- **Bulk Operations**: Efficient product management with batch actions
- **Image Upload**: Support for product images via URL

### 🎨 Modern UI/UX
- **Design System**: Comprehensive design tokens with CSS variables
- **Reusable Components**: 10+ custom UI components (Button, Card, Input, Badge, Avatar)
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Loading States**: Skeleton loaders and loading indicators
- **Animations**: Smooth transitions and micro-interactions using `tailwindcss-animate`
- **Dark Mode Ready**: CSS variable-based theming system

### 📱 Responsive & Accessible
- **Mobile Optimized**: Touch-friendly interfaces and responsive layouts
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **SEO Friendly**: Meta tags, structured data, and semantic markup

---

## 🏗️ Architecture

### Frontend Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with custom configuration
- **Component Library**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Forms**: Controlled components with validation
- **Type Safety**: TypeScript for type checking

### Backend Integration
- **API Client**: Axios with custom instance configuration
- **Authentication**: NextAuth.js with credentials and OAuth providers
- **Backend**: Express.js + MongoDB (separate repository)
- **API Communication**: RESTful API with CORS configuration

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "next": "^16.0.3",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "axios": "^1.13.2",
  "next-auth": "^4.24.13"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^4.1.17",
  "@tailwindcss/postcss": "^4.1.17",
  "tailwindcss-animate": "^1.0.7",
  "lucide-react": "^0.469.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.7.0"
}
```

### Radix UI Components
```json
{
  "@radix-ui/react-slot": "^1.1.1",
  "@radix-ui/react-avatar": "^1.1.2"
}
```

### Utilities
```json
{
  "react-toastify": "^11.0.5",
  "bcryptjs": "^3.0.3"
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- Google OAuth credentials (for Google sign-in)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ShamimWebDev/next-ecommerce-client.git
cd next-ecommerce-client
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# MongoDB (if using local auth)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

6. **Lint the codebase**
```bash
npm run lint
```

---

## 📂 Project Structure

```
next-ecommerce-client/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   └── avatar.tsx
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── FeaturedProducts.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx          # Call-to-action section
│   │   └── Footer.jsx       # Footer component
│   ├── products/
│   │   ├── page.jsx         # Product listing page
│   │   └── [id]/
│   │       └── page.js      # Product details page
│   ├── login/
│   │   └── page.jsx         # Login page
│   ├── register/
│   │   └── page.jsx         # Registration page
│   ├── add-product/
│   │   └── page.jsx         # Admin: Add product
│   ├── manage-products/
│   │   └── page.jsx         # Admin: Manage products
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js # NextAuth API routes
│   ├── layout.jsx           # Root layout
│   ├── page.jsx             # Homepage
│   └── globals.css          # Global styles & design tokens
├── lib/
│   ├── api.ts               # Axios instance configuration
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Brand color for CTAs and important elements
- **Secondary**: Supporting color for accents
- **Muted**: Background and subtle elements
- **Accent**: Highlights and interactive states
- **Destructive**: Error states and delete actions

### Typography
- **Font Family**: System font stack for optimal performance
- **Scale**: Consistent heading and body text sizes
- **Line Height**: Optimized for readability

### Components
All UI components follow a consistent design language with:
- Variants for different use cases
- Size options (sm, md, lg)
- Hover and focus states
- Loading states
- Disabled states

---

## 🔑 Key Features Breakdown

### Homepage
- **Hero Section**: Eye-catching banner with CTAs
- **Featured Products**: Grid of latest products with hover effects
- **Testimonials**: Customer reviews with ratings
- **CTA Section**: Special offers and promotions
- **Footer**: Site navigation, newsletter signup, social links

### Product Listing
- **Sidebar Filters**: Category, price range, search
- **Grid Layout**: Responsive product cards
- **Load States**: Skeleton loaders during fetch
- **Empty States**: Helpful messages when no results

### Product Details
- **Two-Column Layout**: Image gallery and product info
- **Trust Badges**: Free shipping, warranty, returns
- **Action Buttons**: Add to cart, wishlist, share
- **Back Navigation**: Easy return to product list

### Authentication
- **Login/Register Forms**: Clean, modern card-based design
- **Password Toggle**: Show/hide password functionality
- **Google Sign-In**: One-click OAuth authentication
- **Form Validation**: Client-side validation with helpful errors

### Admin Panel
- **Product Management**: Table view with actions
- **Add Product Form**: Organized fields with validation
- **Loading States**: Feedback during operations
- **Confirmation Dialogs**: Prevent accidental deletions

---

## 🧪 Testing

The application includes:
- Loading state testing
- Form validation testing
- Responsive design testing across devices
- Cross-browser compatibility

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The app is optimized for Vercel with automatic deployments on push.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Shamim Web Dev**

- GitHub: [@ShamimWebDev](https://github.com/ShamimWebDev)
- Live Site: [next-ecommerce190.vercel.app](https://next-ecommerce190.vercel.app/)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Radix UI for accessible component primitives
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Vercel for hosting and deployment

---

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, React, and TailwindCSS**
