import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 particles-bg"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-purple rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent-neon rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary rounded-full animate-float delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Akarsh P</span>
          </h1>
          
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-3xl text-foreground-muted mb-4">
              Full-Stack Developer
            </h2>
            <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full pulse-neon"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting futuristic web experiences with code and creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-4"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('resume')}
              className="text-lg px-8 py-4"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="cyber" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;