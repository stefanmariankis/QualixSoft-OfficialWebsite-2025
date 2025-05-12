import CTAImage from "../assets/home_cta_image.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function CTA() {
  const { t } = useTranslation();
  
  return (
    <motion.section 
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Side with Content */}
          <div 
            className="flex flex-col justify-center"
          >
            <motion.h4 
              className="text-sm uppercase font-semibold tracking-wider text-primary mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {t('cta.button')}
            </motion.h4>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-play"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t('cta.title')}
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-2 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t('cta.subtitle')}
            </motion.p>
            
            <p 
              className="text-gray-600 mb-6"
            >
              {t('cta.description')}
            </p>
            
            <div className="flex">
              <a 
                href="#" 
                className="inline-flex bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                {t('cta.button')}
              </a>
            </div>
          </div>

          {/* Right Side with Image */}
          <div 
            className="relative flex items-center justify-center"
          >
            <img
              src={CTAImage}
              alt={t('cta.image_alt_1')} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}