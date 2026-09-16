import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Building2, Handshake, Leaf, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SupplySavvy, a New Delhi based B2B supplier of housekeeping, office stationery and pantry essentials.",
}

const values = [
  {
    icon: Handshake,
    title: "Reliability First",
    body: "We treat every order — big or small — as a commitment. Consistent stock, consistent quality, every time.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    body: "Our account managers understand your recurring needs and proactively help you plan ahead.",
  },
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    body: "We prioritise vetted brands and, where possible, environmentally conscious product lines.",
  },
  {
    icon: Building2,
    title: "Built for Business",
    body: "GST invoicing, bulk pricing and dedicated support designed around how businesses actually buy.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <div className="grid grid-cols-1 items-center gap-8 border-b border-border pb-10 pt-3 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-butter-dark">Our story</p>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">About SupplySavvy</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Running a business is easier when all your essential supplies are available from one
            reliable source. SupplySavvy.com, operated by SupplySavvy India Pvt. Ltd., is an
            online B2B procurement platform designed to help businesses across India purchase
            their everyday workplace requirements conveniently and efficiently.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our journey began in 2018 with Sonika Enterprises, founded by Tarun Kaushik. With
            years of experience in wholesale supply, we understand what businesses need
            most—reliable products, competitive pricing, convenient ordering, responsive support,
            and dependable supply.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Building on this experience, we launched SupplySavvy.com to bring business procurement
            online and make sourcing simpler for customers across India.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md bg-muted">
          <Image
            src="/images/brand/founder.webp"
            alt="Founder of SupplySavvy"
            fill
            sizes="(max-width: 1024px) 320px, 360px"
            className="object-cover"
          />
        </div>
      </div>

      <section className="py-10">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">What We Stand For</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-md border border-border bg-card p-5">
              <span className="flex size-10 items-center justify-center rounded-full bg-slate-deep text-primary-foreground">
                <value.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm font-bold text-foreground">{value.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-10">
        <div className="rounded-md bg-slate-deep px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">
            Ready to simplify your business procurement?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-primary-foreground/80">
            Get in touch with our team for a tailored quotation on bulk orders.
          </p>
          <a
            href="/request-quote"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-butter px-6 py-2.5 text-sm font-bold text-slate-deep hover:bg-butter-dark"
          >
            Request a Quotation
          </a>
        </div>
      </section>
    </div>
  )
}
