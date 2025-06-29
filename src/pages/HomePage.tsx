import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/landing/HeroSection/HeroSection";
import PartnerLogos from "../components/landing/PartnerLogos/PartnerLogos"
import FeatureSection from "../components/landing/FeatureSection/FeatureSection"
import StatisticsSection from "../components/landing/StatisticsSection/StatisticsSection";
import BlockchainSection from "../components/landing/BlockchainSection/BlockchainSection";
import TestimonialSection from "../components/landing/TestimonialSection/TestimonialSection";
import FAQSection from "../components/landing/FAQSection/FAQSection";
import CTASection from "../components/landing/CTASection/CTASection";

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
