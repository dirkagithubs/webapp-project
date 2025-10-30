import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">
              KARIM'S <span className="text-secondary">AGENCY</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* Empty div to maintain layout balance */}
          <div className="w-24"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
