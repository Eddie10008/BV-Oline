import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { CartProvider } from '@/components/providers/CartProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhartiya Vastra - Premium Indian Attire & Accessories | Australia',
  description: 'Discover the finest collection of sarees, jewelry, and Indian attire for modern women in Australia. Premium quality, authentic designs, and exceptional service with local Australian logistics.',
  keywords: 'sarees australia, indian jewelry australia, indian attire australia, indian accessories australia, traditional wear australia, ethnic fashion australia, sydney indian fashion',
  authors: [{ name: 'Bhartiya Vastra Australia' }],
  openGraph: {
    title: 'Bhartiya Vastra - Premium Indian Attire & Accessories | Australia',
    description: 'Discover the finest collection of sarees, jewelry, and Indian attire for modern women in Australia.',
    url: 'https://bhartiyavastra.com.au',
    siteName: 'Bhartiya Vastra Australia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhartiya Vastra - Premium Indian Attire Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhartiya Vastra - Premium Indian Attire & Accessories | Australia',
    description: 'Discover the finest collection of sarees, jewelry, and Indian attire for modern women in Australia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <ThemeProvider>
              <Header />
              <main>
                {children}
              </main>
              <Footer />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: '#4ade80',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    duration: 5000,
                    iconTheme: {
                      primary: '#ef4444',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
