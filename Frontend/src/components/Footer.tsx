import { MessageSquare, Facebook, Twitter, Instagram, Linkedin, Compass } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">
                SAHAN
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your social media presence with expert strategies and proven results.
            </p>
          </div>

          <div className="animate-fade-in delay-100">
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          <div className="animate-fade-in delay-200">
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">Influencer Discovery</li>
              <li className="hover:text-white transition-colors duration-300">Full-Cycle Campaign Strategy</li>
              <li className="hover:text-white transition-colors duration-300">End-to-End Management</li>
              <li className="hover:text-white transition-colors duration-300">Performance & Reporting</li>
            </ul>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className="font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 animate-fade-in delay-500">
          <p>&copy; {currentYear} SAHAN Influence. All rights reserved. Built with ❤️ for social media success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
