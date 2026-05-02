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

          {/* Featured Badges */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <SlideIn delay={0.1}>
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/60 to-purple-600/60 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-card rounded-full p-2 border border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                    <img src="/badges/gssoc-ai.png.png" alt="GSSoC AI Agents Track" className="h-32 md:h-44 w-auto object-contain transform transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </SlideIn>
              <SlideIn delay={0.2}>
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/60 to-purple-600/60 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-card rounded-full p-2 border border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                    <img src="/badges/gssoc-contributor.png.png" alt="GSSoC Contributor" className="h-32 md:h-44 w-auto object-contain transform transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </SlideIn>
              <SlideIn delay={0.3}>
                <div className="group relative cursor-pointer mt-4 md:mt-0 flex items-center">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/60 to-blue-600/60 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-2 border border-border/50 group-hover:border-blue-500/50 transition-colors duration-500">
                    <img src="/badges/gcp-data.png.png" alt="GCP Prepare Data for ML APIs" className="h-28 md:h-36 w-auto object-contain transform transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>

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
