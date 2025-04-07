import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";
import { SiWordpress, SiShopify, SiHeroku, SiBootstrap } from "react-icons/si";

// Tech stack data
const techItems = [
  {
    id: 1,
    name: "Github",
    icon: <Github className="h-10 w-10 text-gray-700" />
  },
  {
    id: 2,
    name: "Wordpress",
    icon: <SiWordpress className="h-10 w-10 text-gray-700" />
  },
  {
    id: 3,
    name: "Shopify",
    icon: <SiShopify className="h-10 w-10 text-gray-700" />
  },
  {
    id: 4,
    name: "Heroku",
    icon: <SiHeroku className="h-10 w-10 text-gray-700" />
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: <SiBootstrap className="h-10 w-10 text-gray-700" />
  },
  {
    id: 6,
    name: "Custom",
    icon: <Code2 className="h-10 w-10 text-gray-700" />
  }
];

export default function TechSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-medium text-primary">Some tools that fit your needs</h2>
        </div>
        
        {/* Responsive tech logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
          {techItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-2"
              >
                {item.icon}
              </motion.div>
              <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}