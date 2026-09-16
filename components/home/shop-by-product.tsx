import { SectionHeading } from "@/components/shared/section-heading"
import { SubcategoryCard } from "@/components/shared/subcategory-card"
import { allSubcategories } from "@/lib/categories"

const featuredSlugs = [
  "taski-chemicals",
  "tissue-items",
  "garbage-bags",
  "dusters-mops",
  "register-notepads",
  "files-folders",
  "office-desk-accessories",
  "packaging-items",
  "coffee-tea",
  "disposable-items",
  "crockery-items",
  "biscuit-namkeen",
]

export function ShopByProduct() {
  const featured = featuredSlugs
    .map((slug) => allSubcategories.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="Popular collections" title="Shop by Product" href="/products" hrefLabel="View all products" />
      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {featured.map((sub) => (
          <SubcategoryCard key={sub.slug} subcategory={sub} />
        ))}
      </div>
    </section>
  )
}
