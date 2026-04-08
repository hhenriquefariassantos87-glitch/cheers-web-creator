import { MessageCircle, Instagram } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      <a
        href="https://www.instagram.com/kaer.bartenders?igsh=MThyZ2txMWEyeXV1ag=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        style={{
          background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          boxShadow: "0 0 20px rgba(225, 48, 108, 0.6), 0 0 40px rgba(225, 48, 108, 0.3)",
        }}
        aria-label="Instagram"
      >
        <Instagram size={30} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
      </a>
      <a
        href="https://wa.me/5513974277006"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 0 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.3)",
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
