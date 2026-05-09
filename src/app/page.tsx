import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";
import BackgroundEffects from "@/components/BackgroundEffects";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <ContactModalProvider>
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <StatsStrip />
        <ServicesSection />
        <WhyChooseUs />
        <TargetAudienceSection />
        <FeaturesSection />
        <IntegrationsSection />
        <HowItWorks />
        <TestimonialsSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <EmailCaptureSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </ContactModalProvider>
  );
}
