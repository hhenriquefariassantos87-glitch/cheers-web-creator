import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = ["Início", "Serviços", "Pacotes", "Balcões", "Sobre", "Contato"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const sectionMap: Record<string, string> = {
    "Início": "hero",
    "Serviços": "servicos",
    "Pacotes": "pacotes",
    "Balcões": "balcoes",
    "Sobre": "sobre",
    "Contato": "contato",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <span className="font-display text-xl font-bold text-gradient-gold">ABS Bartenders</span>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionMap[link])}
              className="text-sm font-body text-foreground/70 hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="https://wa.me/5511982844587"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionMap[link])}
              className="block w-full text-left py-2 text-foreground/70 hover:text-primary transition-colors font-body"
            >
              {link}
            </button>
          ))}
          <a
            href="https://wa.me/5511982844587"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
