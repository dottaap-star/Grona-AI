import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [aov, setAov] = useState(100);
  const [experiments, setExperiments] = useState(5);

  // Calculate results
  const currentConversions = (visitors * conversionRate) / 100;
  const currentRevenue = currentConversions * aov;

  const upliftLow = 25;
  const upliftHigh = 30;
  
  const newConversionRateLow = conversionRate * (1 + upliftLow / 100);
  const newConversionRateHigh = conversionRate * (1 + upliftHigh / 100);
  
  const newConversionsLow = (visitors * newConversionRateLow) / 100;
  const newConversionsHigh = (visitors * newConversionRateHigh) / 100;
  
  const newRevenueLow = newConversionsLow * aov;
  const newRevenueHigh = newConversionsHigh * aov;
  
  const additionalRevenueLow = newRevenueLow - currentRevenue;
  const additionalRevenueHigh = newRevenueHigh - currentRevenue;
  
  const yearlyAdditionalLow = additionalRevenueLow * 12;
  const yearlyAdditionalHigh = additionalRevenueHigh * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return value.toFixed(2);
  };

  // Calculate bar chart widths
  const maxRevenue = Math.max(currentRevenue, newRevenueHigh);
  const currentBarWidth = (currentRevenue / maxRevenue) * 100;
  const projectedBarWidth = (newRevenueHigh / maxRevenue) * 100;

  return (
    <section className="py-16 bg-muted/20">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Estimate Your Potential Conversion Uplift
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Grona enables rapid ideation and fast iteration. Many teams reach 25–30% 
            higher conversions after running just 4–5 optimization cycles.
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-xl bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Your Current Metrics
              </h3>

              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Monthly Visitors</Label>
                    <span className="text-sm font-semibold text-primary">{formatNumber(visitors)}</span>
                  </div>
                  <Slider
                    value={[visitors]}
                    onValueChange={(value) => setVisitors(value[0])}
                    min={1000}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Conversion Rate (%)</Label>
                    <span className="text-sm font-semibold text-primary">{conversionRate.toFixed(1)}%</span>
                  </div>
                  <Slider
                    value={[conversionRate]}
                    onValueChange={(value) => setConversionRate(value[0])}
                    min={0.5}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Average Order Value ($)</Label>
                    <span className="text-sm font-semibold text-primary">{formatCurrency(aov)}</span>
                  </div>
                  <Slider
                    value={[aov]}
                    onValueChange={(value) => setAov(value[0])}
                    min={10}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Number of Experiments</Label>
                    <span className="text-sm font-semibold text-primary">{experiments}</span>
                  </div>
                  <Slider
                    value={[experiments]}
                    onValueChange={(value) => setExperiments(value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Projected Results</h3>

              {/* Mini Bar Chart */}
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current Revenue</span>
                    <span className="font-semibold">{formatCurrency(currentRevenue)}</span>
                  </div>
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-muted-foreground/40 transition-all duration-300"
                      style={{ width: `${currentBarWidth}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Projected Revenue</span>
                    <span className="font-semibold text-primary">{formatCurrency(newRevenueHigh)}</span>
                  </div>
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${projectedBarWidth}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">
                    Estimated Conversion Uplift
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    +{upliftLow}% – +{upliftHigh}%
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">
                    New Conversion Rate
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {formatPercent(newConversionRateLow)}% – {formatPercent(newConversionRateHigh)}%
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">
                    Additional Monthly Revenue
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(additionalRevenueLow)} – {formatCurrency(additionalRevenueHigh)}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">
                    Additional Yearly Revenue
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {formatCurrency(yearlyAdditionalLow)} – {formatCurrency(yearlyAdditionalHigh)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Actual performance varies. Grona's autonomous optimization loop often 
              delivers even higher improvements depending on page quality and traffic.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
