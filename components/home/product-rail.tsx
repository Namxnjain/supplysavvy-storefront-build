import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/shared/product-card"
import type { Product } from "@/lib/types"

export function ProductRail({
  eyebrow,
  title,
  products,
  href,
}: {
  eyebrow: string
  title: string
  products: Product[]
  href: string
}) {
  if (products.length === 0) return null

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <SectionHeading eyebrow={eyebrow} title={title} href={href} hrefLabel="View all" />
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
