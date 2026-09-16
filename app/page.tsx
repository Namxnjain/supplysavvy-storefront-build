import { HeroCarousel } from "@/components/home/hero-carousel"
import { UspStrip } from "@/components/home/usp-strip"
import { ShopByCategory } from "@/components/home/shop-by-category"
import { WhyChoose } from "@/components/home/why-choose"
import { ProductRail } from "@/components/home/product-rail"
import { ShopByProduct } from "@/components/home/shop-by-product"
import { AboutTeaser } from "@/components/home/about-teaser"
import { BlogTeaser } from "@/components/home/blog-teaser"
import { FaqSection } from "@/components/home/faq-section"
import { getBestSellers, getNewArrivals, getTrending } from "@/lib/products"

export default function HomePage() {
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  const trending = getTrending()

  return (
    <>
      <HeroCarousel />
      <UspStrip />
      <ShopByCategory />
      <WhyChoose />
      <ProductRail eyebrow="Customer favourites" title="Best Sellers" products={bestSellers} href="/products" />
      <ProductRail eyebrow="Just added" title="New Arrivals" products={newArrivals} href="/products" />
      <ProductRail eyebrow="Gaining momentum" title="Trending Now" products={trending} href="/products" />
      <ShopByProduct />
      <AboutTeaser />
      <BlogTeaser />
      <FaqSection />
    </>
  )
}
