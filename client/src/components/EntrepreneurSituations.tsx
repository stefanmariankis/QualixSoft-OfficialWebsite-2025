import { useState, useEffect } from 'react';

// Situation item type definition
interface SituationType {
  id: number;
  title: string;
  problem: string;
  solution: string;
  keywords: string[];
  image?: string;
}

interface EntrepreneurSituationsProps {
  searchTerm: string;
}

export default function EntrepreneurSituations({ searchTerm }: EntrepreneurSituationsProps) {
  const [filteredSituations, setFilteredSituations] = useState<SituationType[]>([]);
  
  // Predefined list of entrepreneurial situations
  const situations: SituationType[] = [
    {
      id: 1,
      title: "Lack of an effective online presence to attract new customers",
      problem: "I've met so many entrepreneurs who have a great product or service, but they just can't be found online. Either they have a website that doesn't represent them, or they are completely non-existent in the digital environment. These days, if you're not online, you're missing out on a lot of your potential customers.",
      solution: "Our first priority is to build you a solid online presence. We handle everything from a modern, fast and SEO-optimized website to Google Ads and Facebook Ads campaigns that attract the right traffic. That means not only will you be visible, but you'll be visible to the people who matter – the ones who are interested in what you have to offer. I get rid of this worry completely!",
      keywords: ["online presence", "website", "SEO", "digital marketing", "visibility"],
      image: "/entrepreneur1.png"
    },
    {
      id: 2,
      title: "Difficulties in creating a recognizable and attractive brand",
      problem: "Many times, entrepreneurs come to us with a great product, but when it comes to brand image, things are a bit fuzzy. People don't recognize the brand, they don't identify with it, and that can be a serious problem in business growth.",
      solution: "Branding is the lifeblood of your business, and we're here to help you create a brand that resonates with your customers. We take care of everything graphic design means - logo, colors, visual style - and build you an identity that tells the story of your business in an authentic and memorable way. You will stand out in a crowded market.",
      keywords: ["branding", "identity", "logo", "design", "visual", "recognition"],
      image: "/entrepreneur2.png"
    },
    {
      id: 3,
      title: "Low conversion rate on existing website",
      problem: "You have a website with decent traffic, but visitors aren't converting into leads or customers. The bounce rate is high, and users seem to leave without taking action.",
      solution: "We'll analyze your user journey and optimize your website for conversions. This involves improving your call-to-action buttons, streamlining the checkout process, enhancing page load speed, and implementing A/B testing to find what resonates with your audience. We'll transform your website from a digital brochure into a sales-generating machine.",
      keywords: ["conversion rate", "website optimization", "user experience", "CRO", "A/B testing"],
    },
    {
      id: 4,
      title: "Struggling to stand out from competitors",
      problem: "Your market is saturated with similar offerings, making it difficult for your business to differentiate itself. Potential customers don't understand what makes you special.",
      solution: "We'll conduct a thorough competitive analysis and help you identify your unique value proposition. Then, we'll develop a comprehensive strategy that highlights your strengths, communicates your unique benefits, and positions you in a way that makes competition irrelevant. Your marketing will focus on what makes you different, not just better.",
      keywords: ["competitive advantage", "differentiation", "unique selling proposition", "positioning", "market analysis"],
    },
    {
      id: 5,
      title: "Inconsistent marketing messages across channels",
      problem: "Your brand voice, visual identity, and key messages vary across different marketing channels, creating confusion for your audience and diluting your brand impact.",
      solution: "We'll create a unified marketing strategy with consistent brand messaging across all channels. This includes developing brand guidelines, templates, and a content calendar to ensure cohesiveness. Your audience will receive the same strong impression of your brand whether they find you on social media, your website, or through advertising.",
      keywords: ["brand consistency", "integrated marketing", "omnichannel", "brand voice", "messaging"],
    },
    {
      id: 6,
      title: "Wasting marketing budget with no clear ROI",
      problem: "You're investing in marketing activities but aren't sure which ones are actually generating returns. Your marketing spending feels like throwing money into a black hole.",
      solution: "We'll implement proper tracking and analytics to measure the effectiveness of each marketing channel. By setting up conversion tracking, attribution modeling, and regular reporting, we'll help you understand exactly where your marketing budget is generating returns. This data-driven approach will allow us to optimize your spending for maximum ROI.",
      keywords: ["marketing ROI", "analytics", "budget optimization", "performance tracking", "data-driven marketing"],
    },
    {
      id: 7,
      title: "Not knowing how to leverage social media effectively",
      problem: "You know your business should be on social media, but your posts get little engagement, and you're unsure which platforms are worth your time and effort.",
      solution: "We'll develop a strategic social media plan tailored to your business goals and target audience. This includes identifying the right platforms, creating engaging content, building a content calendar, and implementing community management practices. Your social media will transform from a time-sink to a valuable marketing asset.",
      keywords: ["social media", "engagement", "content strategy", "community management", "social platforms"],
    },
    {
      id: 8,
      title: "Website not optimized for mobile users",
      problem: "Your website looks great on desktop but offers a poor experience on smartphones and tablets, leading to lost mobile visitors and potentially hurting your search rankings.",
      solution: "We'll redesign your website with a mobile-first approach, ensuring it provides an excellent user experience across all devices. This responsive design will not only improve user satisfaction but also boost your search engine rankings, as Google prioritizes mobile-friendly websites.",
      keywords: ["mobile optimization", "responsive design", "mobile-first", "user experience", "mobile traffic"],
    },
    {
      id: 9,
      title: "Difficulty generating quality leads",
      problem: "Your marketing efforts are bringing in leads, but they're low quality and rarely convert to customers. You waste time on prospects who aren't a good fit for your business.",
      solution: "We'll refine your lead generation strategy to focus on quality over quantity. This includes creating targeted content that addresses your ideal customer's pain points, implementing lead scoring, optimizing your lead magnets, and developing nurturing sequences that qualify prospects before they reach your sales team.",
      keywords: ["lead generation", "lead qualification", "lead nurturing", "conversion", "sales pipeline"],
    },
    {
      id: 10,
      title: "Struggling to create engaging content consistently",
      problem: "You understand the importance of content marketing but struggle to produce quality content regularly. Your blog is neglected, and your audience has no reason to keep coming back.",
      solution: "We'll develop a sustainable content strategy that aligns with your resources and goals. This includes creating a content calendar, identifying high-value topics, repurposing existing content across formats, and potentially connecting you with content creators who understand your industry. Your content will become a valuable asset that builds authority and attracts customers.",
      keywords: ["content marketing", "blogging", "content strategy", "content creation", "editorial calendar"],
    },
    {
      id: 11,
      title: "Unable to track marketing performance effectively",
      problem: "You have multiple marketing initiatives but no systematic way to track their performance, making it impossible to know what's working and what isn't.",
      solution: "We'll set up a comprehensive marketing dashboard that tracks key performance indicators across all your marketing channels. This will give you real-time visibility into your marketing performance, allowing for quick adjustments and data-driven decisions. No more guesswork – you'll know exactly what's delivering results.",
      keywords: ["marketing analytics", "KPIs", "performance tracking", "marketing dashboard", "metrics"],
    },
    {
      id: 12,
      title: "Outdated website that doesn't reflect your brand quality",
      problem: "Your website looks outdated compared to competitors, creating a disconnect between the quality of your products/services and how your brand is perceived online.",
      solution: "We'll redesign your website with a modern, professional aesthetic that properly reflects your brand quality. The new site will not only look impressive but also be structured to guide visitors toward conversion actions. Your online presence will finally match the excellence of your offerings.",
      keywords: ["website redesign", "brand perception", "web design", "user experience", "modern website"],
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

  return (
    <section className="py-6 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredSituations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No results found for "{searchTerm}"</h3>
              <p className="mt-2 text-gray-500">Try using different keywords or browse all situations below.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredSituations.map((situation) => (
                <div 
                  key={situation.id} 
                  className="bg-orange-50 rounded-lg p-6 border border-orange-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {situation.image && (
                      <div className="md:w-1/4 flex-shrink-0">
                        <img 
                          src={situation.image} 
                          alt={situation.title} 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                    
                    <div className={situation.image ? "md:w-3/4" : "w-full"}>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {situation.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">
                              <span className="text-sm">P</span>
                            </span>
                            <span className="font-medium">Problem</span>
                          </div>
                          <p className="text-gray-700">
                            {situation.problem}
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 text-orange-600 mb-2">
                            <span className="bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center">
                              <span className="text-sm">S</span>
                            </span>
                            <span className="font-medium">Solution</span>
                          </div>
                          <p className="text-gray-700">
                            {situation.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}