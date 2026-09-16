import { SectionHeading } from "@/components/shared/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Do you supply for both B2B bulk orders and smaller B2C purchases?",
    a: "Yes. SupplySavvy serves corporates, institutions and facility managers with bulk pricing, as well as smaller businesses that need regular restocking in smaller quantities.",
  },
  {
    q: "How do I get pricing for a bulk order?",
    a: "Add the products you need to your cart and submit a quotation request, or use the Get Quotation page directly. Our team confirms final pricing, taxes and delivery timelines.",
  },
  {
    q: "Is GST invoicing available?",
    a: "Yes, every confirmed order is billed with a GST-compliant invoice for your business records.",
  },
  {
    q: "Which cities do you deliver to?",
    a: "We currently service New Delhi and the National Capital Region directly, with pan-India dispatch available for bulk institutional orders.",
  },
  {
    q: "Is there a minimum order value?",
    a: "Most subcategories have no strict minimum, though bulk discounts apply above certain quantities — this is confirmed during the quotation process.",
  },
]

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="Have questions" title="Frequently Asked Questions" />
      <div className="mt-5 max-w-3xl">
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={i}>
              <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
