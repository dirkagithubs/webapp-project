import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data-Driven Matching",
      description: "We use advanced analytics to match your brand with creators who truly align with your values, ensuring authentic partnerships and maximum engagement."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "End-to-End Management",
      description: "From contract negotiation and content approval to compliance and payments, we handle every detail so your campaigns run smoothly and efficiently."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Authentic Growth",
      description: "We focus on building genuine trust between your brand and new audiences, delivering strategic guidance that elevates your market presence and secures long-term value."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] animate-pulse-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-white border-white/20 text-base px-6 py-3 bg-white/10 backdrop-blur-sm">
            ✨ Your Strategic Partner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Businesses Choose Sahan Influence
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            In a crowded digital landscape, you need more than just an agency; you need a strategic partner. 
            This is how we ensure your success:
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Strategic business planning and analytics" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Strategic Features */}
          <div className="animate-fade-in delay-300">
            <div className="mb-8">
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider block mb-2">Why Choose Us</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Your Strategic Partnership Advantage
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-white to-white/50 rounded-full"></div>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent hover:from-white/10 hover:via-white/5 hover:to-white/3 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="relative flex-shrink-0">
                        <div className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-2xl text-white group-hover:scale-110 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300 shadow-lg">
                          {feature.icon}
                        </div>
                        <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-white mb-3 text-xl group-hover:text-white transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-all duration-500">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our strategic partnerships deliver measurable results with sustained growth that transforms your digital presence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group animate-fade-in delay-100">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-400 font-medium">Successful Campaigns</div>
            </div>
            <div className="text-center group animate-fade-in delay-200">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center group animate-fade-in delay-300">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-gray-400 font-medium">Years Experience</div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Professional team collaboration and strategy" 
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer backdrop-blur-sm"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;