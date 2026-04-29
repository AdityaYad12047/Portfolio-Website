import { GraduationCap, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from "./ui/motion-wrapper";

const education = [
  {
    degree: "MCA in AI & Machine Learning",
    institution: "University of Petroleum & Energy Studies, Dehradun",
    year: "2024 – 2026",
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Galgotias University",
    year: "2018 – 2021",
  },
  {
    degree: "Senior Secondary (Science)",
    institution: "Cambridge Foundation School",
    year: "2018",
  },
  {
    degree: "Secondary Education",
    institution: "Army Public School, Dhaula Kuan",
    year: "2016",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Intro Card */}
        <SlideIn>
          <div className="card-dark p-8 md:p-16 mb-16">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary">//</span>
              <span className="section-label">Intro</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl mb-8">
              I'm a versatile <span className="text-primary">AI & ML Engineer who builds intelligent systems to solve real</span> problems. I focus on clean architecture, sharp decisions, and fast execution.
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mb-8">
              Bringing your vision to life quickly and efficiently—whether
              it's AI applications, web platforms, or data solutions—I've got it covered,
              delivering smooth and effective solutions from start to finish.
            </p>
            
            <Button variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform" asChild>
              <a href="#projects">See my Work</a>
            </Button>
          </div>
        </SlideIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <SlideInLeft>
            <div className="card-dark p-8 h-full">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-primary">//</span>
                <span className="section-label">Education</span>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl font-semibold">Academic Journey</h3>
              </div>

              <StaggerContainer className="space-y-6">
                {education.map((item, index) => (
                  <StaggerItem 
                    key={index} 
                    className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0 hover:bg-white/5 p-4 rounded-xl transition-colors -mx-4"
                  >
                    <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                      {item.year}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold">{item.degree}</h4>
                        {item.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideInLeft>

          {/* Achievements */}
          <SlideInRight>
            <div className="card-dark p-8 h-full">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-primary">//</span>
                <span className="section-label">Achievements</span>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl font-semibold">Recognition</h3>
              </div>

              <StaggerContainer className="space-y-6">
                {[
                  { 
                    title: "Smart India Hackathon 2020", 
                    award: "Runner-up",
                    desc: "National level hackathon organized by Government of India"
                  },
                  { 
                    title: "Hackathon 2019", 
                    award: "Second Runner-up",
                    desc: "Competitive programming and solution development"
                  },
                ].map((achievement, index) => (
                  <StaggerItem key={index}>
                    <div 
                      className="p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 cursor-default bg-card/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🏆</span>
                        <span className="text-primary font-medium">{achievement.award}</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
