import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/shared/product-card"
import { ProductDetail } from "@/components/products/product-detail"
import { products, getProduct, getRelatedProducts } from "@/lib/products"
import { categories } from "@/lib/categories"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const category = categories.find((c) => c.slug === product.categorySlug)
  const subcategory = category?.subcategories.find((s) => s.slug === product.subcategorySlug)
  const related = getRelatedProducts(product)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(category ? [{ label: category.name, href: `/${category.slug}` }] : []),
          ...(subcategory ? [{ label: subcategory.name, href: `/${category?.slug}/${subcategory.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="border-t border-border py-10">
          <SectionHeading eyebrow="You may also need" title="Related Products" />
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
