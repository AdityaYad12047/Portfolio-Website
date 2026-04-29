import { Brain, Sparkles, Globe, BarChart3, Plug, Eye } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from "./ui/motion-wrapper";

const services = [
  {
    icon: Brain,
    number: "01",
    title: "AI & Machine Learning Solutions",
    description:
      "Custom ML models, predictive analytics, and intelligent systems tailored to your business needs.",
    features: ["Custom ML Models", "Predictive Analytics", "Data Processing"],
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Generative AI Applications",
    description:
      "Harness GPT, LangChain, and cutting-edge AI to automate workflows and enhance user experiences.",
    features: ["GPT Integration", "Content Generation", "AI Chatbots"],
  },
  {
    icon: Globe,
    number: "03",
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development using modern technologies. Responsive and scalable.",
    features: ["React / Next.js", "Node.js / Python", "Cloud Deployment"],
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Data Analytics & Dashboards",
    description:
      "Transform raw data into actionable insights with interactive dashboards and reports.",
    features: ["Interactive Dashboards", "Automated Reports", "Visualization"],
  },
  {
    icon: Plug,
    number: "05",
    title: "API Development & Integration",
    description:
      "Design robust RESTful APIs, integrate third-party services, and optimize system architecture.",
    features: ["REST API Design", "Third-party Integration", "Architecture"],
  },
  {
    icon: Eye,
    number: "06",
    title: "Computer Vision Applications",
    description:
      "Build intelligent vision systems for object detection, classification, and real-time analysis.",
    features: ["Object Detection", "Image Classification", "Real-time Processing"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="card-dark p-8 md:p-12">
          <SlideIn>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary">//</span>
              <span className="section-label">Services</span>
            </div>
          </SlideIn>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Title & First Service Featured */}
            <SlideInLeft>
              <div>
                <div className="number-accent mb-4">01</div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                  {services[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {services[0].description}
                </p>
                <div className="space-y-3">
                  {services[0].features.map((feature, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border group hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors cursor-default">
                      <span className="group-hover:text-primary transition-colors">{feature}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* Right - Other Services */}
            <SlideInRight>
              <StaggerContainer className="space-y-6">
                {services.slice(1).map((service, index) => (
                  <StaggerItem key={index}>
                    <div
                      className="p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-lg group bg-card/30"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl font-display font-bold text-muted-foreground/50 group-hover:text-primary transition-colors">
                          {service.number}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <service.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
};
