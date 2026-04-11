import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-medium tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="section-heading text-foreground">Contact Us</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="gold-gradient text-earth font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-safari-green/10 flex items-center justify-center shrink-0">
                <Phone className="text-safari-green" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm">+254 700 000 000</p>
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
            <div className="rounded-xl overflow-hidden h-56 mt-4 shadow-md">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
