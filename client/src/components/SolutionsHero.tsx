import React from 'react';

export default function SolutionsHero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            We provide tailored solutions for businesses at every stage. From startups to established enterprises, 
            our strategies help you overcome common obstacles and achieve sustainable growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Book a Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}