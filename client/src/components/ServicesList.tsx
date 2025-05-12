import webMobileDevelopmentImg from '@assets/web_mobile_development_services_page.png';
import consultingStrategyImg from '@assets/consulting_strategy_services_page.png';
import designImg from '@assets/web_mobile_development_services_page.png';
import seoImg from '@assets/consulting_strategy_services_page.png';

// Service types
type ServiceType = {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
};

export default function ServicesList() {
  const services: ServiceType[] = [
    {
      id: 1,
      title: "Web & Mobile developement",
      image: webMobileDevelopmentImg,
      description: "Being present online is no longer an option. Whether you want a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a market analysis. Be closer to your customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "Web development",
        "Mobile development",
        "E-commerce development"
      ]
    },
    {
      id: 2,
      title: "Consulting and strategy",
      image: consultingStrategyImg,
      description: "Being present online is no longer an option. Whether you want a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a market analysis. Be closer to your customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "Free Consultation",
        "SEO Consultation",
        "E-commerce Improvements Consultation"
      ]
    },
    {
      id: 3,
      title: "Design",
      image: designImg,
      description: "Being present online is no longer an option. Whether you want a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a market analysis. Be closer to your customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "UI/UX",
        "Web Design",
        "Graphic Design",
        "Promotional Design Materials"
      ]
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      image: seoImg,
      description: "Being present online is no longer an option. Whether you want a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a market analysis. Be closer to your customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "SEO on-page",
        "SEO tehnic",
        "SEO off-page",
        "SEO local",
        "Link building",
        "E-commerce SEO",
        "Blogging & articole SEO"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="mb-16 relative last:mb-0 border-b pb-14 last:border-b-0 hover:bg-gray-50 transition-all duration-300 group px-6 pt-6"
            >
              {/* Arrow in top right corner */}
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center shadow-sm">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image column - 3 cols on desktop */}
                <div className="md:col-span-3 flex items-start justify-center">
                  <div className="relative w-full max-w-[250px]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Content column - 9 cols on desktop */}
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 group-hover:text-primary transition-colors">{service.title}</h3>
                  
                  <div className="mb-5 flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded group-hover:bg-gray-200 transition-colors">
                        <span className="mr-1.5">★</span>{feature}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}