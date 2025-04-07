import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pb-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
              Building Your<br />Digital Future
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Tailored Web Development, E-commerce, and SEO
              Services to Boost Your Online Presence
            </p>
            <a 
              href="#" 
              className="bg-gray-800 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors inline-block"
            >
              Get a free proposal
            </a>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center text-xs text-gray-600">
                      <span>U</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-2 flex items-center text-gray-600 text-sm">
                <span>Over 30 clients satisfied</span>
                <CheckCircle className="h-4 w-4 ml-1 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Left bracket */}
              <div className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 w-1/3 h-full z-10">
                <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M80 20 C40 20 20 50 20 100 C20 150 40 180 80 180" stroke="#F97316" strokeWidth="40" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Right bracket */}
              <div className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-1/3 h-full z-10">
                <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 20 C60 20 80 50 80 100 C80 150 60 180 20 180" stroke="#F97316" strokeWidth="40" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Orange overlay with semi-transparent images */}
              <div className="absolute inset-0 bg-primary opacity-60 z-20 overflow-hidden">
                {/* We'd typically use real images here, but using a placeholder for now */}
              </div>
              
              {/* This would be replaced with actual image content */}
              <div className="w-full aspect-[4/3] bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
