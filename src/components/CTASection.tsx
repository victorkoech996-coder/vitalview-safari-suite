import ctaImg from "@/assets/safari-cta.jpg";

const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaImg} alt="Elephants at sunset" loading="lazy" width={1920} height={800} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-earth/75" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
        Ask for Superb Holiday<br />
        <span className="text-gold-gradient">Deals Today!</span>
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
        With a wide range of Kenya safari packages and tailor-made experiences,
        your dream holiday will be unforgettable.
      </p>
      <a
        href="#contact"
        className="inline-block gold-gradient text-earth font-semibold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-xl"
      >
        Get a Quote
      </a>
    </div>
  </section>
);

export default CTASection;
