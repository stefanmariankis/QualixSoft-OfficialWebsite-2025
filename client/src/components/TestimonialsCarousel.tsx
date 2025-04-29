import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import testimonialClientImg from '../assets/testimonial_client.png';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  company: string;
  rating: number;
}

export default function TestimonialsCarousel() {
  const { t } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "QualixSoft a reușit să îmi transforme ideea de afacere într-o platformă digitală impresionantă. Echipa lor este extrem de profesionistă și atentă la detalii. Rezultatul a depășit toate așteptările mele.",
      name: "Andreea Pavel",
      company: "Econotrade.ro",
      rating: 5
    },
    {
      id: 2,
      text: "Am lucrat cu QualixSoft pentru dezvoltarea site-ului nostru de e-commerce și suntem extrem de mulțumiți. Produsul final este intuitiv, rapid și ne-a ajutat să creștem vânzările online cu peste 30%.",
      name: "Mihai Popescu",
      company: "PulseWelding.ro",
      rating: 5
    },
    {
      id: 3,
      text: "Recomand cu căldură serviciile QualixSoft. Profesionalismul și dedicarea cu care abordează fiecare proiect sunt remarcabile. Comunicarea a fost excelentă pe tot parcursul colaborării.",
      name: "Elena Radu",
      company: "ClimaticGPS.ro",
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle automatic slider
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        changeSlide();
      }
    }, 5000);
  };

  // Slide change function with animation
  const changeSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    }, 300);
  };

  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      className="py-20 md:py-28 relative bg-light-orange-gradient"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background map decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="max-w-6xl mx-auto h-full">
          <div className="bg-world-map bg-no-repeat bg-center opacity-10 h-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-primary uppercase font-semibold mb-3 tracking-wider text-sm">
            TESTIMONIALE
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Peste 50 de clienți vorbesc despre noi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Left side with testimonial */}
          <div className="transition-all duration-300 ease-in-out">
            <div
              className={`transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-foreground text-lg mb-8">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="h-px w-full bg-primary/20 mb-8"></div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                      <span className="text-xl">"</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-foreground font-medium">{testimonials[currentIndex].name}</p>
                    <p className="text-foreground/70 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side with client image in hexagon */}
          <div className="relative flex justify-center">
            <div
              className={`relative transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* Larger background hexagon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[230px] z-0">
                <div className="hex-shape-bg w-full h-full"></div>
              </div>
              
              {/* Client image hexagon */}
              <div className="relative z-10 w-[220px] h-[200px] overflow-hidden">
                <div className="hex-shape w-full h-full overflow-hidden">
                  <img 
                    src={testimonialClientImg} 
                    alt="Client testimonial" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsPaused(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-6 bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}