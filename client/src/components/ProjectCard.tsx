import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  client: string;
  categories: string[];
  thumbnail: string;
  featured?: boolean;
  year: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Staggered animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  return (
    <motion.div
      className={`group ${project.featured ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1'}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/portfolio/${project.id}`}>
        <a className="block h-full">
          <div className="relative overflow-hidden rounded-xl h-full border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
            {/* Thumbnail */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
              
              {/* Motion image wrapper for zoom effect */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.categories.slice(0, 2).map((category, i) => (
                  <span 
                    key={i} 
                    className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {category}
                  </span>
                ))}
                {project.categories.length > 2 && (
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    +{project.categories.length - 2} more
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {/* Client & Year */}
              <p className="text-gray-600">
                {project.client} • {project.year}
              </p>
              
              {/* View link animation */}
              <motion.div 
                className="flex justify-end mt-4"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center text-primary font-medium">
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            </div>
            
            {/* Featured label if applicable */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
                Featured Project
              </div>
            )}
          </div>
        </a>
      </Link>
    </motion.div>
  );
}