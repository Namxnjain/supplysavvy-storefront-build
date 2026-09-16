"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Product } from "./types"

export type CartLine = {
  slug: string
  name: string
  sku: string
  price: number
  unit: string
  image: string | null
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotal: number
  addItem: (product: Product, quantity?: number) => void
  removeItem: (slug: string) => void
  setQuantity: (slug: string, quantity: number) => void
  clear: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = "supplysavvy-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setLines(JSON.parse(raw))
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, hydrated])

  const addItem = (product: Product, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === product.slug)
      if (existing) {
        return prev.map((l) => (l.slug === product.slug ? { ...l, quantity: l.quantity + quantity } : l))
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          sku: product.sku,
          price: product.price,
          unit: product.unit,
          image: product.image,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (slug: string) => setLines((prev) => prev.filter((l) => l.slug !== slug))

  const setQuantity = (slug: string, quantity: number) =>
    setLines((prev) =>
      prev.map((l) => (l.slug === slug ? { ...l, quantity: Math.max(1, quantity) } : l)),
    )

  const clear = () => setLines([])

  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines])
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.price * l.quantity, 0), [lines])

  return (
    <CartContext.Provider
      value={{
        lines,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        setQuantity,
        clear,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
