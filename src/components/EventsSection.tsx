import casamentosImg from "@/assets/casamentos.jpg";
import aniversariosImg from "@/assets/aniversarios.jpg";
import corporativosImg from "@/assets/eventos-corporativos.jpg";
import festasImg from "@/assets/festas-especiais.jpg";

const events = [
  { name: "Casamentos", icon: "💍", image: casamentosImg },
  { name: "Aniversários", icon: "🎂", image: aniversariosImg },
  { name: "Eventos Corporativos", icon: "💼", image: corporativosImg },
  { name: "Festas Especiais", icon: "🎉", image: festasImg },
];

const EventsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Tipos de <span className="text-gradient-gold">Eventos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          Atendemos todos os tipos de celebração com excelência
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.name} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2">{event.icon}</span>
                <span className="font-display text-lg font-bold text-foreground">{event.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
