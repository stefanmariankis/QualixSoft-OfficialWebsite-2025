import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Your <br/>Digital Future
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Tailored Web Development, E-commerce, and SEO Services to Boost Your Online Presence
            </p>
            <a 
              href="#" 
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              Get a free proposal
            </a>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center text-xs text-gray-600">
                      <span>User</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <span className="text-sm font-medium block">Over 20 clients satisfied</span>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="code-brackets animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="bg-primary bg-opacity-20 rounded-3xl p-8 relative overflow-hidden flex justify-center items-center min-h-[400px]">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary rounded-full opacity-20"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-primary text-white text-7xl font-bold p-6 rounded-3xl inline-block" style={{ transform: 'rotate(-15deg)' }}>
                  &lt;
                </div>
                <div className="bg-primary text-white text-7xl font-bold p-6 rounded-3xl inline-block mt-6">
                  /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary bg-opacity-5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary bg-opacity-10 rounded-full -z-10"></div>
      <div className="absolute top-40 left-10 w-12 h-12 bg-primary bg-opacity-10 rounded-full -z-10"></div>
    </section>
  );
}
