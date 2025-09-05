import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 64;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 navbar-blur border-b border-border" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                data-testid="logo"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">CF</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold text-primary leading-none">CFNA</span>
                  <span className="text-xs text-muted-foreground font-medium leading-none">MARKETING</span>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === '/' ? 'text-primary' : ''
                }`}
                data-testid="nav-home"
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === '/services' ? 'text-primary' : ''
                }`}
                data-testid="nav-services"
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === '/about' ? 'text-primary' : ''
                }`}
                data-testid="nav-about"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === '/portfolio' ? 'text-primary' : ''
                }`}
                data-testid="nav-portfolio"
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === '/testimonials' ? 'text-primary' : ''
                }`}
                data-testid="nav-testimonials"
              >
                Testimonials
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:opacity-90" data-testid="nav-contact">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link
                href="/"
                className={`block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary ${
                  location === '/' ? 'text-primary' : ''
                }`}
                data-testid="mobile-nav-home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary ${
                  location === '/services' ? 'text-primary' : ''
                }`}
                data-testid="mobile-nav-services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary ${
                  location === '/about' ? 'text-primary' : ''
                }`}
                data-testid="mobile-nav-about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className={`block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary ${
                  location === '/portfolio' ? 'text-primary' : ''
                }`}
                data-testid="mobile-nav-portfolio"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className={`block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary ${
                  location === '/testimonials' ? 'text-primary' : ''
                }`}
                data-testid="mobile-nav-testimonials"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Button asChild className="w-full mt-2 bg-primary text-primary-foreground hover:opacity-90" data-testid="mobile-nav-contact">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
