import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

export default function SolutionsHero() {
  const { t, i18n } = useTranslation();
  
  // Get correct routes based on language
  const homeRoute = i18n.language === 'ro' ? '/' : '/';
  const solutionsRoute = i18n.language === 'ro' ? '/solutii' : '/solutions';
  
  return (
    <section className="bg-[#EB7127] py-16 relative overflow-hidden">
      {/* Angular elements for decoration (like in the image) */}
      <div className="absolute left-0 top-1/4 opacity-20">
        <svg width="250" height="300" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 150L250 0V300L0 150Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute right-0 top-1/4 opacity-20">
        <svg width="250" height="300" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M250 150L0 0V300L250 150Z" fill="white"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white py-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Solutions
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90">
            Because we understand the challenges entrepreneurs face, we've created a list
            of the most common situations and how we can help you overcome each stage
            of your business.
          </p>
          
          {/* Breadcrumb navigation */}
          <div className="flex justify-center items-center gap-2 text-white/80">
            <Link href={homeRoute} className="hover:text-white transition-colors">
              Homepage
            </Link>
            <span>›</span>
            <Link href={solutionsRoute} className="font-medium">
              Solutions
            </Link>
          </div>
        </div>
      </div>
      
      {/* White cutout at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40H1440V0L0 40Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}