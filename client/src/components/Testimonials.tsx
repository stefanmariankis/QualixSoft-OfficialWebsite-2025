import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCompany",
    image: "JD",
    text: "Working with QualitxSoft was a game-changer for our business. They delivered a stunning website that perfectly represents our brand and has significantly improved our conversion rates."
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, RetailBrand",
    image: "JS",
    text: "The SEO services provided by QualitxSoft have transformed our online presence. Our organic traffic has increased by 200% in just three months."
  },
  {
    name: "Robert Johnson",
    role: "Founder, StartupCo",
    image: "RJ",
    text: "Their e-commerce solution helped us increase our online sales by 150%. The user experience is fantastic and our customers love it."
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const showSlide = (index: number) => {
    let newIndex = index;
    if (index >= testimonials.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = testimonials.length - 1;
    }
    
    setCurrentSlide(newIndex);
    if (sliderRef.current) {
      const slide = sliderRef.current.children[newIndex] as HTMLElement;
      sliderRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="flex overflow-x-hidden snap-x snap-mandatory" 
            ref={sliderRef}
            id="testimonialSlider"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full snap-center px-4">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-300 flex items-center justify-center text-lg text-gray-600">
                      <span>{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-2">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 focus:outline-none z-10"
            onClick={() => showSlide(currentSlide - 1)}
          >
            <ChevronLeft className="h-6 w-6 text-dark" />
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 focus:outline-none z-10"
            onClick={() => showSlide(currentSlide + 1)}
          >
            <ChevronRight className="h-6 w-6 text-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}
