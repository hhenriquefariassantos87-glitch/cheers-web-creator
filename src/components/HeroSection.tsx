import heroImg from "@/assets/hero-background.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const stats = [
  { value: "20", label: "Anos de Experiência" },
  { value: "500+", label: "Eventos Realizados" },
  { value: "100%", label: "Satisfação" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative md:min-h-screen flex flex-col md:items-center md:justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Mobile: card com a foto inteira */}
      <div className="md:hidden px-4 mb-8">
        <div className="rounded-2xl overflow-hidden shadow-gold border border-primary/20">
          <img
            src={heroBanner}
            alt="Bartenders Kaer"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop: foto como background */}
      <div className="hidden md:block absolute inset-0">
        <img
          src={heroBanner}
          alt="Bartenders Kaer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pb-12 md:pt-20">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Bartenders <span className="text-gradient-gold">Premium</span> para seus Eventos
        </h1>
        <p className="font-body text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.2s" }}>
          20 anos criando experiências inesquecíveis com drinks exclusivos e atendimento de excelência.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            Solicitar Orçamento
          </button>
          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary/30 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary/60 transition-colors"
          >
            Conhecer Serviços
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
