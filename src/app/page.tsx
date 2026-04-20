import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";

export default function Home() {
  return (
    <ContactModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <ServicesSection />
        <WhyChooseUs />
        <TargetAudienceSection />
        <PortfolioSection />
        <FeaturesSection />
        <IntegrationsSection />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </ContactModalProvider>
  );
}
