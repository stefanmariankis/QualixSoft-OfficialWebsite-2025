import { motion } from "framer-motion";

export default function EnvisionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - text content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                Envision Your Brand's Future<br />
                With Tailored Digital Marketing
              </h2>
              
              <p className="text-gray-600 mb-8">
                Share the vision for your brand, and we'll create an awesome digital marketing
                strategy that not only fits your budget, but also amplifies your message. We're
                eager to connect and bring your ideas to life.
              </p>
              
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Get your Free Proposal
              </button>
            </motion.div>
          </div>
          
          {/* Right side - image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="rounded-3xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team working together on a project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}