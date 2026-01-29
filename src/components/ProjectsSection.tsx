import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Car, LucideIcon } from "lucide-react";

interface Project {
  icon: LucideIcon;
  title: string;
  period: string;
  description: string;
  tags: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    icon: Car,
    title: "Campus Vehicle Access Management System (CVAMS)",
    period: "Sep 2024 – Dec 2024",
    description:
      "An automated system designed to detect vehicle number plates and manage the entry and exit of vehicles on a college campus. Utilizes advanced image recognition and machine learning technologies for secure and efficient vehicle tracking.",
    tags: ["Machine Learning", "Image Recognition", "Python", "Security"],
    featured: true,
  },
  {
    icon: Shield,
    title: "Authentication-Based Encryption Framework",
    period: "Present",
    description:
      "A cybersecurity project to design an algorithm which ensures authenticity in the encryption process itself. Building a novel approach to combine authentication and encryption for enhanced security.",
    tags: ["Cybersecurity", "Cryptography", "Algorithm Design", "Research"],
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing projects that combine cybersecurity expertise with 
              practical software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50"
              >
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)]" />
                  <project.icon className="w-20 h-20 text-primary/50 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <CardContent className="p-6">
                  {/* Period Badge */}
                  <Badge variant="outline" className="mb-3 text-xs">
                    {project.period}
                  </Badge>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
