import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 700, suffix: "+", label: "Tours" },
  { value: 9800, suffix: "+", label: "Travellers" },
  { value: 2000, suffix: "+", label: "Destinations" },
  { value: 9999, suffix: "+", label: "Tourists" },
];

function useCountUp(target: number, started: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

const StatItem = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      <p className="font-heading text-4xl md:text-5xl font-bold text-gold mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-primary-foreground/70 text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-earth">
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 0.1} />
      ))}
    </div>
  </section>
);

export default StatsSection;
