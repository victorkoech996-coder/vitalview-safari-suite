import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    text: "Absolutely magical! The wildebeest migration was beyond anything I could have imagined. Our guide knew exactly where to find the best wildlife sightings. A trip of a lifetime!",
    rating: 5,
  },
  {
    name: "James Thornton",
    country: "United States",
    text: "Vitalview Safaris exceeded all expectations. The lodges were stunning, the food incredible, and seeing elephants against Kilimanjaro's backdrop brought me to tears. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anke van der Berg",
    country: "Netherlands",
    text: "We booked a family safari and every detail was perfectly arranged. The kids loved every moment — from the game drives to the Maasai village visit. Professional and warm team!",
    rating: 5,
  },
  {
    name: "Takeshi Yamamoto",
    country: "Japan",
    text: "The photography safari was outstanding. Our guide had an incredible eye for positioning the vehicle at the perfect angle. I captured shots I never thought possible. Thank you!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    country: "Brazil",
    text: "From the moment we landed in Nairobi to our last sunset in the Mara, everything was seamless. The team's local expertise made this trip authentic and unforgettable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">What Our Guests Say</p>
          <h2 className="section-heading text-foreground">Traveller Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
