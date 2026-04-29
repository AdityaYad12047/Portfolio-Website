import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Cognifyz",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    type: "Internship",
    description: [
      "Built AI-enhanced web applications using Node.js, Flask, MongoDB",
      "Integrated GPT APIs and automation scripts for intelligent features",
      "Optimized backend performance and model outputs for production",
    ],
    technologies: ["Node.js", "Flask", "MongoDB", "GPT API", "Python"],
  },
  {
    title: "Data Analytics Intern",
    company: "British Airways",
    location: "Remote",
    period: "Jun 2023 – Jul 2023",
    type: "Virtual Internship",
    description: [
      "Automated reports with Python & Pandas achieving 40% efficiency boost",
      "Built predictive models for route planning and optimization",
      "Performed data cleaning and visualization with high accuracy",
    ],
    technologies: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 – Aug 2024",
    type: "Freelance",
    description: [
      "Developed AI-integrated full-stack applications for clients",
      "Built chatbots, RAG pipelines, dashboards, and APIs",
      "Delivered end-to-end solutions from design to deployment",
    ],
    technologies: ["React", "Node.js", "Python", "LangChain", "OpenAI"],
  },
  {
    title: "IT Support Intern",
    company: "Hamari Pahchan NGO",
    location: "Delhi, India",
    period: "Nov 2021 – Jul 2022",
    type: "Internship",
    description: [
      "Provided technical support and troubleshooting for staff",
      "Automated documentation processes with Python scripts",
      "Maintained IT infrastructure and systems",
    ],
    technologies: ["Python", "IT Support", "Documentation", "Automation"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="card-dark p-8 md:p-12">
          <SlideIn>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary">//</span>
              <span className="section-label">Experience</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
              Professional Journey
            </h2>
          </SlideIn>

          <StaggerContainer className="space-y-0">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div
                  className="grid md:grid-cols-[200px_1fr] gap-6 py-8 border-b border-border last:border-0 group hover:bg-white/5 -mx-4 px-4 transition-all duration-300 rounded-lg hover:scale-[1.01] hover:shadow-lg"
                >
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground group-hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
