import { TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Social Media Strategy",
      description: "Comprehensive strategies tailored to boost your brand's online presence and engagement across all platforms."
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture engaged communities that advocate for your brand and drive meaningful conversations."
    },
    {
      icon: Megaphone,
      title: "Content Creation",
      description: "Eye-catching content designed to capture attention, spark engagement, and convert followers into customers."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to track performance, understand your audience, and optimize your social media ROI."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive social media solutions to elevate your brand and drive real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
