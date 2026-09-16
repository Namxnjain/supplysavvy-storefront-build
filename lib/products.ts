import type { Product } from "./types"
import { allSubcategories } from "./categories"

/**
 * DEMO CATALOGUE DATA
 * ---------------------------------------------------------------------------
 * SupplySavvy's final Shopify product catalogue (~500 SKUs) is not yet
 * available in this build. The entries below are clearly-marked demo/
 * placeholder listings that reuse the supplied subcategory imagery so the
 * storefront can be reviewed with a realistic, Shopify-ready product-card
 * system. No prices, stock claims, discounts or reviews below represent
 * real SupplySavvy data.
 */

type Seed = {
  sub: string
  items: { name: string; unit: string; price: number; compareAt?: number }[]
}

const seeds: Seed[] = [
  { sub: "air-fresheners", items: [
    { name: "Aerosol Room Freshener Spray", unit: "300 ml can", price: 145 },
    { name: "Lavender Gel Air Freshener", unit: "100 g jar", price: 95 },
    { name: "Washroom Freshener Block", unit: "Pack of 6", price: 220 },
  ]},
  { sub: "taski-chemicals", items: [
    { name: "R2 Multi-Surface Cleaner Concentrate", unit: "5 L can", price: 1450 },
    { name: "R1 Sanitary Cleaner Concentrate", unit: "5 L can", price: 1550 },
    { name: "R7 Glass & Multi-Surface Cleaner", unit: "5 L can", price: 1380 },
  ]},
  { sub: "liquid-cleaning-chemicals", items: [
    { name: "Multi-Surface Floor Cleaner", unit: "5 L can", price: 620 },
    { name: "Phenyl Concentrate, White", unit: "5 L can", price: 480 },
    { name: "Toilet Bowl Cleaner Liquid", unit: "1 L bottle", price: 135 },
  ]},
  { sub: "cleaning-tools", items: [
    { name: "Floor Wiper with Steel Handle", unit: "1 piece", price: 290 },
    { name: "Long Handle Ceiling Duster", unit: "1 piece", price: 210 },
    { name: "Bathroom Scrub Set", unit: "Set of 2", price: 175 },
  ]},
  { sub: "cleaning-accessories", items: [
    { name: "Nitrile Hand Gloves", unit: "Pack of 12 pairs", price: 340 },
    { name: "Scrub Sponge, Heavy Duty", unit: "Pack of 6", price: 150 },
    { name: "Microfibre Cleaning Cloth", unit: "Pack of 5", price: 210 },
  ]},
  { sub: "tissue-items", items: [
    { name: "Toilet Tissue Rolls, 2-Ply", unit: "Pack of 10", price: 340 },
    { name: "Centre-Pull Hand Towel Roll", unit: "1 roll", price: 165 },
    { name: "Facial Tissue Box", unit: "Box of 100 pulls", price: 95 },
  ]},
  { sub: "cleaning-aids", items: [
    { name: "Glass Cleaner Trigger Spray", unit: "500 ml bottle", price: 120 },
    { name: "Multi-Purpose Scrub Pad Set", unit: "Set of 3", price: 90 },
    { name: "Feather Duster, Extendable", unit: "1 piece", price: 180 },
  ]},
  { sub: "dispensers-dryers", items: [
    { name: "Manual Soap Dispenser, Wall Mount", unit: "1 piece", price: 450 },
    { name: "Hand Towel Roll Dispenser", unit: "1 piece", price: 690 },
    { name: "Automatic Hand Dryer, 220V", unit: "1 piece", price: 3200 },
  ]},
  { sub: "cleaning-equipment", items: [
    { name: "Janitorial Cleaning Trolley", unit: "1 unit", price: 4200 },
    { name: "Double Bucket Mopping Trolley", unit: "1 unit", price: 3650 },
    { name: "Wet Floor Caution Sign", unit: "1 piece", price: 320 },
  ]},
  { sub: "insect-killer", items: [
    { name: "Electric Insect Killer Lamp", unit: "1 unit", price: 1250 },
    { name: "Fly Swatter, Heavy Duty", unit: "Pack of 3", price: 110 },
    { name: "Mosquito Repellent Aerosol", unit: "300 ml can", price: 160 },
  ]},
  { sub: "brooms", items: [
    { name: "Soft Sweeping Broom, Long Handle", unit: "1 piece", price: 165 },
    { name: "Outdoor Hard Broom", unit: "1 piece", price: 195 },
    { name: "Ceiling Cobweb Broom", unit: "1 piece", price: 140 },
  ]},
  { sub: "brushes", items: [
    { name: "Toilet Bowl Brush with Holder", unit: "1 piece", price: 130 },
    { name: "Deck Scrubbing Brush, Long Handle", unit: "1 piece", price: 260 },
    { name: "Utility Cleaning Brush Set", unit: "Set of 3", price: 175 },
  ]},
  { sub: "cleaning-machines", items: [
    { name: "Wet & Dry Vacuum Cleaner, 20L", unit: "1 unit", price: 7800 },
    { name: "Single Disc Floor Scrubber", unit: "1 unit", price: 24500 },
    { name: "High Pressure Washer", unit: "1 unit", price: 11200 },
  ]},
  { sub: "door-mats", items: [
    { name: "PVC Coir Entrance Mat", unit: "1 piece, 60x90 cm", price: 480 },
    { name: "Rubber-Backed Anti-Slip Mat", unit: "1 piece, 45x75 cm", price: 350 },
    { name: "Logo-Printable Entrance Mat", unit: "1 piece, 85x120 cm", price: 1150 },
  ]},
  { sub: "dust-controls", items: [
    { name: "Treated Dust Control Mop Head", unit: "1 piece", price: 240 },
    { name: "Microfibre Dust Mop, Flat", unit: "1 piece", price: 310 },
    { name: "Lambswool Ceiling Duster", unit: "1 piece", price: 260 },
  ]},
  { sub: "dustbins-trolleys", items: [
    { name: "Pedal Dustbin, Stainless Steel", unit: "1 piece, 12L", price: 1450 },
    { name: "Plastic Dustbin with Lid", unit: "1 piece, 20L", price: 420 },
    { name: "Segregation Bin Set, 3 Colour", unit: "Set of 3", price: 2100 },
  ]},
  { sub: "dusters-mops", items: [
    { name: "Cotton Wet Mop with Handle", unit: "1 piece", price: 260 },
    { name: "Microfibre Flat Mop Set", unit: "1 set", price: 390 },
    { name: "Multi-Surface Dusting Cloth Set", unit: "Pack of 10", price: 320 },
  ]},
  { sub: "garbage-bags", items: [
    { name: "Garbage Bags, Black", unit: "Pack of 30, Medium", price: 145 },
    { name: "Biodegradable Garbage Bags", unit: "Pack of 30, Large", price: 210 },
    { name: "Heavy Duty Disposal Bags", unit: "Pack of 15, X-Large", price: 260 },
  ]},
  { sub: "register-notepads", items: [
    { name: "Long Book Accounting Register", unit: "1 piece, 200 pages", price: 180 },
    { name: "Spiral Notebook, Ruled", unit: "1 piece, A5", price: 65 },
    { name: "Sticky Notepad Set", unit: "Pack of 5 pads", price: 95 },
  ]},
  { sub: "pen-markers", items: [
    { name: "Ball Pen, Blue Ink", unit: "Box of 10", price: 90 },
    { name: "Permanent Marker, Black", unit: "Pack of 5", price: 150 },
    { name: "Highlighter Set, Assorted", unit: "Pack of 5", price: 120 },
  ]},
  { sub: "office-desk-accessories", items: [
    { name: "Desk Organiser Tray Set", unit: "1 set", price: 480 },
    { name: "Stapler with Pin Box", unit: "1 piece", price: 165 },
    { name: "Desktop Calculator, 12-Digit", unit: "1 piece", price: 320 },
  ]},
  { sub: "files-folders", items: [
    { name: "Box File, Full Size", unit: "1 piece", price: 145 },
    { name: "L-Shape Plastic Folder", unit: "Pack of 10", price: 210 },
    { name: "Ring Binder File, 2-Inch", unit: "1 piece", price: 165 },
  ]},
  { sub: "whiteboards-organizers", items: [
    { name: "Magnetic Whiteboard, Wall Mount", unit: "1 piece, 2x3 ft", price: 1450 },
    { name: "Desktop Planner Organiser", unit: "1 piece", price: 380 },
    { name: "Notice Board, Cork", unit: "1 piece, 2x3 ft", price: 950 },
  ]},
  { sub: "packaging-items", items: [
    { name: "Corrugated Packaging Box", unit: "Pack of 10, Medium", price: 480 },
    { name: "BOPP Self-Adhesive Tape", unit: "Pack of 6 rolls", price: 340 },
    { name: "Bubble Wrap Roll", unit: "1 roll, 1m x 10m", price: 620 },
  ]},
  { sub: "coffee-tea", items: [
    { name: "Instant Coffee Powder", unit: "200 g jar", price: 320 },
    { name: "Premium Assam Tea Leaves", unit: "500 g pack", price: 260 },
    { name: "Green Tea Bags", unit: "Box of 100", price: 380 },
  ]},
  { sub: "milk-sugar", items: [
    { name: "UHT Toned Milk", unit: "1 L carton", price: 72 },
    { name: "Refined White Sugar", unit: "1 kg pack", price: 55 },
    { name: "Coffee Whitener Powder", unit: "500 g jar", price: 210 },
  ]},
  { sub: "biscuit-namkeen", items: [
    { name: "Glucose Biscuits, Family Pack", unit: "800 g pack", price: 120 },
    { name: "Assorted Namkeen Mix", unit: "400 g pack", price: 140 },
    { name: "Cream Sandwich Biscuits", unit: "Box of 12", price: 240 },
  ]},
  { sub: "disposable-items", items: [
    { name: "Disposable Paper Cups", unit: "Pack of 100, 150ml", price: 165 },
    { name: "Disposable Plates, Bagasse", unit: "Pack of 50", price: 240 },
    { name: "Wooden Cutlery Set", unit: "Pack of 100", price: 190 },
  ]},
  { sub: "crockery-items", items: [
    { name: "Stainless Steel Tumbler Set", unit: "Set of 6", price: 480 },
    { name: "Ceramic Tea Cup & Saucer Set", unit: "Set of 6", price: 620 },
    { name: "Melamine Serving Tray", unit: "1 piece", price: 280 },
  ]},
]

function skuFor(subSlug: string, index: number) {
  const prefix = subSlug
    .split("-")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
  return `SS-${prefix}-${String(index + 1).padStart(3, "0")}`
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const products: Product[] = seeds.flatMap((seed) => {
  const sub = allSubcategories.find((s) => s.slug === seed.sub)
  if (!sub) return []
  return seed.items.map((item, index) => ({
    slug: `${seed.sub}-${slugify(item.name)}`,
    name: item.name,
    sku: skuFor(seed.sub, index),
    subcategorySlug: sub.slug,
    categorySlug: sub.categorySlug,
    price: item.price,
    compareAtPrice: item.compareAt,
    unit: item.unit,
    image: sub.image,
    available: true,
    description: `${item.name} for everyday business and institutional use. Sourced by SupplySavvy for reliable, repeat B2B and bulk requirements within the ${sub.name} range.`,
    specifications: [
      { label: "Pack / Unit", value: item.unit },
      { label: "Category", value: sub.name },
      { label: "SKU", value: skuFor(seed.sub, index) },
    ],
    applications: ["Offices", "Institutions", "Commercial spaces", "Facility management"],
  }))
})

// Curated demo merchandising badges (illustrative only, not real sales data).
const bestSellerSlugs = new Set([
  "liquid-cleaning-chemicals-multi-surface-floor-cleaner",
  "garbage-bags-garbage-bags-black",
  "register-notepads-long-book-accounting-register",
  "coffee-tea-premium-assam-tea-leaves",
  "tissue-items-toilet-tissue-rolls-2-ply",
  "door-mats-pvc-coir-entrance-mat",
])

const newArrivalSlugs = new Set([
  "cleaning-machines-wet-dry-vacuum-cleaner-20l",
  "dispensers-dryers-automatic-hand-dryer-220v",
  "whiteboards-organizers-magnetic-whiteboard-wall-mount",
  "packaging-items-corrugated-packaging-box",
  "crockery-items-stainless-steel-tumbler-set",
  "disposable-items-disposable-plates-bagasse",
])

const trendingSlugs = new Set([
  "taski-chemicals-r2-multi-surface-cleaner-concentrate",
  "insect-killer-electric-insect-killer-lamp",
  "pen-markers-highlighter-set-assorted",
  "biscuit-namkeen-assorted-namkeen-mix",
  "cleaning-equipment-janitorial-cleaning-trolley",
  "dustbins-trolleys-segregation-bin-set-3-colour",
])

for (const p of products) {
  if (bestSellerSlugs.has(p.slug)) p.badge = "Best Seller"
  else if (newArrivalSlugs.has(p.slug)) p.badge = "New Arrival"
  else if (trendingSlugs.has(p.slug)) p.badge = "Trending"
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsBySubcategory(subSlug: string) {
  return products.filter((p) => p.subcategorySlug === subSlug)
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getBestSellers() {
  return products.filter((p) => p.badge === "Best Seller")
}

export function getNewArrivals() {
  return products.filter((p) => p.badge === "New Arrival")
}

export function getTrending() {
  return products.filter((p) => p.badge === "Trending")
}

export function getRelatedProducts(product: Product, count = 4) {
  return products.filter((p) => p.subcategorySlug === product.subcategorySlug && p.slug !== product.slug).slice(0, count)
}
