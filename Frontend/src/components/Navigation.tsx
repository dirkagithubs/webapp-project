import { MessageSquare, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
              SAHAN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-white/80 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
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
