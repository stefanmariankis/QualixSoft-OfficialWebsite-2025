import { Smartphone, Monitor, Database, Settings, BarChart3, BarChart2 } from "lucide-react";
import { useEffect, useRef } from "react";
import laptopImage from "../assets/laptop_display.png";
import needsBackground from "../assets/needs_background.png";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../hooks/use-mobile";

export default function AnalysisSection() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Function to draw lines connecting boxes to the center laptop
  useEffect(() => {
    // Skip this effect for mobile layout
    if (isMobile || !containerRef.current || !svgRef.current) return;
    
    const updateLines = () => {
      if (!containerRef.current || !svgRef.current) return;
      
      // Get center laptop position
      const laptop = document.getElementById('centerLaptop');
      if (!laptop) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const laptopRect = laptop.getBoundingClientRect();
      
      // Calculate center points relative to the container
      const centerX = laptopRect.left + laptopRect.width / 2 - containerRect.left;
      const centerY = laptopRect.top + laptopRect.height / 2 - containerRect.top;
      
      // Clear existing lines
      if (svgRef.current) {
        while (svgRef.current.firstChild) {
          svgRef.current.removeChild(svgRef.current.firstChild);
        }
      } else {
        return;
      }
      
      if (!svgRef.current) return;
      
      // Create marker definition for dot at the end of lines
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
      marker.setAttribute("id", "dot");
      marker.setAttribute("viewBox", "0 0 10 10");
      marker.setAttribute("refX", "5");
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "5");
      marker.setAttribute("markerHeight", "5");
      
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", "5");
      circle.setAttribute("cy", "5");
      circle.setAttribute("r", "2.5");
      circle.setAttribute("fill", "white");
      circle.setAttribute("fill-opacity", "0.5");
      
      marker.appendChild(circle);
      defs.appendChild(marker);
      svgRef.current.appendChild(defs);
      
      // Connect each box to the center
      ['box1', 'box2', 'box3', 'box4', 'box5'].forEach(boxId => {
        const box = document.getElementById(boxId);
        if (!box) return;
        
        const boxRect = box.getBoundingClientRect();
        
        // Calculate connection points relative to the container
        const boxCenterX = boxRect.left + boxRect.width / 2 - containerRect.left;
        const boxCenterY = boxRect.top + boxRect.height / 2 - containerRect.top;
        
        // Create the line
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", boxCenterX.toString());
        line.setAttribute("y1", boxCenterY.toString());
        line.setAttribute("x2", centerX.toString());
        line.setAttribute("y2", centerY.toString());
        line.setAttribute("stroke", "white");
        line.setAttribute("stroke-opacity", "0.3");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("stroke-dasharray", "5,5");
        line.setAttribute("marker-end", "url(#dot)");
        
        if (svgRef.current) {
          svgRef.current.appendChild(line);
        }
      });
    };
    
    // Update on mount and resize
    updateLines();
    window.addEventListener('resize', updateLines);
    
    // Small delay to ensure DOM is fully rendered
    const timeout = setTimeout(updateLines, 500);
    
    return () => {
      window.removeEventListener('resize', updateLines);
      clearTimeout(timeout);
    };
  }, [isMobile]);
  
  return (
    <section style={{ backgroundColor: '#EB7127' }} className="py-20 relative overflow-hidden">
      {/* Background with the provided image */}
      <div className="absolute inset-0 w-full h-full bg-center bg-contain bg-no-repeat z-0"
           style={{ backgroundImage: `url(${needsBackground})` }}>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`${isMobile ? 'text-center' : 'text-center'} mb-8`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t('home.analyze.title')}
          </h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm md:text-base">
            {t('home.analyze.subtitle')}
          </p>
        </div>
        
        {isMobile ? (
          // Mobile layout - styled like in the image
          <div className="px-2">
            {/* Feature boxes as cards */}
            <div className="space-y-4 mb-8">
              <div className="border border-white border-dashed rounded-lg p-3 flex items-center">
                <div className="bg-white rounded-sm p-2 mr-3 flex-shrink-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white text-base font-medium">{t('home.analyze.mobile_app')}</span>
              </div>
              
              <div className="border border-white border-dashed rounded-lg p-3 flex items-center">
                <div className="bg-white rounded-sm p-2 mr-3 flex-shrink-0">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white text-base font-medium">{t('home.analyze.ux')}</span>
              </div>
              
              <div className="border border-white border-dashed rounded-lg p-3 flex items-center">
                <div className="bg-white rounded-sm p-2 mr-3 flex-shrink-0">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white text-base font-medium">{t('home.analyze.maintenance')}</span>
              </div>
              
              <div className="border border-white border-dashed rounded-lg p-3 flex items-center">
                <div className="bg-white rounded-sm p-2 mr-3 flex-shrink-0">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white text-base font-medium">{t('home.analyze.backend')}</span>
              </div>
              
              <div className="border border-white border-dashed rounded-lg p-3 flex items-center">
                <div className="bg-white rounded-sm p-2 mr-3 flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white text-base font-medium">{t('home.analyze.seo')}</span>
              </div>
            </div>
            
            {/* Laptop image at the bottom */}
            <div className="mt-12 flex justify-center">
              <img 
                src={laptopImage} 
                alt="Laptop displaying website" 
                className="w-72 h-auto"
              />
            </div>
          </div>
        ) : (
          // Desktop layout with positioned elements and connecting lines
          <div ref={containerRef} className="relative min-h-[480px]">
            {/* Laptop in the center */}
            <div 
              id="centerLaptop"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <img 
                src={laptopImage} 
                alt="Laptop displaying website" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Feature boxes positioned around the laptop */}
            <div id="box1" className="absolute top-0 left-5 md:left-10 lg:left-32 w-[220px] z-20">
              <FeatureBox 
                icon={<Monitor className="h-5 w-5 text-primary" />}
                title={t('home.analyze.ux').replace('?', '')}
                description="Optimization"
              />
            </div>
            
            <div id="box2" className="absolute top-0 right-5 md:right-10 lg:right-32 w-[220px] z-20">
              <FeatureBox 
                icon={<Settings className="h-5 w-5 text-primary" />}
                title={t('home.analyze.maintenance').replace('?', '')}
                description="Support"
              />
            </div>
            
            <div id="box3" className="absolute top-[180px] left-0 md:left-[30px] lg:left-[150px] w-[220px] z-20">
              <FeatureBox 
                icon={<Smartphone className="h-5 w-5 text-primary" />}
                title={t('home.analyze.mobile_app').replace('?', '')}
                description=""
              />
            </div>
            
            <div id="box4" className="absolute top-[180px] right-0 md:right-[30px] lg:right-[120px] w-[220px] z-20">
              <FeatureBox 
                icon={<BarChart3 className="h-5 w-5 text-primary" />}
                title={t('home.analyze.seo').replace('?', '')}
                description=""
              />
            </div>
            
            <div id="box5" className="absolute bottom-0 right-[30%] w-[220px] z-20">
              <FeatureBox 
                icon={<Database className="h-5 w-5 text-primary" />}
                title={t('home.analyze.backend').replace('?', '')}
                description=""
              />
            </div>
            
            {/* Dynamic SVG overlay for dashed lines */}
            <svg 
              ref={svgRef} 
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureBox({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 border-dashed rounded-md p-3 text-white">
      <div className="flex items-center mb-1">
        <div className="bg-white rounded-sm p-1 mr-2 flex-shrink-0">
          {icon}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      {description && (
        <div className="text-xs text-white text-opacity-80 ml-7">{description}</div>
      )}
    </div>
  );
}