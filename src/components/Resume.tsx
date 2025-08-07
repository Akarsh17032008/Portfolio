import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react";
const Resume = () => {
  const experiences = [{
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Lead development of scalable web applications serving 100K+ users"
  }, {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built responsive web applications using React and modern CSS frameworks"
  }];
  const education = [{
    degree: "Bachelor of Computer Science",
    institution: "Technology University",
    period: "2016 - 2020",
    grade: "First Class Honours"
  }];
  const achievements = ["Led team of 5 developers on enterprise project", "Optimized application performance by 40%", "Contributed to 10+ open-source projects", "Speaker at 3 tech conferences"];
  return <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume & Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-foreground-muted mt-6 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Experience</h3>
              </div>
              
              
            </div>
            
            {/* Education */}
            <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyber-blue/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyber-blue" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => <div key={index} className="relative pl-6 border-l-2 border-cyber-blue/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyber-blue rounded-full"></div>
                    
                    
                    
                    
                  </div>)}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Key Achievements */}
            <div className="bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-neon/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent-neon" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Key Achievements</h3>
              </div>
              
              <ul className="space-y-3">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-neon rounded-full mt-2 flex-shrink-0"></div>
                    
                  </li>)}
              </ul>
            </div>
            
            {/* Download Section */}
            <div className="bg-gradient-to-br from-primary/10 to-cyber-purple/10 rounded-xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get My Full Resume</h3>
              <p className="text-foreground-muted mb-6">
                Download my complete resume with detailed project descriptions, certifications, and references.
              </p>
              
              <div className="space-y-4">
                <Button variant="neon" size="lg" className="w-full">
                  <Download className="w-5 h-5" />
                  Download PDF Resume
                </Button>
                
                <Button variant="hero" size="lg" className="w-full">
                  <ExternalLink className="w-5 h-5" />
                  View LinkedIn Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Resume;