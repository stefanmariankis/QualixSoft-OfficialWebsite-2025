import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet consectetur. Orci porttitor semper placerat aliquam tellus ultricies eu lac. Nibh. Vel sit feugiat mattis facilisi.",
    author: "Andrew Pavel",
    company: "Ecomosfate.ro"
  },
  {
    id: 2,
    content: "Excellent service and amazing results. The team was professional and delivered beyond our expectations.",
    author: "Maria Ionescu",
    company: "TechSolutions.ro"
  },
  {
    id: 3,
    content: "They transformed our online presence completely. Very responsive and attentive to our specific needs.",
    author: "Mihai Popescu",
    company: "GreenGarden.ro"
  },
  {
    id: 4,
    content: "Working with them was a pleasure. They understood our vision right away and executed it perfectly.",
    author: "Elena Dinu",
    company: "UrbanStyle.ro"
  },
  {
    id: 5,
    content: "Highly professional team that delivers quality work on time. Definitely recommend their services.",
    author: "Cristian Munteanu",
    company: "FitLife.ro"
  },
  {
    id: 6,
    content: "Outstanding collaboration from start to finish. They've helped us increase our online sales by 200%.",
    author: "Alina Florescu",
    company: "BeautyShop.ro"
  }
];

// Avatar component
const Avatar = ({ isActive }: { isActive: boolean }) => (
  <div 
    className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-300 ${
      isActive ? 'ring-2 ring-white scale-125' : 'opacity-70'
    }`}
  >
    <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
      <span className="text-xs text-white">User</span>
    </div>
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };
  
  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative dots/circles (simplified) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-white"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-white"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 rounded-full bg-white"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="uppercase text-sm font-medium text-white mb-2">OUR TESTIMONIALS</p>
          <h2 className="text-3xl font-bold text-white">What our clients are saying</h2>
        </div>
        
        {/* Avatar navigation */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <button 
            onClick={handlePrev} 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="flex space-x-3">
            {testimonials.map((testimonial, index) => (
              <button 
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className="focus:outline-none transition-transform duration-300"
              >
                <Avatar isActive={index === activeIndex} />
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleNext} 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Testimonial card */}
        <div className="max-w-2xl mx-auto">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 rounded-full p-2 mr-4">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600 mt-2">
                  {testimonials[activeIndex].content}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-800">
                - {testimonials[activeIndex].author}, {testimonials[activeIndex].company}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}