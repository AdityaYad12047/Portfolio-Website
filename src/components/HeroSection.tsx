import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { SlideIn, ScaleIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper";
import { MagneticWrapper, ParallaxText, TextReveal } from "./ui/InteractiveEffects";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Large Background Name */}
      <ParallaxText offset={300} className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <h1 className="font-display text-[15vw] md:text-[20vw] font-bold leading-none text-foreground/5 whitespace-nowrap translate-y-[30%]">
          Aditya Yadav
        </h1>
      </ParallaxText>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
              <TextReveal text="Aditya" delay={0} />
              <div className="text-primary mt-2">
                <TextReveal text="Yadav" delay={0.2} />
              </div>
            </div>

            <SlideIn delay={0.4} className="space-y-2">
              <p className="text-xl md:text-2xl font-medium text-foreground">
                AI & Machine Learning Engineer
              </p>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                Full Stack Developer
              </p>
            </SlideIn>

            <SlideIn delay={0.6}>
              <p className="text-muted-foreground max-w-md">
                Building intelligent, scalable applications with Generative AI,
                Deep Learning, and modern web technologies.
              </p>
            </SlideIn>
          </div>

          {/* Profile Image */}
          <ScaleIn delay={0.3} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group perspective-[1000px]">
              <MagneticWrapper strength={15}>
                <div className="w-72 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl group-hover:shadow-primary/20 cursor-pointer">
                  <img
                    src={profilePhoto}
                    alt="Aditya Yadav"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </MagneticWrapper>
              {/* Decorative Border */}
              <div className="absolute -inset-3 border border-border rounded-3xl -z-10 group-hover:border-primary/50 transition-colors duration-500" />
            </div>
          </ScaleIn>
        </div>
      </div>

      {/* Fixed Social Links for Large Screens */}
      <StaggerContainer delayChildren={0.8} staggerChildren={0.1} className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">
        {[
          { icon: Github, href: "https://github.com/AdityaYad12047", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-yadav-7644961aa/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:aditya.12047@gmail.com", label: "Email" },
        ].map((social, index) => (
          <StaggerItem key={index}>
            <MagneticWrapper strength={30}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block p-3 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-primary/20"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            </MagneticWrapper>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
