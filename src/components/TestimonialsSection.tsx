import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Paragon Solar installed a 5kW system on our home. We're saving ₹3,000+ monthly on electricity bills. Professional installation and excellent after-sales service.",
      savings: "₹3,000+ monthly savings",
      system: "5kW Residential System"
    },
    {
      name: "Dr. Priya Sharma",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Amazing experience! The team explained everything clearly, completed installation in 2 days, and our system has been running flawlessly for 2 years.",
      savings: "70% bill reduction",
      system: "3kW Rooftop Solar"
    },
    {
      name: "Vikram Industries",
      location: "Nashik, Maharashtra",
      rating: 5,
      text: "We installed a 100kW system for our factory. ROI achieved in 3.5 years, and now we're saving over ₹50,000 monthly. Highly recommend Paragon Solar!",
      savings: "₹50,000+ monthly savings",
      system: "100kW Commercial System"
    },
    {
      name: "Sunita Patel",
      location: "Surat, Gujarat",
      rating: 5,
      text: "Best decision ever! Our 4kW solar system covers 90% of our electricity needs. The team was professional, and the quality is outstanding.",
      savings: "90% energy independence",
      system: "4kW Home Solar"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real customers who've transformed their energy costs with our solar solutions.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-strong bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-accent"></div>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="font-semibold text-primary text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-secondary font-semibold">
                        {testimonials[currentTestimonial].savings}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].system}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-secondary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "4.9/5", label: "Customer Rating", icon: "⭐" },
            { number: "5000+", label: "Happy Customers", icon: "😊" },
            { number: "98%", label: "Satisfaction Rate", icon: "👍" },
            { number: "24/7", label: "Support Available", icon: "🛠️" }
          ].map((stat, index) => (
            <Card key={index} className="text-center hover-lift border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-secondary mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;