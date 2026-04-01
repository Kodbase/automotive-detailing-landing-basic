import React from "react"; 
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import TrustSection from "../components/sections/TrustSection";
import PricingSection from "../components/sections/PricingSection";
import FloatingWhatsAppCTA from "../components/ui/FloatingWhatsAppCTA";
import FooterSection from "../components/sections/FooterSection"; 


export default function HomePage() {
  return (
    <>
      <HeroSection />
       <ServicesSection />
      <TrustSection />
      <PricingSection />
      <FloatingWhatsAppCTA />
      <FooterSection /> 
    </>
  );
}