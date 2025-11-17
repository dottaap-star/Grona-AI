import { Check, Zap, Bot, Target, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import AICreditsTooltipNew from "./AICreditsTooltipNew";

interface FeatureGroup {
  title: string;
  features: string[];
}

interface PricingCardProps {
  name: string;
  price: string | number;
  priceAnnual?: string | number;
  description: string;
  targetAudience?: string;
  featureGroups: FeatureGroup[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  isAnnual: boolean;
}

const getFeatureIcon = (title: string) => {
  if (title.includes("Optimization Power")) return Zap;
  if (title.includes("AI Agents")) return Bot;
  if (title.includes("Personalization")) return Target;
  if (title.includes("Integrations")) return Plug;
  return null;
};

export default function PricingCard({
  name,
  price,
  priceAnnual,
  description,
  targetAudience,
  featureGroups,
  ctaText,
  ctaLink,
  isPopular = false,
  isAnnual,
}: PricingCardProps) {
  const displayPrice = isAnnual && priceAnnual ? priceAnnual : price;
  const isEnterprise = typeof displayPrice === "string" && displayPrice === "Custom";

  return (
    <div
      className={`relative flex flex-col h-full rounded-lg border bg-card transition-all duration-300 ${
        isPopular
          ? "border-[#16a34a] bg-[#16a34a]/[0.05] hover:-translate-y-0.5"
          : "border-border hover:-translate-y-0.5"
      }`}
      style={{
        padding: '24px',
        borderRadius: '14px',
        borderWidth: isPopular ? '2px' : '1px',
        boxShadow: isPopular 
          ? '0px 6px 18px rgba(0,0,0,0.12)' 
          : '0px 1px 3px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = isPopular
          ? '0px 8px 24px rgba(0,0,0,0.14)'
          : '0px 4px 14px rgba(0,0,0,0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = isPopular
          ? '0px 6px 18px rgba(0,0,0,0.12)'
          : '0px 1px 3px rgba(0,0,0,0.08)';
      }}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div style={{ marginBottom: '12px' }}>
          {isEnterprise ? (
            <div className="text-4xl font-bold">
              Custom
            </div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span 
                className="font-bold"
                style={{ 
                  fontSize: isPopular ? '32px' : '32px',
                  fontWeight: 700
                }}
              >
                ${displayPrice}
              </span>
              <span className="text-muted-foreground">/mo</span>
            </div>
          )}
        </div>
        {targetAudience && (
          <p className="text-sm font-medium text-foreground/80 mb-2">{targetAudience}</p>
        )}
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-6 mb-8 flex-grow">
        {featureGroups.map((group, idx) => {
          const Icon = getFeatureIcon(group.title);
          return (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-3">
                {Icon && (
                  <Icon 
                    className="text-muted-foreground" 
                    style={{ width: '18px', height: '18px' }}
                    strokeWidth={1.5} 
                  />
                )}
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {group.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {group.features.map((feature, featureIdx) => {
                  const hasAICredits = feature.toLowerCase().includes("ai credit");
                  return (
                    <li key={featureIdx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="flex items-center gap-1">
                        {feature}
                        {hasAICredits && <AICreditsTooltipNew />}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <Button
        className={`w-full ${isPopular ? "shadow-md hover:shadow-lg" : ""}`}
        variant={isPopular ? "default" : "outline"}
        asChild
      >
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </div>
  );
}
