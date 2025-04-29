export default function EnvisionSection() {
  return (
    <section className="py-24 bg-light-orange-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - text content */}
          <div className="w-full md:w-1/2">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Envision Your Brand's Future<br />
                With Tailored Digital Marketing
              </h2>
              
              <p className="text-foreground mb-8">
                Share the vision for your brand, and we'll create an awesome digital marketing
                strategy that not only fits your budget, but also amplifies your message. We're
                eager to connect and bring your ideas to life.
              </p>
              
              <button className="btn-primary transition-all duration-300 hover:scale-105 active:scale-95">
                Get your Free Proposal
              </button>
            </div>
          </div>
          
          {/* Right side - image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-full animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <div className="rounded-3xl overflow-hidden h-[400px] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team working together on a project"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}