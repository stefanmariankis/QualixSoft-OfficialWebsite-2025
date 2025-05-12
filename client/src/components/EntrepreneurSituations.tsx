import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Megaphone, Monitor, BarChart, ShoppingBag } from 'lucide-react';

// Define the structure for an entrepreneurial situation
type SituationType = {
  id: number;
  title: string;
  problem: string;
  solution: string;
  keywords: string[];
  image?: string; // Optional image path
  icon?: React.ReactNode; // Optional icon component
};

interface EntrepreneurSituationsProps {
  searchTerm: string;
}

export default function EntrepreneurSituations({ searchTerm }: EntrepreneurSituationsProps) {
  const [filteredSituations, setFilteredSituations] = useState<SituationType[]>([]);
  const { t } = useTranslation();
  
  // Predefined list of entrepreneurial situations
  const situations: SituationType[] = [
    {
      id: 1,
      title: "Lack of an effective online presence to attract new customers",
      problem: "I've met so many entrepreneurs who have a great product or service, but they just can't be found online. Either they have a website that doesn't represent them, or they are completely non-existent in the digital environment. These days, if you're not online, you're missing out on a lot of your potential customers.",
      solution: "Our first priority is to build you a solid online presence. We handle everything from a modern, fast and SEO-optimized website to Google Ads and Facebook Ads campaigns that attract the right traffic. That means not only will you be visible, but you'll be visible to the people who matter – the ones who are interested in what you have to offer. I get rid of this worry completely!",
      keywords: ["online presence", "website", "SEO", "digital marketing", "visibility"],
      icon: <Monitor className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Difficulties in creating a recognizable and attractive brand",
      problem: "Many times, entrepreneurs come to us with a great product, but when it comes to brand image, things are a bit fuzzy. There's no clear direction, no consistent visual identity, and that can be a serious problem in business growth.",
      solution: "Branding is the lifeblood of your business, and we're here to help you create a brand that resonates with your customers. We start by understanding your values, vision, and target market—those key elements that define your unique brand voice, visual style—and build you an identity that tells the story of your business in an authentic and memorable way. You will stand out in a crowded market.",
      keywords: ["branding", "identity", "design", "visual", "recognition"],
      icon: <BarChart className="w-8 h-8" />
    },
    {
      id: 3,
      title: "The need to automate marketing processes for better efficiency",
      problem: "In the beginning, all entrepreneurs are involved in all aspects of the business, including marketing. But at some point, you don't have time to deal with all the details and you risk losing sight of potential customers.",
      solution: "Marketing automation is essential to save time and stay relevant. Implement email marketing and remarketing solutions for your work on autopilot, so that you always stay in front of your customers. This saves you time and opportunities and you will be able to focus your efforts on business development.",
      keywords: ["automation", "marketing", "efficiency", "email", "productivity"],
      icon: <Megaphone className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Increase in online store sales",
      problem: "I often hear: 'I have an online store, but I don't see how it should be.' It is a very common problem. Many entrepreneurs think that once they have a store, sales will come naturally. I wish!",
      solution: "We do a detailed analysis of your website to identify weak points in the user experience. Then, we optimize your online store, improve your conversion rate and help you attract quality traffic through Google Ads, Facebook Ads and Email Marketing campaigns. In addition, we provide you with constant support so that your store sells more, not just exists.",
      keywords: ["e-commerce", "sales", "conversion", "optimization", "traffic"],
      icon: <ShoppingBag className="w-8 h-8" />
    }
  ];

  // Filter situations based on search term
  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      setFilteredSituations(situations);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = situations.filter(situation => {
      return (
        situation.title.toLowerCase().includes(lowercasedSearch) ||
        situation.problem.toLowerCase().includes(lowercasedSearch) ||
        situation.solution.toLowerCase().includes(lowercasedSearch) ||
        situation.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedSearch))
      );
    });
    
    setFilteredSituations(filtered);
  }, [searchTerm]);

  // Initial load of all situations
  useEffect(() => {
    setFilteredSituations(situations);
  }, []);

  // Get an illustration for the situation if no image is provided
  const getIllustration = (id: number, icon?: React.ReactNode) => {
    // If there's an icon, use it
    if (icon) {
      return (
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          {icon}
        </div>
      );
    }
    
    // Otherwise generate a default illustration based on ID
    return (
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-2xl">
        {id}
      </div>
    );
  };

  return (
    <section className="py-6 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredSituations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No results found for "{searchTerm}"</h3>
              <p className="mt-2 text-gray-500">Try using different keywords or browse all situations below.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredSituations.map((situation) => (
                <div 
                  key={situation.id} 
                  className="bg-[#FFF9F6] rounded-lg overflow-hidden border border-orange-100 hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    {/* Situation title */}
                    <div className="md:col-span-4 p-5 border-b border-orange-100">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {situation.title}
                      </h3>
                    </div>
                    
                    {/* Problem section */}
                    <div className="p-6 md:border-r border-orange-100 flex flex-col md:items-center">
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">
                          <span className="text-sm">P</span>
                        </div>
                        <span className="font-medium">Problem</span>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {situation.problem}
                      </p>
                    </div>
                    
                    {/* Solution section */}
                    <div className="md:col-span-2 p-6 md:border-r border-orange-100">
                      <div className="flex items-center gap-2 text-orange-600 mb-4">
                        <div className="bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center">
                          <span className="text-sm">S</span>
                        </div>
                        <span className="font-medium">Solution</span>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {situation.solution}
                      </p>
                    </div>
                    
                    {/* Illustration */}
                    <div className="p-6 flex items-center justify-center">
                      {situation.image ? (
                        <img 
                          src={situation.image} 
                          alt={situation.title} 
                          className="w-32 h-32 object-contain"
                        />
                      ) : (
                        getIllustration(situation.id, situation.icon)
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Load more button */}
          <div className="flex justify-center mt-12">
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center gap-1">
              More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L4 6H12L8 10Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          
          {/* CTA section at the bottom */}
          <div className="mt-20 pt-16 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Let's take your business to the next level!
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">★</span>
                    <p>If you find yourself in one of the situations we've mentioned</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">★</span>
                    <p>If you know your business deserves more</p>
                  </div>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors w-fit">
                  Get your Free Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}