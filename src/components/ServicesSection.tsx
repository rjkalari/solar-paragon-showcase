import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Battery, Wrench, ArrowRight } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete solar solutions for homes with premium panels, inverters, and 25-year warranty.",
      image: residentialImage,
      features: ["Premium Panels", "25-Year Warranty", "Net Metering", "EMI Options"]
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      description: "Large-scale solar installations for businesses, factories, and industrial complexes.",
      image: commercialImage,
      features: ["High Efficiency", "Custom Design", "ROI Analysis", "Maintenance Support"]
    },
    {
      icon: Battery,
      title: "Batteries & Storage",
      description: "Advanced lithium-ion batteries and energy storage solutions for backup power.",
      image: null,
      features: ["Lithium-ion Tech", "10+ Year Life", "Smart Monitoring", "Grid Backup"]
    },
    {
      icon: Wrench,
      title: "Operations & Maintenance",
      description: "Comprehensive O&M services to ensure optimal performance of your solar system.",
      image: null,
      features: ["24/7 Monitoring", "Preventive Care", "Performance Reports", "Quick Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Our Solar Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solar energy services designed to meet your specific needs, 
            from residential rooftops to large industrial installations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover-lift border-0 shadow-soft hover:shadow-medium bg-white">
                {/* Service Image */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline-solar" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
            <h3 className="heading-sm mb-4">Ready to Go Solar?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free consultation and customized solar solution for your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;