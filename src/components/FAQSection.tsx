import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "When is the best time to visit Kenya for a safari?",
    a: "The best time for a Kenya safari is during the dry seasons: July to October (Great Migration in Masai Mara) and January to February. However, Kenya offers excellent wildlife viewing year-round. The green season (April–June) offers lush landscapes, fewer crowds, and lower rates.",
  },
  {
    q: "Is it safe to go on a safari in Kenya?",
    a: "Yes! Kenya is one of Africa's most popular and well-established safari destinations. Our experienced guides are trained in wildlife safety, and all our vehicles are equipped with communication systems. We follow strict park regulations and always prioritize guest safety.",
  },
  {
    q: "What should I pack for a safari?",
    a: "Pack lightweight, neutral-coloured clothing (khaki, beige, olive), a warm layer for early morning game drives, comfortable walking shoes, sunscreen, a wide-brimmed hat, binoculars, and a good camera. We provide a detailed packing list upon booking.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, credit/debit cards (Visa, Mastercard), PayPal, and mobile money (M-Pesa). A 30% deposit is required to confirm your booking, with the balance due 30 days before departure.",
  },
  {
    q: "Can I customise my safari itinerary?",
    a: "Absolutely! We specialise in tailor-made safaris. Tell us your interests, budget, and travel dates, and we'll craft a personalised itinerary. Whether you want a romantic honeymoon safari, a family adventure, or a photography-focused trip, we'll make it happen.",
  },
  {
    q: "What is included in the safari packages?",
    a: "Our packages typically include airport transfers, accommodation, all meals during safari, game drives in 4x4 vehicles, park entrance fees, and an English-speaking guide. International flights and travel insurance are usually not included but can be arranged.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="faq" ref={ref} className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Common Questions</p>
          <h2 className="section-heading text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-gold-dark transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
