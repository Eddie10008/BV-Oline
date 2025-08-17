import { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Categories from '@/components/home/Categories'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import Loading from '@/components/ui/Loading'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <FeaturedProducts />
      </Suspense>
      
      <Testimonials />
      <Newsletter />
    </main>
  )
}
