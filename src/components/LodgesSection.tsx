import { MapPin } from "lucide-react";
import giraffeManor from "@/assets/lodges/giraffe-manor.jpg";
import luxuryLodge from "@/assets/lodges/luxury-lodge.jpg";
import angamaMara from "@/assets/lodges/angama-mara.jpg";

const lodges = [
  { img: giraffeManor, name: "Giraffe Manor", location: "Nairobi" },
  { img: luxuryLodge, name: "Chui Lodge", location: "Lake Naivasha" },
  { img: angamaMara, name: "Karen Blixen Camp", location: "Masai Mara" },
  { img: luxuryLodge, name: "Ol Tukai Lodge", location: "Amboseli" },
  { img: angamaMara, name: "Angama Mara", location: "Masai Mara" },
  { img: giraffeManor, name: "House of Waine", location: "Nairobi" },
  { img: luxuryLodge, name: "Solio Lodge", location: "Laikipia" },
  { img: angamaMara, name: "Elephant Watch Camp", location: "Samburu" },
  { img: giraffeManor, name: "Chief's Camp", location: "Botswana" },
];

const LodgesSection = () => (
  <section id="lodges" className="section-padding bg-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Where to Stay</p>
        <h2 className="section-heading text-foreground">Luxury Lodges & Camps</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {lodges.map((l, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] snap-start rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group bg-background shrink-0"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={l.img}
                alt={l.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground">{l.name}</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                <MapPin size={14} /> {l.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LodgesSection;
