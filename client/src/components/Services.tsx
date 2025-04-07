import { Monitor, ShoppingCart, BarChart3 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies to deliver exceptional user experiences.",
    link: "/services/web-development"
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and provide seamless shopping experiences.",
    link: "/services/ecommerce"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "SEO & Marketing",
    description: "Strategic optimization to improve your rankings and drive targeted traffic to your website.",
    link: "/services/seo-marketing"
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
              <div className="bg-primary bg-opacity-10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <a className="text-primary font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
