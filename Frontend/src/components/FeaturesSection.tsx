import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    "Expert team with 10+ years of experience",
    "Custom strategies for your unique business",
    "24/7 support and consultation",
    "Proven track record of success",
    "Data-driven approach to growth",
    "Transparent reporting and communication"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03),transparent_50%)] animate-pulse-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.02),transparent_50%)]" />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Why Businesses Choose <span className="text-white/80">Sahan Influence</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We don't just manage your social media - we transform it into a powerful growth engine. Our data-driven strategies and creative expertise help businesses of all sizes achieve remarkable results.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Business growth and analytics" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
