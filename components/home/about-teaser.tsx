import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-6 rounded-md border border-border bg-card p-5 sm:p-8 lg:grid-cols-[280px_1fr] lg:gap-10">
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-md bg-muted sm:w-56 lg:mx-0 lg:w-full">
          <Image
            src="/images/brand/founder.webp"
            alt="Founder of SupplySavvy"
            fill
            sizes="(max-width: 1024px) 224px, 280px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-butter-dark">Our story</p>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Your One-Stop B2B Partner for Everyday Business Supplies
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Running a business is easier when all your essential supplies are available from one
            reliable source. SupplySavvy.com, operated by SupplySavvy India Pvt. Ltd., is an
            online B2B procurement platform designed to help businesses across India purchase
            their everyday workplace requirements conveniently and efficiently.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our journey began in 2018 with Sonika Enterprises, founded by Tarun Kaushik. With
            years of experience in wholesale supply, we understand what businesses need
            most—reliable products, competitive pricing, convenient ordering, responsive support,
            and dependable supply.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Building on this experience, we launched SupplySavvy.com to bring business procurement
            online and make sourcing simpler for customers across India.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-deep hover:text-butter-dark"
          >
            Read our full story
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
