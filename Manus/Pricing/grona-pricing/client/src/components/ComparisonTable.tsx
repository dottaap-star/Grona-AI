import { Check, Minus, Plug, Shield, MessageCircle } from "lucide-react";
import AICreditsTooltipNew from "./AICreditsTooltipNew";

interface TableRow {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  scale: boolean | string;
  enterprise: boolean | string;
}

interface TableCategory {
  category: string;
  icon?: React.ComponentType<{ className?: string }>;
  rows: TableRow[];
}

const tableData: TableCategory[] = [
  {
    category: "Optimization Power",
    rows: [
      {
        feature: "Active Optimizations",
        starter: "1",
        growth: "3",
        scale: "10",
        enterprise: "Unlimited",
      },
      {
        feature: "Monthly Pageviews",
        starter: "1,000",
        growth: "15,000",
        scale: "30,000",
        enterprise: "Custom",
      },
      {
        feature: "Websites / Domains",
        starter: "1",
        growth: "1",
        scale: "3",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "AI Agents & Generation",
    rows: [
      {
        feature: "AI Credits / Month",
        starter: "500",
        growth: "1,500",
        scale: "3,500",
        enterprise: "Unlimited",
      },
      {
        feature: "Issue Detection",
        starter: "Basic",
        growth: "Drop-off patterns",
        scale: "Full multi-agent loop",
        enterprise: "Custom fine-tuned",
      },
      {
        feature: "Variation Generator",
        starter: "—",
        growth: "Copy / CTA",
        scale: "Copy + Layout + Offer",
        enterprise: "Fully customized",
      },
    ],
  },
  {
    category: "Personalization",
    rows: [
      {
        feature: "Segmentation",
        starter: "None",
        growth: "Basic (new/returning)",
        scale: "Advanced (UTM, Geo, Device)",
        enterprise: "Predictive (intent + LTV)",
      },
    ],
  },
  {
    category: "Integrations",
    icon: Plug,
    rows: [
      {
        feature: "Visual No-Code Editor",
        starter: true,
        growth: true,
        scale: true,
        enterprise: true,
      },
      {
        feature: "GA4 / Clarity / HubSpot",
        starter: "—",
        growth: true,
        scale: true,
        enterprise: true,
      },
      {
        feature: "Custom Integrations",
        starter: "—",
        growth: "—",
        scale: "—",
        enterprise: true,
      },
    ],
  },
  {
    category: "Safety & Governance",
    icon: Shield,
    rows: [
      {
        feature: "Layout & Tone Safety",
        starter: "—",
        growth: true,
        scale: true,
        enterprise: true,
      },
      {
        feature: "Multi-Device Consistency",
        starter: "—",
        growth: "—",
        scale: true,
        enterprise: true,
      },
      {
        feature: "Custom Brand Style Model",
        starter: "—",
        growth: "—",
        scale: "—",
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    icon: MessageCircle,
    rows: [
      {
        feature: "Team Seats",
        starter: "1",
        growth: "Up to 3",
        scale: "Up to 10",
        enterprise: "Unlimited",
      },
      {
        feature: "Support Level",
        starter: "Email (72h)",
        growth: "Email & Chat (24-48h)",
        scale: "Priority Chat (<12h)",
        enterprise: "Dedicated Success Manager",
      },
    ],
  },
];

const renderCell = (
  value: boolean | string,
  plan: "starter" | "growth" | "scale" | "enterprise"
) => {
  if (typeof value === "boolean") {
    if (value) {
      const checkColor = plan === "starter" ? "text-muted-foreground/40" : "text-[#16a34a]";
      return <Check className={`h-5 w-5 ${checkColor} mx-auto`} />;
    } else {
      return <span className="text-sm text-muted-foreground mx-auto">—</span>;
    }
  }
  if (value === "—") {
    return <span className="text-sm text-muted-foreground mx-auto">—</span>;
  }
  return (
    <span className="text-sm text-foreground/90">
      {value}
    </span>
  );
};

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compare Plans
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50 dark:bg-muted/20">
                <th className="text-left py-5 px-4 font-semibold tracking-tight sticky left-0 bg-muted/50 dark:bg-muted/20 z-10">
                  Feature
                </th>
                <th className="text-center py-5 px-4 font-semibold tracking-tight min-w-[140px]">
                  <div className="flex flex-col items-center gap-1">
                    <span>Starter</span>
                  </div>
                </th>
                <th className="text-center py-5 px-4 font-semibold tracking-tight min-w-[140px] relative">
                  <div className="flex flex-col items-center gap-1">
                    <span>Growth</span>
                    <span className="text-xs font-normal text-primary">Recommended</span>
                  </div>
                </th>
                <th className="text-center py-5 px-4 font-semibold tracking-tight min-w-[140px]">
                  <div className="flex flex-col items-center gap-1">
                    <span>Scale</span>
                  </div>
                </th>
                <th className="text-center py-5 px-4 font-semibold tracking-tight min-w-[140px]">
                  <div className="flex flex-col items-center gap-1">
                    <span>Enterprise</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((category, catIdx) => (
                <>
                  <tr key={`cat-${catIdx}`} className={catIdx > 0 ? "border-t border-border" : ""}>
                    <td
                      colSpan={5}
                      className="font-semibold text-sm sticky left-0 bg-background"
                      style={{ paddingTop: catIdx > 0 ? '12px' : '8px', paddingBottom: '8px', paddingLeft: '18px', paddingRight: '18px' }}
                    >
                      <div className="flex items-center gap-2">
                        {category.icon && (
                          <category.icon className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{category.category}</span>
                      </div>
                    </td>
                  </tr>
                  {category.rows.map((row, rowIdx) => (
                    <tr
                      key={`row-${catIdx}-${rowIdx}`}
                      className={`border-b border-border/50 hover:bg-muted/20 transition-colors ${
                        rowIdx % 2 === 0 ? "bg-black/[0.02] dark:bg-white/[0.02]" : ""
                      }`}
                    >
                      <td 
                        className="font-medium text-sm sticky left-0 bg-inherit"
                        style={{ padding: '14px 18px', backgroundColor: 'rgba(0,0,0,0.03)' }}
                      >
                        <span className="inline-flex items-center gap-1">
                          {row.feature}
                          {row.feature.toLowerCase().includes("ai credit") && <AICreditsTooltipNew />}
                        </span>
                      </td>
                      <td className="text-center" style={{ padding: '14px 18px' }}>
                        {renderCell(row.starter, "starter")}
                      </td>
                      <td className="text-center relative bg-primary/[0.05] dark:bg-primary/[0.08] border-l-2 border-r-2 border-primary/30" style={{ padding: '14px 18px' }}>
                        <div className="font-semibold">
                          {renderCell(row.growth, "growth")}
                        </div>
                      </td>
                      <td className="text-center" style={{ padding: '14px 18px' }}>
                        {renderCell(row.scale, "scale")}
                      </td>
                      <td className="text-center" style={{ padding: '14px 18px' }}>
                        {renderCell(row.enterprise, "enterprise")}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
