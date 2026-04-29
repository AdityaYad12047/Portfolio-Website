import { Code, Brain, Database, Palette, Cloud, Terminal } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper";

const skillCategories = [
  {
    icon: Terminal,
    title: "Programming Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "PHP", "Kotlin"],
  },
  {
    icon: Code,
    title: "Web Technologies",
    skills: ["React / Angular", "Node.js / Express", "Flask / FastAPI", "HTML / CSS / Tailwind"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning / CNNs", "NLP / Generative AI", "LangChain / LLMOps"],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    skills: ["PostgreSQL / MySQL", "MongoDB", "GitHub / Git", "Power BI / Tableau"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD Pipelines", "Google Analytics"],
  },
  {
    icon: Palette,
    title: "Creative & GenAI Tools",
    skills: ["MidJourney", "ElevenLabs / HeyGen", "Adobe Photoshop", "Premiere Pro"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">//</span>
            <span className="section-label">Skills</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
            Technical Arsenal
          </h2>
        </SlideIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div
                className="card-dark-hover p-6 group h-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/10 border border-transparent hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors group-hover:rotate-6">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 rounded-full border border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground transition-colors bg-background/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
