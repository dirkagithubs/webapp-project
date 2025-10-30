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
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Businesses Choose <span className="text-secondary">Karim Agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just manage your social media - we transform it into a powerful growth engine. Our data-driven strategies and creative expertise help businesses of all sizes achieve remarkable results.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8">
              Learn More About Us
            </Button>
          </div>

          <div className="relative animate-slide-in">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">17%</div>
                <p className="text-2xl font-semibold mb-2">Average Growth</p>
                <p className="text-muted-foreground">Our clients experience an average 17% increase in engagement within the first 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
