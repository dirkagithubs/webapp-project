import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, TrendingUp, Award, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "10+ years of experience"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Custom Strategies",
      description: "Tailored for your unique business"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock consultation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Success",
      description: "Track record of excellence"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven",
      description: "Analytics-based growth approach"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent Reporting",
      description: "Clear communication always"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 text-base px-4 py-2">
            About Karim Agency
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Businesses Choose Karim Agency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just manage your social media - we transform it into a powerful growth engine. 
            Our data-driven strategies and creative expertise help businesses of all sizes achieve remarkable results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Team collaboration" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">17%</div>
                <div className="text-sm text-muted-foreground font-medium">Average Growth</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Within first 3 months
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Features Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              What Sets Us Apart
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our clients experience an average 17% increase in engagement within the first 3 months, 
              with sustained growth that transforms their digital presence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Karim Agency Team" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-2">Meet Our Expert Team</h4>
                <p className="text-white/90">Passionate professionals dedicated to your success</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;