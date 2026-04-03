import { MessageCircle, Instagram } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href="https://www.instagram.com/kaer.bartenders?igsh=MThyZ2txMWEyeXV1ag=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{
          background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        }}
        aria-label="Instagram"
      >
        <Instagram size={28} className="text-white" />
      </a>
      <a
        href="https://wa.me/5511982844587"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
