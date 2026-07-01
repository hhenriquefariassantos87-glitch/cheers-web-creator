import balcaoLedImg from "@/assets/balcao-led.jpg";
import balcaoModernoImg from "@/assets/balcao-moderno.jpg";
import balcaoClassicoImg from "@/assets/balcao-classico.jpg";
import balcaoRusticoImg from "@/assets/balcao-rustico.jpg";
import balcaoCapitone from "@/assets/balcao-capitone.jpg";

const counters = [
  { name: "Balcão Clássico", description: "Elegante e versátil", image: balcaoClassicoImg },
  { name: "Balcão de LED", description: "Design com LED integrada", image: balcaoLedImg },
  { name: "Balcão Rústico", description: "Para eventos ao ar livre", image: balcaoRusticoImg },
  { name: "Balcão Moderno", description: "Linhas contemporâneas", image: balcaoModernoImg },
  { name: "Balcão Capitonê", description: "Sofisticado com acabamento dourado", image: balcaoCapitone },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {counters.map((counter) => (
            <div key={counter.name} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors text-center">
              {counter.image && (
                <div className="h-64 overflow-hidden">
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

        <p className="text-muted-foreground text-center mt-12 max-w-2xl mx-auto font-body text-sm border border-primary/20 rounded-lg p-4 bg-card">
          <span className="text-gradient-gold font-semibold">Aviso:</span> a transferência do balcão até o local do evento possui um valor de frete à parte, calculado conforme a distância.
        </p>
      </div>
    </section>
  );
};

export default CountersSection;
