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
          {/* Center placeholder for laptop - will be added later by client */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px]">
            {/* Empty space for laptop image that client will add later */}
          </div>
          
          {/* Feature boxes positioned around the empty laptop space */}
          <div className="absolute top-0 left-5 md:left-10 lg:left-32 w-[220px]">
            <FeatureBox 
              icon={<Monitor className="h-5 w-5 text-primary" />}
              title="User Experience (UX) Optimization"
              description="Optimization"
            />
          </div>
          
          <div className="absolute top-0 right-5 md:right-10 lg:right-32 w-[220px]">
            <FeatureBox 
              icon={<Settings className="h-5 w-5 text-primary" />}
              title="Ongoing Maintenance and Support"
              description="Support"
            />
          </div>
          
          <div className="absolute top-[180px] left-0 md:left-[30px] lg:left-[150px] w-[220px]">
            <FeatureBox 
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              title="Mobile App Development"
              description=""
            />
          </div>
          
          <div className="absolute top-[180px] right-0 md:right-[30px] lg:right-[120px] w-[220px]">
            <FeatureBox 
              icon={<BarChart3 className="h-5 w-5 text-primary" />}
              title="Search Engine Optimization"
              description=""
            />
          </div>
          
          <div className="absolute bottom-0 right-[30%] w-[220px]">
            <FeatureBox 
              icon={<Database className="h-5 w-5 text-primary" />}
              title="Scalable Backend Solutions"
              description=""
            />
          </div>
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