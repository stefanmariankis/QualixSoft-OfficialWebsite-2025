import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <AboutContent />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}