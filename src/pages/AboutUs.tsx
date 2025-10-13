import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Certified Installers",
      description: "Our team consists of fully certified and experienced solar installation professionals committed to excellence.",
    },
    {
      icon: Users,
      title: "Tier-1 Solar Products",
      description: "We use only premium, tier-1 solar panels and equipment from trusted global manufacturers.",
    },
    {
      icon: Headphones,
      title: "Seamless Support",
      description: "From consultation to installation and beyond, we provide comprehensive support every step of the way.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Empowering Australia with Smarter Solar Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Paragon Solar Power is an Australian-owned company providing reliable, 
              high-performance solar energy systems for homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12 text-primary">Our Mission & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/10 hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Commitment to Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're dedicated to reducing carbon footprints and promoting renewable energy across Australia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Quality Installation & Service</h3>
                  <p className="text-muted-foreground">
                    Every installation meets the highest industry standards with meticulous attention to detail.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Customer-First Approach</h3>
                  <p className="text-muted-foreground">
                    Your energy needs are our priority. We tailor solutions that work for your unique situation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12 text-primary">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Start Your Solar Journey Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team for a free quote and discover how solar energy can transform your property.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Get a Free Quote →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;