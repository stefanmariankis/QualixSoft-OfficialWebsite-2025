import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="bg-primary relative overflow-hidden pt-32 pb-16">
      {/* Decorative arrows like in the image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <ArrowLeft size={240} color="white" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <ArrowRight size={240} color="white" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How we can help you
          </h1>
          
          <p className="text-white text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Proin ut ultricies eget eget diam. Sed 
            pellentesque vel elementum augue lacus diam feugiat libero dolor. Velit gravidas.
          </p>
          
          <div className="flex items-center justify-center text-sm space-x-2">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Homepage
            </Link>
            <span className="text-white/70 pointer-events-none mx-1">›</span>
            <span className="text-white/90 pointer-events-none">
              Services
            </span>
          </div>
        </div>
      </div>
      
      {/* Diagonal bottom separator exactly like in the image */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 50" 
          preserveAspectRatio="none" 
          className="w-full h-16"
        >
          <path 
            d="M0,0 L1200,0 L1200,40 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}