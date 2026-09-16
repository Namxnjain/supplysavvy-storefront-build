import { categories, allSubcategories } from "./categories"
import { products } from "./products"

export type SearchResult =
  | { type: "category"; label: string; href: string; meta: string }
  | { type: "subcategory"; label: string; href: string; meta: string }
  | { type: "product"; label: string; href: string; meta: string }

export function search(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const results: SearchResult[] = []

  for (const category of categories) {
    if (category.name.toLowerCase().includes(q)) {
      results.push({ type: "category", label: category.name, href: `/${category.slug}`, meta: "Category" })
    }
  }

  for (const sub of allSubcategories) {
    if (sub.name.toLowerCase().includes(q)) {
      results.push({
        type: "subcategory",
        label: sub.name,
        href: `/${sub.categorySlug}/${sub.slug}`,
        meta: "Subcategory / Collection",
      })
    }
  }

  for (const product of products) {
    if (product.name.toLowerCase().includes(q) || product.sku.toLowerCase().includes(q)) {
      results.push({
        type: "product",
        label: product.name,
        href: `/products/${product.slug}`,
        meta: `Product · ${product.sku}`,
      })
    }
  }

  return results.slice(0, limit)
}
