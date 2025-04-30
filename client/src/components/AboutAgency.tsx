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
              <h3 className="text-primary uppercase font-semibold mb-4 tracking-wider text-sm">
                DESPRE AGENȚIE
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                Ne asigurăm că ideea și creația ta sunt livrate corespunzător
              </h2>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Consultanță de specialitate</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Soluții personalizate</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Suport continuu</span>
                </li>
              </ul>

              <motion.button
                className="bg-gray-900 text-white px-6 py-3 rounded transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Solicită o ofertă gratuită
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
                alt="Agenție de dezvoltare" 
                className="w-full h-auto rounded-2xl"
              />
              {/* Orange accent square */}
              <div className="absolute left-0 bottom-0 w-24 h-24 md:w-28 md:h-28 bg-primary rounded-tr-xl"></div>
            </motion.div>
          </div>

          {/* Right column with numbers and stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8 md:pl-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-1">
                  Avem 5+ ani de experiență
                </h2>
                <h3 className="text-xl text-gray-700 mb-4">
                  în servicii IT
                </h3>
                <p className="text-gray-600">
                  Ne-am specializat în dezvoltarea de soluții digitale personalizate care aduc valoare afacerii tale. 
                  Cu o abordare orientată spre rezultate, transformăm ideile tale în realitate digitală.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-700">+500.000</h3>
                  <p className="text-gray-600 text-sm">Comenzi pe site-uri web</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-700">+30</h3>
                  <p className="text-gray-600 text-sm">Soluții e-commerce</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}