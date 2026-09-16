import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  href,
  hrefLabel = "View all",
  children,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  href?: string
  hrefLabel?: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-butter-dark">{eyebrow}</p>
        )}
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {children}
        {href && (
          <Link
            href={href}
            className="flex items-center gap-1 text-sm font-semibold text-slate-deep hover:text-butter-dark"
          >
            {hrefLabel}
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
