import { Plane, FileText, Users, Compass, Hotel, Shield, Car, MapPin, Heart } from "lucide-react";

const services = [
  { icon: Plane, label: "Air Travel & Ticketing" },
  { icon: FileText, label: "Visa Processing Services" },
  { icon: Users, label: "Meet & Assist Service" },
  { icon: Compass, label: "Tours & Safaris" },
  { icon: Hotel, label: "Hotel Booking & Accommodation" },
  { icon: Shield, label: "Travel Insurance" },
  { icon: Car, label: "Car Hire Services" },
  { icon: MapPin, label: "Airport Transfer Services" },
  { icon: Heart, label: "Honeymoon Tours" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
        <h2 className="section-heading text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-safari-green/10 flex items-center justify-center shrink-0 group-hover:bg-safari-green/20 transition-colors">
              <s.icon className="text-safari-green" size={22} />
            </div>
            <span className="font-medium text-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
