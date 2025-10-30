import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6" style={{ background: 'var(--hero-gradient)' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Grow Your Business Visibility with Optimize{" "}
              <span className="text-secondary">Social Media</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 group">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8">
                Learn More
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Our business partners:</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                <div className="text-2xl font-bold">logoipsum</div>
                <div className="text-2xl font-bold">logoipsum</div>
                <div className="text-2xl font-bold">logoipsum</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <img 
                src={heroImage} 
                alt="Business analytics dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
