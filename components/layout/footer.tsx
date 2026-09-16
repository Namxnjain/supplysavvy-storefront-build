import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ShieldCheck, BadgeCheck, Star } from "lucide-react"
import { categories } from "@/lib/categories"

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-deep text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/images/brand/logo.webp"
              alt="SupplySavvy"
              width={160}
              height={38}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              SupplySavvy is your one-stop B2B and B2C partner for Housekeeping Materials, Office
              Stationery and Pantry Items — quality essentials delivered across India.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-butter" /> MSME Registered
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-butter" /> ISO 9001:2015
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="size-4 text-butter" /> 4.8+ Google Rating
              </span>
            </div>
          </div>

          {categories.map((category) => (
            <div key={category.slug}>
              <p className="text-sm font-bold text-butter">{category.name}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {category.subcategories.slice(0, 6).map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/${category.slug}/${sub.slug}`}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={`/${category.slug}`} className="text-sm font-semibold text-primary-foreground hover:text-butter">
                    View all &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-primary-foreground/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-butter">Company</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-primary-foreground">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary-foreground">
                  Search Catalogue
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-butter">Contact</p>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-butter" />
                <a href="tel:+911140001234" className="hover:text-primary-foreground">
                  +91 11 4000 1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-butter" />
                <a href="mailto:sales@supplysavvy.in" className="hover:text-primary-foreground">
                  sales@supplysavvy.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-butter" />
                <span>Okhla Industrial Area, New Delhi, India 110020</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-butter">Business Hours</p>
            <p className="mt-3 text-sm text-primary-foreground/70">Monday – Saturday, 9:30 AM – 6:30 PM IST</p>
            <p className="mt-1 text-sm text-primary-foreground/70">GSTIN: 07XXXXX1234X1ZX</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SupplySavvy. All rights reserved.</p>
          <p>Business Supplies. Simplified.</p>
        </div>
      </div>
    </footer>
  )
}
