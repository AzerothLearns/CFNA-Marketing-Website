import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 'sarah',
      quote: "CFNA Marketing transformed our online presence completely. Our website traffic increased by 400% and we're getting quality leads daily. Their SEO expertise is unmatched.",
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc.',
      avatar: {
        bg: 'bg-primary/20',
        text: 'text-primary',
        initials: 'SJ'
      }
    },
    {
      id: 'mike',
      quote: "The content creation and social media management services exceeded our expectations. Our engagement rates doubled and brand awareness has skyrocketed.",
      name: 'Mike Chen',
      title: 'Founder, GreenLife Foods',
      avatar: {
        bg: 'bg-accent/20',
        text: 'text-accent',
        initials: 'MC'
      }
    },
    {
      id: 'lisa',
      quote: "Professional, results-driven, and always available. CFNA Marketing helped us dominate our local market through strategic SEO and targeted campaigns.",
      name: 'Lisa Rodriguez',
      title: 'Owner, Rodriguez Law Firm',
      avatar: {
        bg: 'bg-primary/20',
        text: 'text-primary',
        initials: 'LR'
      }
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground" data-testid="testimonials-description">
            Don't just take our word for it - hear from businesses who've experienced remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="sleek-shadow glass-effect border-0" data-testid={`testimonial-${testimonial.id}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent" data-testid={`testimonial-rating-${testimonial.id}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-card-foreground mb-6 italic" data-testid={`testimonial-quote-${testimonial.id}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${testimonial.avatar.bg} ${testimonial.avatar.text} font-semibold text-sm`} data-testid={`testimonial-avatar-${testimonial.id}`}>
                    {testimonial.avatar.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`testimonial-title-${testimonial.id}`}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
