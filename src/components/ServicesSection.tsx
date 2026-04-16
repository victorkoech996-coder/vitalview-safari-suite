import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-earth">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">What We Do Best</p>
          <h2 className="section-heading text-cream">Our Services</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/services#${s.slug}`}
                className="group relative block w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight group-hover:underline underline-offset-4 decoration-gold decoration-2">
                    {s.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 line-clamp-2">{s.shortDesc}</p>
                  <span className="mt-3 text-gold text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
