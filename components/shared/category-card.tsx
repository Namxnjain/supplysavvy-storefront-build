import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/lib/types"

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group relative flex items-center gap-4 overflow-hidden rounded-md border border-border bg-card p-4 transition-colors hover:border-slate-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-5"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted sm:size-20">
        <Image src={category.image} alt={category.name} fill sizes="80px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="text-base font-bold text-foreground sm:text-lg">{category.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
          {category.subcategories.length} subcategories
        </p>
      </div>
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 text-butter-dark opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  )
}
