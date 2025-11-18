import { ArrowRight, Search, Sparkles, FlaskConical, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Detect opportunities",
    description: "AI analyzes user behavior to find drop-off points",
  },
  {
    icon: Sparkles,
    title: "Generate variants",
    description: "Create optimized copy, layout, and offer variations",
  },
  {
    icon: FlaskConical,
    title: "Test continuously",
    description: "Run experiments and gather performance data",
  },
  {
    icon: TrendingUp,
    title: "Improve automatically",
    description: "Deploy winning variants and iterate",
  },
];

export default function OptimizationLoop() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How Grona's autonomous AI optimizes your site
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary/40 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
