import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, Users, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings with our proven SEO strategies. We optimize your website for maximum visibility and organic traffic growth.',
      features: [
        'Keyword Research & Analysis',
        'On-page Optimization',
        'Technical SEO Audits'
      ],
      iconBg: 'bg-primary',
      iconColor: 'text-primary-foreground'
    },
    {
      id: 'content',
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engage your audience with compelling, high-quality content that drives conversions and builds brand authority across all platforms.',
      features: [
        'Blog Posts & Articles',
        'Video Content Strategy',
        'Email Campaigns'
      ],
      iconBg: 'bg-accent',
      iconColor: 'text-accent-foreground'
    },
    {
      id: 'social',
      icon: Users,
      title: 'Social Media Management',
      description: 'Build a strong social media presence with our strategic content planning, community management, and growth optimization.',
      features: [
        'Content Strategy & Planning',
        'Community Management',
        'Analytics & Reporting'
      ],
      iconBg: 'bg-primary',
      iconColor: 'text-primary-foreground'
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl" data-testid="services-title">
            Our Marketing Services
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground" data-testid="services-description">
            We provide comprehensive digital marketing solutions to help your business thrive online.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className={`card-hover sleek-shadow glass-effect border-0 ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                data-testid={`service-card-${service.id}`}
              >
                <CardContent className="p-8">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${service.iconBg} ${service.iconColor} mb-6`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${service.id}-${featureIndex}`}>
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
