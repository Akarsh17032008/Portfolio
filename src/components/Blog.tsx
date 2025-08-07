import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and architectural patterns for creating maintainable and scalable React applications that can grow with your business needs.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "React",
      status: "published",
      gradient: "from-cyber-blue/10 to-primary/10"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends in web development including WebAssembly, AI integration, and the next generation of JavaScript frameworks.",
      date: "2024-01-10", 
      readTime: "12 min",
      category: "Tech Trends",
      status: "published",
      gradient: "from-cyber-purple/10 to-accent-purple/10"
    },
    {
      title: "Optimizing API Performance",
      excerpt: "Deep dive into API optimization techniques, caching strategies, and performance monitoring to build lightning-fast backend services.",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Backend",
      status: "coming-soon",
      gradient: "from-accent-neon/10 to-cyber-blue/10"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Latest Blog Posts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-foreground-muted mt-6 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-background-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.status === 'coming-soon' 
                      ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30' 
                      : 'bg-primary/20 text-primary border border-primary/30'
                  }`}>
                    {post.status === 'coming-soon' ? 'Coming Soon' : post.category}
                  </span>
                  <Bookmark className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-foreground-muted mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Read More Button */}
                <Button 
                  variant={post.status === 'coming-soon' ? 'hero' : 'cyber'} 
                  size="sm"
                  disabled={post.status === 'coming-soon'}
                  className="w-full"
                >
                  {post.status === 'coming-soon' ? (
                    <>
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </>
                  ) : (
                    <>
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;