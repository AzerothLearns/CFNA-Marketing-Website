import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
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
  };

  const services = [
    { name: 'SEO Optimization', href: '/services' },
    { name: 'Content Creation', href: '/services' },
    { name: 'Social Media Management', href: '/services' },
    { name: 'Digital Strategy', href: '/services' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4" data-testid="footer-logo">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-none">CFNA</span>
                <span className="text-xs text-gray-300 font-medium leading-none">MARKETING</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md" data-testid="footer-description">
              Your trusted partner for SEO optimization, content creation, and social media management. Let's grow your business together.
            </p>
            <div className="text-gray-300 mb-6" data-testid="footer-address">
              <p className="text-sm">📍 København S, Denmark</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                    aria-label={social.label}
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition-colors duration-200 text-left"
                    data-testid={`footer-service-${index}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-200 text-left"
                    data-testid={`footer-company-${index}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            © 2024 CFNA Marketing. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
