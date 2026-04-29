import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SlideIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "./ui/motion-wrapper";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aditya.12047@gmail.com",
    href: "mailto:aditya.12047@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9818328911",
    href: "tel:+919818328911",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">//</span>
            <span className="section-label">Contact</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
            Let's Work Together
          </h2>
        </SlideIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <SlideInLeft>
              <div className="card-dark p-8">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
                <StaggerContainer className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-center gap-4 group">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <div className="card-dark p-8">
                <h3 className="font-display text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </SlideInLeft>

            {/* Availability */}
            <SlideInLeft delay={0.4}>
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <div>
                    <span className="font-semibold">Currently Available</span>
                    <p className="text-sm text-muted-foreground">Open for new opportunities</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* Contact Form */}
          <SlideInRight>
            <div className="card-dark p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-border resize-none focus:border-primary transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-full hover:scale-[1.02] transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
