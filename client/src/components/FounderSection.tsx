import { motion } from 'framer-motion';
import founderImg from '../assets/founder_image.png';
import faviconImg from '../assets/favicon_about_us.png';

export default function FounderSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decor circles */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-gray-100 opacity-50"></div>
        <div className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-full bg-gray-100 opacity-30"></div>
        <div className="absolute top-[30%] right-[20%] w-20 h-20 rounded-full bg-gray-100 opacity-40"></div>
        <div className="absolute bottom-[10%] right-[8%] w-12 h-12 rounded-full bg-gray-100 opacity-20"></div>
        <div className="absolute top-[50%] left-[50%] w-32 h-32 rounded-full bg-gray-100 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img 
              src={founderImg} 
              alt="Fondator QualixSoft" 
              className="w-full h-auto max-w-lg mx-auto md:ml-0"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center mb-5">
              <motion.img 
                src={faviconImg} 
                alt="QualixSoft icon" 
                className="w-10 h-10 mr-3"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <p className="text-primary uppercase font-semibold tracking-wider text-sm">
                ALEXANDRU GHIURUTAN | FOUNDER
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Transformăm viziunea ta digitală în realitate
            </h2>

            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                "În fiecare zi ne străduim să oferim soluții digitale de calitate care depășesc așteptările clienților noștri. 
                Credem în puterea transformării digitale și în impactul pe care îl poate avea asupra afacerii tale."
              </p>
              <p className="text-gray-600">
                "Misiunea noastră este să construim soluții digitale care nu doar arată bine, ci și 
                generează rezultate concrete pentru clienții noștri. Fiecare proiect este o oportunitate 
                de a demonstra că tehnologia poate fi accesibilă, eficientă și profitabilă pentru orice afacere."
              </p>
            </div>
            
            <motion.button
              className="bg-primary text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Discută cu noi
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}