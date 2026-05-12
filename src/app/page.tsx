import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import ProcessSection from "@/components/ProcessSection";
import OptimizationSection from "@/components/tabs";
import SurvivalSection from "@/components/SurvivalSection";   
import DeploymentSection from "@/components/DeploymentSection";
import LiveAgentsSection from "@/components/LiveAgentsSection";
import DiscoverySection from "@/components/DiscoverySection";
import GlobalDeploymentSection from "@/components/map";
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


      <OptimizationSection />
      
      <DeploymentSection />

      <GlobalDeploymentSection />
      
      {/* id="faq" matches the Navbar link */}
      <section id="faq">
        <FAQSection />
      </section>

      <DiscoverySection />
      
      <Footer />
    </main>
  );
}