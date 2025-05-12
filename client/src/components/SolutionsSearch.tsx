import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SolutionsSearchProps {
  onSearch: (term: string) => void;
}

export default function SolutionsSearch({ onSearch }: SolutionsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  // Use debounce to avoid too many updates while typing
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // 300ms delay after typing stops

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Situations you might be in
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
    </section>
  );
}