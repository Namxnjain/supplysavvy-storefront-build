"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { categories } from "@/lib/categories"

export function MobileDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        aria-label="Open menu"
        className="flex items-center justify-center rounded-md p-2 hover:bg-muted lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-6" />
      </button>
      <SheetContent side="left" className="w-full max-w-xs">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="flex items-center gap-2">
            <Image src="/images/brand/supplysavvy-logo.webp" alt="SupplySavvy" width={120} height={28} className="h-6 w-auto" />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto px-2 py-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Accordion type="multiple" className="w-full">
            {categories.map((category) => (
              <AccordionItem key={category.slug} value={category.slug} className="border-border">
                <AccordionTrigger className="px-3 text-sm font-semibold hover:no-underline">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent className="px-3">
                  <ul className="flex flex-col gap-0.5 pb-2">
                    <li>
                      <Link
                        href={`/${category.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-1.5 text-sm font-semibold text-slate-deep hover:bg-muted"
                      >
                        View all {category.shortName}
                      </Link>
                    </li>
                    {category.subcategories.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/${category.slug}/${sub.slug}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            href="/about"
            className="block rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/request-quote"
            className="block rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
        <div className="flex flex-col gap-2 border-t border-border p-4 text-sm">
          <a href="tel:+911140001234" className="flex items-center gap-2 text-muted-foreground">
            <Phone className="size-4" /> +91 11 4000 1234
          </a>
          <a href="mailto:sales@supplysavvy.in" className="flex items-center gap-2 text-muted-foreground">
            <Mail className="size-4" /> sales@supplysavvy.in
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
