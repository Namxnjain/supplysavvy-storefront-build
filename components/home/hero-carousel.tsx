"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/brand/hero-1.webp",
    alt: "SupplySavvy business supplies hero banner one",
  },
  {
    image: "/images/brand/hero-2.webp",
    alt: "SupplySavvy business supplies hero banner two",
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section aria-label="Featured promotions" className="relative overflow-hidden bg-slate-deep">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] lg:aspect-[2.75/1]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 sm:px-6 sm:pb-0 lg:px-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-butter px-5 py-2.5 text-sm font-bold text-slate-deep shadow-lg transition-colors hover:bg-butter-dark sm:px-6 sm:py-3 sm:text-base"
            >
              Shop All Products
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background sm:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background sm:flex"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-butter" : "w-1.5 bg-background/60",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
