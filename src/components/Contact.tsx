import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "hover:text-cyber-blue"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:akarsh@example.com",
      color: "hover:text-primary"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akarsh@example.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "text-cyber-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      color: "text-accent-neon"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-foreground-muted mt-6 max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background-secondary/50 border-primary/20 focus:border-primary/60 text-foreground placeholder:text-foreground-muted"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background-secondary/50 border-primary/20 focus:border-primary/60 text-foreground placeholder:text-foreground-muted"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background-secondary/50 border-primary/20 focus:border-primary/60 text-foreground placeholder:text-foreground-muted resize-none"
                />
              </div>
              
              <Button type="submit" variant="neon" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-foreground-muted group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
              
              <p className="text-foreground-muted mt-6 leading-relaxed">
                Feel free to reach out through any platform. I'm always open to discussing 
                new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;