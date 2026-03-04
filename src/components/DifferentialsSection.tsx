import { Award, Shield, ThumbsUp } from "lucide-react";

const differentials = [
  { icon: Award, title: "Satisfação Garantida", description: "Equipe qualificada com +10 anos de experiência" },
  { icon: Shield, title: "Reputação 100%", description: "Garantia completa em todos os detalhes" },
  { icon: ThumbsUp, title: "Estrutura Própria", description: "Transporte e estrutura completa incluídos" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          Nossos <span className="text-gradient-gold">Diferenciais</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {differentials.map((d) => (
            <div key={d.title} className="text-center p-8 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <d.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">{d.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
