import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solar technology and smart energy solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "25-year warranties and proven track record of excellence"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support from consultation to post-installation"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Certified panels and components from global leaders"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "MNRE Approved",
    "Electrical License",
    "BIS Certified Products",
    "Make in India Partner"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">About Paragon Solar Power</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading India's solar revolution with innovative, reliable, and affordable clean energy solutions 
            for over 15 years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <div>
            <h3 className="heading-sm text-primary mb-6">Our Story & Mission</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2008 with a vision to make solar energy accessible to every Indian household and business, 
                Paragon Solar Power has grown to become one of the most trusted names in renewable energy.
              </p>
              <p>
                Our mission is simple: to accelerate India's transition to clean energy through innovative solar 
                solutions that are reliable, affordable, and backed by world-class service.
              </p>
              <p>
                With over 5,000 successful installations across residential, commercial, and industrial sectors, 
                we've helped our customers save millions in electricity costs while contributing to a cleaner environment.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Democratizing solar energy access across India through innovative, 
                    reliable, and affordable solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    A solar-powered India where clean energy is the primary source 
                    of electricity for every home and business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values & Certifications */}
          <div>
            {/* Core Values */}
            <h3 className="heading-sm text-primary mb-6">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Certifications & Approvals</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">50MW+</div>
                <div className="text-sm text-muted-foreground">Installed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;