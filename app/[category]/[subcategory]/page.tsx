import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ProductCard } from "@/components/shared/product-card"
import { categories, allSubcategories } from "@/lib/categories"
import { getProductsBySubcategory } from "@/lib/products"

export function generateStaticParams() {
  return allSubcategories.map((sub) => ({
    category: sub.categorySlug,
    subcategory: sub.slug,
  }))
}

function resolve(categorySlug: string, subcategorySlug: string) {
  const category = categories.find((c) => c.slug === categorySlug)
  const sub = category?.subcategories.find((s) => s.slug === subcategorySlug)
  if (!category || !sub) return null
  return { category, sub }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>
}): Promise<Metadata> {
  const { category, subcategory } = await params
  const resolved = resolve(category, subcategory)
  if (!resolved) return {}
  return {
    title: resolved.sub.name,
    description: `Shop ${resolved.sub.name} from SupplySavvy's ${resolved.category.name} range.`,
  }
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const resolved = resolve(categorySlug, subcategorySlug)
  if (!resolved) notFound()
  const { category, sub } = resolved

  const products = getProductsBySubcategory(sub.slug)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: category.name, href: `/${category.slug}` },
          { label: sub.name },
        ]}
      />

      <div className="mt-3 border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{sub.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {products.length} {products.length === 1 ? "product" : "products"} in this range
        </p>
      </div>

      {products.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          No products are listed in this subcategory yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
