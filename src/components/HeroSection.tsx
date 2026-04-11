import heroImg from "@/assets/hero-safari.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="African safari landscape at golden hour with acacia trees"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth/60 via-earth/40 to-earth/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Welcome to Vitalview Safaris
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Discover the Beauty{" "}
          <span className="text-gold-gradient">of Travel</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          We've been leaders in small group adventure travel by listening to our
          travellers and offering flexible itineraries, freedom to explore,
          smaller groups, safety, and locally based expert guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#tours"
            className="gold-gradient text-earth font-semibold px-8 py-3.5 rounded-full text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore Tours
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
