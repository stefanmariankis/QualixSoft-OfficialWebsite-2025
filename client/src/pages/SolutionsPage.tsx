import { useState } from 'react';
import SolutionsHero from "../components/SolutionsHero";
import EntrepreneurSituations from "../components/EntrepreneurSituations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../components/CTA";
import { Search } from 'lucide-react';

export default function SolutionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the controlled input
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SolutionsHero />
        
        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Situations you might be in
              </h2>
              
              <div className="max-w-lg">
                <form onSubmit={handleSubmit} className="flex flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Insert key words..."
                      className="w-full border border-gray-300 rounded-md py-3 px-4 pl-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB7127] focus:border-[#EB7127]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#282828] text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <EntrepreneurSituations searchTerm={searchTerm} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}