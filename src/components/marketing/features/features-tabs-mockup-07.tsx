"use client";

import { useState } from "react";
import { FeatureTabHorizontal } from "@/components/marketing/features/base-components/feature-tab";

export const FeaturesTabsMockup07 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Deep Dive</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">The Complete Optimization Journey</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Behind the simple interface, Grona's AI agents orchestrate a sophisticated optimization workflow.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Define Goal",
                                subtitle: "Tell Grona what you want to achieve in plain language. No complex forms or technical setup required.",
                            },
                            {
                                title: "AI Analysis",
                                subtitle: "Our agents analyze user behavior, identify friction points, and uncover optimization opportunities automatically.",
                            },
                            {
                                title: "Generate Variants",
                                subtitle: "AI designs multiple high-impact variants tailored to your brand and optimized for conversion.",
                            },
                            {
                                title: "Deploy & Learn",
                                subtitle: "Review, approve, and launch. Grona monitors results and suggests the next optimization automatically.",
                            },
                        ].map((item, index) => (
                            <li key={item.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    isCurrent={index === currentTab}
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative -ml-4 w-screen md:w-full lg:h-140">
                        <div className="-mx-4 flex items-center justify-center lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Macbook Pro Screen Mockup"
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-light.webp"
                                className="h-full object-contain lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Macbook Pro Screen Mockup"
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-dark.webp"
                                className="h-full object-contain not-dark:hidden lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
