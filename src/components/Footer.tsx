import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import paragonLogo from "@/assets/paragon-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Certifications", href: "#certifications" },
    ],
    services: [
      { label: "Residential Solar", href: "#services" },
      { label: "Commercial Solar", href: "#services" },
      { label: "Industrial Solar", href: "#services" },
      { label: "Maintenance", href: "#services" },
    ],
    resources: [
      { label: "Solar Calculator", href: "#calculator" },
      { label: "Financing Options", href: "#financing" },
      { label: "Government Subsidies", href: "#subsidies" },
      { label: "Blog", href: "#blog" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Support Center", href: "#support" },
      { label: "Warranty", href: "#warranty" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={paragonLogo} 
                alt="Paragon Solar Power Logo" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">Paragon Solar Power</h3>
                <p className="text-sm opacity-80">Pty Ltd</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading Australia's solar revolution with innovative, reliable, and affordable clean energy 
              solutions. Join thousands of satisfied customers who've made the switch to solar.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">07 35234211</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">info@paragonsolarpower.com.au</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <div><strong>QLD Head Office:</strong> Level 4, 339 Coronation Drive, Milton, QLD 4069</div>
                  <div><strong>Victoria Office:</strong> 16 Cotham Rd, Kew VIC 3101</div>
                  <div><strong>WA Office:</strong> Level 1, 162 Grand Boulevard, Joondalup WA 6027</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md">
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get the latest solar insights, government updates, and special offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 Paragon Solar Power Pty Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;