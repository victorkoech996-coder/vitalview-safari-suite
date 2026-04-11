import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 700, suffix: "+", label: "Tours" },
  { value: 9800, suffix: "+", label: "Travellers" },
  { value: 2000, suffix: "+", label: "Destinations" },
  { value: 9999, suffix: "+", label: "Tourists" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

  return { count, ref };
}

const StatsSection = () => (
  <section className="py-20 bg-earth">
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {stats.map((s) => {
        const { count, ref } = useCountUp(s.value);
        return (
          <div key={s.label} ref={ref} className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-gold mb-2">
              {count.toLocaleString()}{s.suffix}
            </p>
            <p className="text-primary-foreground/70 text-sm uppercase tracking-widest">{s.label}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default StatsSection;
