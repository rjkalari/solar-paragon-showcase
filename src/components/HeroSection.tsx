import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="heading-xl text-white mb-6">
              Powering Homes & Businesses with 
              <span className="text-accent"> Clean Energy</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sustainable, affordable, and efficient solar solutions for a brighter future. 
              Join thousands of satisfied customers who've made the switch to clean energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="solar" size="lg" className="group">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-1">5000+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-1">50MW+</div>
                <div className="text-white/80 text-sm">Energy Generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Solar Calculator Card */}
        <div className="absolute bottom-10 right-10 hidden xl:block">
          <div className="bg-white rounded-lg shadow-strong p-6 max-w-sm">
            <div className="flex items-center mb-4">
              <Calculator className="h-6 w-6 text-secondary mr-2" />
              <h3 className="font-semibold text-primary">Solar Calculator</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Calculate your potential savings with solar energy
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;