"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

const footerNavList = [
    {
        label: "Product",
        items: [
            {
                label: "Overview",
                href: "#",
            },
            {
                label: "Features",
                href: "#",
            },
            {
                label: "Solutions",
                href: "#",
                badge: <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-white/30 ring-inset">New</span>,
            },
            {
                label: "Tutorials",
                href: "#",
            },
            {
                label: "Pricing",
                href: "#",
            },
            {
                label: "Releases",
                href: "#",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                label: "Blog",
                href: "#",
            },
            {
                label: "Newsletter",
                href: "#",
            },
            {
                label: "Events",
                href: "#",
            },
            {
                label: "Help centre",
                href: "#",
            },
            {
                label: "Tutorials",
                href: "#",
            },
            {
                label: "Support",
                href: "#",
            },
        ],
    },
];

export const FooterLarge04Brand = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="dark-mode" />
                        <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
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
                                                    iconTrailing={item.badge}
                                                >
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary_on-brand">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="md"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            {
                                label: "Terms",
                                href: "#",
                            },
                            {
                                label: "Privacy",
                                href: "#",
                            },
                            {
                                label: "Cookies",
                                href: "#",
                            },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="rounded-xs text-md text-quaternary_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-tertiary_on-brand focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
