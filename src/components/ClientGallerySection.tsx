import { useState } from "react";
import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";
import cliente4 from "@/assets/cliente-4.jpg";
import cliente5 from "@/assets/cliente-5.jpg";
import cliente6 from "@/assets/cliente-6.jpg";
import cliente7 from "@/assets/cliente-7.jpg";
import cliente8 from "@/assets/cliente-8.jpg";
import cliente9 from "@/assets/cliente-9.jpg";
import cliente10 from "@/assets/cliente-10.jpg";

const images = [
  cliente1, cliente2, cliente3, cliente4, cliente5,
  cliente6, cliente7, cliente8, cliente9, cliente10,
];

const ClientGallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Galeria de <span className="text-gradient-gold">Clientes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Momentos especiais dos nossos clientes brindando com nossos drinks
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group bg-muted transition-transform duration-300 hover:scale-105"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Cliente ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="Cliente" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default ClientGallerySection;
