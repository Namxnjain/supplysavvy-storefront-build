"use client"

import Link from "next/link"
import { useRef, useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavDropdown({
  label,
  href,
  children,
}: {
  label: string
  href: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false)
      }}
    >
      <div className="flex items-center">
        <Link
          href={href}
          className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-foreground hover:bg-muted"
          aria-expanded={open}
          onFocus={() => setOpen(true)}
        >
          {label}
          <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden="true" />
        </Link>
      </div>
      <div
        className={cn(
          "absolute left-0 top-full z-40 pt-2 transition-opacity",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  )
}
