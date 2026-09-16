import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { RequestQuoteForm } from "@/components/quote/request-quote-form"

export const metadata: Metadata = {
  title: "Request a Quotation",
  description: "Request a bulk quotation from SupplySavvy for housekeeping, stationery and pantry supplies.",
}

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request a Quotation" }]} />

      <div className="mt-3 border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Request a Quotation</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Share your requirements and our team will get back to you with tailored bulk pricing and
          delivery timelines, along with GST-compliant invoicing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[1fr_320px]">
        <RequestQuoteForm />

        <aside className="rounded-md border border-border bg-secondary p-5">
          <h2 className="text-sm font-bold text-foreground">Why request a quote?</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>Bulk pricing tailored to your order volume</li>
            <li>Consolidated delivery scheduling for multi-site needs</li>
            <li>GST-compliant invoicing on confirmed orders</li>
            <li>A dedicated account contact for recurring orders</li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Cart items you have added are automatically included in your quotation request.
          </p>
        </aside>
      </div>
    </div>
  )
}
