import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={() => setFormOpen(true)} />
      <HeroSection onGetStarted={() => setFormOpen(true)} />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <CtaSection onGetStarted={() => setFormOpen(true)} />
      <Footer />
      <ContactFormModal open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
