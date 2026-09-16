import type { Metadata } from "next"
import Link from "next/link"
import { Search as SearchIcon } from "lucide-react"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { search } from "@/lib/search"

export const metadata: Metadata = {
  title: "Search Results",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q ?? ""
  const results = search(query, 30)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search Results" }]} />

      <div className="mt-3 border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Search Results</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {query ? (
            <>
              {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
            </>
          ) : (
            "Enter a search term to find products and categories."
          )}
        </p>
      </div>

      {query && results.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <SearchIcon className="size-10 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            No matches found. Try a different keyword or browse our categories from the home page.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border py-4">
          {results.map((result) => (
            <li key={`${result.type}-${result.href}`}>
              <Link
                href={result.href}
                className="flex items-center justify-between gap-3 py-3 hover:text-slate-deep"
              >
                <span className="text-sm font-medium text-foreground">{result.label}</span>
                <span className="text-xs text-muted-foreground">{result.meta}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
