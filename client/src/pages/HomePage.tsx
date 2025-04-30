import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import AnalysisSection from "@/components/AnalysisSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechSlider from "@/components/TechSlider";
import EnvisionSection from "@/components/EnvisionSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <WhyWorkWithUs />
      <EnvisionSection />
      <Services />
      <AnalysisSection />
      <ProjectsCarousel />
      <TechSlider />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
