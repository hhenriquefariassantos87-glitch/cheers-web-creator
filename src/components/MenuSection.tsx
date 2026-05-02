import { useState } from "react";
import { GlassWater, Wine, Sparkles, Heart } from "lucide-react";

type Drink = { name: string; desc: string };
type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof GlassWater;
  groups: { label: string; drinks: Drink[] }[];
};

const categories: Category[] = [
  {
    id: "premium",
    title: "Cardápio Premium",
    subtitle: "Drinks exclusivos para momentos memoráveis",
    icon: Sparkles,
    groups: [
      {
        label: "Drinks",
        drinks: [
          { name: "Caipirinha", desc: "Cachaça, frutas à sua escolha e açúcar." },
          { name: "Caipiroska", desc: "Vodka, frutas à sua escolha e açúcar." },
          { name: "Saquerita", desc: "Saquê, frutas à sua escolha e açúcar." },
          { name: "Mojito", desc: "Rum, hortelã, açúcar, suco de limão e água com gás." },
          { name: "Moscow Mule", desc: "Vodka, suco de limão, xarope de gengibre e espuma de gengibre." },
          { name: "Caipiríssima", desc: "Rum, fruta à sua escolha, limão e açúcar." },
          { name: "Campari Tonic", desc: "Campari, gelo, água tônica e laranja." },
          { name: "Fitzgerald", desc: "Gin, limão siciliano, xarope de açúcar e angostura." },
          { name: "Piña Colada", desc: "Rum, abacaxi, leite de coco e leite condensado." },
          { name: "Aperol Spritz", desc: "Aperol, espumante, água com gás e laranja." },
          { name: "Negroni", desc: "Gin, Campari, vermute e laranja." },
          { name: "Gin & Tônica (e variações)", desc: "Gin, água tônica, xaropes aromatizados e especiarias." },
          { name: "Drink Surpresa", desc: "Escolha do bartender." },
        ],
      },
    ],
  },
  {
    id: "todos",
    title: "Cardápio para Todos",
    subtitle: "Drinks sem álcool para brindar sem limites",
    icon: Heart,
    groups: [
      {
        label: "Drinks sem álcool",
        drinks: [
          { name: "Caipi Fake", desc: "Fruta à sua escolha, açúcar e suco de laranja." },
          { name: "Pink Lemonade", desc: "Suco de limão, água com gás e xarope de cranberry." },
          { name: "Kiss on the Beach", desc: "Suco de laranja, suco de pêssego e granadina." },
          { name: "Espanholinha", desc: "Suco de uva, abacaxi e leite condensado." },
          { name: "Praia Australiana", desc: "Suco de maracujá, suco de morango, leite condensado e leite de coco." },
          { name: "Italian Soda", desc: "Gelo, água com gás e xarope aromatizado." },
          { name: "Piña Descolada", desc: "Suco de abacaxi, leite condensado e leite de coco." },
          { name: "Batidinha (sem álcool)", desc: "Fruta, leite condensado e suco." },
          { name: "Baby Kiss", desc: "Suco de morango, leite condensado e granadina." },
          { name: "Mojitinho", desc: "Soda, hortelã, limão e açúcar." },
        ],
      },
    ],
  },
  {
    id: "especial",
    title: "Seleção Especial",
    subtitle: "Drinks selecionados para quem quer mais experiência",
    icon: Wine,
    groups: [
      {
        label: "Drinks",
        drinks: [
          { name: "Caipirinha", desc: "Cachaça, frutas e açúcar." },
          { name: "Caipiroska", desc: "Vodka, frutas e açúcar." },
          { name: "Saquerita", desc: "Saquê, frutas e açúcar." },
          { name: "Espanhola", desc: "Vinho, abacaxi e leite condensado." },
          { name: "Sex on the Beach", desc: "Vodka, suco de laranja, licor de pêssego e granadina." },
          { name: "Tropical Drink", desc: "Cachaça ou vodka, limão, açúcar e suco de laranja." },
          { name: "Brazuca Sour", desc: "Cachaça, vinho e limão." },
          { name: "Lagoa Azul", desc: "Vodka, limão, blue curaçao e soda." },
        ],
      },
      {
        label: "Sem álcool",
        drinks: [
          { name: "Caipi Fake", desc: "Fruta à sua escolha, açúcar e suco de laranja." },
          { name: "Kiss on the Beach", desc: "Suco de laranja, pêssego e granadina." },
          { name: "Lagoa Azul (sem álcool)", desc: "Limão, xarope de blue curaçao e soda." },
          { name: "Espanholinha", desc: "Abacaxi, suco de uva e leite condensado." },
          { name: "Drink Surpresa", desc: "Escolha do bartender." },
        ],
      },
    ],
  },
  {
    id: "favoritos",
    title: "Favoritos do Público",
    subtitle: "Os clássicos que nunca saem da moda",
    icon: GlassWater,
    groups: [
      {
        label: "Drinks",
        drinks: [
          { name: "Caipirinha", desc: "Cachaça, fruta e açúcar." },
          { name: "Caipiroska", desc: "Vodka, fruta e açúcar." },
          { name: "Saquerita", desc: "Saquê, fruta e açúcar." },
          { name: "Batida", desc: "Cachaça ou vodka, fruta e leite condensado." },
          { name: "Espanhola", desc: "Vinho, abacaxi e leite condensado." },
        ],
      },
      {
        label: "Sem álcool",
        drinks: [
          { name: "Caipi Fake", desc: "Fruta à sua escolha, açúcar e suco de laranja." },
          { name: "Espanholinha", desc: "Abacaxi, suco de uva e leite condensado." },
          { name: "Drink Surpresa", desc: "Escolha do bartender." },
        ],
      },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="cardapio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-primary tracking-[0.3em] text-xs md:text-sm mb-3 uppercase">
            Nosso Menu
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Cardápio</span> de Drinks
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto mb-4" />
          <p className="font-body text-foreground/70 max-w-2xl mx-auto">
            Coquetelaria autoral preparada com técnica, ingredientes selecionados e a assinatura Kaer.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`group flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full border font-body text-xs md:text-sm tracking-wide transition-all ${
                  isActive
                    ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                    : "border-primary/30 text-foreground/70 hover:text-primary hover:border-primary/60"
                }`}
              >
                <Icon size={16} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active category card */}
        <div className="max-w-5xl mx-auto bg-card/60 border border-primary/20 rounded-2xl shadow-gold backdrop-blur-sm overflow-hidden">
          <div className="border-b border-primary/20 p-6 md:p-8 text-center bg-gradient-to-b from-primary/5 to-transparent">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
              {current.title}
            </h3>
            <p className="font-body text-foreground/70 italic text-sm md:text-base">
              {current.subtitle}
            </p>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            {current.groups.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-primary/20" />
                  <span className="font-display text-primary uppercase tracking-[0.25em] text-xs md:text-sm">
                    {group.label}
                  </span>
                  <div className="h-px flex-1 bg-primary/20" />
                </div>

                <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                  {group.drinks.map((drink) => (
                    <div key={drink.name} className="group">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                          {drink.name}
                        </h4>
                        <span className="flex-1 border-b border-dashed border-primary/20" />
                      </div>
                      <p className="font-body text-sm text-foreground/60 leading-relaxed">
                        {drink.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-primary/20 px-6 md:px-10 py-5 text-center bg-gradient-to-t from-primary/5 to-transparent">
            <p className="font-body text-xs md:text-sm text-foreground/60 italic">
              Cardápio personalizável conforme o seu evento. Consulte opções exclusivas com nosso bartender.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;