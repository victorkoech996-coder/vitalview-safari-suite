import { Clock, ArrowRight } from "lucide-react";
import lionImg from "@/assets/tours/lion-safari.jpg";
import elephantsImg from "@/assets/tours/elephants-amboseli.jpg";
import migrationImg from "@/assets/tours/wildebeest-migration.jpg";
import nakuruImg from "@/assets/tours/lake-nakuru.jpg";
import kiliImg from "@/assets/tours/kilimanjaro.jpg";
import serengetiImg from "@/assets/tours/serengeti.jpg";

const tours = [
  { img: lionImg, title: "Kenya Wildlife Safari", days: "8 Days", desc: "An unforgettable journey through Kenya's premier wildlife reserves starting and ending in Nairobi, featuring the Big Five." },
  { img: nakuruImg, title: "Masai Mara - Nakuru - Naivasha", days: "5 Days", desc: "Explore the flamingo-lined shores of Lake Nakuru, the scenic Lake Naivasha, and the legendary Masai Mara." },
  { img: elephantsImg, title: "Amboseli Tsavo West & East", days: "5 Days", desc: "Witness elephants against Mt. Kilimanjaro's backdrop in Amboseli, then explore the vast Tsavo wilderness." },
  { img: lionImg, title: "National Geographic Journeys", days: "8 Days", desc: "A curated Kenya safari experience with expert naturalists, cultural immersion, and premium wildlife encounters." },
  { img: migrationImg, title: "Mara, Nakuru & Amboseli Budget", days: "7 Days", desc: "Experience Kenya's iconic parks on a budget — from the Great Migration to Amboseli's elephant herds." },
  { img: serengetiImg, title: "Magic of Kenya Safari Tour", days: "7 Days", desc: "A magical week through Kenya's most scenic landscapes, private conservancies, and cultural villages." },
  { img: nakuruImg, title: "Best of Kenya Budget Wildlife", days: "6 Days", desc: "Discover Kenya's diverse ecosystems from savannah to lakes on an affordable guided wildlife safari." },
  { img: elephantsImg, title: "Lakes Bogoria, Nakuru & Mara", days: "5 Days", desc: "A compact safari covering Kenya's Rift Valley lakes and the world-famous Masai Mara Game Reserve." },
  { img: migrationImg, title: "Wildebeest Migration Safari", days: "7 Days", desc: "Time your visit with the Great Migration — millions of wildebeest crossing the Mara River in spectacular fashion." },
  { img: lionImg, title: "Kenya Budget Camping Safari", days: "6 Days", desc: "Camp under African skies on a private guided safari through Kenya's most beautiful national parks." },
  { img: serengetiImg, title: "Tarangire, Serengeti & Ngorongoro", days: "5 Days", desc: "Cross into Tanzania for an epic adventure through the Serengeti plains and the Ngorongoro Crater." },
  { img: kiliImg, title: "Kilimanjaro & Zanzibar Adventure", days: "10 Days", desc: "Summit Africa's highest peak via the Marangu Route, then unwind on Zanzibar's pristine beaches." },
  { img: serengetiImg, title: "Explore Tanzania Big Safari", days: "5-10 Days", desc: "A comprehensive Tanzanian safari covering Serengeti, Ngorongoro, Tarangire, and Lake Manyara." },
  { img: elephantsImg, title: "5 Days Magical Safari", days: "5 Days", desc: "A perfectly paced introduction to East Africa's wildlife wonders with expert guides and luxury camps." },
  { img: migrationImg, title: "Tanzania Camping Adventure", days: "7 Days", desc: "Experience Tanzania's raw wilderness on an authentic camping safari through the northern circuit." },
];

const ToursSection = () => (
  <section id="tours" className="section-padding bg-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Popular Packages</p>
        <h2 className="section-heading text-foreground">Top Safari Tours</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.slice(0, 9).map((t, i) => (
          <div
            key={i}
            className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
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
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
              <button className="inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:gap-3 transition-all group/btn">
                View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="gold-gradient text-earth font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg">
          View All Tours
        </button>
      </div>
    </div>
  </section>
);

export default ToursSection;
