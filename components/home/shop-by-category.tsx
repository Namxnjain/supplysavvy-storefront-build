import { SectionHeading } from "@/components/shared/section-heading"
import { CategoryCard } from "@/components/shared/category-card"
import { categories } from "@/lib/categories"

export function ShopByCategory() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="Browse the catalogue" title="Shop by Category" />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  )
}
