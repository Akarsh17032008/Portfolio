import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    label: "About",
    href: "about"
  }, {
    label: "Skills",
    href: "skills"
  }, {
    label: "Projects",
    href: "projects"
  }, {
    label: "Blog",
    href: "blog"
  }, {
    label: "Resume",
    href: "resume"
  }, {
    label: "Contact",
    href: "contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-glass border-b border-primary/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center gap-2 group">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">Akarsh P</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="text-foreground-muted hover:text-primary transition-colors duration-300 font-medium">
                  {item.label}
                </button>)}
              
            </div>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden backdrop-blur-glass border-t border-primary/20">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-4">
              {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left text-foreground-muted hover:text-primary transition-colors duration-300 font-medium py-2">
                  {item.label}
                </button>)}
              <Button variant="cyber" size="sm" className="w-full mt-4" onClick={() => scrollToSection('contact')}>
                Hire Me
              </Button>
            </div>
          </div>}
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-20"></div>
    </>;
};
export default Navigation;