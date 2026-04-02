import { useState } from "react";
import teamImg from "@/assets/about-team.jpg";

const AboutSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="sobre" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          Sobre <span className="text-gradient-gold">Nós</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img src={teamImg} alt="Equipe Kaer Bartenders" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-foreground/80 font-body text-lg leading-relaxed mb-8">
              Há mais de 10 anos no mercado, a Kaer Bartenders é especializada em casamentos, aniversários e eventos corporativos. 
              Nossa equipe qualificada transforma cada evento em uma experiência única e inesquecível.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-display font-bold text-primary">500+</div>
                <div className="text-muted-foreground text-sm font-body mt-1">Eventos Realizados</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-display font-bold text-primary">10+</div>
                <div className="text-muted-foreground text-sm font-body mt-1">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
