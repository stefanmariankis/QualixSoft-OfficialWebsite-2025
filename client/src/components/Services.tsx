import { Settings, Users, Handshake, BarChart3 } from "lucide-react";

// Why Work With Us items
const whyWorkWithUs = [
  {
    icon: <Settings className="h-7 w-7 text-white" />,
    title: "Tailored Solutions",
    description: "We customize strategies to meet your unique business goals."
  },
  {
    icon: <Users className="h-7 w-7 text-white" />,
    title: "Expert Team",
    description: "Our experienced professionals deliver top-tier digital services."
  },
  {
    icon: <Handshake className="h-7 w-7 text-white" />,
    title: "Full-Service Support",
    description: "We offer continuous support from development to optimization."
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-white" />,
    title: "Proven Results",
    description: "Our data-driven approach ensures measurable success and growth."
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100 relative">
      {/* Background hexagons decoration */}
      <div className="absolute top-0 right-0 opacity-10 w-80 h-80">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#000"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-20 opacity-10 w-40 h-40">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#000"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Work With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're all about bringing your goals to the forefront and making them happen.
            With us, you're picking a partner that's committed to your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyWorkWithUs.map((item, index) => (
            <div 
              key={index} 
              className="text-center group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 mx-auto">
                <div className="bg-primary w-16 h-16 mx-auto flex items-center justify-center rounded-md transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mx-auto max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
