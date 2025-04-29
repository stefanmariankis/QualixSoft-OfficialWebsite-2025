import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SolutionsHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Decorative arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <ArrowLeft size={200} color="white" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <ArrowRight size={200} color="white" />
      </div>
      
      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Because we understand the challenges entrepreneurs face, we've created a list 
            of the most common situations and how we can help you overcome each stage 
            of your business.
          </p>
          
          <div className="flex items-center justify-center text-sm">
            <a href="/" className="text-white/80 hover:text-white transition">Homepage</a>
            <span className="mx-2">›</span>
            <span className="text-white">Solutions</span>
          </div>
        </div>
      </div>
      
      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}