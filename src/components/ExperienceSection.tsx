import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "SEO Intern",
    company: "Sportsdunia",
    period: "Present",
    location: "On-Site",
    description: [
      "Execute off-page SEO strategies and high-quality backlink building",
      "Conduct competitor analysis using Ahrefs and SEMrush",
      "Manage outreach communications for link-building campaigns",
    ],
  },
  {
    title: "Frontend Developer & SEO",
    company: "Amogh",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Developed responsive, SEO-friendly interfaces using React.js and Tailwind CSS",
      "Implemented semantic HTML and optimized meta tags",
      "Performance optimization and structured data integration",
    ],
  },
  {
    title: "Cybersecurity Job Simulation",
    company: "PwC",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Identified and reported security threats including phishing",
      "Completed cybersecurity simulation for PwC Digital Intelligence",
      "Applied integrated defense strategies for client security",
    ],
  },
  {
    title: "Cyber Security Intern",
    company: "Hacktify Cybersecurity",
    period: "Feb 2025 – Mar 2025",
    location: "Remote",
    description: [
      "Applied incident response principles to analyze threats",
      "Utilized WebSecurity tools for defense strategies",
      "Improved threat detection capabilities",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Codsoft",
    period: "Nov 2024 – Jan 2025",
    location: "Remote",
    description: [
      "Completed industry-based projects using MERN stack",
      "Collaborated with a small team on full-stack applications",
    ],
  },
  {
    title: "Android App Development Intern",
    company: "Prasunet",
    period: "Jun 2024 – Jul 2024",
    location: "Remote",
    description: [
      "Developed Android applications using Android Studio and Thunkable",
      "Delivered assigned tasks on schedule with quality",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Professional Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my internships and professional experiences across 
              cybersecurity, web development, and SEO.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <Card className="ml-8 md:ml-0 md:w-1/2 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
