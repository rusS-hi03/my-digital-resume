import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Wrench, Shield, Languages, LucideIcon } from "lucide-react";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Python", "SQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Google Sheets", "Chrome DevTools", "Android Studio", "Thunkable"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["SIEM", "EDR", "SOAR", "MITRE ATT&CK", "Incident Response", "Threat Analysis"],
  },
  {
    icon: Languages,
    title: "Other Skills",
    skills: ["SEO", "Prompt Engineering", "Data Visualization", "Logical Thinking", "Detail-oriented"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend development, cybersecurity, 
              and data analysis.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex justify-center gap-4">
              <span className="px-6 py-3 bg-background rounded-xl border border-border">
                <span className="font-medium">Hindi</span>
                <span className="text-muted-foreground text-sm ml-2">Native</span>
              </span>
              <span className="px-6 py-3 bg-background rounded-xl border border-border">
                <span className="font-medium">English</span>
                <span className="text-muted-foreground text-sm ml-2">Conversational</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
