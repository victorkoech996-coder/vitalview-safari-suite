import aboutImg from "@/assets/kenya-about.jpg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutImg} alt="Kenya savannah landscape" loading="lazy" width={1200} height={600} className="w-full h-80 md:h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">About Kenya</p>
          <h2 className="section-heading text-foreground mb-6">The Home of African Safaris</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Kenya is the home of African safaris, offering diverse landscapes, wildlife, cultures,
            beaches, and the world-famous wildebeest migration. From the snow-capped peak of
            Mount Kenya to the palm-fringed coastline of the Indian Ocean, this is a land of
            extraordinary contrasts.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Vitalview Safaris, we bring decades of local expertise to craft experiences that
            go beyond the ordinary — connecting you with the heartbeat of Africa through exclusive
            access, expert guides, and sustainable tourism practices.
          </p>
          <a href="#tours" className="inline-block bg-safari-green text-secondary-foreground font-semibold px-8 py-3 rounded-full hover:bg-safari-green-light transition-colors">
            Explore Destinations
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
