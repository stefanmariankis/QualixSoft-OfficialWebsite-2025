import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Megaphone, Monitor, BarChart, ShoppingBag, Users, PieChart, Smartphone, GraduationCap, ChevronUp, ChevronDown } from 'lucide-react';

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
  const [visibleSituations, setVisibleSituations] = useState<SituationType[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
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
    },
    {
      id: 5,
      title: "Difficulty finding and retaining customers",
      problem: "Finding new customers is one of the biggest challenges for businesses. Many entrepreneurs struggle to identify their target audience and create marketing campaigns that convert. Even after acquiring customers, retaining them can be equally challenging.",
      solution: "We develop comprehensive customer acquisition and retention strategies tailored to your business. Our approach includes market research to identify your ideal customers, creating targeted marketing campaigns, implementing loyalty programs, and establishing communication channels for feedback. The goal is to build lasting relationships that result in repeat business and referrals.",
      keywords: ["customer acquisition", "customer retention", "loyalty", "target audience", "marketing"],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Lack of data-driven business decisions",
      problem: "Many businesses operate on gut feeling rather than concrete data. Without proper analytics, it's difficult to understand what's working, what isn't, and where to allocate resources for maximum impact.",
      solution: "We implement comprehensive analytics solutions that provide clear insights into your business performance. From website analytics to customer behavior tracking, sales metrics, and marketing campaign performance—we give you the tools to make informed decisions. Our regular reports highlight key areas for improvement and help you track progress over time.",
      keywords: ["analytics", "data", "business intelligence", "metrics", "performance"],
      icon: <PieChart className="w-8 h-8" />
    },
    {
      id: 7,
      title: "Poor mobile experience hurting business growth",
      problem: "With more than half of web traffic coming from mobile devices, having a poor mobile experience can significantly harm your business. Many entrepreneurs don't realize that their websites or applications are not optimized for mobile users, leading to frustration and lost sales.",
      solution: "We design mobile-first experiences that ensure your customers have a seamless interaction with your brand across all devices. Our approach includes responsive web design, mobile app development when necessary, and optimization for mobile search. We also conduct usability testing specifically for mobile interfaces to identify and eliminate pain points.",
      keywords: ["mobile", "responsive", "usability", "app development", "optimization"],
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      id: 8,
      title: "Struggling to keep up with digital marketing trends",
      problem: "Digital marketing evolves rapidly, making it challenging for busy entrepreneurs to stay updated with the latest trends, platforms, and best practices. This knowledge gap often results in ineffective marketing efforts and wasted resources.",
      solution: "Our team constantly monitors industry trends and platform changes to keep your marketing strategy current and effective. We provide regular training sessions for your team, implement new marketing techniques as they emerge, and adjust strategies based on platform algorithm changes. This proactive approach ensures you're always leveraging the most effective marketing methods.",
      keywords: ["digital marketing", "trends", "social media", "algorithms", "strategy"],
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  // Filter situations based on search term
  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      setFilteredSituations(situations);
      setSearchActive(false);
      return;
    }

    setSearchActive(true);
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
    setShowAll(true); // Show all matching results when searching
  }, [searchTerm]);

  // Update visible situations based on showAll state
  useEffect(() => {
    if (showAll || searchActive) {
      setVisibleSituations(filteredSituations);
    } else {
      // Show only the first 4 situations when not showing all
      setVisibleSituations(filteredSituations.slice(0, 4));
    }
  }, [filteredSituations, showAll, searchActive]);

  // Initial load of all situations
  useEffect(() => {
    setFilteredSituations(situations);
    setVisibleSituations(situations.slice(0, 4)); // Initially show only 4 situations
  }, []);

  // Toggle between showing all situations or just the first 4
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Get an illustration for the situation if no image is provided
  const getIllustration = (id: number, icon?: React.ReactNode) => {
    // If there's an icon, use it
    if (icon) {
      return (
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          {icon}
        </div>
      );
    }
    
    // Otherwise generate a default illustration based on ID
    return (
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-2xl">
        {id}
      </div>
    );
  };

  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredSituations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No results found for "{searchTerm}"</h3>
              <p className="mt-2 text-gray-500">Try using different keywords or browse all situations below.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {visibleSituations.map((situation, index) => (
                <div 
                  key={situation.id} 
                  className="box-border flex flex-col md:flex-row items-start p-6 gap-8 md:gap-16 w-full bg-[rgba(255,138,0,0.04)] backdrop-blur-lg rounded-[24px_24px_0px_24px] mb-6 hover:shadow-md transition-shadow"
                  style={{ backdropFilter: "blur(25.65px)" }}
                >
                  {/* Illustration - Column 1 */}
                  <div className="flex justify-center items-start w-full md:w-auto md:flex-shrink-0">
                    {situation.image ? (
                      <img 
                        src={situation.image} 
                        alt={situation.title} 
                        className="w-40 h-40 md:w-48 md:h-48 object-contain"
                      />
                    ) : (
                      getIllustration(situation.id, situation.icon)
                    )}
                  </div>

                  {/* Content - Column 2 */}
                  <div className="flex flex-col w-full">
                    {/* Row 1: Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5">
                      {situation.title}
                    </h3>
                    
                    {/* Row 2: Problem & Solution (2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Problem section - Subcolumn 1 */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-sm">P</span>
                          </div>
                          <span className="font-medium">Problem</span>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {situation.problem}
                        </p>
                      </div>
                      
                      {/* Solution section - Subcolumn 2 */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-orange-600 mb-3">
                          <div className="bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-sm">S</span>
                          </div>
                          <span className="font-medium">Solution</span>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {situation.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Load more/less button */}
          {filteredSituations.length > 4 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={toggleShowAll}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {showAll ? 'Show Less' : 'Show More'}
                {showAll ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
          
          {/* CTA section at the bottom */}
          <div className="mt-20 pt-16 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://placehold.co/400x400/FFF9F6/EB7127?text=Business+Strategy" 
                    alt="Business Team Working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://placehold.co/400x400/FFF9F6/EB7127?text=Growth+Planning" 
                    alt="Business Growth Planning" 
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
                    <span className="text-[#EB7127]">★</span>
                    <p>If you find yourself in one of the situations we've mentioned</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#EB7127]">★</span>
                    <p>If you know your business deserves more</p>
                  </div>
                </div>
                <button className="bg-[#282828] text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors w-fit">
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