import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SolutionsSearchProps {
  onSearch: (term: string) => void;
}

export default function SolutionsSearch({ onSearch }: SolutionsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Use debounce to avoid too many updates while typing
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // 300ms delay after typing stops

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearch]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-700 mb-10">
            Situations you might be in
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Insert key words"
                className="w-full border border-gray-300 rounded-md py-3 px-4 pl-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button 
              className="bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors"
              onClick={() => onSearch(searchTerm)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}