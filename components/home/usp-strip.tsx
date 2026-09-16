import { Truck, ShieldCheck, ReceiptText, Headset } from "lucide-react"

const items = [
  { icon: Truck, title: "Pan-India Delivery", subtitle: "Bulk orders shipped nationwide" },
  { icon: ReceiptText, title: "GST Invoicing", subtitle: "Tax-compliant billing on every order" },
  { icon: ShieldCheck, title: "Quality Assured", subtitle: "Trusted brands & vetted suppliers" },
  { icon: Headset, title: "Dedicated Support", subtitle: "Real B2B account assistance" },
]

export function UspStrip() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-10">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-butter text-slate-deep">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
