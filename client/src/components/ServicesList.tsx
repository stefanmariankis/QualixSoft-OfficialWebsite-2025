import { useState } from 'react';
import { X } from 'lucide-react';
import webMobileDevelopmentImg from '@assets/web_mobile_development_services_page.png';
import consultingStrategyImg from '@assets/consulting_strategy_services_page.png';

// Service types for the accordion
type ServiceType = {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
};

export default function ServicesList() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
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

  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className={`flex justify-between items-start p-6 cursor-pointer transition-all duration-300 ${expandedService === service.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleService(service.id)}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700">{service.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {service.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <X size={20} className={`transform transition-transform ${expandedService === service.id ? 'rotate-45' : ''}`} />
                </button>
              </div>
              
              {expandedService === service.id && (
                <div className="p-6 pt-0 border-t border-gray-200 transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-lg max-h-[250px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}