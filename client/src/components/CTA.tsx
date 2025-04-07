export default function CTA() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help grow your business with our custom web solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#" 
              className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:bg-opacity-5 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
