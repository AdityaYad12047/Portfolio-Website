import { BadgeCheck } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper";

const certifications = [
  {
    title: "Internet of Things",
    issuer: "Stanford Online",
    category: "IoT",
  },
  {
    title: "Internet of Things",
    issuer: "Stanford University",
    category: "IoT",
  },
  {
    title: "Cybersecurity",
    issuer: "ICSE",
    category: "Security",
  },
  {
    title: "Ethical Hacking",
    issuer: "Udemy",
    category: "Security",
  },
  {
    title: "Machine Learning",
    issuer: "Udemy",
    category: "AI/ML",
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    category: "Programming",
  },
  {
    title: "Android App Development",
    issuer: "Udemy",
    category: "Mobile",
  },
  {
    title: "Network Security",
    issuer: "ICSE",
    category: "Security",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="card-dark p-8 md:p-12">
          <SlideIn>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary">//</span>
              <span className="section-label">Certifications</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
              Training & Credentials
            </h2>
          </SlideIn>

          <StaggerContainer className="divide-y divide-border">
            {certifications.map((cert, index) => (
              <StaggerItem key={index}>
                <div
                  className="grid grid-cols-[1fr_1fr_100px_50px] gap-4 py-5 items-center hover:bg-muted/50 -mx-4 px-4 transition-all duration-300 group rounded-lg hover:scale-[1.01]"
                >
                  <span className="font-medium group-hover:text-primary transition-colors group-hover:translate-x-2 inline-block transform">{cert.title}</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cert.issuer}</span>
                  <span className="text-sm px-3 py-1 rounded-full border border-border text-muted-foreground text-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                    {cert.category}
                  </span>
                  <span className="text-right text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Verification Note */}
          <SlideIn delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
              <BadgeCheck className="h-5 w-5 text-primary" />
              <span>All certifications available for verification upon request</span>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
