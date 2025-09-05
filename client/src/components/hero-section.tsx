import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40" data-testid="hero-section">
      <div className="hero-gradient absolute inset-0 opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="hero-text text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl" data-testid="hero-title">
              Grow Your Business with{' '}
              <span className="text-primary">Strategic Marketing</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl" data-testid="hero-description">
              We help businesses dominate online through expert SEO optimization, compelling content creation, and strategic social media management. Transform your digital presence today.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-medium bg-accent text-accent-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl md:py-4 md:text-lg md:px-10"
                  data-testid="hero-cta-primary"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-medium glass-effect hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  data-testid="hero-cta-secondary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl shadow-2xl overflow-hidden" data-testid="hero-visual">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10"></div>
              <div className="absolute top-8 left-8 w-20 h-20 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-12 w-16 h-16 bg-accent/40 rounded-lg rotate-45 animate-bounce"></div>
              <div className="absolute bottom-16 left-16 w-12 h-12 bg-primary/25 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-2 bg-accent/50 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary/70">
                  <div className="text-6xl font-bold mb-2">📈</div>
                  <div className="text-lg font-semibold">Growth Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
