import { Check, Users, UsersRound } from "lucide-react";

const packages = [
  {
    name: "Até 50 Convidados",
    icon: Users,
    features: ["1 Bartender", "Estrutura pequena"],
  },
  {
    name: "Acima de 50 Convidados",
    icon: UsersRound,
    features: ["2 Bartenders ou mais", "Estrutura grande"],
  },
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-xl p-8 border bg-card border-border transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-6">
                <pkg.icon size={48} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground text-center mb-6">
                {pkg.name}
              </h3>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground/80 font-body">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5513974277006"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-lg font-semibold transition-opacity border border-primary/30 text-foreground hover:border-primary/60"
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
