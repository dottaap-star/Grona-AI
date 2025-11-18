import { useState } from "react";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/PricingCard";
import OptimizationLoop from "@/components/OptimizationLoop";
import ROICalculatorModal from "@/components/ROICalculatorModal";
import ComparisonTable from "@/components/ComparisonTable";
import Integrations from "@/components/Integrations";
import FAQ from "@/components/FAQ";
import { APP_LOGO } from "@/const";

const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    priceAnnual: 0,
    targetAudience: "Perfect for small teams testing AI optimization",
    description: "Get started with autonomous optimization",
    featureGroups: [
      {
        title: "Optimization Power",
        features: ["1 Active Optimization", "1k monthly pageviews"],
      },
      {
        title: "AI Agents & Generators",
        features: ["Basic issue detection", "500 monthly AI credits"],
      },
      {
        title: "Personalization",
        features: ["None"],
      },
      {
        title: "Integrations + Support",
        features: ["Visual no-code editor", "Email support (72h)"],
      },
    ],
    ctaText: "Start Free — No Credit Card",
    ctaLink: "/signup?plan=starter",
  },
  {
    name: "Growth",
    price: 25,
    priceAnnual: 21,
    targetAudience: "For growing businesses scaling conversion efforts",
    description: "Most popular for high-growth teams",
    featureGroups: [
      {
        title: "Optimization Power",
        features: ["3 Active Optimizations", "15k pageviews"],
      },
      {
        title: "AI Agents & Generators",
        features: [
          "Drop-off pattern analysis",
          "Copy/CTA generator",
          "1500 AI credits",
        ],
      },
      {
        title: "Personalization",
        features: ["Basic segmentation (new/returning)"],
      },
      {
        title: "Integrations + Support",
        features: [
          "GA4 + Clarity + HubSpot",
          "Priority email/chat (24–48h)",
        ],
      },
    ],
    ctaText: "Get Started",
    ctaLink: "/signup?plan=growth",
    isPopular: true,
  },
  {
    name: "Scale",
    price: 40,
    priceAnnual: 33,
    targetAudience: "Advanced features for high-traffic websites",
    description: "For teams running complex experiments",
    featureGroups: [
      {
        title: "Optimization Power",
        features: ["10 Active Optimizations", "30k pageviews"],
      },
      {
        title: "AI Agents & Generators",
        features: [
          "Full multi-agent optimization loop",
          "Copy + Layout + Offer variations",
          "3500 AI credits",
        ],
      },
      {
        title: "Personalization",
        features: ["Advanced (UTM, Geo, Device, Behavioral)"],
      },
      {
        title: "Integrations + Support",
        features: [
          "GA4 + Clarity + HubSpot",
          "Priority chat (<12h)",
          "Multi-device consistency",
        ],
      },
    ],
    ctaText: "Get Started",
    ctaLink: "/signup?plan=scale",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceAnnual: "Custom",
    targetAudience: "Custom solutions for large organizations",
    description: "Dedicated support and custom features",
    featureGroups: [
      {
        title: "Optimization Power",
        features: ["Unlimited active optimizations", "Unlimited pageviews"],
      },
      {
        title: "AI Agents & Generators",
        features: [
          "Unlimited AI credits",
          "Custom AI model fine-tuning",
          "Dedicated AI agents",
        ],
      },
      {
        title: "Personalization",
        features: ["Predictive personalization", "Custom segments + API"],
      },
      {
        title: "Integrations + Support",
        features: [
          "All integrations",
          "Dedicated account manager",
          "SLA + priority support",
          "Custom integrations",
        ],
      },
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact-sales",
  },
];

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="Grona" className="h-8 w-auto" />
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-foreground"
            >
              Pricing
            </a>
            <a
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <Button variant="outline" size="sm" asChild>
              <a href="/login">Log In</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with exact spacing */}
      <section 
        className="relative bg-background overflow-hidden"
        style={{ paddingTop: '52px', paddingBottom: '24px' }}
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40" />
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto">
            Optimize faster with AI.
          </h1>
          
          {/* Uplift line with exact styling */}
          <div 
            className="inline-flex items-center justify-center px-4"
            style={{ marginTop: '12px', marginBottom: '12px' }}
          >
            <p 
              className="font-medium"
              style={{ 
                fontSize: '18px', 
                lineHeight: '26px', 
                fontWeight: 500,
                color: '#4B5563'
              }}
            >
              Most teams see meaningful lift after 4–5 experiments — often reaching 25–30% higher conversions.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4" style={{ marginBottom: '16px' }}>
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                !isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-muted/80"
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-primary rounded-full transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </span>
            <span className="ml-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              Save 17% annually
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid with exact spacing */}
      <section className="bg-background" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="transition-all duration-300"
              >
                <PricingCard
                  key={idx}
                  name={plan.name}
                  price={plan.price}
                  priceAnnual={plan.priceAnnual}
                  description={plan.description}
                  targetAudience={plan.targetAudience}
                  featureGroups={plan.featureGroups}
                  ctaText={plan.ctaText}
                  ctaLink={plan.ctaLink}
                  isPopular={plan.isPopular}
                  isAnnual={isAnnual}
                />
              </div>
            ))}
          </div>

          {/* ROI Calculator Button with exact spacing */}
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsCalculatorOpen(true)}
              className="text-base"
            >
              Estimate Your Potential ROI
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <ROICalculatorModal 
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Optimization Loop - immediately after pricing */}
      <OptimizationLoop />

      {/* Integrations */}
      <Integrations />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ */}
      <FAQ />

      {/* Footer CTA with exact spacing */}
      <section className="bg-muted/30" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start optimizing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join teams using Grona to accelerate their optimization—no credit
            card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/signup">Get Started Free</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact-sales">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with exact spacing */}
      <footer className="border-t border-border bg-background" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/docs" className="hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-foreground">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 Grona AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
