"use client"

import Link from "next/link"
import Image from "next/image"
import { PackageSearch, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { formatINR } from "@/lib/format"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-slate-deep text-primary-foreground",
  "New Arrival": "bg-butter text-slate-deep",
  Trending: "bg-secondary text-slate-deep border border-slate-deep/20",
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square w-full overflow-hidden bg-muted">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 220px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <PackageSearch className="size-8" aria-hidden="true" />
          </div>
        )}
        {product.badge && (
          <Badge className={`absolute left-2 top-2 rounded-sm px-2 py-0.5 text-[10px] font-semibold ${badgeStyles[product.badge]}`}>
            {product.badge}
          </Badge>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <Link href={`/products/${product.slug}`} className="line-clamp-2 text-sm font-semibold text-foreground hover:text-slate-deep">
          {product.name}
        </Link>
        <p className="text-[11px] text-muted-foreground">
          SKU: {product.sku} &middot; {product.unit}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <div>
            <p className="text-base font-bold text-slate-deep">{formatINR(product.price)}</p>
            <p className={`text-[11px] font-medium ${product.available ? "text-emerald-700" : "text-destructive"}`}>
              {product.available ? "In Stock" : "Out of Stock"}
            </p>
          </div>
          <Button
            size="sm"
            className="h-8 gap-1.5 bg-slate-deep text-primary-foreground hover:bg-slate-mid"
            onClick={() => {
              addItem(product)
              toast.success(`${product.name} added to cart`)
            }}
            disabled={!product.available}
          >
            <ShoppingCart className="size-3.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
