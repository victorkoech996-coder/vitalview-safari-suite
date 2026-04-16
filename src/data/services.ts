export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "private-safaris",
    title: "Private Safaris",
    shortDesc: "Tailored luxury safaris for families, couples, or solo travellers.",
    longDesc:
      "Our private safaris are fully customised around your interests, pace and budget. Travel in your own 4x4 with a dedicated professional guide, choose your preferred lodges or tented camps, and enjoy unmatched flexibility across Kenya, Tanzania, Uganda and Rwanda.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "group-joining-safaris",
    title: "Group Joining Safaris",
    shortDesc: "Affordable scheduled departures to join other travellers.",
    longDesc:
      "Join our scheduled group safaris and explore East Africa's iconic parks at a friendly price. Perfect for solo travellers and small groups looking to share the adventure, meet new friends, and enjoy great value without compromising on quality.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "hotel-bookings",
    title: "Hotel Bookings",
    shortDesc: "Handpicked lodges, camps, and hotels across East Africa.",
    longDesc:
      "From luxury bush camps inside the Mara to beachfront resorts in Diani and Zanzibar, we've personally vetted every property we recommend. Get the best available rates plus added perks our partners reserve for our clients.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    shortDesc: "Reliable pickup & drop-off from all major airports.",
    longDesc:
      "Start and end your trip stress-free. We offer prompt, comfortable airport transfers in modern vehicles with professional drivers — available 24/7 from JKIA, Wilson, Moi International and regional airstrips.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "honeymoon-tours",
    title: "Honeymoon Tours",
    shortDesc: "Romantic getaways with private experiences.",
    longDesc:
      "Celebrate your love with curated honeymoon escapes — sundowners on the savannah, candle-lit beach dinners in Zanzibar, private bush breakfasts and romantic suites with views you'll never forget.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "dream-holidays",
    title: "Dream Holidays",
    shortDesc: "Custom holiday packages built around your bucket list.",
    longDesc:
      "Tell us your dream holiday and we'll design every detail — beach, bush, mountain, city or a mix of all. Multi-country itineraries, family adventures and once-in-a-lifetime experiences are our specialty.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "air-travel-ticketing",
    title: "Air Travel & Ticketing",
    shortDesc: "Domestic & international flight bookings at best rates.",
    longDesc:
      "As an IATA-affiliated agency, we secure competitive fares on all major airlines. We handle bookings, reissues, refunds and group travel for both domestic hops and international long-haul journeys.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "car-hire-services",
    title: "Car Hire Services",
    shortDesc: "4x4 rentals with driver or self-drive options.",
    longDesc:
      "Choose from our well-maintained fleet of safari Land Cruisers, vans and saloon cars. Self-drive or chauffeur-driven options available with comprehensive insurance and 24/7 roadside support.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    shortDesc: "Comprehensive cover for medical, cancellations & luggage.",
    longDesc:
      "Travel with peace of mind. We arrange travel insurance plans covering medical emergencies, evacuation, trip cancellations, baggage loss and adventure activities — tailored to your itinerary.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "corporate-team-buildings",
    title: "Corporate Team Buildings",
    shortDesc: "Safari-based team building retreats.",
    longDesc:
      "Take your team out of the office and into the wild. We design impactful team-building retreats combining adventure, problem-solving activities and relaxation in stunning locations.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "outdoor-daytrip-safaris",
    title: "Outdoor & Daytrip Safaris",
    shortDesc: "1-day escapes to nearby parks and attractions.",
    longDesc:
      "Short on time? Enjoy day trips to Nairobi National Park, Lake Naivasha, Hell's Gate, the Giraffe Centre, Karura Forest and more. Perfect for residents and travellers in transit.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "corporate-conferences",
    title: "Corporate Conferences",
    shortDesc: "Full MICE planning: venues, logistics, activities.",
    longDesc:
      "From boardroom meetings to multi-day conferences and incentive trips, we coordinate every detail — venue sourcing, accommodation, transfers, AV, social programmes and excursions.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "visa-processing-services",
    title: "Visa Processing Services",
    shortDesc: "Guidance & support for Kenya & regional tourist visas.",
    longDesc:
      "We help with eTA applications for Kenya, East Africa Tourist Visas and regional travel permits. Get clear guidance, document checks and faster turnaround through our experienced team.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "other-tour-travel-services",
    title: "Other Tour & Travel Services",
    shortDesc: "Have a custom request? We handle it.",
    longDesc:
      "Hot air balloon safaris, helicopter charters, mountain climbing, cultural tours, photography expeditions, filming logistics and more. If it involves travel in East Africa, we can arrange it.",
    image: "https://images.unsplash.com/photo-1502780402662-acc01917cf91?w=1200&q=80&auto=format&fit=crop",
  },
];
