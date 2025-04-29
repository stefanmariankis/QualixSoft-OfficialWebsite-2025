import SolutionsHero from "../components/SolutionsHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../components/CTA";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SolutionsHero />
        {/* Additional solutions sections will be added here */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}