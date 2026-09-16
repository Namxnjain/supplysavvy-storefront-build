"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { formatINR } from "@/lib/format"

export function RequestQuoteForm() {
  const { lines, subtotal, removeItem, setQuantity, clear } = useCart()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    clear()
    toast.success("Quotation request submitted")
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-border bg-card py-16 text-center">
        <CheckCircle2 className="size-10 text-emerald-600" aria-hidden="true" />
        <h2 className="text-lg font-bold text-foreground">Thank you for your request</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Our team will review your requirements and reach out with a tailored quotation shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {lines.length > 0 && (
        <div className="rounded-md border border-border bg-card p-4">
          <h2 className="text-sm font-bold text-foreground">Items in your quotation</h2>
          <ul className="mt-3 divide-y divide-border">
            {lines.map((line) => (
              <li key={line.slug} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{line.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatINR(line.price)} &middot; {line.unit}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={1}
                    value={line.quantity}
                    onChange={(e) => setQuantity(line.slug, Number(e.target.value) || 1)}
                    className="h-8 w-16 text-center"
                    aria-label={`Quantity for ${line.name}`}
                  />
                  <button
                    type="button"
                    aria-label={`Remove ${line.name}`}
                    onClick={() => removeItem(line.slug)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-semibold text-foreground">
            <span>Estimated subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" placeholder="Your organisation" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Requirements</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about the products, quantities and delivery timeline you need"
        />
      </div>

      <Button type="submit" className="h-11 bg-slate-deep px-8 text-primary-foreground hover:bg-slate-mid">
        Submit Quotation Request
      </Button>
    </form>
  )
}
