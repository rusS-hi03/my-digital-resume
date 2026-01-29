import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-foreground)/0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium tracking-wide mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Rishika</span>{" "}
            <span className="text-primary">Kumari</span>
          </h1>

          {/* Role */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up animation-delay-200">
            <span className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border">
              Cybersecurity Professional
            </span>
            <span className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border">
              Frontend Developer
            </span>
            <span className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border">
              SEO Specialist
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
            Entry-level cybersecurity professional with hands-on experience in SOC fundamentals, 
            SIEM-based monitoring, incident response, and threat analysis. Passionate about 
            building secure, beautiful web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-600">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:rishikakumari0306@gmail.com">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
