import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-cyber-blue/20 to-primary/20"
    },
    {
      title: "Task Management App", 
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "WebSocket", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-cyber-purple/20 to-accent-purple/20"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.",
      tech: ["JavaScript", "APIs", "Chart.js", "CSS3"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-accent-neon/20 to-cyber-blue/20"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing! Built with modern web technologies and featuring smooth animations and responsive design.",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-primary/20 to-cyber-purple/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-foreground-muted mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="cyber" 
                    size="sm"
                    asChild
                  >
                    <a href={project.demoLink} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="hero" 
                    size="sm"
                    asChild
                  >
                    <a href={project.githubLink} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;