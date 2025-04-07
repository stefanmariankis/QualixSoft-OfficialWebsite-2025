export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                {/* First image - larger one */}
                <div className="bg-gray-200 rounded-lg w-full h-40 md:h-48 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Image 1
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {/* Orange square */}
                <div className="bg-primary w-full h-40 md:h-48 rounded-lg"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3">
                {/* Second image - full width */}
                <div className="bg-gray-200 rounded-lg w-full h-40 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Image 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              We are ready for a new business idea!
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Got a <span className="font-semibold">fresh business idea</span>? We're all ears and ready to roll! Our team loves a good brainstorm and we're here to help make your idea shine.
              </p>
              <p>
                We're not just about talk, we get things done. From the first sketch to the final product, we've got the tools, the know how, and the drive to bring your vision to life.
              </p>
            </div>
            <a 
              href="#" 
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Get your Free Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
