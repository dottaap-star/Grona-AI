"use client";

import { Fragment, useState } from "react";
import { CheckCircle, CreditCardRefresh, File05, Heart, HelpCircle, Mail01, Minus, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

type Tier = {
    name: string;
    canChatToSales?: boolean;
    highlighted?: boolean;
    badge?: string;
    href?: string;
    priceLabel: string;
    priceSubtext?: string;
    description: string;
};

const tiers: Tier[] = [
    {
        name: "Starter",
        href: "#",
        priceLabel: "Free",
        description: "Perfect for small teams testing AI optimization.",
    },
    {
        name: "Growth",
        highlighted: true,
        badge: "Popular",
        href: "#",
        priceLabel: "$25",
        priceSubtext: "/mo",
        description: "For growing businesses scaling conversion efforts.",
    },
    {
        name: "Scale",
        href: "#",
        priceLabel: "$40",
        priceSubtext: "/mo",
        description: "Advanced features for high-traffic websites.",
    },
    {
        name: "Enterprise",
        canChatToSales: true,
        href: "#",
        priceLabel: "Custom",
        description: "Custom solutions for large organizations.",
    },
];

type Section = { name: string; features: { name: string; tooltip: { title: string; description: string }; tiers: Record<string, boolean | string> }[] };

const sections: Section[] = [
    {
        name: "Optimization Power",
        features: [
            {
                name: "Active optimizations",
                tooltip: {
                    title: "Concurrent optimizations",
                    description: "The number of optimization experiments you can run at the same time.",
                },
                tiers: { Starter: "1", Growth: "3", Scale: "10", Enterprise: "Unlimited" },
            },
            {
                name: "Monthly pageviews",
                tooltip: {
                    title: "Traffic allowance",
                    description: "The total monthly pageviews supported by your plan.",
                },
                tiers: { Starter: "1k", Growth: "15k", Scale: "30k", Enterprise: "Unlimited" },
            },
        ],
    },
    {
        name: "AI Agents & Generators",
        features: [
            {
                name: "Primary analysis capability",
                tooltip: {
                    title: "Optimization intelligence",
                    description: "The depth of AI-driven analysis used to surface optimization opportunities.",
                },
                tiers: {
                    Starter: "Basic issue detection",
                    Growth: "Drop-off pattern analysis",
                    Scale: "Full multi-agent optimization loop",
                    Enterprise: "Dedicated AI agents",
                },
            },
            {
                name: "Variant generation",
                tooltip: {
                    title: "AI variant creation",
                    description: "The types of variants the AI can generate for experiments.",
                },
                tiers: {
                    Starter: false,
                    Growth: "Copy/CTA generator",
                    Scale: "Copy + Layout + Offer variations",
                    Enterprise: "Custom AI model fine-tuning",
                },
            },
            {
                name: "Monthly AI credits",
                tooltip: {
                    title: "AI processing allowance",
                    description: "Credits consumed during analysis, generation, optimization loops, and personalization.",
                },
                tiers: { Starter: "500", Growth: "1500", Scale: "3500", Enterprise: "Unlimited" },
            },
        ],
    },
    {
        name: "Personalization",
        features: [
            {
                name: "Personalization level",
                tooltip: {
                    title: "Targeted experiences",
                    description: "The sophistication of audience segmentation and personalization.",
                },
                tiers: {
                    Starter: "None",
                    Growth: "Basic (new/returning)",
                    Scale: "Advanced (UTM, Geo, Device, Behavioral)",
                    Enterprise: "Predictive + custom segments",
                },
            },
        ],
    },
    {
        name: "Integrations + Support",
        features: [
            {
                name: "Integrations",
                tooltip: {
                    title: "Connected tools",
                    description: "Supported integrations for analytics, CRM, and product workflows.",
                },
                tiers: {
                    Starter: "Visual no-code editor",
                    Growth: "GA4 + Clarity + HubSpot",
                    Scale: "GA4 + Clarity + HubSpot",
                    Enterprise: "All integrations",
                },
            },
            {
                name: "Support level",
                tooltip: {
                    title: "Response times",
                    description: "Support availability and response time targets by plan.",
                },
                tiers: {
                    Starter: "Email (72h)",
                    Growth: "Priority email/chat (24–48h)",
                    Scale: "Priority chat (<12h)",
                    Enterprise: "SLA + priority support",
                },
            },
            {
                name: "Account management",
                tooltip: {
                    title: "Success support",
                    description: "Additional success resources and account management options.",
                },
                tiers: {
                    Starter: false,
                    Growth: false,
                    Scale: "Multi-device consistency",
                    Enterprise: "Dedicated account manager",
                },
            },
        ],
    },
];

const faqsExtended = [
    {
        question: "What are AI Credits and how are they used?",
        answer:
            "AI Credits are used when Grona analyzes a page for drop-offs, generates copy, layout, or offer variants, runs optimization cycles, or applies personalization logic. A typical optimization loop uses 120–180 credits depending on page complexity.",
        icon: Heart,
    },
    {
        question: "Can I change plans at any time?",
        answer:
            "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. Unused AI credits don’t roll over when changing plans.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What happens if I exceed my AI credits?",
        answer:
            "If you run out of AI credits, your existing optimizations continue running, but you won’t be able to generate new variants until your credits reset or you upgrade your plan. We’ll notify you when you reach 80% of your limit.",
        icon: SlashCircle01,
    },
    {
        question: "Is there a free plan?",
        answer:
            "Yes. The Starter plan is completely free with 500 AI credits per month. No credit card required. You can upgrade any time to unlock more credits and advanced features.",
        icon: File05,
    },
    {
        question: "What integrations do you support?",
        answer:
            "Grona integrates with Shopify, WooCommerce, Webflow, WordPress, Wix, Squarespace, and BigCommerce, plus analytics tools like GA4, Clarity, and HubSpot. For other tools, you can integrate via JavaScript snippet or email support@grona.ai.",
        icon: CreditCardRefresh,
    },
    {
        question: "How does the autonomous optimization loop work?",
        answer:
            "Grona monitors your site, detects optimization opportunities, generates AI-powered variants, runs A/B tests, analyzes results, and automatically implements winning changes. This cycle runs continuously to improve conversion rate over time.",
        icon: Mail01,
    },
    {
        question: "Is there a setup fee or long-term contract?",
        answer:
            "No setup fees. All plans are month-to-month with no long-term contracts required. You can cancel anytime. Annual plans offer a discount but are commitment-free—you can switch to monthly billing at your next renewal.",
        icon: CreditCardRefresh,
    },
    {
        question: "What kind of results can I expect?",
        answer:
            "Most teams see measurable conversion improvements after 4–5 optimization cycles (typically 2–4 weeks). Many customers achieve 25–30% higher conversion rates within 2–3 months, depending on traffic and industry.",
        icon: Heart,
    },
];

const footerNavList = [
    {
        label: "Company",
        items: [
            { label: "About us", href: "/about-us" },
            { label: "Features", href: "#" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "#" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" },
            { label: "Contact", href: "#" },
        ],
    },
];

const PricingLargeTable01 = () => {
    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>

                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Choose the right plan for your optimization needs</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Start free or scale with Growth, Scale, or Enterprise plans.
                    </p>
                    <Tabs className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="md"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>
            </div>

            <div className="w-full pb-16 md:px-8 md:pb-24 lg:mx-auto lg:max-w-container">
                {/* xs to lg */}
                <div className="space-y-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section key={tier.name}>
                            <div className="mb-8 flex flex-col px-4">
                                <p key={tier.name} className="flex items-center gap-2 text-xl font-semibold text-primary">
                                    {tier.name}
                                    {tier.badge && (
                                        <Badge size="md" type="pill-color" color="brand">
                                            {tier.badge}
                                        </Badge>
                                    )}
                                </p>
                                <p className="mt-4">
                                    <span className="text-display-lg font-semibold text-primary">{tier.priceLabel}</span>
                                    {tier.priceSubtext && (
                                        <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">{tier.priceSubtext}</span>
                                    )}
                                </p>
                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
                            </div>

                            {sections.map((section) => (
                                <table key={section.name} className="mb-8 w-full last:mb-0">
                                    <caption className="px-4 pb-4 text-left text-sm font-semibold text-brand-secondary">{section.name}</caption>
                                    <thead>
                                        <tr>
                                            <th className="sr-only" scope="col">
                                                Feature
                                            </th>
                                            <th className="sr-only" scope="col">
                                                Included
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.features.map((feature, index) => (
                                            <tr key={feature.name} className={cx(index % 2 === 0 && "bg-secondary_alt")}>
                                                <th className="flex py-4.5 pl-4 text-left text-sm font-medium text-primary" scope="row">
                                                    {feature.name}
                                                </th>
                                                <td className="py-4.5 pr-4">
                                                    <div className="flex items-center justify-end text-right">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="-my-1 size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="ml-auto size-5 text-fg-disabled" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">{feature.tiers[tier.name] === true ? "Yes" : "No"}</span>
                                                            </>
                                                        )}{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ))}

                            <div className="mt-8 flex flex-col gap-3 px-4">
                                {tier.canChatToSales && (
                                    <Button color="secondary" size="xl">
                                        Chat to sales
                                    </Button>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="max-lg:hidden">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr className="border-b border-secondary">
                                <th scope="col">
                                    <span className="sr-only">Feature by plans</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th key={tier.name} className="w-1/4 px-6 pt-0 pb-4 text-left text-xl font-semibold text-primary" scope="col">
                                        <p className="inline-flex items-center gap-2">
                                            {tier.name}
                                            {tier.badge && (
                                                <Badge size="md" type="pill-color" color="brand">
                                                    {tier.badge}
                                                </Badge>
                                            )}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="h-full px-6 py-8 align-top md:pb-12">
                                        <div className="flex h-full flex-col justify-between">
                                            <div className="flex flex-col">
                                                <p>
                                                    <span className="text-display-lg font-semibold text-primary">{tier.priceLabel}</span>
                                                    {tier.priceSubtext && (
                                                        <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">{tier.priceSubtext}</span>
                                                    )}
                                                </p>
                                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
                                            </div>
                                            <div className="mt-6 flex flex-col gap-3">
                                                <Button color="secondary" size="xl">
                                                    Chat to sales
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, index) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            className={cx(index > 0 ? "pt-10" : "pt-0", "px-6 pb-4 text-left text-sm font-semibold text-brand-secondary")}
                                            colSpan={4}
                                            scope="colgroup"
                                        >
                                            {section.name}
                                        </th>
                                    </tr>
                                    {section.features.map((feature, index) => (
                                        <tr
                                            key={feature.name}
                                            className={cx(
                                                index % 2 === 0 && "bg-secondary_alt",
                                                index === section.features.length - 1 && "border-b border-secondary",
                                            )}
                                        >
                                            <th className="px-6 py-5.5 text-left text-sm font-medium text-primary" scope="row">
                                                {feature.name}
                                                <Tooltip title={feature.tooltip.title} description={feature.tooltip.description} delay={0} closeDelay={0}>
                                                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                                        <HelpCircle className="ml-1 inline-block size-4" />
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.name} className="px-6 py-5">
                                                    <div className="flex items-center justify-center text-center">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="mx-auto size-5 text-fg-disabled" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? "Included" : "Not included"} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about the product and billing.</p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-lg font-medium text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="mt-0.5 flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-2 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const SocialProofFullWidth = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        <img alt="Aruhma" src="/assets/images/homepage/aruhma.svg" className="h-9 md:h-12" />
                        <img alt="Growth Rocks" src="/assets/images/homepage/growthrocks.svg" className="h-9 md:h-12" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CardVertical = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">
                        <span className="hidden md:inline">Start your 30-day free trial</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge01 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button
                                                className="gap-1 text-footer-button-fg hover:text-footer-button-fg_hover"
                                                color="link-color"
                                                size="lg"
                                                href={item.href}
                                            >
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:items-center">
                    <GronaLogo className="dark-mode" />
                    <p className="text-md text-quaternary_on-brand">© {new Date().getFullYear()} Grona Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const PricingPage05 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <PricingLargeTable01 />

            <FAQAccordion01 />

            <SocialProofFullWidth />

            <CardVertical />

            <FooterLarge01 />
        </div>
    );
};

export default PricingPage05;
