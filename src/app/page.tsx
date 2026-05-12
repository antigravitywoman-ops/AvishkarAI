import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import ProcessSection from "@/components/ProcessSection";
import SurvivalSection from "@/components/SurvivalSection";   
import DeploymentSection from "@/components/DeploymentSection";
import IntegrationSection from "@/components/IntegrationSection";
import LiveAgentsSection from "@/components/LiveAgentsSection";
import DiscoverySection from "@/components/DiscoverySection";
import CaseStudySection from "@/components/CaseStudySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden selection:bg-orange-600 selection:text-white">
      {/* Navbar sits at the top and stays sticky */}
      
      <HeroSection />
      
      <LogoTicker />

      {/* id="fsm-dispatch" matches the Navbar link */}
      <section id="fsm-dispatch">
        <LiveAgentsSection />
      </section>

      {/* id="how-it-works" matches the Navbar link */}
      <section id="how-it-works">
        <ProcessSection />
      </section>

      {/* id="market" matches the Navbar link */}
      <section id="market">
        <SurvivalSection />
      </section>

      <DeploymentSection />
      
      <IntegrationSection />

      {/* id="faq" matches the Navbar link */}
      <section id="faq">
        <FAQSection />
      </section>

      <CaseStudySection />
      <DiscoverySection />
      
      <Footer />
    </main>
  );
}