"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { search } from "@/lib/search"
import { cn } from "@/lib/utils"

export function SearchBox({ className, autoFocus }: { className?: string; autoFocus?: boolean }) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const results = search(query)

  const submit = () => {
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          autoFocus={autoFocus}
          placeholder="Search products, categories..."
          className="h-10 rounded-md border-border bg-background pl-9 pr-9 text-sm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit()
            if (e.key === "Escape") setOpen(false)
          }}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
            onClick={() => setQuery("")}
          >
            <X className="size-4" />
          </button>
        )}
      </div>
      {open && query && (
        <div className="absolute left-0 top-full z-50 mt-1.5 max-h-96 w-full overflow-auto rounded-md border border-border bg-popover shadow-lg">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            <ul className="py-1">
              {results.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    className="flex flex-col px-3.5 py-2 text-sm hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-medium text-foreground">{r.label}</span>
                    <span className="text-xs text-muted-foreground">{r.meta}</span>
                  </Link>
                </li>
              ))}
              <li className="border-t border-border">
                <button
                  type="button"
                  onClick={submit}
                  className="flex w-full items-center gap-2 px-3.5 py-2.5 text-sm font-semibold text-slate-deep hover:bg-muted"
                >
                  <Search className="size-3.5" />
                  View all results for &ldquo;{query}&rdquo;
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
