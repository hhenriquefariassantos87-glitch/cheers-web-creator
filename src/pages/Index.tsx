import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import CountersSection from "@/components/CountersSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EventsSection />
      <DifferentialsSection />
      <GallerySection />
      <AboutSection />
      <PackagesSection />
      <CountersSection />
      <ContactSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
