import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-semibold">
            © {currentYear} Aditya Yadav
          </div>

          <div className="text-sm text-muted-foreground">
            AI & ML Engineer • Full Stack Developer
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
