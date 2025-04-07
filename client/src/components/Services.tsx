import { ArrowUpRight } from "lucide-react";

// Our Services items
const ourServices = [
  {
    title: "Web & Mobile development",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Consulting and strategy",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Website Design",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Search Engine Optimization",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Digital Marketing",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Optimization and Conversion",
    description: "Creative designs that captivate and convert your audience."
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm uppercase font-semibold tracking-wider text-primary mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We'll solve your problems</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our services are designed to propel your business forward. From the ground up, we offer 
            comprehensive solutions that cover all your digital needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ourServices.map((service, index) => (
            <div key={index} className="bg-[#faf7f2] rounded-3xl overflow-hidden relative p-6 border border-[#f0ece4]">
              {/* Black square placeholder for the image */}
              <div className="w-full aspect-video bg-black rounded-xl mb-6"></div>
              
              {/* Arrow icon in top-right corner */}
              <div className="absolute top-6 right-6">
                <div className="bg-black p-2 rounded-lg">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Service title and description */}
              <h3 className="text-xl font-medium text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
