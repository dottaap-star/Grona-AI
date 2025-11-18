import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are AI Credits and how are they used?",
    answer: "AI Credits are used when Grona: analyzes a page for drop-offs, generates copy, layout, or offer variants, runs optimization cycles, or applies personalization logic. Example: A typical optimization loop uses 120–180 credits depending on page complexity."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. Unused AI credits don't roll over when changing plans."
  },
  {
    question: "What happens if I exceed my AI credits?",
    answer: "If you run out of AI credits, your existing optimizations continue running, but you won't be able to generate new variants until your credits reset or you upgrade your plan. We'll notify you when you reach 80% of your limit."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our Starter plan is completely free with 500 AI credits per month. No credit card required. You can upgrade to a paid plan anytime to unlock more credits and advanced features."
  },
  {
    question: "What integrations do you support?",
    answer: "Grona integrates with popular CMS and e-commerce platforms including Shopify, WooCommerce, Webflow, WordPress, Wix, Squarespace, and BigCommerce. We also integrate with analytics tools such as GA4, Clarity, and HubSpot. For other tools or custom setups, you can integrate via JavaScript snippet or email support@grona.ai."
  },
  {
    question: "How does the autonomous optimization loop work?",
    answer: "Grona continuously monitors your site, detects optimization opportunities, generates AI-powered variants, runs A/B tests, analyzes results, and automatically implements winning changes. This cycle runs 24/7 without manual intervention, improving your conversion rate over time."
  },
  {
    question: "Is there a setup fee or long-term contract?",
    answer: "No setup fees, ever. All plans are month-to-month with no long-term contracts required. You can cancel anytime. Annual plans offer a discount but are also commitment-free—you can switch to monthly billing at your next renewal."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Most teams see measurable conversion improvements after 4-5 optimization cycles (typically 2-4 weeks). Many customers achieve 25-30% higher conversion rates within 2-3 months. Results vary based on your current site performance, traffic volume, and industry."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Grona's pricing and features
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-base pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact our team
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
