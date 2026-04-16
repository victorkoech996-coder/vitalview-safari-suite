import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const faqs = [
  { q: "How do I book a safari or service?", a: "Simply fill out the enquiry form below or message us on WhatsApp. We'll respond within 24 hours with a tailored proposal." },
  { q: "Do you accept custom itineraries?", a: "Absolutely. Most of our trips are fully customised. Tell us your dates, interests and budget and we'll design an itinerary just for you." },
  { q: "What payment methods are accepted?", a: "We accept bank transfers, M-Pesa, credit cards and secure online payments via Braintree (a PayPal company)." },
  { q: "Are your guides licensed?", a: "Yes. All our driver-guides are KPSGA-certified, multilingual where possible, and have years of experience in East Africa." },
  { q: "Can you arrange multi-country trips?", a: "Yes — we regularly combine Kenya, Tanzania, Uganda, Rwanda and Zanzibar into seamless multi-country itineraries." },
];

const Services = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-earth relative">
        <div className="max-w-5xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div className="text-center">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">What We Do Best</p>
            <h1 className="section-heading text-cream mb-4">Our Services</h1>
            <p className="text-cream/80 max-w-2xl mx-auto">
              From private safaris to corporate retreats — explore the full range of travel services we deliver across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid md:grid-cols-2 gap-8 items-center scroll-mt-24 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.longDesc}</p>
                <a
                  href="#enquiry"
                  className="inline-block gold-gradient text-earth font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  Enquire about {s.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="section-heading text-foreground">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="bg-background rounded-2xl px-6 shadow-sm">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="section-padding bg-background scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
            <h2 className="section-heading text-foreground">Send us an Enquiry</h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border space-y-4">
            <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </select>
            <Textarea required placeholder="Tell us a bit about what you're looking for…" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="w-full gold-gradient text-earth font-semibold hover:opacity-90">
              Send Enquiry
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Prefer to browse? <Link to="/" className="text-gold-dark font-medium hover:underline">Back to home</Link>
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
