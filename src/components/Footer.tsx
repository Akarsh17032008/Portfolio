import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:akarsh@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 bg-background-secondary border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 particles-bg opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Akarsh P</h3>
            </div>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Full-Stack Developer passionate about creating innovative digital solutions 
              and building the future of web technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "About", href: "about" },
                { label: "Skills", href: "skills" },
                { label: "Projects", href: "projects" },
                { label: "Blog", href: "blog" },
                { label: "Resume", href: "resume" },
                { label: "Contact", href: "contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-foreground-muted hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <p className="text-foreground-muted">
                <span className="text-primary font-medium">Email:</span> akarsh@example.com
              </p>
              <p className="text-foreground-muted">
                <span className="text-primary font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-foreground-muted">
                <span className="text-primary font-medium">Location:</span> San Francisco, CA
              </p>
            </div>
            <Button 
              variant="cyber" 
              onClick={() => scrollToSection('contact')}
              className="w-full"
            >
              Start a Project
            </Button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-foreground-muted">
              <p className="flex items-center gap-2">
                © {currentYear} Akarsh P. Built with 
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                and HTML, CSS, JavaScript
              </p>
            </div>
            
            {/* Back to Top Button */}
            <Button
              variant="hero"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-background-card/80 backdrop-blur-sm rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 neon-glow"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;