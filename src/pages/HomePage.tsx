import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import PartnerLogos from "../components/PartnerLogos/PartnerLogos"
import FeatureSection from "../components/FeatureSection/FeatureSection"
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import BlockchainSection from "../components/BlockchainSection/BlockchainSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import FAQSection from "../components/FAQSection/FAQSection";
import CTASection from "../components/CTASection/CTASection";

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
