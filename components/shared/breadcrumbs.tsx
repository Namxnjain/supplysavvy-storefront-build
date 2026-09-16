import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 overflow-x-auto whitespace-nowrap py-3 text-xs text-muted-foreground sm:text-sm">
      <Link href="/" className="flex items-center gap-1 hover:text-foreground" aria-label="Home">
        <Home className="size-3.5" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
