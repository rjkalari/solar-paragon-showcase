import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "residential"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank you for your interest!",
      description: "Our solar experts will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyType: "residential"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Offices",
      content: "QLD Head Office: Level 4, 339 Coronation Drive, Milton, QLD 4069",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "07 35234211",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@paragonsolarpower.com.au",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Get Your Free Solar Quote</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to switch to solar? Contact our experts for a free consultation and customized solar solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Request Free Consultation</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our solar experts will contact you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="07 35234211"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your solar requirements..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="solar" size="lg" className="flex-1">
                    Get Free Quote
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline-solar" 
                    size="lg"
                    onClick={() => window.open("https://wa.me/61735234211", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover-lift border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Google Maps Placeholder */}
            <Card className="border-0 shadow-medium">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-sm opacity-80">Google Maps integration will be added</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-to-r from-secondary to-accent border-0 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90">
                  Our solar experts are available for immediate consultation
                </p>
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 07 35234211
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;