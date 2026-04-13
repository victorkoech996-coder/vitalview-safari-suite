import { Award, ShieldCheck, CreditCard, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Award, title: "Best Selection", desc: "Our strict screening process ensures only the best quality tours." },
  { icon: CreditCard, title: "Best Price Guarantee", desc: "Found a lower price elsewhere? We'll match it." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Payments secured with Braintree, a PayPal subsidiary." },
  { icon: Headphones, title: "24/7 Support", desc: "Available via chat, phone, and email anytime." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <f.icon className="text-earth" size={28} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
