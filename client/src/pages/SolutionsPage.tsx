import { useState } from 'react';
import SolutionsHero from "../components/SolutionsHero";
import SolutionsSearch from "../components/SolutionsSearch";
import EntrepreneurSituations from "../components/EntrepreneurSituations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../components/CTA";

export default function SolutionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SolutionsHero />
        <SolutionsSearch onSearch={handleSearch} />
        <EntrepreneurSituations searchTerm={searchTerm} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}