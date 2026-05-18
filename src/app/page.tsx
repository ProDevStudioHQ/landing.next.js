import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactModalProvider from "@/components/ContactModalProvider";
import BackgroundEffects from "@/components/BackgroundEffects";

// Below-the-fold sections: lazy-load to speed up first paint on mobile.
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const TargetAudienceSection = dynamic(() => import("@/components/TargetAudienceSection"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const IntegrationsSection = dynamic(() => import("@/components/IntegrationsSection"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const EmailCaptureSection = dynamic(() => import("@/components/EmailCaptureSection"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <ContactModalProvider>
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TargetAudienceSection />
        <FeaturesSection />
        <IntegrationsSection />
        <HowItWorks />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <EmailCaptureSection />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </ContactModalProvider>
  );
}
