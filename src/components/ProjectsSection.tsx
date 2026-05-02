import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideIn, StaggerContainer, StaggerItem, ScaleIn } from "./ui/motion-wrapper";
import { TiltCard } from "./ui/InteractiveEffects";

const projects = [
  {
    year: "2026",
    title: "Decentralized Identity (DID) Authentication System with AI Fraud Detection",
    description:
      "Architected a multi-tier distributed system with wallet-based DID authentication, on-chain DID storage, and real-time fraud detection using Random Forest.",
    technologies: ["Node.js", "Flask", "Solidity", "React", "Random Forest"],
    featured: true,
    github: "https://github.com/AdityaYad12047",
  },
  {
    year: "2025",
    title: "MedAI – Multi-Modal Diagnostic Engine",
    description:
      "AI-driven healthcare system combining vitals, imaging, PDFs, and clinical text using ML models and multimodal AI for ICU risk prediction.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NLP", "Flask"],
    featured: true,
    github: "https://github.com/AdityaYad12047/MED-AI-diagnostic-engine",
  },
  {
    year: "2025",
    title: "AI Story Generator System",
    description:
      "Automated AI story video generation pipeline using GPT for narrative, MidJourney for imagery, and AI voiceovers.",
    technologies: ["GPT API", "MidJourney", "ElevenLabs", "Python"],
    featured: true,
    github: "https://github.com/AdityaYad12047/ai-growth-launchpad",
  },
  {
    year: "2024",
    title: "Heart Rate & Emotion Detection",
    description:
      "Real-time biometric and emotion detection system using TensorFlow, OpenCV, and GUI visualization for health monitoring.",
    technologies: ["TensorFlow", "OpenCV", "Python", "Deep Learning"],
    featured: true,
    github: "https://github.com/AdityaYad12047/heart-rate-emotion-detector",
  },
  {
    year: "2023",
    title: "AI Growth Launchpad",
    description:
      "Complete platform featuring landing pages, analytics dashboards, automation workflows, and A/B testing.",
    technologies: ["React", "Node.js", "MongoDB", "Analytics"],
  },
  {
    year: "2023",
    title: "Backend Scoring API",
    description:
      "Django REST API with optimized schemas, caching layers, and intelligent routing.",
    technologies: ["Django", "REST API", "PostgreSQL", "Redis"],
  },
  {
    year: "2022",
    title: "Hospital Management System",
    description:
      "Full-stack platform with authentication, appointments, billing, and medical records.",
    technologies: ["React", "Node.js", "MySQL", "Express"],
  },
  {
    year: "2022",
    title: "Object Detection Software",
    description:
      "Real-time object detection engine with high accuracy for computer vision applications.",
    technologies: ["OpenCV", "YOLO", "Python", "TensorFlow"],
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative perspective-[2000px]">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">//</span>
            <span className="section-label">Portfolio</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
            Featured Projects
          </h2>
        </SlideIn>

        {/* Featured Projects Grid */}
        <StaggerContainer className="grid lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={index}>
              <TiltCard>
                <div
                  className="card-dark p-8 group h-full flex flex-col hover:border-primary/30 transition-colors shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">({project.year})</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground transition-colors bg-background/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                      asChild
                    >
                      <a
                        href={project.github || "https://github.com/AdityaYad12047"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other Projects Table */}
        <ScaleIn delay={0.2}>
          <div className="card-dark overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <div className="p-6 border-b border-border bg-card/50">
              <h3 className="font-display text-xl font-semibold">More Projects</h3>
            </div>
            <StaggerContainer className="divide-y divide-border">
              {otherProjects.map((project, index) => (
                <StaggerItem key={index}>
                  <div
                    className="grid grid-cols-[80px_1fr_1fr_50px] md:grid-cols-[100px_1fr_1fr_100px] gap-4 p-6 items-center hover:bg-muted/50 transition-colors group cursor-pointer"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{project.year}</span>
                    <span className="font-medium group-hover:text-primary transition-colors group-hover:translate-x-2 inline-block transform duration-300">{project.title}</span>
                    <span className="text-sm text-muted-foreground hidden md:block group-hover:text-foreground transition-colors">
                      {project.technologies.slice(0, 3).join(", ")}
                    </span>
                    <span className="text-right">
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary inline-block transition-colors group-hover:scale-125 group-hover:rotate-12" />
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};
