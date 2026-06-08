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

        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
          <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/reNVC2F3fmQ?feature=oembed&rel=0"
              title="Vídeo do YouTube"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
