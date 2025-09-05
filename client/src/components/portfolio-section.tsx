import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioSection() {
  const caseStudies = [
    {
      id: 'ecommerce',
      visual: {
        type: 'gradient',
        colors: 'from-primary/20 to-accent/20',
        icon: '🛒',
        pattern: 'diagonal-lines'
      },
      title: 'E-commerce Store Growth',
      description: 'Increased organic traffic by 450% and revenue by 280% for a fashion e-commerce store through comprehensive SEO and content strategy.',
      metrics: [
        { value: '450%', label: 'Traffic Increase', color: 'text-primary' },
        { value: '280%', label: 'Revenue Growth', color: 'text-accent' },
        { value: '6', label: 'Months', color: 'text-primary' }
      ]
    },
    {
      id: 'restaurant',
      visual: {
        type: 'gradient',
        colors: 'from-accent/20 to-primary/20',
        icon: '📍',
        pattern: 'dots'
      },
      title: 'Local Restaurant Chain',
      description: 'Built a strong social media presence resulting in 300% follower growth and 150% increase in foot traffic through targeted campaigns.',
      metrics: [
        { value: '300%', label: 'Follower Growth', color: 'text-primary' },
        { value: '150%', label: 'Foot Traffic', color: 'text-accent' },
        { value: '4', label: 'Months', color: 'text-primary' }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl" data-testid="portfolio-title">
            Success Stories
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground" data-testid="portfolio-description">
            See how we've helped businesses achieve remarkable growth through strategic marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden sleek-shadow glass-effect border-0" data-testid={`case-study-${study.id}`}>
              <div className={`relative w-full h-48 bg-gradient-to-br ${study.visual.colors} flex items-center justify-center`} data-testid={`case-study-visual-${study.id}`}>
                <div className="absolute inset-0 opacity-10">
                  {study.visual.pattern === 'diagonal-lines' && (
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.1)_25%,rgba(0,0,0,.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.1)_75%)] bg-[length:20px_20px]"></div>
                  )}
                  {study.visual.pattern === 'dots' && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  )}
                </div>
                <div className="text-6xl opacity-60">{study.visual.icon}</div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-2 bg-accent/40 rounded-full"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4" data-testid={`case-study-title-${study.id}`}>
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`case-study-description-${study.id}`}>
                  {study.description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {study.metrics.map((metric, index) => (
                    <div key={index} data-testid={`case-study-metric-${study.id}-${index}`}>
                      <div className={`text-2xl font-bold ${metric.color}`} data-testid={`metric-value-${study.id}-${index}`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`metric-label-${study.id}-${index}`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
