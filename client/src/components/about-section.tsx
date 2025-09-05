import { TrendingUp, Users, Handshake } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 300% increase in organic traffic within 6 months',
      iconBg: 'bg-primary',
      iconColor: 'text-primary-foreground'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with specialized expertise',
      iconBg: 'bg-accent',
      iconColor: 'text-accent-foreground'
    },
    {
      icon: Handshake,
      title: 'Personalized Approach',
      description: 'Custom strategies tailored to your business goals',
      iconBg: 'bg-primary',
      iconColor: 'text-primary-foreground'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="about-title">
              Why Choose CFNA Marketing?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground" data-testid="about-description">
              With over 10 years of experience in digital marketing, we've helped hundreds of businesses achieve remarkable growth through strategic online marketing initiatives.
            </p>
            
            <div className="mt-10 space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`about-feature-${index}`}>
                    <div className={`flex items-center justify-center h-8 w-8 rounded-lg ${feature.iconBg} ${feature.iconColor} flex-shrink-0`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground" data-testid={`about-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`about-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative w-full h-80 bg-gradient-to-tr from-secondary via-background to-muted rounded-2xl shadow-xl overflow-hidden" data-testid="about-visual">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="absolute top-6 left-6 w-32 h-6 bg-primary/80 rounded-full"></div>
              <div className="absolute top-16 left-6 w-24 h-6 bg-accent/60 rounded-full"></div>
              <div className="absolute top-26 left-6 w-28 h-6 bg-primary/40 rounded-full"></div>
              <div className="absolute top-6 right-6 w-20 h-20 border-4 border-primary/30 rounded-full flex items-center justify-center">
                <div className="text-2xl">🎯</div>
              </div>
              <div className="absolute bottom-8 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-primary/20 rounded-lg flex items-end justify-center pb-2">
                    <div className="text-xs text-primary font-bold">300%</div>
                  </div>
                  <div className="h-24 bg-accent/20 rounded-lg flex items-end justify-center pb-2">
                    <div className="text-xs text-accent font-bold">450%</div>
                  </div>
                  <div className="h-20 bg-primary/20 rounded-lg flex items-end justify-center pb-2">
                    <div className="text-xs text-primary font-bold">280%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
