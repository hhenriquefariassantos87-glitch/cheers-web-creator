import balcaoLedImg from "@/assets/balcao-led.jpg";
import balcaoModernoImg from "@/assets/balcao-moderno.jpg";
import balcaoClassicoImg from "@/assets/balcao-classico.jpg";

const counters = [
  { name: "Balcão Clássico", description: "Elegante e versátil", image: balcaoClassicoImg },
  { name: "Balcão de LED", description: "Design com LED integrada", image: balcaoLedImg },
  { name: "Balcão Rústico", description: "Para eventos ao ar livre", image: null },
  { name: "Balcão Moderno", description: "Linhas contemporâneas", image: balcaoModernoImg },
  { name: "Balcão Personalizado", description: "Sob medida", image: null },
  { name: "Bar Móvel", description: "Praticidade e estilo", image: null },
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
            <div key={counter.name} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors text-center">
              {counter.image && (
                <div className="h-40 overflow-hidden">
                  <img src={counter.image} alt={counter.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{counter.name}</h3>
                <p className="text-muted-foreground font-body text-sm">{counter.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
