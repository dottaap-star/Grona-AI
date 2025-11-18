import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  industry: string;
  companySize: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Grona transformed our conversion optimization process. What used to take weeks of manual A/B testing now happens automatically. The AI-generated variants consistently outperform our in-house designs.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "TechFlow SaaS",
    metric: "+32% conversion rate in 6 weeks",
    industry: "B2B SaaS",
    companySize: "50-200 employees"
  },
  {
    quote: "The ROI was immediate. Within the first month, Grona paid for itself 10x over. The autonomous optimization loop means our team can focus on strategy while Grona handles execution.",
    author: "Marcus Rodriguez",
    role: "VP of Marketing",
    company: "GrowthCo",
    metric: "+28% revenue, 40% faster iteration",
    industry: "E-commerce",
    companySize: "200-500 employees"
  },
  {
    quote: "We were skeptical about AI-driven optimization, but Grona proved us wrong. The multi-agent system caught opportunities our team missed and delivered results we couldn't achieve manually.",
    author: "Emily Watson",
    role: "CRO Director",
    company: "ConvertPro",
    metric: "+45% qualified leads in 8 weeks",
    industry: "Marketing Agency",
    companySize: "20-50 employees"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by High-Growth Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading companies use Grona to accelerate their conversion optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
              <Quote className="h-8 w-8 text-primary mb-4" />
              
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="mb-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-sm font-semibold text-primary">
                  {testimonial.metric}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm font-medium text-foreground mt-1">
                  {testimonial.company}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {testimonial.industry} • {testimonial.companySize}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
