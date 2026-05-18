import { useState } from "react";
import { Check } from "lucide-react";
import bartendersImg from "@/assets/bartenders-profissionais.jpg";
import estruturaImg from "@/assets/estrutura-completa.jpg";
import drinksImg from "@/assets/drinks-exclusivos.jpg";

const services = [
  {
    title: "Bartenders Profissionais",
    image: bartendersImg,
    features: ["Coquetéis clássicos", "Atendimento especial", "Receitas exclusivas", "Drinks personalizados"],
  },
  {
    title: "Estrutura Completa",
    image: estruturaImg,
    features: ["Módulos de bar", "Utensílios completos", "Equipamentos profissionais", "Transporte incluído"],
  },
  {
    title: "Drinks Exclusivos",
    image: drinksImg,
    features: ["Receitas únicas", "Menu personalizado", "Ingredientes premium", "Coquetéis personalizados"],
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="servicos" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Nossos <span className="text-gradient-gold">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          Oferecemos tudo que você precisa para tornar seu evento inesquecível
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all group">
              <div className="h-72 overflow-hidden cursor-pointer" onClick={() => setSelected(service.image)}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: service.title === "Drinks Exclusivos" ? "center bottom" : "center" }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4 cursor-pointer" onClick={() => setSelected(null)}>
          <img src={selected} alt="Serviço" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
