import Link from "next/link"
import type { Category } from "@/lib/types"

export function MegaMenuPanel({ category, columns = 3 }: { category: Category; columns?: number }) {
  return (
    <div className="w-[560px] max-w-[90vw] rounded-md border border-border bg-popover p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="text-sm font-bold text-foreground">{category.name}</p>
        <Link href={`/${category.slug}`} className="text-xs font-semibold text-slate-deep hover:text-butter-dark">
          View all &rarr;
        </Link>
      </div>
      <ul
        className="grid gap-x-6 gap-y-1.5"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {category.subcategories.map((sub) => (
          <li key={sub.slug}>
            <Link
              href={`/${category.slug}/${sub.slug}`}
              className="block rounded px-1.5 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
