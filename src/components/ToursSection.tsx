import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight, Filter, Heart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useSavedTours } from "@/hooks/useSavedTours";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import lionImg from "@/assets/tours/lion-safari.jpg";
import elephantsImg from "@/assets/tours/elephants-amboseli.jpg";
import migrationImg from "@/assets/tours/wildebeest-migration.jpg";
import nakuruImg from "@/assets/tours/lake-nakuru.jpg";
import kiliImg from "@/assets/tours/kilimanjaro.jpg";
import serengetiImg from "@/assets/tours/serengeti.jpg";

type Tour = {
  img: string;
  title: string;
  days: string;
  daysNum: number;
  destination: "Kenya" | "Tanzania";
  desc: string;
};

const tours: Tour[] = [
  { img: lionImg, title: "Kenya Wildlife Safari", days: "8 Days", daysNum: 8, destination: "Kenya", desc: "An unforgettable journey through Kenya's premier wildlife reserves starting and ending in Nairobi, featuring the Big Five." },
  { img: nakuruImg, title: "Masai Mara - Nakuru - Naivasha", days: "5 Days", daysNum: 5, destination: "Kenya", desc: "Explore the flamingo-lined shores of Lake Nakuru, the scenic Lake Naivasha, and the legendary Masai Mara." },
  { img: elephantsImg, title: "Amboseli Tsavo West & East", days: "5 Days", daysNum: 5, destination: "Kenya", desc: "Witness elephants against Mt. Kilimanjaro's backdrop in Amboseli, then explore the vast Tsavo wilderness." },
  { img: lionImg, title: "National Geographic Journeys", days: "8 Days", daysNum: 8, destination: "Kenya", desc: "A curated Kenya safari experience with expert naturalists, cultural immersion, and premium wildlife encounters." },
  { img: migrationImg, title: "Mara, Nakuru & Amboseli Budget", days: "7 Days", daysNum: 7, destination: "Kenya", desc: "Experience Kenya's iconic parks on a budget — from the Great Migration to Amboseli's elephant herds." },
  { img: serengetiImg, title: "Magic of Kenya Safari Tour", days: "7 Days", daysNum: 7, destination: "Kenya", desc: "A magical week through Kenya's most scenic landscapes, private conservancies, and cultural villages." },
  { img: nakuruImg, title: "Best of Kenya Budget Wildlife", days: "6 Days", daysNum: 6, destination: "Kenya", desc: "Discover Kenya's diverse ecosystems from savannah to lakes on an affordable guided wildlife safari." },
  { img: elephantsImg, title: "Lakes Bogoria, Nakuru & Mara", days: "5 Days", daysNum: 5, destination: "Kenya", desc: "A compact safari covering Kenya's Rift Valley lakes and the world-famous Masai Mara Game Reserve." },
  { img: migrationImg, title: "Wildebeest Migration Safari", days: "7 Days", daysNum: 7, destination: "Kenya", desc: "Time your visit with the Great Migration — millions of wildebeest crossing the Mara River in spectacular fashion." },
  { img: lionImg, title: "Kenya Budget Camping Safari", days: "6 Days", daysNum: 6, destination: "Kenya", desc: "Camp under African skies on a private guided safari through Kenya's most beautiful national parks." },
  { img: serengetiImg, title: "Tarangire, Serengeti & Ngorongoro", days: "5 Days", daysNum: 5, destination: "Tanzania", desc: "Cross into Tanzania for an epic adventure through the Serengeti plains and the Ngorongoro Crater." },
  { img: kiliImg, title: "Kilimanjaro & Zanzibar Adventure", days: "10 Days", daysNum: 10, destination: "Tanzania", desc: "Summit Africa's highest peak via the Marangu Route, then unwind on Zanzibar's pristine beaches." },
  { img: serengetiImg, title: "Explore Tanzania Big Safari", days: "5-10 Days", daysNum: 7, destination: "Tanzania", desc: "A comprehensive Tanzanian safari covering Serengeti, Ngorongoro, Tarangire, and Lake Manyara." },
  { img: elephantsImg, title: "5 Days Magical Safari", days: "5 Days", daysNum: 5, destination: "Kenya", desc: "A perfectly paced introduction to East Africa's wildlife wonders with expert guides and luxury camps." },
  { img: migrationImg, title: "Tanzania Camping Adventure", days: "7 Days", daysNum: 7, destination: "Tanzania", desc: "Experience Tanzania's raw wilderness on an authentic camping safari through the northern circuit." },
];

const durationFilters = [
  { label: "All", min: 0, max: 99 },
  { label: "3–5 Days", min: 3, max: 5 },
  { label: "6–7 Days", min: 6, max: 7 },
  { label: "8+ Days", min: 8, max: 99 },
];

const destinationFilters = ["All", "Kenya", "Tanzania"] as const;

const ToursSection = () => {
  const [duration, setDuration] = useState(0);
  const [destination, setDestination] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const { user } = useAuth();
  const { saveTour, isSaved } = useSavedTours();
  const navigate = useNavigate();

  const filtered = tours.filter((t) => {
    const d = durationFilters[duration];
    const durationMatch = t.daysNum >= d.min && t.daysNum <= d.max;
    const destMatch = destination === "All" || t.destination === destination;
    return durationMatch && destMatch;
  });

  const visible = showAll ? filtered : filtered.slice(0, 9);

  const handleSave = (t: Tour) => {
    if (!user) {
      toast.info("Please sign in to save tours");
      navigate("/login");
      return;
    }
    if (isSaved(t.title)) {
      toast.info("Tour already saved!");
      return;
    }
    saveTour({ title: t.title, img: t.img, days: t.days, destination: t.destination, desc: t.desc });
    toast.success("Tour saved to your wishlist!");
  };

  return (
    <section id="tours" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Popular Packages</p>
          <h2 className="section-heading text-foreground">Top Safari Tours</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Filter size={16} />
            <span className="font-medium">Filter:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {durationFilters.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setDuration(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  duration === i
                    ? "gold-gradient text-earth shadow-md"
                    : "bg-background border border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <div className="flex flex-wrap justify-center gap-2">
            {destinationFilters.map((d) => (
              <button
                key={d}
                onClick={() => setDestination(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  destination === d
                    ? "bg-safari-green text-secondary-foreground shadow-md"
                    : "bg-background border border-border text-muted-foreground hover:border-safari-green/40"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((t, i) => (
            <ScrollReveal key={`${t.title}-${i}`} delay={0.05 * i}>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-earth/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock size={12} />
                    {t.days}
                  </div>
                  <div className="absolute top-4 left-4 bg-safari-green/90 backdrop-blur-sm text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {t.destination}
                  </div>
                  <button
                    onClick={() => handleSave(t)}
                    className={`absolute bottom-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      isSaved(t.title)
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-background/80 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
                    }`}
                    title={isSaved(t.title) ? "Saved" : "Save to wishlist"}
                  >
                    <Heart size={16} fill={isSaved(t.title) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
                  <button className="inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:gap-3 transition-all group/btn">
                    View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No tours match your filters. Try adjusting your selection.</p>
        )}

        {filtered.length > 9 && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="gold-gradient text-earth font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              View All Tours
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToursSection;
