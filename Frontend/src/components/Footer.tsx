import { MessageSquare, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">
                Karim <span className="text-secondary">Agency</span>
              </span>
            </div>
            <p className="text-background/70">
              Transform your social media presence with expert strategies and proven results.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li>Social Media Strategy</li>
              <li>Community Management</li>
              <li>Content Creation</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {currentYear} Karim Agency. All rights reserved. Built with ❤️ for social media success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
