import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Sun, Zap, DollarSign, TrendingUp, MessageCircle } from "lucide-react";

// Solar production data by city (kWh per kW per year)
const kwhPerKwPerYear: { [key: string]: number } = {
  Sydney: 1450,
  Melbourne: 1350,
  Brisbane: 1600,
  Perth: 1750,
  Adelaide: 1700,
  Hobart: 1200,
};

const SolarCalculator = () => {
  // Form state
  const [city, setCity] = useState<string>("Brisbane");
  const [systemSize, setSystemSize] = useState<number>(6.6);
  const [monthlyBill, setMonthlyBill] = useState<number>(200);
  const [feedInTariff, setFeedInTariff] = useState<number>(0.08);
  const [retailTariff, setRetailTariff] = useState<number>(0.35);
  const [selfConsumption, setSelfConsumption] = useState<number>(45);

  // Results state
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState({
    annualProduction: 0,
    annualSavings: 0,
    paybackYears: 0,
    systemCost: 0,
  });

  // Calculate savings
  const calculateSavings = () => {
    const annualProduction = systemSize * kwhPerKwPerYear[city] * 0.8;
    const selfConsumed = annualProduction * (selfConsumption / 100);
    const exported = annualProduction - selfConsumed;
    const annualSavings = selfConsumed * retailTariff + exported * feedInTariff;
    const systemCost = systemSize * 1000;
    const paybackYears = systemCost / annualSavings;

    setResults({
      annualProduction: Math.round(annualProduction),
      annualSavings: Math.round(annualSavings),
      paybackYears: parseFloat(paybackYears.toFixed(1)),
      systemCost: Math.round(systemCost),
    });

    setShowResults(true);
  };

  return (
    <section id="solar-calculator" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <Sun className="w-64 h-64 text-accent" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <Zap className="w-48 h-48 text-secondary" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center bg-accent/10 rounded-full px-6 py-2 mb-4">
            <Calculator className="h-5 w-5 text-accent mr-2" />
            <span className="text-sm font-semibold text-accent-foreground">Free Solar Calculator</span>
          </div>
          <h2 className="heading-lg text-primary mb-4">
            Estimate Your Solar Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find out how much you can save each year by switching to solar power.
          </p>
        </div>

        {/* Calculator Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Input Form */}
          <Card className="shadow-strong hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Calculator className="h-5 w-5 mr-2 text-secondary" />
                Your Details
              </CardTitle>
              <CardDescription>
                Enter your information to calculate potential savings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* City Selection */}
              <div className="space-y-2">
                <Label htmlFor="city">City / Location</Label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sydney">Sydney</SelectItem>
                    <SelectItem value="Melbourne">Melbourne</SelectItem>
                    <SelectItem value="Brisbane">Brisbane</SelectItem>
                    <SelectItem value="Perth">Perth</SelectItem>
                    <SelectItem value="Adelaide">Adelaide</SelectItem>
                    <SelectItem value="Hobart">Hobart</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* System Size */}
              <div className="space-y-2">
                <Label htmlFor="systemSize">System Size (kW)</Label>
                <Input
                  id="systemSize"
                  type="number"
                  step="0.1"
                  value={systemSize}
                  onChange={(e) => setSystemSize(parseFloat(e.target.value) || 0)}
                  placeholder="6.6"
                />
              </div>

              {/* Monthly Bill */}
              <div className="space-y-2">
                <Label htmlFor="monthlyBill">Average Monthly Electricity Bill ($)</Label>
                <Input
                  id="monthlyBill"
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(parseFloat(e.target.value) || 0)}
                  placeholder="200"
                />
              </div>

              {/* Feed-in Tariff */}
              <div className="space-y-2">
                <Label htmlFor="feedInTariff">Feed-in Tariff ($/kWh)</Label>
                <Input
                  id="feedInTariff"
                  type="number"
                  step="0.01"
                  value={feedInTariff}
                  onChange={(e) => setFeedInTariff(parseFloat(e.target.value) || 0)}
                  placeholder="0.08"
                />
              </div>

              {/* Retail Tariff */}
              <div className="space-y-2">
                <Label htmlFor="retailTariff">Retail Tariff ($/kWh)</Label>
                <Input
                  id="retailTariff"
                  type="number"
                  step="0.01"
                  value={retailTariff}
                  onChange={(e) => setRetailTariff(parseFloat(e.target.value) || 0)}
                  placeholder="0.35"
                />
              </div>

              {/* Self-Consumption Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Self-Consumption (%)</Label>
                  <span className="text-sm font-semibold text-primary">{selfConsumption}%</span>
                </div>
                <Slider
                  value={[selfConsumption]}
                  onValueChange={(value) => setSelfConsumption(value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Calculate Button */}
              <Button
                onClick={calculateSavings}
                variant="solar"
                size="lg"
                className="w-full"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          {/* Right: Results Summary */}
          <div className="space-y-6">
            {showResults ? (
              <div className="space-y-4 animate-fade-in">
                {/* Annual Production */}
                <Card className="shadow-medium hover-lift border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Estimated Annual Production</p>
                        <p className="text-3xl font-bold text-accent">
                          {results.annualProduction.toLocaleString()} <span className="text-lg">kWh</span>
                        </p>
                      </div>
                      <Zap className="h-10 w-10 text-accent" />
                    </div>
                  </CardContent>
                </Card>

                {/* Annual Savings */}
                <Card className="shadow-medium hover-lift border-l-4 border-l-secondary">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Estimated Annual Savings</p>
                        <p className="text-3xl font-bold text-secondary">
                          ${results.annualSavings.toLocaleString()}
                        </p>
                      </div>
                      <DollarSign className="h-10 w-10 text-secondary" />
                    </div>
                  </CardContent>
                </Card>

                {/* Payback Period */}
                <Card className="shadow-medium hover-lift border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                        <p className="text-3xl font-bold text-primary">
                          {results.paybackYears} <span className="text-lg">years</span>
                        </p>
                      </div>
                      <TrendingUp className="h-10 w-10 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                {/* System Cost */}
                <Card className="shadow-medium hover-lift bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">System Cost Estimate</p>
                        <p className="text-3xl font-bold text-primary">
                          ${results.systemCost.toLocaleString()}
                        </p>
                      </div>
                      <Sun className="h-10 w-10 text-accent" />
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Button */}
                <Card className="shadow-strong bg-gradient-to-br from-secondary to-accent text-white">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-2">Ready to Save?</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Get a free consultation with our solar experts today
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-white/90 border-0"
                      onClick={() => window.open('https://wa.me/61735234211', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Get Free Solar Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="shadow-medium border-2 border-dashed border-muted-foreground/30 h-full flex items-center justify-center min-h-[400px]">
                <CardContent className="text-center py-12">
                  <Sun className="h-20 w-20 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    Your Results Will Appear Here
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and click "Calculate Savings" to see your potential solar savings
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            * Estimates are indicative only. Actual savings depend on system size, location, tariff rates, 
            energy consumption patterns, and weather conditions. This calculator provides approximate values 
            for planning purposes. For accurate quotes and assessments, please contact our team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
