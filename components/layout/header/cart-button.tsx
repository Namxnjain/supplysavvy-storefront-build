"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

export function CartButton({ className }: { className?: string }) {
  const { itemCount, openCart } = useCart()

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart, ${itemCount} items`}
      className={cn("relative flex items-center justify-center rounded-md p-2 hover:bg-muted", className)}
    >
      <ShoppingCart className="size-5" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex size-[18px] min-w-[18px] items-center justify-center rounded-full bg-butter-dark px-1 text-[10px] font-bold text-slate-deep">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  )
}
