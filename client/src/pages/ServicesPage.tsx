import ServicesHero from "../components/ServicesHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        {/* Other services sections will be added here */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}