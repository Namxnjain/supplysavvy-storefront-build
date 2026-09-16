export type Subcategory = {
  slug: string
  name: string
  categorySlug: CategorySlug
  /** Path to the supplied 1:1 subcategory image, or null if no asset was supplied. */
  image: string | null
}

export type CategorySlug = "housekeeping-materials" | "office-stationery" | "pantry-items"

export type Category = {
  slug: CategorySlug
  name: string
  shortName: string
  description: string
  /** Representative image used on category entry cards (reused from a supplied subcategory image). */
  image: string
  subcategories: Subcategory[]
}

export type Product = {
  slug: string
  name: string
  sku: string
  subcategorySlug: string
  categorySlug: CategorySlug
  price: number
  compareAtPrice?: number
  unit: string
  image: string | null
  available: boolean
  badge?: "Best Seller" | "New Arrival" | "Trending"
  description: string
  specifications: { label: string; value: string }[]
  applications: string[]
}
