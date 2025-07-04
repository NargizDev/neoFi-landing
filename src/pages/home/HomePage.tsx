import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/widgets/hero-section/ui/HeroSection";
import PartnerLogos from "@/widgets/partners/ui/PartnerLogos"
import StatisticsSection from "@/widgets/statistics-section/ui/StatisticsSection";
import BlockchainSection from "@/widgets/blockchain-section/ui/BlockchainSection";
import FAQSection from "@/widgets/faq-section/ui/FAQSection";
import CTASection from "@/widgets/cta-section/ui/CTASection";
import FeatureSection from "@/widgets/feature-section/ui/FeatureSection";
import TestimonialSection from "@/widgets/testimonial-section/ui/TestimonialSection";

const HomePage = () => (
  <MainLayout>
     <HeroSection />
     <PartnerLogos />
     <FeatureSection />
     <StatisticsSection />
     <BlockchainSection />
     <TestimonialSection />
     <FAQSection />
     <CTASection />
  </MainLayout>
);

export default HomePage;
