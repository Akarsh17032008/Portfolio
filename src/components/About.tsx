import { Code, Database, Globe, Zap } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.png";

const About = () => {
  const highlights = [
    { icon: Code, text: "Frontend Specialist" },
    { icon: Database, text: "Backend Developer" },
    { icon: Globe, text: "Full-Stack Expert" },
    { icon: Zap, text: "Performance Optimizer" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-neon"></div>
              <img 
                src={developerAvatar} 
                alt="Akarsh P - Developer Avatar" 
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 neon-glow"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-neon rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyber-purple rounded-full animate-float delay-1000"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground-muted leading-relaxed">
                Passionate full-stack developer with a love for creating innovative digital solutions. 
                I specialize in building modern web applications that combine cutting-edge technology 
                with exceptional user experiences.
              </p>
              
              <p className="text-lg text-foreground-muted leading-relaxed">
                With expertise spanning both frontend and backend development, I bring ideas to life 
                through clean, efficient code and forward-thinking design principles.
              </p>
              
              <p className="text-lg text-foreground-muted leading-relaxed">
                Always eager to learn new technologies and tackle challenging problems that push 
                the boundaries of what's possible in web development.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-background-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-foreground font-medium">{highlight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;