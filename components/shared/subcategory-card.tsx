import Link from "next/link"
import Image from "next/image"
import { PackageSearch } from "lucide-react"
import type { Subcategory } from "@/lib/types"

export function SubcategoryCard({ subcategory }: { subcategory: Subcategory }) {
  return (
    <Link
      href={`/${subcategory.categorySlug}/${subcategory.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-slate-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {subcategory.image ? (
          <Image
            src={subcategory.image}
            alt={subcategory.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <PackageSearch className="size-8" aria-hidden="true" />
            <span className="text-[11px]">Image coming soon</span>
          </div>
        )}
      </div>
      <div className="px-2 py-2 text-center sm:px-3 sm:py-3">
        <p className="text-xs font-semibold leading-snug text-foreground sm:text-sm">{subcategory.name}</p>
      </div>
    </Link>
  )
}
