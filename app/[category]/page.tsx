import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { SubcategoryCard } from "@/components/shared/subcategory-card"
import { ProductCard } from "@/components/shared/product-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { categories } from "@/lib/categories"
import { getProductsByCategory } from "@/lib/products"

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = categories.find((c) => c.slug === categorySlug)
  if (!category) return {}
  return {
    title: category.name,
    description: category.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = categories.find((c) => c.slug === categorySlug)
  if (!category) notFound()

  const products = getProductsByCategory(category.slug)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

      <div className="mt-3 border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{category.description}</p>
      </div>

      <section className="py-8">
        <SectionHeading eyebrow="Browse subcategories" title="Shop by Subcategory" />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {category.subcategories.map((sub) => (
            <SubcategoryCard key={sub.slug} subcategory={sub} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <SectionHeading eyebrow={`${products.length} products`} title={`All ${category.name}`} />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
