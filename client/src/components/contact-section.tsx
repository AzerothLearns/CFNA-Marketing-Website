import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '(555) 123-4567',
      bgColor: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@cfnamarketing.com',
      bgColor: 'bg-accent',
      textColor: 'text-accent-foreground'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-6PM',
      bgColor: 'bg-primary',
      textColor: 'text-primary-foreground'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl" data-testid="contact-title">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground" data-testid="contact-description">
            Let's discuss how we can help you achieve your marketing goals. Get a free consultation today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="sleek-shadow glass-effect border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Let's Start Your Success Story
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Ready to transform your digital presence? Send us an email and let's discuss how we can help grow your business.
                  </p>
                </div>
                
                <a
                  href="mailto:hello@cfnamarketing.com?subject=Marketing Consultation Request"
                  className="inline-flex items-center justify-center py-4 px-8 text-lg font-medium bg-accent text-accent-foreground hover:opacity-90 transition-all duration-200 rounded-lg sleek-shadow"
                  data-testid="mailto-button"
                >
                  Send Us an Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} data-testid={`contact-info-${index}`}>
                        <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${info.bgColor} ${info.textColor} mx-auto mb-3`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground" data-testid={`contact-info-title-${index}`}>
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`contact-info-details-${index}`}>
                          {info.info}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
