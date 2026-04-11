import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import ToursSection from "@/components/ToursSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import LodgesSection from "@/components/LodgesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <ServicesSection />
    <ToursSection />
    <CTASection />
    <StatsSection />
    <LodgesSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
