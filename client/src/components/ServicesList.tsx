import webMobileDevelopmentImg from '@assets/web_mobile_development_services_page.png';
import consultingStrategyImg from '@assets/consulting_strategy_services_page.png';

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
      title: "Web & Mobile development",
      image: webMobileDevelopmentImg,
      description: "Being present online is no longer an option. Whether you need a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a modern design that delights customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "Web Development",
        "Mobile Development",
        "E-commerce Development"
      ]
    },
    {
      id: 2,
      title: "Consulting and strategy",
      image: consultingStrategyImg,
      description: "Being present online is no longer an option. Whether you need a presentation site or an online shop, we develop platforms customized to the needs of your business, based on a modern design that delights customers and help them have real-time access to information about your products and services. The costs of realization and maintenance are low, being an accessible way of promotion, but with a strong and effective impact.",
      features: [
        "Price Consultation",
        "SEO Optimization",
        "E-commerce Improvement Consultation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="mb-14 p-8 relative last:mb-0 rounded-lg transition-all duration-300 hover:border hover:border-gray-200 hover:shadow-sm"
            >
              {/* Arrow in top right corner */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
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
                {/* Image column - 4 cols on desktop */}
                <div className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-full max-w-[250px]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Content column - 8 cols on desktop */}
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}