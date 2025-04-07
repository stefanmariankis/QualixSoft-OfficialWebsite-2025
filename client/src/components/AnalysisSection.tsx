import { Smartphone, Monitor, Database, Settings, BarChart3 } from "lucide-react";

export default function AnalysisSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Plain background - no arrows as requested */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">We analyze your needs</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto">
            In-depth Assessments to Craft Customized Digital Solutions for Your Business.
          </p>
        </div>
        
        <div className="relative min-h-[480px]">
          {/* Black square in the center */}
          <div 
            id="blackSquare"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-black rounded-md"
          ></div>
          
          {/* Feature boxes positioned around the black square */}
          <div id="box1" className="absolute top-0 left-5 md:left-10 lg:left-32 w-[220px]">
            <FeatureBox 
              icon={<Monitor className="h-5 w-5 text-primary" />}
              title="User Experience (UX) Optimization"
              description="Optimization"
            />
          </div>
          
          <div id="box2" className="absolute top-0 right-5 md:right-10 lg:right-32 w-[220px]">
            <FeatureBox 
              icon={<Settings className="h-5 w-5 text-primary" />}
              title="Ongoing Maintenance and Support"
              description="Support"
            />
          </div>
          
          <div id="box3" className="absolute top-[180px] left-0 md:left-[30px] lg:left-[150px] w-[220px]">
            <FeatureBox 
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              title="Mobile App Development"
              description=""
            />
          </div>
          
          <div id="box4" className="absolute top-[180px] right-0 md:right-[30px] lg:right-[120px] w-[220px]">
            <FeatureBox 
              icon={<BarChart3 className="h-5 w-5 text-primary" />}
              title="Search Engine Optimization"
              description=""
            />
          </div>
          
          <div id="box5" className="absolute bottom-0 right-[30%] w-[220px]">
            <FeatureBox 
              icon={<Database className="h-5 w-5 text-primary" />}
              title="Scalable Backend Solutions"
              description=""
            />
          </div>
          
          {/* SVG overlay for dashed lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker 
                id="dot" 
                viewBox="0 0 10 10" 
                refX="5" 
                refY="5"
                markerWidth="5" 
                markerHeight="5">
                <circle cx="5" cy="5" r="2.5" fill="white" fillOpacity="0.5" />
              </marker>
            </defs>
            
            {/* CSS dashed lines from each feature to the center */}
            <line 
              x1="0%" y1="10%" 
              x2="40%" y2="40%" 
              stroke="white" 
              strokeOpacity="0.3"
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              markerEnd="url(#dot)"
            />
            <line 
              x1="100%" y1="10%" 
              x2="60%" y2="40%" 
              stroke="white" 
              strokeOpacity="0.3"
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              markerEnd="url(#dot)"
            />
            <line 
              x1="0%" y1="50%" 
              x2="35%" y2="50%" 
              stroke="white" 
              strokeOpacity="0.3"
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              markerEnd="url(#dot)"
            />
            <line 
              x1="100%" y1="50%" 
              x2="65%" y2="50%" 
              stroke="white" 
              strokeOpacity="0.3"
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              markerEnd="url(#dot)"
            />
            <line 
              x1="70%" y1="90%" 
              x2="50%" y2="65%" 
              stroke="white" 
              strokeOpacity="0.3"
              strokeWidth="1.5" 
              strokeDasharray="5,5" 
              markerEnd="url(#dot)"
            />
          </svg>
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