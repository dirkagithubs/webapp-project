import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "10+ years of experience in digital marketing and social media strategy.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Expert in creating data-driven marketing campaigns that deliver measurable results.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Award-winning designer with a passion for creating engaging social media content.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "David Wilson",
      role: "Analytics Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Data scientist specializing in social media metrics and performance optimization.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] animate-pulse-soft" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Meet Our <span className="text-white/80">Team</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our team of experts is passionate about helping businesses grow through strategic social media marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-500 group animate-fade-in hover:-translate-y-2 hover:shadow-2xl"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={member.social.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                      <Twitter className="w-5 h-5 text-white group-hover:text-black" />
                    </a>
                    <a href={member.social.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
                    </a>
                    <a href={member.social.facebook} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                      <Facebook className="w-5 h-5 text-white group-hover:text-black" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center bg-transparent">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-white transition-colors">{member.name}</h3>
                <p className="text-white/70 font-medium mb-3 group-hover:text-white transition-colors">{member.role}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;