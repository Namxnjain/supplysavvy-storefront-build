import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ProductCard } from "@/components/shared/product-card"
import { categories } from "@/lib/categories"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse SupplySavvy's full catalogue of housekeeping, office stationery and pantry supplies.",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: activeCategory } = await searchParams
  const filtered = activeCategory ? products.filter((p) => p.categorySlug === activeCategory) : products

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "All Products" }]} />

      <div className="mt-3 border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">All Products</h1>
        <p className="mt-2 text-sm text-muted-foreground">{filtered.length} products across our full catalogue</p>
      </div>

      <div className="flex flex-wrap gap-2 py-5">
        <Link
          href="/products"
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
            !activeCategory
              ? "border-slate-deep bg-slate-deep text-primary-foreground"
              : "border-border text-foreground hover:bg-muted",
          )}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products?category=${category.slug}`}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
              activeCategory === category.slug
                ? "border-slate-deep bg-slate-deep text-primary-foreground"
                : "border-border text-foreground hover:bg-muted",
            )}
          >
            {category.shortName}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">No products found for this filter.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
