import { motion } from 'framer-motion';
import skillsImage from '../assets/skills_image.png';

export default function SkillsSection() {
  return (
    <section className="bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column with content */}
          <div className="text-white">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Avem competențele și expertiza necesare pentru a oferi software personalizat de înaltă calitate
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              <p className="text-white/90">
                Echipa noastră de dezvoltatori este specializată în crearea de soluții digitale personalizate, 
                adaptate perfect cerințelor și obiectivelor afacerii tale.
              </p>
              <p className="text-white/90">
                Folosim cele mai noi tehnologii și metodologii de dezvoltare pentru a asigura că produsele 
                noastre sunt performante, scalabile și ușor de întreținut pe termen lung.
              </p>
            </motion.div>

            {/* Skill bars */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 mt-10"
            >
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white font-medium">Dezvoltare web și platforme</span>
                  <span className="text-white font-medium">99%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white font-medium">Dezvoltare aplicații</span>
                  <span className="text-white font-medium">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column with image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={skillsImage} 
              alt="Our skilled team at work" 
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 50H1440V100H0V50Z" 
            fill="white"
          />
          <path 
            d="M0 0C240 80 480 100 720 100C960 100 1200 80 1440 0V50H0V0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}