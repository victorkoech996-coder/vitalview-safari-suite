import { motion } from "framer-motion";
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Welcome to Vitalview Safaris
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Discover the Beauty{" "}
          <span className="text-gold-gradient">of Travel</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We've been leaders in small group adventure travel by listening to our
          travellers and offering flexible itineraries, freedom to explore,
          smaller groups, safety, and locally based expert guides.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>
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
