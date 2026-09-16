"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, PackageSearch, ShoppingCart, FileText } from "lucide-react"
import { toast } from "sonner"
import type { Product } from "@/lib/types"
import { formatINR } from "@/lib/format"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-slate-deep text-primary-foreground",
  "New Arrival": "bg-butter text-slate-deep",
  Trending: "bg-secondary text-slate-deep border border-slate-deep/20",
}

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 gap-8 py-6 lg:grid-cols-2">
      <div className="relative aspect-square w-full overflow-hidden rounded-md border border-border bg-muted">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <PackageSearch className="size-10" aria-hidden="true" />
          </div>
        )}
        {product.badge && (
          <Badge className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}>
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{product.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          SKU: {product.sku} &middot; {product.unit}
        </p>

        <div className="mt-4 flex items-baseline gap-3">
          <p className="text-3xl font-bold text-slate-deep">{formatINR(product.price)}</p>
          {product.compareAtPrice && (
            <p className="text-lg text-muted-foreground line-through">{formatINR(product.compareAtPrice)}</p>
          )}
        </div>
        <p className={`mt-1 text-sm font-semibold ${product.available ? "text-emerald-700" : "text-destructive"}`}>
          {product.available ? "In Stock" : "Out of Stock"}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{product.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-md border border-border">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex size-10 items-center justify-center text-foreground hover:bg-muted disabled:opacity-40"
              disabled={quantity <= 1}
            >
              <Minus className="size-4" />
            </button>
            <span className="w-10 text-center text-sm font-semibold" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="flex size-10 items-center justify-center text-foreground hover:bg-muted"
            >
              <Plus className="size-4" />
            </button>
          </div>

          <Button
            className="h-10 gap-2 bg-slate-deep px-6 text-primary-foreground hover:bg-slate-mid"
            disabled={!product.available}
            onClick={() => {
              addItem(product, quantity)
              toast.success(`${quantity} x ${product.name} added to cart`)
            }}
          >
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>

          <Button
            variant="outline"
            className="h-10 gap-2 border-slate-deep px-6 text-slate-deep hover:bg-slate-deep hover:text-primary-foreground"
            render={<a href="/request-quote" />}
            nativeButton={false}
          >
            <FileText className="size-4" />
            Request Quote
          </Button>
        </div>

        {product.specifications.length > 0 && (
          <div className="mt-8 border-t border-border pt-6">
            <h2 className="text-sm font-bold text-foreground">Specifications</h2>
            <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-2 rounded-md bg-muted px-3 py-2 text-sm sm:justify-start sm:gap-3">
                  <dt className="font-semibold text-foreground">{spec.label}</dt>
                  <dd className="text-muted-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {product.applications.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-bold text-foreground">Applications</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span key={app} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
