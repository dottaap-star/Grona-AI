"use client";

import { Fragment, type FC, type ReactNode, useState, useEffect } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    ChartBreakoutSquare,
    CheckCircle,
    Command,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    PlayCircle,
    Rocket01,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
    ZapFast,
} from "@untitledui/icons";
import { Select } from "@/components/base/select/select";
import { SelectItem } from "@/components/base/select/select-item";
import { Slider } from "@/components/base/slider/slider";
import { Label } from "@/components/base/input/label";
import { motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { FeaturesTabsMockup07 } from "@/components/marketing/features/features-tabs-mockup-07";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const HeroScreenWithURLInput = () => {
    const [typewriterPlaceholder, setTypewriterPlaceholder] = useState("");
    const fullPlaceholder = "https://yourwebsite.com";
    const typingSpeed = 100; // ms per character
    const pauseDuration = 2000; // ms pause before restart

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentIndex = 0;
        let isDeleting = false;

        const typeNextChar = () => {
            if (!isDeleting && currentIndex < fullPlaceholder.length) {
                // Typing forward
                setTypewriterPlaceholder(fullPlaceholder.slice(0, currentIndex + 1));
                currentIndex++;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
            } else if (!isDeleting && currentIndex === fullPlaceholder.length) {
                // Finished typing, wait then start deleting
                timeoutId = setTimeout(() => {
                    isDeleting = true;
                    typeNextChar();
                }, pauseDuration);
            } else if (isDeleting && currentIndex > 0) {
                // Deleting backward
                currentIndex--;
                setTypewriterPlaceholder(fullPlaceholder.slice(0, currentIndex));
                timeoutId = setTimeout(typeNextChar, typingSpeed / 2); // Faster deletion
            } else {
                // Finished deleting, start over
                isDeleting = false;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
            }
        };

        typeNextChar();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [fullPlaceholder, typingSpeed, pauseDuration]);

    const normalizeUrl = (url: string): string => {
        const trimmed = url.trim();
        if (!trimmed) return "";
        // Remove trailing slashes
        const clean = trimmed.replace(/\/+$/, "");
        // Add https:// if protocol is missing
        if (!clean.match(/^https?:\/\//i)) {
            return `https://${clean}`;
        }
        return clean;
    };

    return (
        <div className="relative bg-primary min-h-screen flex flex-col">
            {/* Animated shimmer background gradient - runs once on load */}
            <div className="absolute inset-0 -z-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
                    style={{
                        background: "linear-gradient(120deg, transparent, rgba(255, 49, 49, 0.12), rgba(255, 145, 77, 0.12), transparent)",
                        backgroundSize: "200% 200%",
                    }}
                    initial={{
                        backgroundPosition: "-100% -100%",
                    }}
                    animate={{
                        backgroundPosition: "200% 200%",
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                    style={{
                        background: "linear-gradient(60deg, transparent, rgba(255, 145, 77, 0.1), rgba(255, 49, 49, 0.1), transparent)",
                        backgroundSize: "200% 200%",
                    }}
                    initial={{
                        backgroundPosition: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: "-100% -100%",
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                />
            </div>

            <section className="relative w-full flex-1 flex items-center justify-center z-10 py-16 md:py-24">
                <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
                    <div className="flex flex-col items-center text-center gap-12 md:gap-16">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                <BadgeGroup className="hidden md:flex" size="lg" addonText="New" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    Page Analysis is live now!
                                </BadgeGroup>
                                <BadgeGroup className="md:hidden" size="md" addonText="New" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    Page Analysis is live now!
                                </BadgeGroup>
                            </a>
                            <h1 className="text-[32px] font-semibold text-primary leading-tight md:text-[42px] md:whitespace-nowrap lg:text-[52px] lg:leading-none">
                                Turn more visitors into customers
                            </h1>
                            <p className="text-lg text-tertiary md:text-xl lg:text-2xl">
                                Improve your website by chatting with AI
                            </p>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const url = formData.get("website-url") as string;
                                if (!url) return;
                                const normalizedUrl = normalizeUrl(url);
                                window.location.href = `https://app.grona.ai/campaigns/edit/6966b3c40d27b3a250a105ec?url=${encodeURIComponent(normalizedUrl)}`;
                            }}
                            className="w-full max-w-2xl"
                        >
                            <div className="rounded-2xl bg-secondary border-2 border-secondary_alt p-4 shadow-lg focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all duration-200">
                                <div className="flex items-center gap-2">
                                    <Input
                                        isRequired
                                        size="md"
                                        name="website-url"
                                        type="text"
                                        placeholder={typewriterPlaceholder}
                                        wrapperClassName="border-0 ring-0 bg-transparent p-0 flex-1 shadow-none"
                                        inputClassName="text-lg placeholder:text-tertiary py-2 pr-0"
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        iconTrailing={ArrowUpRight}
                                        className="[&>*[data-icon]]:text-white"
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ROICalculatorSection = () => {
    const [industry, setIndustry] = useState("Ecommerce");
    const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
    const [conversionRate, setConversionRate] = useState(2.4);
    const [averageOrderValue, setAverageOrderValue] = useState(100);

    // Industry-specific uplift percentages
    const upliftRates: Record<string, number> = {
        "Ecommerce": 0.18,
        "SaaS": 0.25,
        "Agencies": 0.18,
        "Financial Services": 0.16,
        "Health & Wellness": 0.20,
        "Education": 0.18,
        "Travel": 0.24,
        "Real Estate": 0.15,
        "B2B Lead Gen": 0.25,
        "Media & Publishing": 0.17,
        "Consumer Apps": 0.20,
    };

    const calculateROI = () => {
        const uplift = upliftRates[industry] || 0.18;
        const currentMonthlyRevenue = monthlyVisitors * (conversionRate / 100) * averageOrderValue;
        const newConversionRate = conversionRate * (1 + uplift);
        const newMonthlyRevenue = monthlyVisitors * (newConversionRate / 100) * averageOrderValue;
        const additionalMonthly = newMonthlyRevenue - currentMonthlyRevenue;
        const additionalAnnual = additionalMonthly * 12;

        return {
            uplift: uplift * 100,
            newConversionRate: parseFloat(newConversionRate.toFixed(2)),
            additionalMonthly: Math.round(additionalMonthly),
            additionalAnnual: Math.round(additionalAnnual),
        };
    };

    const results = calculateROI();

    const industries = [
        { id: "Ecommerce", label: "Ecommerce" },
        { id: "SaaS", label: "SaaS" },
        { id: "Agencies", label: "Agencies" },
        { id: "Financial Services", label: "Financial Services" },
        { id: "Health & Wellness", label: "Health & Wellness" },
        { id: "Education", label: "Education" },
        { id: "Travel", label: "Travel" },
        { id: "Real Estate", label: "Real Estate" },
        { id: "B2B Lead Gen", label: "B2B Lead Gen" },
        { id: "Media & Publishing", label: "Media & Publishing" },
        { id: "Consumer Apps", label: "Consumer Apps" },
    ];

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat("en-US").format(value);
    };

    return (
        <section className="relative z-0 bg-gradient-to-br from-orange-100/40 to-red-100/30 dark:from-orange-900/30 dark:to-red-900/20 py-24 md:py-32">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Estimate Your ROI
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            See how much extra revenue Grona can unlock for your site.
                        </p>
                    </div>

                    {/* Calculator Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left: Guided Inputs */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Step 1: Industry */}
                            <div className="rounded-2xl border border-secondary bg-primary p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-9 items-center justify-center rounded-full bg-brand-secondary text-white text-sm font-semibold">1</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-primary">What industry are you in?</h3>
                                        <p className="mt-1 text-sm text-tertiary">Pick the closest match so we can estimate your expected uplift.</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    <Select
                                        selectedKey={industry}
                                        onSelectionChange={(key) => setIndustry(key as string)}
                                        items={industries}
                                        label="Industry"
                                        size="md"
                                    >
                                        {(item) => <SelectItem id={item.id}>{item.label}</SelectItem>}
                                    </Select>
                                    <div className="rounded-xl border border-secondary bg-secondary_alt px-4 py-3">
                                        <p className="text-xs font-medium uppercase tracking-wide text-tertiary">Expected uplift</p>
                                        <p className="mt-1 text-lg font-semibold text-primary">+{results.uplift.toFixed(0)}% for {industry}</p>
                                        <p className="mt-1 text-xs text-tertiary">Personalization + testing benchmarks.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Current metrics */}
                            <div className="rounded-2xl border border-secondary bg-primary p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-9 items-center justify-center rounded-full bg-brand-secondary text-white text-sm font-semibold">2</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-primary">What are your current numbers?</h3>
                                        <p className="mt-1 text-sm text-tertiary">We use these to estimate incremental revenue.</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid md:grid-cols-2 gap-6">
                                    {/* Current Conversion Rate */}
                                    <div>
                                        <Label>Current Conversion Rate (%)</Label>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Button
                                                type="button"
                                                size="sm"
                                                color="secondary"
                                                onClick={() => setConversionRate(Math.max(0.1, conversionRate - 0.1))}
                                                className="shrink-0"
                                            >
                                                −
                                            </Button>
                                            <Input
                                                type="number"
                                                value={conversionRate.toString()}
                                                onChange={(value) => {
                                                    const val = parseFloat(value);
                                                    if (!isNaN(val) && val >= 0) setConversionRate(val);
                                                }}
                                                wrapperClassName="flex-1"
                                                inputClassName="text-center"
                                            />
                                            <div className="text-tertiary shrink-0">%</div>
                                            <Button
                                                type="button"
                                                size="sm"
                                                color="secondary"
                                                onClick={() => setConversionRate(Math.min(100, conversionRate + 0.1))}
                                                className="shrink-0"
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Average Order Value */}
                                    <div>
                                        <Label>Average Order Value</Label>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Button
                                                type="button"
                                                size="sm"
                                                color="secondary"
                                                onClick={() => setAverageOrderValue(Math.max(1, averageOrderValue - 10))}
                                                className="shrink-0"
                                            >
                                                −
                                            </Button>
                                            <Input
                                                type="number"
                                                value={averageOrderValue.toString()}
                                                onChange={(value) => {
                                                    const val = parseFloat(value);
                                                    if (!isNaN(val) && val >= 1) setAverageOrderValue(val);
                                                }}
                                                wrapperClassName="flex-1"
                                                inputClassName="text-center"
                                            />
                                            <div className="text-tertiary shrink-0">$</div>
                                            <Button
                                                type="button"
                                                size="sm"
                                                color="secondary"
                                                onClick={() => setAverageOrderValue(averageOrderValue + 10)}
                                                className="shrink-0"
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Traffic */}
                            <div className="rounded-2xl border border-secondary bg-primary p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-9 items-center justify-center rounded-full bg-brand-secondary text-white text-sm font-semibold">3</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-primary">How much traffic do you get?</h3>
                                        <p className="mt-1 text-sm text-tertiary">Monthly visitors helps us estimate total impact.</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Label>Monthly Visitors</Label>
                                    <div className="mt-2">
                                        <Slider
                                            value={[monthlyVisitors]}
                                            onChange={(values) => {
                                                const val = Array.isArray(values) ? values[0] : values;
                                                setMonthlyVisitors(typeof val === 'number' ? val : monthlyVisitors);
                                            }}
                                            minValue={1000}
                                            maxValue={100000}
                                            step={1000}
                                            labelFormatter={(value) => formatNumber(value)}
                                            formatOptions={{
                                                style: "decimal",
                                                maximumFractionDigits: 0,
                                            }}
                                            labelPosition="top-floating"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="space-y-6 lg:pt-2">
                            <div className="rounded-2xl bg-green-50 dark:bg-green-950/20 p-6 border border-green-200 dark:border-green-800 lg:sticky lg:top-24">
                                <h3 className="text-sm font-medium text-tertiary text-center mb-4">
                                    Your Estimated Lift
                                </h3>
                                <div className="text-center space-y-2">
                                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">
                                        {formatCurrency(results.additionalMonthly)} / month
                                    </div>
                                    <div className="text-sm text-tertiary">
                                        ≈ {formatCurrency(results.additionalAnnual)} / year
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800 text-sm text-tertiary">
                                        Expected Uplift: +{results.uplift.toFixed(0)}% → New CR: {results.newConversionRate}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Disclaimer */}
                    <p className="text-center text-sm text-tertiary mt-8">
                        Actual results vary based on traffic quality and site performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

const SocialProofFullWidth = () => {
    const logos = [
        { alt: "Aruhma", src: "/assets/images/homepage/aruhma.svg", className: "h-7 md:h-9" },
        { alt: "Growth Rocks", src: "/assets/images/homepage/growthrocks.svg", className: "h-6 md:h-8" },
        { alt: "Growth Rocks WebP", src: "/assets/images/homepage/growth-rocks.webp", className: "h-8 md:h-10" },
        { alt: "TechMateTech", src: "/assets/images/homepage/techmatetech.svg", className: "h-12 md:h-16" },
        { alt: "Web Summit", src: "/assets/images/homepage/websummit.webp", className: "h-10 md:h-14 -mx-4" },
        { alt: "Slush", src: "/assets/images/homepage/slush.svg", className: "h-7 md:h-9" },
    ];

    return (
        <section className="relative z-0 bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-10 md:gap-14">
                    <p className="text-center text-sm font-medium text-tertiary md:text-md">Trusted by marketers at leading companies</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
                        {logos.map((logo) => (
                            <img
                                key={logo.src}
                                alt={logo.alt}
                                src={logo.src}
                                className={cx(
                                    "w-auto grayscale brightness-0 opacity-70 dark:grayscale-0 dark:brightness-100 dark:opacity-100 transition-opacity hover:opacity-100",
                                    logo.className
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const HowItWorksSection = () => {
    const steps = [
        {
            number: "1",
            title: "Start a conversation",
            subtitle: "Tell Grona what you want to improve—or just ask for a business analysis. No technical knowledge needed.",
            icon: MessageChatCircle,
        },
        {
            number: "2",
            title: "AI analyzes your site",
            subtitle: "Grona examines your website, understands your audience, and identifies opportunities for improvement.",
            icon: ChartBreakoutSquare,
        },
        {
            number: "3",
            title: "Review suggestions & preview",
            subtitle: "Get data-driven suggestions with live previews. Toggle between variations instantly to see what works best.",
            icon: PlayCircle,
        },
        {
            number: "4",
            title: "Deploy & measure",
            subtitle: "Copy-paste the code and you're live. Track results as they happen and see clear, immediate ROI.",
            icon: Rocket01,
        },
    ];

    return (
        <section id="how-it-works" className="relative z-0 bg-secondary py-24 md:py-32">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">How it works</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Simple steps to improve your website—no technical skills required.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <div className="flex flex-col gap-8 md:gap-12">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                                <div className="flex shrink-0 items-center justify-center">
                                    <div className="relative flex size-16 items-center justify-center rounded-2xl bg-secondary shadow-xs ring-1 ring-secondary ring-inset md:size-20">
                                        <FeaturedIcon icon={step.icon} size="lg" color="brand" theme="modern" />
                                        <div className="absolute -left-3 -top-3 flex size-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-fg-white md:size-10 md:text-md">
                                            {step.number}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <h3 className="text-xl font-semibold text-primary md:text-2xl">{step.title}</h3>
                                    <p className="text-md text-tertiary md:text-lg">{step.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const MetricsSimpleCenteredText = () => {
    return (
        <section className="relative z-0 bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="xl" />
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:mt-6 md:text-display-md">See results that matter</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to convert more visitors and grow your business.</p>
                    </div>

                    <dl className="flex w-full flex-col justify-center gap-8 md:max-w-3xl md:flex-row md:gap-4 md:self-center">
                        {[
                            { title: "25%", subtitle: "Average conversion lift" },
                            { title: "5 min", subtitle: "Time to deploy" },
                            { title: "1000+", subtitle: "Active campaigns" },
                        ].map((item, index) => (
                            <Fragment key={item.title}>
                                {index !== 0 && <div className="hidden border-l border-secondary md:block" />}
                                <div className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                                </div>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

const UseCasesSection = () => {
    return (
        <section className="relative z-0 bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Use cases</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Improve any part of your website</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        From landing pages to checkout flows, Grona helps you optimize what matters most.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
                        {[
                            {
                                title: "Landing page optimization",
                                subtitle: "Improve hero copy, CTAs, and trust signals to convert more visitors.",
                                icon: Rocket01,
                            },
                            {
                                title: "E-commerce conversion",
                                subtitle: "Optimize product pages, checkout flows, and pricing displays.",
                                icon: CreditCardRefresh,
                            },
                            {
                                title: "Form completion",
                                subtitle: "Reduce form abandonment with better UX suggestions and messaging.",
                                icon: File05,
                            },
                            {
                                title: "Content performance",
                                subtitle: "A/B test headlines, layouts, and messaging to see what resonates.",
                                icon: ChartBreakoutSquare,
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} color="brand" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CTACardHorizontal = () => {
    return (
        <section className="relative z-0 bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">Ready to improve your website?</h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Join thousands of marketers already using Grona to grow their business.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            See How It Works
                        </Button>
                        <Button size="xl">Start Building</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const reviews = [
    [
        {
            id: "review-01",
            quote: "Grona has transformed how we optimize our website. The chat-first approach makes it so easy—I can't imagine going back to traditional tools.",
            author: {
                name: "Sarah Chen",
                title: "Growth Marketing Manager, TechCorp",
                imageUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
            },
            company: {
                name: "TechCorp",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/powersurge.svg",
            },
        },
        {
            id: "review-02",
            quote: "We've seen a 30% increase in conversions since using Grona. The AI suggestions are spot-on, and deployment is incredibly simple.",
            author: {
                name: "Marcus Johnson",
                title: "Product Manager, StartupHub",
                imageUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
            },
            company: {
                name: "StartupHub",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/railspeed.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/railspeed.svg",
            },
        },
        {
            id: "review-03",
            quote: "Finally, a CRO tool that doesn't require a developer. Our marketing team can now run experiments independently, and results speak for themselves.",
            author: {
                name: "Emily Rodriguez",
                title: "Marketing Director, GrowthLab",
                imageUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
            },
            company: {
                name: "GrowthLab",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/wildcrafted.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/wildcrafted.svg",
            },
        },
    ],
    [
        {
            id: "review-04",
            quote: "The preview feature is a game-changer. Being able to see changes before deploying saves us so much time and guesswork.",
            author: {
                name: "David Park",
                title: "Conversion Specialist, OptimizeCo",
                imageUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
            },
            company: {
                name: "OptimizeCo",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/goodwell.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/goodwell.svg",
            },
        },
        {
            id: "review-05",
            quote: "Grona's AI understands our business context incredibly well. The suggestions are always relevant and data-driven.",
            author: {
                name: "Lisa Thompson",
                title: "E-commerce Manager, ShopFast",
                imageUrl: "https://www.untitledui.com/images/avatars/florence-shaw?fm=webp&q=80",
            },
            company: {
                name: "ShopFast",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/quixotic.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/quixotic.svg",
            },
        },
        {
            id: "review-06",
            quote: "Best investment we've made for our marketing team. ROI was clear from the first campaign we deployed.",
            author: {
                name: "James Wilson",
                title: "VP Marketing, ScaleUp",
                imageUrl: "https://www.untitledui.com/images/avatars/owen-garcia?fm=webp&q=80",
            },
            company: {
                name: "ScaleUp",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/solaris-energy.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/solaris-energy.svg",
            },
        },
    ],
    [
        {
            id: "review-07",
            quote: "As someone with no coding background, Grona has given me superpowers. I can now run sophisticated experiments that used to require a developer.",
            author: {
                name: "Alex Martinez",
                title: "Growth Marketer, InnovateNow",
                imageUrl: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80",
            },
            company: {
                name: "InnovateNow",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/stackedlab.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/stackedlab.svg",
            },
        },
        {
            id: "review-08",
            quote: "The speed at which we can iterate is incredible. What used to take weeks now takes minutes, and our conversion rates prove it works.",
            author: {
                name: "Rachel Kim",
                title: "Marketing Lead, BrandBoost",
                imageUrl: "https://www.untitledui.com/images/avatars/stefan-sears?fm=webp&q=80",
            },
            company: {
                name: "BrandBoost",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/magnolia.svg",
            },
        },
        {
            id: "review-09",
            quote: "Grona feels like having a CRO expert on call 24/7. The AI suggestions are consistently valuable and actionable.",
            author: {
                name: "Michael Brown",
                title: "Director of Growth, LaunchPad",
                imageUrl: "https://www.untitledui.com/images/avatars/harriet-rojas?fm=webp&q=80",
            },
            company: {
                name: "LaunchPad",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
            },
        },
    ],
];

const SocialCards03 = () => {
    let reviewsCount = 0;
    const maxVisibleReviewsOnMobile = 4;

    return (
        <div className="flex flex-col items-center gap-12 bg-primary py-24 md:py-32">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h2 className="text-display-sm font-semibold text-primary lg:text-display-md">What our customers say</h2>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 mask-b-from-[calc(100%-340px)] px-4 lg:grid-cols-3 lg:gap-8 lg:px-8">
                {reviews.map((reviewGroup, reviewGroupIndex) => {
                    return (
                        <div
                            key={reviewGroupIndex}
                            className={cx(
                                "flex flex-col gap-5 lg:gap-8",
                                reviewGroupIndex === 0 && "lg:py-8",
                                reviewGroupIndex === 2 && "lg:pt-10",
                                reviewsCount > maxVisibleReviewsOnMobile && "max-lg:hidden",
                            )}
                        >
                            {reviewGroup.map((review) => {
                                reviewsCount += 1;

                                return (
                                    <div
                                        key={review.id}
                                        className={cx(
                                            "flex flex-col gap-8 rounded-xl bg-primary_alt p-6 shadow-xs ring-1 ring-secondary ring-inset lg:justify-between lg:gap-12 lg:p-8",
                                            reviewsCount > maxVisibleReviewsOnMobile && "max-lg:hidden",
                                        )}
                                    >
                                        <div className="flex flex-col items-start gap-3">
                                            <img className="h-8 dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                                            <img className="h-8 opacity-85 not-dark:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                                            <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                        </div>
                                        <AvatarLabelGroup
                                            size="lg"
                                            src={review.author.imageUrl}
                                            alt={review.author.name}
                                            title={
                                                <span className="relative flex items-center gap-1">
                                                    {review.author.name}
                                                    <VerifiedTick size="lg" />
                                                </span>
                                            }
                                            subtitle={review.author.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const articles: Article[] = [
    {
        id: "article-1",
        title: "10 Ways to Improve Your Landing Page Conversions",
        summary: "Learn proven strategies to optimize your landing pages and convert more visitors into customers.",
        href: "#",
        category: { name: "CRO Tips", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Grona Team", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        tags: [
            { name: "CRO", color: "brand", href: "#" },
            { name: "Landing Pages", color: "indigo", href: "#" },
            { name: "Conversion", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "A/B Testing Best Practices for Marketers",
        summary: "How to run effective A/B tests that deliver actionable insights and measurable results.",
        href: "#",
        category: { name: "Best Practices", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",
        publishedAt: "19 Jan 2025",
        readingTime: "6 min read",
        author: { name: "Grona Team", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
        tags: [
            { name: "A/B Testing", color: "blue-light", href: "#" },
            { name: "Marketing", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3",
        title: "Case Study: 40% Conversion Lift in 30 Days",
        summary: "See how one company used Grona to dramatically improve their conversion rates with minimal effort.",
        href: "#",
        category: { name: "Case Studies", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "5 min read",
        author: { name: "Grona Team", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
        tags: [
            { name: "Case Study", color: "success", href: "#" },
            { name: "Results", color: "pink", href: "#" },
        ],
    },
];

const Simple01Vertical = ({ article, imageClassName }: { article: Article; imageClassName?: string }) => (
    <article className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img
                src={article.thumbnailUrl}
                alt={article.title}
                className={cx("aspect-[1.5] w-full object-cover transition duration-100 ease-linear hover:scale-105", imageClassName)}
            />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-secondary">{article.category.name}</span>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.href}
                        className="group/title flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight
                            className="mt-0.5 size-6 shrink-0 text-fg-quaternary transition duration-100 ease-linear group-hover/title:text-fg-quaternary_hover"
                            aria-hidden="true"
                        />
                    </a>

                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <a href={article.author.href} tabIndex={-1} className="flex">
                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                </a>

                <div>
                    <a
                        href={article.author.href}
                        className="block rounded-xs text-sm font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.author.name}
                    </a>
                    <time className="block text-sm text-tertiary">{article.publishedAt}</time>
                </div>
            </div>
        </div>
    </article>
);

const BlogSectionSimpleLeftAligned01 = () => {
    return (
        <section className="relative z-0 bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Latest blog posts</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Tips, strategies, and insights to help you improve your website and grow your business.
                        </p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const faqsExtended = [
    {
        question: "Do I need coding experience to use Grona?",
        answer: "No. Grona is designed for marketers and non-technical users. Just describe what you want to improve in plain English, and our AI handles the technical implementation.",
        icon: Heart,
    },
    {
        question: "How quickly can I see results?",
        answer: "Most users see their first improvement suggestions within minutes. Once you deploy, results start tracking immediately. Many customers see measurable improvements within the first week.",
        icon: Zap,
    },
    {
        question: "What makes Grona different from other tools?",
        answer: "Grona is the only chat-first CRO tool. Instead of complex dashboards and technical setup, you simply chat with our AI assistant to improve your website. Everything from analysis to deployment happens through conversation.",
        icon: MessageChatCircle,
    },
    {
        question: "Can I use Grona with Shopify, WordPress, or other platforms?",
        answer: "Yes! Grona works with any website. Just copy and paste our installation code into your site's HTML, or use our platform-specific guides for Shopify, WordPress, Webflow, Wix, and Google Tag Manager.",
        icon: Command,
    },
    {
        question: "How does the AI learn from my website?",
        answer: "Our AI uses industry-trained models that understand website best practices and conversion optimization. It analyzes your specific site context, audience, and goals to provide personalized suggestions.",
        icon: ChartBreakoutSquare,
    },
    {
        question: "What kind of results can I expect?",
        answer: "Results vary by website and campaign, but many customers see conversion lifts of 15-40%. The key is testing and iterating—our AI helps you quickly try different approaches and measure what works.",
        icon: Rocket01,
    },
];

const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="relative z-0 bg-primary py-24 md:py-32">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
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
                                        <span className="text-md font-semibold text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
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
                                    <div className="pt-1 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
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
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Chat with our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "How it works", href: "#how-it-works" },
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "Contact", href: "mailto:hello@grona.ai" },
            { label: "LinkedIn", href: "https://linkedin.com/company/grona-ai" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
        ],
    },
];

const FooterLarge01 = () => {
    return (
        <footer className="bg-primary py-12 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-6 md:gap-8 max-w-xs">
                        <GronaLogo />
                        <p className="text-md text-tertiary">Smarter Websites. Higher Sales.</p>
                        <Button color="link-color" size="lg" href="#waitlist-form" className="w-fit">
                            Join the private beta →
                        </Button>
                    </div>

                    <nav>
                        <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12">
                            {footerNavList.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-gray" size="lg" href={item.href} className="gap-1 p-0">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 border-t border-secondary pt-8 md:mt-16 text-center">
                    <p className="text-md text-quaternary">
                        © {new Date().getFullYear()} grona.ai — Built for teams that never stop testing.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export const HomeScreen = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />
            
            <HeroScreenWithURLInput />

            <ROICalculatorSection />

            <FeaturesTabsMockup07 />

            <SocialProofFullWidth />

            <HowItWorksSection />

            <SocialCards03 />

            <FAQAccordion01 />

            <FooterLarge01 />
        </div>
    );
};
