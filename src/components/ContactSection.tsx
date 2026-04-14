import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Users } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const safariOptions = [
  "Kenya Wildlife Safari (8 Days)",
  "Masai Mara - Nakuru - Naivasha (5 Days)",
  "Amboseli Tsavo West & East (5 Days)",
  "Wildebeest Migration Safari (7 Days)",
  "Kilimanjaro & Zanzibar Adventure (10 Days)",
  "Tanzania Camping Adventure (7 Days)",
  "Custom / Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", travelDate: "", people: "", safari: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking inquiry sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", travelDate: "", people: "", safari: "", message: "" });
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground placeholder:text-muted-foreground";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Book Your Safari</p>
          <h2 className="section-heading text-foreground">Contact Us</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                <input type="email" placeholder="Your Email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="tel" placeholder="Phone Number" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${inputClass} pl-11`} />
                </div>
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="date" placeholder="Travel Date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} className={`${inputClass} pl-11`} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select value={form.people} onChange={(e) => setForm({ ...form, people: e.target.value })} className={`${inputClass} pl-11 appearance-none`}>
                    <option value="">Number of People</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                    ))}
                    <option value="10+">10+ People</option>
                  </select>
                </div>
                <select value={form.safari} onChange={(e) => setForm({ ...form, safari: e.target.value })} className={`${inputClass} appearance-none`}>
                  <option value="">Preferred Safari</option>
                  {safariOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <textarea placeholder="Additional Message or Special Requests" maxLength={1000} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              <button type="submit" className="w-full sm:w-auto gold-gradient text-earth font-semibold px-10 py-3.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                <Send size={18} /> Send Inquiry
              </button>
            </form>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safari-green/10 flex items-center justify-center shrink-0">
                  <Phone className="text-safari-green" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground text-sm">+254 742 006 589</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safari-green/10 flex items-center justify-center shrink-0">
                  <Mail className="text-safari-green" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground text-sm">info@vitalviewsafaris.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safari-green/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-safari-green" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-64 mt-4 shadow-md">
                <iframe
                  title="Nairobi Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853731544!2d36.68258!3d-1.3028618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
