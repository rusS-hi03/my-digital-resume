import { Shield, Code, Search, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "SOC operations, SIEM monitoring, incident response, and threat analysis",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development with React, Next.js, and modern web technologies",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Search engine optimization, backlink strategies, and performance analysis",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in CSE with Cybersecurity specialization, GPA: 8.2",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About Security & Development
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              I'm an entry-level cybersecurity professional pursuing B.Tech in Computer Science 
              with a specialization in Cybersecurity at Central University of Jammu. My journey 
              combines security expertise with full-stack development skills.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Certifications & Training</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                ISC2 CC Certified
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                TryHackMe SOC Training
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                PwC Cybersecurity Simulation
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                LinkedIn Data Analytics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
