const Footer = () => (
  <footer className="bg-earth py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading text-xl font-bold text-primary-foreground">
            Vitalview <span className="text-gold">Safaris</span>
          </span>
        </div>
        <div className="flex gap-6">
          {["Home", "About Us", "FAQ", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
            >
              {link}
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
  </footer>
);

export default Footer;
