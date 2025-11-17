import { Shield, Award, Lock, Star } from "lucide-react";

const badges = [
  {
    icon: Star,
    title: "G2 High Performer",
    subtitle: "Winter 2025",
    color: "text-amber-500"
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    subtitle: "Certified",
    color: "text-blue-500"
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    subtitle: "EU Data Protection",
    color: "text-green-600"
  },
  {
    icon: Award,
    title: "4.8/5 Rating",
    subtitle: "500+ Reviews",
    color: "text-primary"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-border bg-muted/10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 group"
              >
                <div className={`${badge.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {badge.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
