import { useState, useMemo } from "react";
import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Industry {
  name: string;
  uplift: number;
}

const industries: Industry[] = [
  { name: "Ecommerce", uplift: 18 },
  { name: "SaaS", uplift: 22 },
  { name: "Agencies", uplift: 15 },
  { name: "Financial Services", uplift: 10 },
  { name: "Health & Wellness", uplift: 12 },
  { name: "Education", uplift: 14 },
  { name: "Travel", uplift: 16 },
  { name: "Real Estate", uplift: 9 },
  { name: "B2B Lead Gen", uplift: 20 },
  { name: "Media & Publishing", uplift: 11 },
  { name: "Consumer Apps", uplift: 13 },
];

export default function ROICalculatorModal({ isOpen, onClose }: ROICalculatorModalProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [aov, setAov] = useState(100);

  const results = useMemo(() => {
    const currentConversions = (monthlyVisitors * conversionRate) / 100;
    const currentRevenue = currentConversions * aov;
    
    const upliftPercentage = selectedIndustry.uplift;
    const newConversionRate = conversionRate * (1 + upliftPercentage / 100);
    const newConversions = (monthlyVisitors * newConversionRate) / 100;
    const newRevenue = newConversions * aov;
    
    const additionalMonthly = newRevenue - currentRevenue;
    const additionalYearly = additionalMonthly * 12;

    return {
      uplift: upliftPercentage,
      newConversionRate: newConversionRate.toFixed(2),
      additionalMonthly: additionalMonthly.toFixed(0),
      additionalYearly: additionalYearly.toFixed(0),
    };
  }, [selectedIndustry, monthlyVisitors, conversionRate, aov]);

  const incrementConversionRate = () => {
    if (conversionRate < 20) setConversionRate(Math.min(20, conversionRate + 0.1));
  };

  const decrementConversionRate = () => {
    if (conversionRate > 0.1) setConversionRate(Math.max(0.1, conversionRate - 0.1));
  };

  const incrementAOV = () => {
    if (aov < 5000) setAov(Math.min(5000, aov + 1));
  };

  const decrementAOV = () => {
    if (aov > 1) setAov(Math.max(1, aov - 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with subtle noise texture */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0,0,0,0.44)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'white\' opacity=\'0.04\'/%3E%3C/svg%3E")'
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-card rounded-2xl w-full max-w-[440px] overflow-hidden"
        style={{
          padding: '24px',
          boxShadow: '0px 8px 28px rgba(0,0,0,0.18)'
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '16px' }}>
          <div className="flex items-start justify-between" style={{ marginBottom: '6px' }}>
            <h2 className="font-semibold leading-tight" style={{ fontSize: '22px' }}>
              Estimate Your Potential ROI
            </h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors -mt-1"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-[#6B7280] leading-relaxed" style={{ fontSize: '14px' }}>
            See how much extra revenue Grona's autonomous optimization could unlock for your website.
          </p>
        </div>

        {/* Form Fields */}
        <div style={{ marginTop: '10px' }}>
          {/* Industry Selection */}
          <div style={{ marginBottom: '12px' }}>
            <label className="block font-medium" style={{ fontSize: '14px', marginBottom: '4px' }}>
              Industry
            </label>
            <p className="text-muted-foreground mb-1.5" style={{ fontSize: '12px' }}>
              (Select the category that best matches your website)
            </p>
            <select
              value={selectedIndustry.name}
              onChange={(e) => {
                const industry = industries.find(i => i.name === e.target.value);
                if (industry) setSelectedIndustry(industry);
              }}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ height: '36px' }}
            >
              {industries.map((industry) => (
                <option key={industry.name} value={industry.name}>
                  {industry.name} (Typical uplift: {industry.uplift}%)
                </option>
              ))}
            </select>
          </div>

          {/* Monthly Visitors Slider */}
          <div style={{ marginBottom: '12px' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
              <label className="font-medium" style={{ fontSize: '14px' }}>Monthly Visitors</label>
              <span className="text-sm font-semibold text-primary">
                {monthlyVisitors.toLocaleString()}
              </span>
            </div>
            <p className="text-muted-foreground mb-1.5" style={{ fontSize: '12px' }}>
              (Unique visitors per month)
            </p>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              style={{ height: '4px' }}
            />
          </div>

          {/* Conversion Rate Stepper */}
          <div style={{ marginBottom: '12px' }}>
            <label className="block font-medium" style={{ fontSize: '14px', marginBottom: '4px' }}>
              Current Conversion Rate (%)
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementConversionRate}
                className="rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                style={{ width: '24px', height: '24px' }}
                aria-label="Decrease conversion rate"
              >
                <Minus className="h-3 w-3" />
              </button>
              <input
                type="number"
                value={conversionRate.toFixed(1)}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  if (!isNaN(val) && val >= 0.1 && val <= 20) {
                    setConversionRate(val);
                  }
                }}
                className="w-[70px] px-2 text-center rounded-lg border border-border bg-background text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ height: '32px' }}
                step="0.1"
                min="0.1"
                max="20"
              />
              <button
                onClick={incrementConversionRate}
                className="rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                style={{ width: '24px', height: '24px' }}
                aria-label="Increase conversion rate"
              >
                <Plus className="h-3 w-3" />
              </button>
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          </div>

          {/* AOV Stepper */}
          <div style={{ marginBottom: '16px' }}>
            <label className="block font-medium" style={{ fontSize: '14px', marginBottom: '4px' }}>
              Average Order Value ($)
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementAOV}
                className="rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                style={{ width: '24px', height: '24px' }}
                aria-label="Decrease AOV"
              >
                <Minus className="h-3 w-3" />
              </button>
              <input
                type="number"
                value={aov}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (!isNaN(val) && val >= 1 && val <= 5000) {
                    setAov(val);
                  }
                }}
                className="w-[70px] px-2 text-center rounded-lg border border-border bg-background text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ height: '32px' }}
                step="1"
                min="1"
                max="5000"
              />
              <button
                onClick={incrementAOV}
                className="rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                style={{ width: '24px', height: '24px' }}
                aria-label="Increase AOV"
              >
                <Plus className="h-3 w-3" />
              </button>
              <span className="text-sm text-muted-foreground">$</span>
            </div>
          </div>

          {/* Projected Results */}
          <div 
            className="rounded-[14px]"
            style={{ 
              backgroundColor: '#F9FAFB', 
              padding: '16px',
              marginBottom: '16px'
            }}
          >
            <h3 className="font-semibold" style={{ fontSize: '16px', marginBottom: '4px' }}>
              Projected Impact
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '12px', marginBottom: '12px' }}>
              (Based on typical uplift for your industry)
            </p>

            <div style={{ marginBottom: '12px' }}>
              <p className="text-muted-foreground" style={{ fontSize: '13px', marginBottom: '6px' }}>
                Your site could earn:
              </p>
              <div className="font-bold text-[#16a34a] transition-opacity duration-100" style={{ fontSize: '24px', lineHeight: '1.2' }}>
                +${Number(results.additionalMonthly).toLocaleString()} / month
              </div>
              <div className="font-bold text-[#16a34a] transition-opacity duration-100" style={{ fontSize: '18px', marginTop: '4px' }}>
                +${Number(results.additionalYearly).toLocaleString()} / year
              </div>
            </div>

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <p className="font-semibold" style={{ fontSize: '13px', marginBottom: '8px' }}>
                Breakdown
              </p>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>Expected Uplift:</span>
                  <span className="font-semibold text-[#16a34a] transition-opacity duration-100" style={{ fontSize: '14px' }}>
                    +{results.uplift}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground" style={{ fontSize: '12px' }}>New Conversion Rate:</span>
                  <span className="font-semibold transition-opacity duration-100" style={{ fontSize: '14px' }}>
                    {results.newConversionRate}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-muted-foreground italic" style={{ fontSize: '12px', marginBottom: '20px' }}>
            Actual results vary depending on traffic quality and current site performance.
          </p>

          {/* CTA Button */}
          <Button 
            className="w-full font-medium text-white rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ 
              height: '44px', 
              fontSize: '15px',
              backgroundColor: '#16a34a'
            }}
            asChild
          >
            <a href="/signup">Get Started Free</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
