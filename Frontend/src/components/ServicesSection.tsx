import { TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Influencer Discovery",
      description: "We use advanced analytics to find the perfect creators who align with your brand values and target audience."
    },
    {
      icon: TrendingUp,
      title: "Full-Cycle Campaign Strategy",
      description: "Comprehensive campaign planning from concept to execution, ensuring every step aligns with your brand goals."
    },
    {
      icon: Megaphone,
      title: "End-to-End Management",
      description: "From contract negotiation and content approval to compliance and payments, we handle every detail seamlessly."
    },
    {
      icon: BarChart3,
      title: "Performance & Reporting",
      description: "Data-driven insights and comprehensive reporting to track performance, measure ROI, and optimize future campaigns."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent)] animate-pulse-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Our <span className="text-white/80">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer end-to-end solutions to ensure your journey is seamless and successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const serviceImages = [
              "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ];
            return (
              <Card 
                key={index} 
                className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl animate-fade-in group overflow-hidden hover:-translate-y-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 text-center bg-transparent">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
