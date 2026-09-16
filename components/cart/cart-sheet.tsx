"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2, PackageSearch } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/lib/cart-context"
import { formatINR } from "@/lib/format"

export function CartSheet() {
  const { isOpen, closeCart, lines, subtotal, removeItem, setQuantity } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <ShoppingCart className="size-5" />
            Your Cart ({lines.length})
          </SheetTitle>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <PackageSearch className="size-10 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Browse our catalogue to add business essentials.</p>
            <Button onClick={closeCart} className="mt-2 bg-slate-deep text-primary-foreground hover:bg-slate-mid">
              Continue Browsing
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-4">
              <ul className="flex flex-col gap-4 py-2">
                {lines.map((line) => (
                  <li key={line.slug} className="flex gap-3 border-b border-border pb-4 last:border-none">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted">
                      {line.image ? (
                        <Image src={line.image} alt={line.name} fill sizes="64px" className="object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                          <PackageSearch className="size-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <Link
                        href={`/products/${line.slug}`}
                        onClick={closeCart}
                        className="line-clamp-2 text-sm font-semibold text-foreground hover:text-slate-deep"
                      >
                        {line.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{line.unit}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center rounded-md border border-border">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="flex size-7 items-center justify-center hover:bg-muted"
                            onClick={() => setQuantity(line.slug, line.quantity - 1)}
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold">{line.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="flex size-7 items-center justify-center hover:bg-muted"
                            onClick={() => setQuantity(line.slug, line.quantity + 1)}
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-slate-deep">{formatINR(line.price * line.quantity)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${line.name}`}
                      onClick={() => removeItem(line.slug)}
                      className="self-start text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <SheetFooter className="border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Estimated Subtotal</span>
                <span className="text-lg font-bold text-foreground">{formatINR(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Final pricing, taxes and bulk discounts are confirmed by our sales team after you submit your request.
              </p>
              <Button
                render={<Link href="/request-quote" />}
                nativeButton={false}
                className="w-full bg-slate-deep text-primary-foreground hover:bg-slate-mid"
                onClick={closeCart}
              >
                Request a Quote
              </Button>
              <Button variant="outline" className="w-full" onClick={closeCart}>
                Continue Browsing
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
