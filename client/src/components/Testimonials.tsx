import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import testimonialsBg from "../assets/testimonials_background.png";

// Testimonial data
const testimonials = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet consectetur. Orci porttitor semper placerat aliquam tellus ultricies eu hac tellus. Vel sit feugiat mattis facilisi.",
    author: "Andreea Pavel",
    company: "Econotrade.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  },
  {
    id: 2,
    title: "Excellent service and results",
    content: "Excellent service and amazing results. The team was professional and delivered beyond our expectations. Would definitely work with them again.",
    author: "Maria Ionescu",
    company: "TechSolutions.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  },
  {
    id: 3,
    title: "Transformed our online presence",
    content: "They transformed our online presence completely. Very responsive and attentive to our specific needs throughout the entire process.",
    author: "Mihai Popescu",
    company: "GreenGarden.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  },
  {
    id: 4,
    title: "A pleasure to work with",
    content: "Working with them was a pleasure. They understood our vision right away and executed it perfectly. Very professional team.",
    author: "Elena Dinu",
    company: "UrbanStyle.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  },
  {
    id: 5,
    title: "Highly professional team",
    content: "Highly professional team that delivers quality work on time. Definitely recommend their services to anyone looking to improve their online presence.",
    author: "Cristian Munteanu",
    company: "FitLife.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  },
  {
    id: 6,
    title: "Outstanding collaboration",
    content: "Outstanding collaboration from start to finish. They've helped us increase our online sales by 200% in just three months.",
    author: "Alina Florescu",
    company: "BeautyShop.ro",
    avatar: "/client/src/assets/testimonials_client_image.png"
  }
];

// Avatar component
const Avatar = ({ isActive, avatar }: { isActive: boolean, avatar?: string }) => (
  <div 
    className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-300 ${
      isActive ? 'ring-2 ring-white scale-125 z-10' : 'opacity-70'
    }`}
  >
    <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center">
      {/* Using a generic avatar image or user initials */}
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
    <section className="py-20 relative overflow-hidden">
      {/* Background image from Figma design */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${testimonialsBg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="uppercase text-sm font-medium text-white mb-2">OUR TESTIMONIALS</p>
          <h2 className="text-3xl font-bold text-white">What our clients are saying</h2>
        </div>
        
        {/* Avatar navigation */}
        <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-8">
          <button 
            onClick={handlePrev} 
            className="flex items-center justify-center w-8 h-8 rounded-md border border-white text-white hover:bg-white/20"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4">
            {testimonials.map((testimonial, index) => (
              <button 
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className="focus:outline-none transition-transform duration-300 mb-2 md:mb-0"
              >
                <Avatar isActive={index === activeIndex} />
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleNext} 
            className="flex items-center justify-center w-8 h-8 rounded-md border border-white text-white hover:bg-white/20"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Testimonial card - matching the Figma design */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row mb-6">
              <div className="mr-0 sm:mr-5 mb-4 sm:mb-0 flex justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-primary">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center sm:text-left">
                  {testimonials[activeIndex].title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {testimonials[activeIndex].content}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700 text-center sm:text-left">
                - {testimonials[activeIndex].author}, {testimonials[activeIndex].company}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}