import paperBg from "@/assets/paper-bg.jpg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// CHANGE: Removed ThemesSection and EventFlowSection imports
import PrizesSection from "@/components/PrizesSection"; // CHANGE: Added PrizesSection back
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

    {/* CHANGE: Reduced overlay opacity from bg-black/55 to bg-black/30 to make background lighter/more white */}
    <div className="fixed inset-0 z-0 bg-black/30" />

    {/* Content */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* CHANGE: Removed <ThemesSection /> */}
      {/* CHANGE: Removed <EventFlowSection /> */}
      <PrizesSection /> {/* CHANGE: Added PrizesSection back */}
      <RulesSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
