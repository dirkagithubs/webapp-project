import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const CTASection = () => {
  useEffect(() => {
    emailjs.init('TEWP7uCBupBA0XJ02');
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get current time formatted
      const currentTime = new Date().toLocaleString();
      
      // Prepare template parameters matching your EmailJS template
      // Template uses: {{name}}, {{time}}, {{subject}}, {{message}}
      const templateParams = {
        name: formState.name,
        time: currentTime,
        subject: formState.subject,
        message: formState.message,
      };
      
      // Send email using EmailJS
      await emailjs.send('service_dsacl73', 'template_pfm1rpd', templateParams);
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    } catch (error: any) {
      // More detailed error handling
      console.error("EmailJS error details:", error);
      if (error.text) {
        console.error("EmailJS error text:", error.text);
      }
      setError(`Failed to send email: ${error.text || error.message || 'Unknown error'}. Please check your EmailJS configuration.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)] animate-pulse-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent)]" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Start Your <span className="text-white/80">Journey</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Let's explore how Sahan Influence can guide your brand to authentic, measurable growth. Schedule your free discovery call today to map out your path to success.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg animate-fade-in hover:border-white/20 hover:bg-white/10 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-gray-300">+90 552 644 8809</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <span className="text-gray-300">info@sahaninfluence.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span className="text-gray-300">2 Taylor Place Glasgow, G4 0PA Scotland, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  </div>
                  <span className="text-gray-300">Available 24/7 for our global partners</span>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                    alt="Modern office space" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 animate-bounce-in">
                  <CheckCircle className="w-16 h-16 text-white mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          value={formState.name}
                          onChange={handleChange}
                          required 
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          value={formState.email}
                          onChange={handleChange}
                          required 
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="How can we help you?" 
                          value={formState.subject}
                          onChange={handleChange}
                          required 
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Tell us more about your project..." 
                          value={formState.message}
                          onChange={handleChange}
                          required 
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full rounded-full px-8 group" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </form>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-400">
            No credit card required • Cancel anytime
          </p>
          
          {/* Error message display */}
          {error && (
            <div className="text-red-500 mb-4 text-center mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
