const VideoSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja Nossa <span className="text-primary">Experiência</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
          <video
            className="w-full object-cover"
            controls
            playsInline
            preload="auto"
          >
            <source src="/video-destaque.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
