import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Zap, Building2, Wrench, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Tailored solar solutions for homes of all sizes, helping you reduce electricity bills and increase property value.",
      systems: [
        { size: "6.6kW Solar System", details: "Perfect for average households" },
        { size: "10.3kW Solar System", details: "Ideal for larger homes" },
        { size: "13kW Solar System", details: "Maximum residential capacity" },
      ],
      color: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Hybrid Solar",
      description: "Combine solar panels with battery storage for energy independence and backup power during outages.",
      systems: [
        { size: "Solar + Battery", details: "Store excess energy for later use" },
        { size: "Grid Connectivity", details: "Stay connected with feed-in tariffs" },
        { size: "Backup Power", details: "Protection during blackouts" },
      ],
      color: "from-accent to-secondary",
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      description: "Scalable solar energy systems designed for businesses, reducing operational costs and carbon footprint.",
      systems: [
        { size: "30kW Solar System", details: "Small to medium businesses" },
        { size: "50kW Solar System", details: "Large commercial operations" },
        { size: "100kW Solar System", details: "Industrial-scale installations" },
      ],
      color: "from-primary to-primary-light",
    },
    {
      icon: Wrench,
      title: "Solar Services",
      description: "Comprehensive maintenance and support to keep your solar system performing at peak efficiency.",
      systems: [
        { size: "Professional Installation", details: "CEC-accredited installers" },
        { size: "System Maintenance", details: "Regular cleaning and checks" },
        { size: "Performance Monitoring", details: "Real-time system tracking" },
      ],
      color: "from-primary-light to-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-light to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-4">Our Solar Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Powering Homes & Businesses with Trusted Solar Expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="pt-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Systems List */}
                  <div className="space-y-3 mb-6">
                    {service.systems.map((system, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-primary">{system.size}</p>
                          <p className="text-sm text-muted-foreground">{system.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant="solar" className="w-full group-hover:scale-105 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team of solar experts is ready to design a custom solution for your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;