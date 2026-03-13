import paperBg from "@/assets/paper-bg.jpg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import EventFlowSection from "@/components/EventFlowSection";
import RulesSection from "@/components/RulesSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    {/* Background image */}
    <div
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Dark overlay */}
    <div className="fixed inset-0 z-0 bg-black/55" />

    {/* Content */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <EventFlowSection />
      <RulesSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
