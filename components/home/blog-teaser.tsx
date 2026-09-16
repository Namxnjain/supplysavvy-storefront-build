import { SectionHeading } from "@/components/shared/section-heading"
import { CalendarDays } from "lucide-react"

const posts = [
  {
    title: "5 Ways to Cut Housekeeping Costs Without Cutting Quality",
    excerpt:
      "Practical tips for facility managers on optimizing cleaning supply spend across multi-site operations.",
    date: "Housekeeping",
  },
  {
    title: "Building a Stationery Reorder Checklist for Growing Teams",
    excerpt: "A simple framework for forecasting office stationery needs as headcount scales.",
    date: "Office Stationery",
  },
  {
    title: "Pantry Stocking 101: Keeping Every Break Room Happy",
    excerpt: "How to plan a pantry inventory that balances variety, cost and minimal wastage.",
    date: "Pantry Items",
  },
]

export function BlogTeaser() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="From the SupplySavvy desk" title="Blog" />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="flex flex-col gap-2 rounded-md border border-border bg-card p-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-butter-dark">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {post.date}
            </span>
            <h3 className="text-sm font-bold leading-snug text-foreground sm:text-base">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
