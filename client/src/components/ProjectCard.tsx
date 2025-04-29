import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Building, Calendar } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  client: string;
  categories: string[];
  thumbnail: string;
  featured?: boolean;
  year: number;
  shortDescription?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Ensure thumbnail exists or use placeholder
  const thumbnailUrl = project.thumbnail || '/img/placeholder.svg';
  
  // Format categories for display
  const formattedCategories = project.categories.map(c => 
    c.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  );
  
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
      <div 
        onClick={() => window.location.href = `/portfolio/${project.id}`}
        className="block h-full cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl h-full border border-gray-100 bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          {/* Thumbnail with 3D effect */}
          <div className="relative overflow-hidden aspect-[16/10]">
            {/* Base image */}
            <img 
              src={thumbnailUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ 
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            
            {/* Gradient overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
                isHovered ? 'opacity-90' : 'opacity-0'
              }`}
            ></div>
            
            {/* Hover content overlay */}
            <div 
              className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              
              <div className="flex items-center text-white/80 text-sm mb-3">
                <Building className="h-4 w-4 mr-1.5" />
                <span>{project.client}</span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>{project.year}</span>
              </div>
              
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 text-white self-start">
                <ArrowUpRight className="h-4 w-4 mr-1.5" />
                <span className="text-sm font-medium">View Project</span>
              </div>
            </div>
          </div>
          
          {/* Content for non-hovered state */}
          <div className="p-5">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-3">
              {formattedCategories.slice(0, 2).map((category, i) => (
                <span 
                  key={i} 
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {category}
                </span>
              ))}
              {formattedCategories.length > 2 && (
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                  +{formattedCategories.length - 2} more
                </span>
              )}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            {/* Client & Year */}
            <div className="flex items-center text-gray-600 mb-2">
              <Building className="h-4 w-4 mr-1.5" />
              <span>{project.client}</span>
              <span className="mx-2">•</span>
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>{project.year}</span>
            </div>
            
            {/* Short description if available */}
            {project.shortDescription && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.shortDescription}
              </p>
            )}
            
            {/* View link animation */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-primary font-medium">
                View Project <ArrowUpRight className="ml-1 h-4 w-4" />
              </div>
              
              {/* Featured icon if applicable */}
              {project.featured && (
                <div className="flex items-center text-sm text-amber-600">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Featured</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}