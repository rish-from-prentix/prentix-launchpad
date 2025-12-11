import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrustStrip from "@/components/TrustStrip";
import Testimonials from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import FAQs from "@/components/FAQs";
import LongFormCopy from "@/components/LongFormCopy";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Track analytics
    console.log("Analytics: modal_opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <HowItWorks />
        <Testimonials />
        <TrustStrip />
        <Advantages />
        <FAQs />
        <LongFormCopy onOpenModal={openModal} />
      </main>

      <Footer />

      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
