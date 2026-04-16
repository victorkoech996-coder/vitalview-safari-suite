import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1920&q=80",
    alt: "Sunrise over Masai Mara with hot air balloons",
    effect: "fade",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80",
    alt: "Elephant herd at Amboseli with Mount Kilimanjaro",
    effect: "kenburns",
  },
  {
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1920&q=80",
    alt: "Lion on a rock at sunset",
    effect: "slide-left",
  },
  {
    src: "https://images.unsplash.com/photo-1568797629192-908697ace5fd?auto=format&fit=crop&w=1920&q=80",
    alt: "Luxury tented camp deck view",
    effect: "slide-right",
  },
  {
    src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1920&q=80",
    alt: "Zebra migration river crossing",
    effect: "zoom-out",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80",
    alt: "Local Maasai guide with travellers",
    effect: "fade",
  },
];

const variantsFor = (effect: string) => {
  switch (effect) {
    case "kenburns":
      return {
        initial: { opacity: 0, scale: 1 },
        animate: { opacity: 1, scale: 1.12 },
        exit: { opacity: 0, scale: 1.15 },
      };
    case "slide-left":
      return {
        initial: { opacity: 0, x: "6%" },
        animate: { opacity: 1, x: "0%" },
        exit: { opacity: 0, x: "-6%" },
      };
    case "slide-right":
      return {
        initial: { opacity: 0, x: "-6%" },
        animate: { opacity: 1, x: "0%" },
        exit: { opacity: 0, x: "6%" },
      };
    case "zoom-out":
      return {
        initial: { opacity: 0, scale: 1.15 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
      };
    case "fade":
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
  }
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center md:justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {slides.map((slide, i) =>
            i === index ? (
              <motion.img
                key={i}
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                {...variantsFor(slide.effect)}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />
            ) : null,
          )}
        </AnimatePresence>
        {/* Preload slide 2 */}
        <link rel="preload" as="image" href={slides[1].src} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-left md:text-center px-4 sm:px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Welcome
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-white leading-[1.05] mb-2"
          style={{ fontWeight: 800, fontSize: "clamp(48px, 6vw, 72px)" }}
        >
          Welcome to VitalView Safaris
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="italic text-white/90 mb-6"
          style={{ fontWeight: 400, fontSize: "clamp(18px, 2vw, 24px)" }}
        >
          Discover the beauty of travel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/95 mb-8 md:mx-auto"
          style={{
            fontSize: "clamp(16px, 1.4vw, 18px)",
            lineHeight: 1.7,
            maxWidth: "600px",
          }}
        >
          We listen to our travellers and give them exactly what they want. That's how we've become leaders in small group adventure travel — by offering flexible itineraries, the freedom to explore at your pace, smaller groups that feel like family, safety you can trust, and locally based expert guides who know every hidden gem.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 md:justify-center"
        >
          <a
            href="/safaris"
            className="gold-gradient text-earth font-semibold px-8 py-3.5 rounded-full text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg text-center"
          >
            Explore Safaris
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-base tracking-wide hover:bg-white/10 transition-colors text-center"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2.5 w-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === index ? "#FF6A00" : "rgba(255,255,255,0.4)",
              transform: i === index ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
