import { Phone, Mail, FileBadge, Truck } from "lucide-react"

export function UtilityBar() {
  return (
    <div className="hidden border-b border-slate-mid/40 bg-slate-deep text-primary-foreground lg:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-1.5 text-xs">
        <div className="flex items-center gap-5">
          <a href="tel:+911140001234" className="flex items-center gap-1.5 hover:text-butter">
            <Phone className="size-3.5" />
            +91 11 4000 1234
          </a>
          <a href="mailto:sales@supplysavvy.in" className="flex items-center gap-1.5 hover:text-butter">
            <Mail className="size-3.5" />
            sales@supplysavvy.in
          </a>
          <span className="flex items-center gap-1.5 text-primary-foreground/80">
            <FileBadge className="size-3.5" />
            GSTIN: 07XXXXX1234X1ZX
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-medium text-butter">
          <Truck className="size-3.5" />
          Wholesale rates available on every order
        </div>
      </div>
    </div>
  )
}
