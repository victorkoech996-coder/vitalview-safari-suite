import ScrollReveal from "./ScrollReveal";

const Footer = () => (
  <footer className="bg-earth py-12 px-4">
    <ScrollReveal>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading text-xl font-bold text-primary-foreground">
              Vitalview <span className="text-gold">Safaris</span>
            </span>
            <a
              href="https://maps.app.goo.gl/kKEfj4GLcZ3VXSA39"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-primary-foreground/60 hover:text-gold transition-colors text-xs"
            >
              Hurlingham Court Building, Argwings Kodhek Rd, Nairobi
            </a>
          </div>
          <div className="flex gap-6">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Tours", href: "#tours" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            Copyright ©2026 Vitalview Safaris Limited. All Rights Reserved
          </p>
        </div>
      </div>
    </ScrollReveal>
  </footer>
);

export default Footer;
