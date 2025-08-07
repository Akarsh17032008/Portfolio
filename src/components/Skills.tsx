import { Code2, Database, Globe, GitBranch, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        { name: "HTML", level: 95, color: "bg-cyber-blue" },
        { name: "CSS", level: 90, color: "bg-primary" },
        { name: "JavaScript", level: 88, color: "bg-accent-neon" },
        { name: "React", level: 85, color: "bg-cyber-purple" }
      ]
    },
    {
      title: "Backend", 
      icon: Database,
      skills: [
        { name: "Node.js", level: 80, color: "bg-accent-neon" },
        { name: "Python", level: 75, color: "bg-cyber-blue" },
        { name: "APIs", level: 85, color: "bg-primary" },
        { name: "Databases", level: 70, color: "bg-cyber-purple" }
      ]
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90, color: "bg-cyber-blue" },
        { name: "GitHub", level: 88, color: "bg-primary" },
        { name: "VS Code", level: 95, color: "bg-accent-neon" },
        { name: "DevOps", level: 70, color: "bg-cyber-purple" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-foreground-muted mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} skill-progress rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Tech Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground-muted mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[Code2, Globe, Zap, Database, GitBranch].map((Icon, index) => (
              <div 
                key={index}
                className="p-4 bg-background-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-8 h-8 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;