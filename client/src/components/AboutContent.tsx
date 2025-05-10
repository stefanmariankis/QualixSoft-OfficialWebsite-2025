import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Povestea noastră
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              QualixSoft a fost fondată cu o viziune clară: să creăm soluții digitale care nu doar funcționează impecabil, ci și transformă afacerile. Echipa noastră este formată din programatori, designeri și strategiști pasionați, care lucrează împreună pentru a oferi rezultate excepționale.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Încă de la început, am pus accent pe calitate și inovație. Credem că fiecare proiect, indiferent de dimensiune, merită aceeași atenție meticuloasă și dedicare. Această abordare ne-a ajutat să construim relații de lungă durată cu clienții noștri și să livrăm constant rezultate care depășesc așteptările.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Misiunea noastră
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Misiunea noastră este să oferim soluții tehnologice care să aducă valoare reală afacerilor. Nu ne mulțumim doar cu livrarea de cod, ci ne asigurăm că fiecare linie scrisă contribuie la succesul clienților noștri. Suntem dedicați să menținem cele mai înalte standarde de calitate și să rămânem la curent cu cele mai recente tendințe și tehnologii.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Valorile noastre
            </h2>
            
            <ul className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Excelență",
                  description: "Urmărim constant cele mai înalte standarde de calitate în tot ceea ce facem."
                },
                {
                  title: "Inovație",
                  description: "Căutăm mereu soluții creative și abordări noi pentru provocările complexe."
                },
                {
                  title: "Integritate",
                  description: "Suntem transparenți, onești și etici în toate interacțiunile noastre."
                },
                {
                  title: "Colaborare",
                  description: "Credem în puterea muncii în echipă și a parteneriatelor bazate pe respect."
                }
              ].map((value, index) => (
                <motion.li 
                  key={index}
                  className="bg-gray-50 p-6 rounded-md shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="font-semibold text-primary text-xl mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}