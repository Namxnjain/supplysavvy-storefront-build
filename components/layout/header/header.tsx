import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"
import { UtilityBar } from "./utility-bar"
import { SearchBox } from "./search-box"
import { CartButton } from "./cart-button"
import { MobileDrawer } from "./mobile-drawer"
import { NavDropdown } from "./nav-dropdown"
import { MegaMenuPanel } from "./mega-menu-panel"
import { CartSheet } from "@/components/cart/cart-sheet"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories"

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <UtilityBar />
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6">
          <MobileDrawer />
          <Link href="/" className="flex shrink-0 items-center" aria-label="SupplySavvy home">
            <Image
              src="/images/brand/supplysavvy-logo.webp"
              alt="SupplySavvy"
              width={168}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <div className="hidden flex-1 lg:block">
            <SearchBox />
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <Button asChild variant="outline" className="hidden gap-1.5 border-slate-deep text-slate-deep hover:bg-slate-deep hover:text-primary-foreground lg:flex">
              <Link href="/request-quote">
                <FileText className="size-4" />
                Request Quote
              </Link>
            </Button>
            <CartButton />
          </div>
        </div>

        <div className="border-t border-border px-4 pb-3 sm:px-6 lg:hidden">
          <SearchBox />
        </div>

        <nav className="hidden border-t border-border lg:block" aria-label="Main">
          <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-6">
            <NavDropdown label="Housekeeping" href="/housekeeping-materials">
              <MegaMenuPanel category={categories[0]} columns={3} />
            </NavDropdown>
            <NavDropdown label="Office Stationery" href="/office-stationery">
              <MegaMenuPanel category={categories[1]} columns={2} />
            </NavDropdown>
            <NavDropdown label="Pantry Items" href="/pantry-items">
              <MegaMenuPanel category={categories[2]} columns={1} />
            </NavDropdown>
            <Link href="/about" className="rounded-lg px-2.5 py-1.5 text-sm font-semibold text-foreground hover:bg-muted">
              About Us
            </Link>
            <Link href="/request-quote" className="rounded-lg px-2.5 py-1.5 text-sm font-semibold text-foreground hover:bg-muted">
              Bulk Orders
            </Link>
          </div>
        </nav>
      </header>
      <CartSheet />
    </>
  )
}
