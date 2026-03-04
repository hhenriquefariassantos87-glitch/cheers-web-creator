const counters = [
  { name: "Balcão Clássico", description: "Elegante e versátil" },
  { name: "Balcão Premium", description: "Design com LED integrada" },
  { name: "Balcão Rústico", description: "Para eventos ao ar livre" },
  { name: "Balcão Moderno", description: "Linhas contemporâneas" },
  { name: "Balcão Personalizado", description: "Sob medida" },
  { name: "Bar Móvel", description: "Praticidade e estilo" },
];

const CountersSection = () => {
  return (
    <section id="balcoes" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Nossos <span className="text-gradient-gold">Balcões</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          Diversos modelos para combinar com o estilo do seu evento
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {counters.map((counter) => (
            <div key={counter.name} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors text-center">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{counter.name}</h3>
              <p className="text-muted-foreground font-body text-sm">{counter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
