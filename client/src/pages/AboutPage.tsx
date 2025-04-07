import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import AboutAgency from "../components/AboutAgency";
import ServicesSlider from "../components/ServicesSlider";
import FounderSection from "../components/FounderSection";
import SkillsSection from "../components/SkillsSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <AboutAgency />
        <ServicesSlider />
        <FounderSection />
        <SkillsSection />
        <AboutContent />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}