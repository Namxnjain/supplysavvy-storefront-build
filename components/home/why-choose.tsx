import Link from "next/link"
import { Check } from "lucide-react"

const reasons = [
  {
    title: "One-Stop B2B Procurement",
    body: "Get multiple categories of essential workplace supplies from a single source and make your purchasing process simpler.",
  },
  {
    title: "Competitive B2B Pricing",
    body: "Our wholesale supply background helps us provide competitive pricing for regular and bulk business requirements.",
  },
  {
    title: "Pan-India Supply",
    body: "We serve business customers across India, helping organizations source essential products regardless of location.",
  },
  {
    title: "B2B Billing",
    body: "Designed with business customers in mind, we provide B2B billing support for eligible business purchases.",
  },
  {
    title: "Bulk Orders Welcome",
    body: "Whether you're purchasing for an office, institution, commercial facility or multiple locations, our team can assist with bulk and recurring requirements.",
  },
  {
    title: "Experience Since 2018",
    body: "SupplySavvy is backed by the wholesale supply experience of Sonika Enterprises, established in 2018, giving us practical experience in serving business procurement needs.",
  },
  {
    title: "Corporate Gifting Solutions",
    body: "Looking for gifts for employees, clients or business events? We also provide corporate gifting solutions for bulk requirements.",
  },
  {
    title: "Easy Online Ordering",
    body: "Browse products and place your requirements through SupplySavvy.com, giving your business a simpler way to purchase essential supplies.",
  },
  {
    title: "Dedicated Business Support",
    body: "Have a large quantity requirement or can't find exactly what you need? Contact our team for B2B and bulk order assistance.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Why Choose SupplySavvy?
          </h2>
          <p className="mt-4 text-lg font-semibold text-slate-deep sm:text-xl">
            One Supplier. Multiple Business Needs. Less Procurement Hassle.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Why spend valuable time dealing with multiple vendors when your everyday business
            requirements can be sourced from one place?
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            SupplySavvy brings Stationery, Housekeeping, Pantry Essentials and Corporate Gifts
            together on one convenient B2B platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-butter text-slate-deep">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-base font-bold text-foreground sm:text-lg">{reason.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-border bg-card p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Simplify Your Business Purchasing?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get your Stationery, Housekeeping, Pantry & Corporate Gifting requirements from one
            trusted B2B supply partner.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-deep px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-deep/90"
            >
              SHOP ONLINE
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex h-11 items-center justify-center rounded-md bg-butter px-6 text-sm font-semibold text-slate-deep hover:bg-butter-dark"
            >
              REQUEST A B2B QUOTE
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-semibold text-foreground hover:bg-muted"
            >
              BULK ORDER ENQUIRY
            </Link>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-lg font-bold text-foreground">SupplySavvy</p>
            <p className="text-sm text-muted-foreground">Smart Supplies. Smarter Business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
