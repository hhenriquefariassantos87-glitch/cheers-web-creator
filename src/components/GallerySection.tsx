import { useState } from "react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";
import event7 from "@/assets/event-7.jpg";
import event8 from "@/assets/event-8.jpg";
import event9 from "@/assets/event-9.jpg";
import event10 from "@/assets/event-10.jpg";
import event11 from "@/assets/event-11.jpg";
import event12 from "@/assets/event-12.jpg";
import event13 from "@/assets/event-13.jpg";
import event14 from "@/assets/event-14.jpg";
import event15 from "@/assets/event-15.jpg";
import event16 from "@/assets/event-16.jpg";
import galeriaBar1 from "@/assets/galeria-bar1.jpg";
import galeriaBar2 from "@/assets/galeria-bar2.jpg";
import galeriaFrutas from "@/assets/galeria-frutas.jpg";
import galeriaCopos from "@/assets/galeria-copos.jpg";
import galeriaBalcao from "@/assets/galeria-balcao.jpg";

const images = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14, event15, event16, galeriaBar1, galeriaBar2, galeriaFrutas, galeriaCopos, galeriaBalcao];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          Nossa <span className="text-gradient-gold">Galeria</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img src={img} alt={`Evento ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="Galeria" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
