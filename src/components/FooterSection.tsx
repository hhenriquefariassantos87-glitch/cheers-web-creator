import { Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-dark-surface border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="font-display text-xl font-bold text-gradient-gold">Kaer Bartenders</span>
            <p className="text-muted-foreground font-body text-sm mt-4">
              Transformando eventos em experiências inesquecíveis há 20 anos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "Serviços", id: "servicos" },
                { label: "Pacotes", id: "pacotes" },
                { label: "Sobre", id: "sobre" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              <li>Bartenders Profissionais</li>
              <li>Estrutura Completa</li>
              <li>Drinks Exclusivos</li>
              <li>Bar Móvel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              <li>+55 13 98812-7144</li>
              <li>kaerbartender@gmail.com</li>
              <li>São Paulo, SP</li>
            </ul>
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/kaer.bartenders?igsh=MThyZ2txMWEyeXV1ag==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Instagram size={20} className="text-primary" />
                </span>
                <span className="text-muted-foreground group-hover:text-primary text-xs transition-colors">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-1 group">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Facebook size={20} className="text-primary" />
                </span>
                <span className="text-muted-foreground group-hover:text-primary text-xs transition-colors">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground font-body text-sm border-t border-border pt-8">
          © Kaer Bartenders 2025. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
