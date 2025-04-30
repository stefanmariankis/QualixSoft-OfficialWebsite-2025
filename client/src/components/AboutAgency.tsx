import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import aboutAgencyImg from '../assets/about_agency_img.png';

export default function AboutAgency() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left column with text content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary uppercase font-medium mb-2 tracking-wider text-sm">
                ABOUT AGENCY
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 leading-tight">
                We make sure your idea & creation delivered properly
              </h2>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Expert Guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Custom Solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Ongoing Support</span>
                </li>
              </ul>

              <motion.button
                className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-medium transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get a free proposal
              </motion.button>
            </motion.div>
          </div>

          {/* Middle column with image */}
          <div className="lg:col-span-1 relative order-first md:order-none mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src={aboutAgencyImg} 
                alt="Agency development" 
                className="w-full h-auto rounded-2xl"
              />
              {/* Orange accent square */}
              <div className="absolute left-0 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-primary"></div>
            </motion.div>
          </div>

          {/* Right column with stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8 md:pl-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-1 leading-tight">
                  We've 5+ Years Of Experience In Tech Services
                </h2>
                <p className="text-gray-600 mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Proin ut ultrices eget eget diam. Sed pellentesque vel elementum augue lacus diam feugiat libero dolor. Velit gravida velit sit consectetur habitant dui justo proin rhoncus.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-gray-700">+500.000</h3>
                  <p className="text-gray-600 text-sm">Orders on all website</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-gray-700">+30</h3>
                  <p className="text-gray-600 text-sm">E-commerce solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}