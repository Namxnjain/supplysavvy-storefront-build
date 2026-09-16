import { Boxes, HandCoins, PackageCheck, Clock3 } from "lucide-react"

const reasons = [
  {
    icon: Boxes,
    title: "500+ Business Essentials",
    body: "One catalogue for housekeeping, stationery and pantry — no juggling multiple vendors.",
  },
  {
    icon: HandCoins,
    title: "Transparent Bulk Pricing",
    body: "Volume-based quotations with no hidden costs, tailored to your order size.",
  },
  {
    icon: PackageCheck,
    title: "Consistent Quality",
    body: "Curated brands and vetted suppliers so every repeat order matches the last.",
  },
  {
    icon: Clock3,
    title: "Reliable Turnaround",
    body: "Scheduled and on-demand deliveries built around your office or facility calendar.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="border-b border-border pb-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-butter-dark">The SupplySavvy difference</p>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Why Choose SupplySavvy</h2>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-md border border-border bg-card p-5">
              <span className="flex size-10 items-center justify-center rounded-full bg-slate-deep text-primary-foreground">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm font-bold text-foreground">{reason.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
