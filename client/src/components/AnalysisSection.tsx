import { Smartphone, Monitor, Database, Settings, BarChart3, BarChart2 } from "lucide-react";
import { useEffect, useRef } from "react";
import laptopImage from "../assets/laptop_display.png";
import needsBackground from "../assets/needs_background.png";
import { useTranslation } from "react-i18next";

export default function AnalysisSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Function to draw lines connecting boxes to the center laptop
  useEffect(() => {
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
  }, []);
  
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background with the provided image */}
      <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
           style={{ backgroundImage: `url(${needsBackground})` }}>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">We analyze your needs</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto">
            In-depth Assessments to Craft Customized Digital Solutions for Your Business.
          </p>
        </div>
        
        <div ref={containerRef} className="relative min-h-[480px]">
          {/* Laptop in the center */}
          <div 
            id="centerLaptop"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] z-10"
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
              title="User Experience (UX) Optimization"
              description="Optimization"
            />
          </div>
          
          <div id="box2" className="absolute top-0 right-5 md:right-10 lg:right-32 w-[220px] z-20">
            <FeatureBox 
              icon={<Settings className="h-5 w-5 text-primary" />}
              title="Ongoing Maintenance and Support"
              description="Support"
            />
          </div>
          
          <div id="box3" className="absolute top-[180px] left-0 md:left-[30px] lg:left-[150px] w-[220px] z-20">
            <FeatureBox 
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              title="Mobile App Development"
              description=""
            />
          </div>
          
          <div id="box4" className="absolute top-[180px] right-0 md:right-[30px] lg:right-[120px] w-[220px] z-20">
            <FeatureBox 
              icon={<BarChart3 className="h-5 w-5 text-primary" />}
              title="Search Engine Optimization"
              description=""
            />
          </div>
          
          <div id="box5" className="absolute bottom-0 right-[30%] w-[220px] z-20">
            <FeatureBox 
              icon={<Database className="h-5 w-5 text-primary" />}
              title="Scalable Backend Solutions"
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