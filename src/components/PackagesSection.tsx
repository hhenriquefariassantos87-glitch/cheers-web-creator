import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Básico",
    description: "Ideal para eventos pequenos e familiares",
    features: ["1 Bartender profissional", "Equipamentos básicos", "Cardápio com 10 drinks", "Até 50 pessoas", "Setup incluído"],
    team: "1 Barman + 1 Barmec",
    popular: false,
  },
  {
    name: "Premium",
    badge: "MAIS POPULAR",
    description: "Perfeito para casamentos e eventos médios",
    features: ["2 Bartenders", "Equipamentos completos", "20 drinks premium", "Até 100 pessoas", "Decoração temática", "Coqueteleira personalizada", "Setup incluído"],
    team: "2 Barmen + 2 Barmecs",
    popular: true,
  },
  {
    name: "Luxo",
    description: "Experiência completa para grandes eventos",
    features: ["3 Bartenders especializados", "Equipamentos premium", "Cardápio ilimitado", "Até 200 pessoas", "Bar móvel", "Show flair", "Drinks exclusivos", "Decoração completa", "Setup incluído"],
    team: "3+ Barmen + Equipe completa",
    popular: false,
  },
];

const packages70 = [
  {
    name: "Favoritos",
    description: "Open bar com clássicos que nunca saem da moda",
    features: [
      "Open bar com cardápio Favoritos",
      "5 horas de festa",
      "Até 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "2 Bartenders + 1 Auxiliar",
    popular: false,
  },
  {
    name: "Seleção",
    description: "Open bar com nossa seleção especial de drinks",
    features: [
      "Open bar com cardápio Seleção",
      "5 horas de festa",
      "Até 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "2 Bartenders + 1 Auxiliar",
    popular: true,
    badge: "RECOMENDADO",
  },
  {
    name: "Premium",
    description: "Open bar premium para momentos memoráveis",
    features: [
      "Open bar com cardápio Premium",
      "5 horas de festa",
      "Até 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "2 Bartenders + 1 Auxiliar",
    popular: false,
  },
];

const packagesAbove70 = [
  {
    name: "Favoritos",
    description: "Open bar com clássicos para grandes eventos",
    features: [
      "Open bar com cardápio Favoritos",
      "5 horas de festa",
      "Acima de 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "Equipe completa",
    popular: false,
  },
  {
    name: "Seleção",
    description: "Open bar com nossa seleção especial para grandes eventos",
    features: [
      "Open bar com cardápio Seleção",
      "5 horas de festa",
      "Acima de 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "Equipe completa",
    popular: true,
    badge: "RECOMENDADO",
  },
  {
    name: "Premium",
    description: "Open bar premium para grandes celebrações",
    features: [
      "Open bar com cardápio Premium",
      "5 horas de festa",
      "Acima de 70 convidados",
      "Copos e taças de vidro próprios",
      "Estrutura, gelo, materiais e insumos completos",
    ],
    team: "Equipe completa",
    popular: false,
  },
];

const teamCalc = [
  { guests: "Até 30 pessoas", team: "1 Bartender" },
  { guests: "60 pessoas", team: "2 Bartenders" },
  { guests: "90 pessoas", team: "3 Bartenders" },
  { guests: "120+ pessoas", team: "4+ Bartenders" },
];

const PackagesSection = () => {
  return (
    <section id="pacotes" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Nossos <span className="text-gradient-gold">Pacotes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          Escolha o pacote ideal para o seu evento
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-xl p-8 border relative transition-transform duration-300 hover:scale-105 ${
                pkg.popular
                  ? "bg-card border-primary shadow-gold scale-105 hover:scale-110"
                  : "bg-card border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} />
                  {pkg.badge}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground font-body border-t border-border pt-4">
                Equipe: {pkg.team}
              </div>
              <a
                href="https://wa.me/5513974277006"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block text-center py-3 rounded-lg font-semibold transition-opacity ${
                  pkg.popular
                    ? "bg-gradient-gold text-primary-foreground"
                    : "border border-primary/30 text-foreground hover:border-primary/60"
                }`}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Pacotes para até <span className="text-gradient-gold">70 Convidados</span>
          </h3>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Open bar completo com 5 horas de festa e estrutura inclusa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {packages70.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-xl p-8 border relative transition-transform duration-300 hover:scale-105 ${
                pkg.popular
                  ? "bg-card border-primary shadow-gold scale-105 hover:scale-110"
                  : "bg-card border-border"
              }`}
            >
              {pkg.popular && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} />
                  {pkg.badge}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground font-body border-t border-border pt-4">
                Equipe: {pkg.team}
              </div>
              <a
                href="https://wa.me/5513974277006"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block text-center py-3 rounded-lg font-semibold transition-opacity ${
                  pkg.popular
                    ? "bg-gradient-gold text-primary-foreground"
                    : "border border-primary/30 text-foreground hover:border-primary/60"
                }`}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Pacotes para <span className="text-gradient-gold">acima de 70 Convidados</span>
          </h3>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Open bar com equipe completa, 5 horas de festa e estrutura inclusa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {packagesAbove70.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-xl p-8 border relative transition-transform duration-300 hover:scale-105 ${
                pkg.popular
                  ? "bg-card border-primary shadow-gold scale-105 hover:scale-110"
                  : "bg-card border-border"
              }`}
            >
              {pkg.popular && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} />
                  {pkg.badge}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground font-body border-t border-border pt-4">
                Equipe: {pkg.team}
              </div>
              <a
                href="https://wa.me/5513974277006"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block text-center py-3 rounded-lg font-semibold transition-opacity ${
                  pkg.popular
                    ? "bg-gradient-gold text-primary-foreground"
                    : "border border-primary/30 text-foreground hover:border-primary/60"
                }`}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border p-8">
          <h3 className="font-display text-xl font-bold text-center mb-6 text-foreground">Cálculo de Equipe</h3>
          <div className="space-y-4">
            {teamCalc.map((item) => (
              <div key={item.guests} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                <span className="text-foreground font-body">{item.guests}</span>
                <span className="text-primary font-body font-semibold">{item.team}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
