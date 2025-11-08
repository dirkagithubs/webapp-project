import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Target, Eye, Star, Users, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent_50%)] animate-pulse-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)] animate-pulse-soft delay-1000" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-glow delay-500" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 animate-fade-in">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <Compass className="w-4 h-4" />
              <span>SAHAN - Journey of Exploration</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white">Sahan Influence:</span>
                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient">
                  Guiding Your
                </span>
                <span className="block text-white">Brand's Journey</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full animate-fade-in delay-200" />
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-medium animate-fade-in delay-300">
              In the Somali language, the term <span className="text-white font-semibold">"Sahan"</span> means a journey of exploration, and that is the core of our philosophy. 
              We believe building true influence is a journey, not a shortcut. We partner with you to navigate 
              the digital landscape, explore new audiences, and build authentic connections that create lasting impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-400">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-4 text-lg font-semibold group shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-black hover:bg-white/90 hover:scale-105" 
                onClick={scrollToContact}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-white"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in delay-500">
              <div className="text-center group">
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-400 font-medium">Brands Guided</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">2M+</div>
                <div className="text-sm text-gray-400 font-medium">Authentic Connections</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-400 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 relative animate-slide-in">
            {/* Main Hero Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="Sahan Influence - Professional brand journey guidance" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards - Full Width */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 animate-fade-in-up">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 group-hover:border-white/30 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To guide brands on their journey to authentic influence by creating strategic, 
                data-driven influencer partnerships that build trust and deliver measurable results.
              </p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 group-hover:border-white/30 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To create a world where influence is measured not just by numbers, but by the 
                depth of connection and the authenticity of the story.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <p className="text-muted-foreground mb-8 text-lg font-medium">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Award className="w-6 h-6 text-primary" />
              <span>Award Winners</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Users className="w-6 h-6 text-secondary" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Star className="w-6 h-6 text-primary" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
