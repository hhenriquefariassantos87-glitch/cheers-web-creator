const drinkVideos = [
  { src: "/videos/drink-1.mp4", title: "Preparação Artesanal" },
  { src: "/videos/drink-2.mp4", title: "Drink Exclusivo" },
  { src: "/videos/drink-3.mp4", title: "Nossa Experiência" },
  { src: "/videos/drink-4.mp4", title: "Mixologia em Destaque" },
  { src: "/videos/drink-5.mp4", title: "Arte do Bartender" },
];

const DrinkVideosSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Drinks em <span className="text-primary">Ação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossos bartenders preparando drinks incríveis para os seus eventos
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {drinkVideos.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-card"
            >
              <video
                className="w-full aspect-[9/16] object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrinkVideosSection;
