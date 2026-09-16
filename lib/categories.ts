import type { Category } from "./types"

const img = (file: string) => `/images/subcategories/${file}`

export const categories: Category[] = [
  {
    slug: "housekeeping-materials",
    name: "Housekeeping Materials",
    shortName: "Housekeeping",
    description:
      "Cleaning and hygiene products for offices, commercial spaces and institutions.",
    image: img("cleaning-aids.webp"),
    subcategories: [
      { slug: "air-fresheners", name: "Air Fresheners", categorySlug: "housekeeping-materials", image: img("air-fresheners.webp") },
      { slug: "taski-chemicals", name: "Taski Chemicals", categorySlug: "housekeeping-materials", image: img("taski-chemicals.webp") },
      { slug: "liquid-cleaning-chemicals", name: "Liquid Cleaning Chemicals", categorySlug: "housekeeping-materials", image: img("liquid-cleaning-chemicals.webp") },
      { slug: "cleaning-tools", name: "Cleaning Tools", categorySlug: "housekeeping-materials", image: img("cleaning-tools.webp") },
      { slug: "cleaning-accessories", name: "Cleaning Accessories", categorySlug: "housekeeping-materials", image: img("cleaning-accessories.webp") },
      { slug: "tissue-items", name: "Tissue Items", categorySlug: "housekeeping-materials", image: img("tissue-items.webp") },
      { slug: "cleaning-aids", name: "Cleaning Aids", categorySlug: "housekeeping-materials", image: img("cleaning-aids.webp") },
      { slug: "dispensers-dryers", name: "Dispensers & Dryers", categorySlug: "housekeeping-materials", image: img("dispensers-dryers.webp") },
      { slug: "cleaning-equipment", name: "Cleaning Equipment", categorySlug: "housekeeping-materials", image: img("cleaning-equipment.webp") },
      { slug: "insect-killer", name: "Insect Killer", categorySlug: "housekeeping-materials", image: img("insect-killer.webp") },
      { slug: "brooms", name: "Brooms", categorySlug: "housekeeping-materials", image: img("brooms.webp") },
      { slug: "brushes", name: "Brushes", categorySlug: "housekeeping-materials", image: img("brushes.webp") },
      { slug: "cleaning-machines", name: "Cleaning Machines", categorySlug: "housekeeping-materials", image: img("cleaning-machines.webp") },
      { slug: "door-mats", name: "Door Mats", categorySlug: "housekeeping-materials", image: img("door-mats.webp") },
      { slug: "dust-controls", name: "Dust Controls", categorySlug: "housekeeping-materials", image: img("dust-controls.webp") },
      { slug: "dustbins-trolleys", name: "Dustbins & Trolleys", categorySlug: "housekeeping-materials", image: img("dustbins-trolleys.webp") },
      { slug: "dusters-mops", name: "Dusters & Mops", categorySlug: "housekeeping-materials", image: img("dusters-mops.webp") },
      { slug: "garbage-bags", name: "Garbage Bags", categorySlug: "housekeeping-materials", image: img("garbage-bags.webp") },
    ],
  },
  {
    slug: "office-stationery",
    name: "Office Stationery",
    shortName: "Stationery",
    description: "Everyday stationery and office essentials for smooth business operations.",
    image: img("office-desk-accessories.webp"),
    subcategories: [
      { slug: "register-notepads", name: "Register & Notepads", categorySlug: "office-stationery", image: img("register-notepads.webp") },
      { slug: "pen-markers", name: "Pen & Markers", categorySlug: "office-stationery", image: img("pen-markers.webp") },
      { slug: "office-desk-accessories", name: "Office Desk Accessories", categorySlug: "office-stationery", image: img("office-desk-accessories.webp") },
      { slug: "files-folders", name: "Files Folders", categorySlug: "office-stationery", image: img("files-folders.webp") },
      { slug: "whiteboards-organizers", name: "Whiteboards & Organizers", categorySlug: "office-stationery", image: null },
      { slug: "packaging-items", name: "Packaging Items", categorySlug: "office-stationery", image: img("packaging-items.webp") },
    ],
  },
  {
    slug: "pantry-items",
    name: "Pantry Items",
    shortName: "Pantry",
    description: "Daily pantry requirements for workplaces and organizations.",
    image: img("coffee-tea.webp"),
    subcategories: [
      { slug: "coffee-tea", name: "Coffee & Tea", categorySlug: "pantry-items", image: img("coffee-tea.webp") },
      { slug: "milk-sugar", name: "Milk & Sugar", categorySlug: "pantry-items", image: img("milk-sugar.webp") },
      { slug: "biscuit-namkeen", name: "Biscuit & Namkeen", categorySlug: "pantry-items", image: img("biscuit-namkeen.webp") },
      { slug: "disposable-items", name: "Disposable Items", categorySlug: "pantry-items", image: img("disposable-items.webp") },
      { slug: "crockery-items", name: "Crockery Items", categorySlug: "pantry-items", image: img("crockery-items.webp") },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getSubcategory(categorySlug: string, subSlug: string) {
  const category = getCategory(categorySlug)
  return category?.subcategories.find((s) => s.slug === subSlug)
}

export function findSubcategoryBySlug(subSlug: string) {
  for (const category of categories) {
    const sub = category.subcategories.find((s) => s.slug === subSlug)
    if (sub) return { category, subcategory: sub }
  }
  return null
}

export const allSubcategories = categories.flatMap((c) => c.subcategories)

export const totalSubcategoryCount = allSubcategories.length
